// PayPal Orders API v2 — server-side only, never imported by client code

const BASE =
  process.env.PAYPAL_ENV === "production"
    ? "https://api-m.paypal.com"
    : "https://api-m.sandbox.paypal.com";

async function getAccessToken(): Promise<string> {
  const id = process.env.PAYPAL_CLIENT_ID;
  const secret = process.env.PAYPAL_CLIENT_SECRET;
  if (!id || !secret) {
    throw new Error("PAYPAL_CLIENT_ID and PAYPAL_CLIENT_SECRET must be set in .env.local");
  }

  const credentials = Buffer.from(`${id}:${secret}`).toString("base64");

  const res = await fetch(`${BASE}/v1/oauth2/token`, {
    method: "POST",
    headers: {
      Authorization: `Basic ${credentials}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "grant_type=client_credentials",
    cache: "no-store",
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`PayPal auth failed (${res.status}): ${text}`);
  }

  const { access_token } = (await res.json()) as { access_token: string };
  return access_token;
}

export async function createOrder(
  returnUrl: string,
  cancelUrl: string,
  options?: { amount?: string; description?: string; referenceId?: string }
): Promise<{ orderID: string; approvalUrl: string }> {
  const token = await getAccessToken();

  const res = await fetch(`${BASE}/v2/checkout/orders`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      intent: "CAPTURE",
      purchase_units: [
        {
          reference_id: options?.referenceId,
          amount: { currency_code: "EUR", value: options?.amount ?? "99.00" },
          description: options?.description ?? "Personalized Training & Nutrition System — 4 Weeks",
        },
      ],
      application_context: {
        brand_name: "PowerBuilder",
        return_url: returnUrl,
        cancel_url: cancelUrl,
        user_action: "PAY_NOW",
        landing_page: "NO_PREFERENCE",
      },
    }),
    cache: "no-store",
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`PayPal create order failed (${res.status}): ${text}`);
  }

  const order = (await res.json()) as {
    id: string;
    links: Array<{ rel: string; href: string }>;
  };

  const approvalUrl = order.links.find((l) => l.rel === "approve")?.href;
  if (!approvalUrl) throw new Error("No approval URL returned by PayPal");

  return { orderID: order.id, approvalUrl };
}

interface CaptureResult {
  status: string;
  amount: string;
  currency: string;
  referenceId: string;
}

export async function captureOrder(orderID: string): Promise<CaptureResult> {
  const token = await getAccessToken();

  const res = await fetch(`${BASE}/v2/checkout/orders/${orderID}/capture`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    cache: "no-store",
  });

  if (!res.ok) {
    const body = await res.json().catch(() => ({})) as { name?: string };
    // PayPal returns ORDER_ALREADY_CAPTURED when trying to capture twice
    if (body?.name === "ORDER_ALREADY_CAPTURED") {
      return { status: "ALREADY_CAPTURED", amount: "", currency: "", referenceId: "" };
    }
    throw new Error(`PayPal capture failed (${res.status}): ${JSON.stringify(body)}`);
  }

  const order = (await res.json()) as {
    status: string;
    purchase_units: Array<{
      reference_id?: string;
      payments: {
        captures: Array<{
          amount: { value: string; currency_code: string };
        }>;
      };
    }>;
  };

  const unit = order.purchase_units?.[0];
  const capture = unit?.payments?.captures?.[0];

  return {
    status: order.status,
    amount: capture?.amount?.value ?? "",
    currency: capture?.amount?.currency_code ?? "",
    referenceId: unit?.reference_id ?? "",
  };
}
