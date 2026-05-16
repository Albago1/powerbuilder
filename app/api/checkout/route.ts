import { NextResponse } from "next/server";
import { createCheckoutSession } from "@/lib/stripe";

export async function POST() {
  try {
    const { url } = await createCheckoutSession();
    return NextResponse.json({ url });
  } catch (error) {
    console.error("Checkout error:", error);
    return NextResponse.json(
      { error: "Failed to create checkout session" },
      { status: 500 }
    );
  }
}
