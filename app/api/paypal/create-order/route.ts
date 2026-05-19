import { NextResponse } from "next/server";
import { createOrder } from "@/lib/paypal";

export async function POST() {
  try {
    const base = process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3000";

    const { orderID, approvalUrl } = await createOrder(
      `${base}/programs/success?product=personalized`,
      `${base}/programs/cancel`
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
