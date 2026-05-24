import { NextRequest, NextResponse } from "next/server";
import { createOrder } from "@/lib/paypal";

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json().catch(() => ({}))) as { consented?: boolean };

    if (body.consented !== true) {
      return NextResponse.json(
        { error: "Withdrawal-waiver consent required" },
        { status: 400 }
      );
    }

    const base = process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3000";

    const { orderID, approvalUrl } = await createOrder(
      `${base}/programs/success?product=personalized`,
      `${base}/programs/cancel`,
      { referenceId: "personalized" }
    );

    return NextResponse.json({ orderID, approvalUrl });
  } catch (err) {
    console.error("create-order:", err);
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Failed to create PayPal order" },
      { status: 500 }
    );
  }
}
