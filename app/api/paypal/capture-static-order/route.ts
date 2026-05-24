import { NextRequest, NextResponse } from "next/server";
import { captureOrder } from "@/lib/paypal";
import { createDownloadToken } from "@/lib/downloadToken";
import { getProgramById } from "@/lib/programs";

const ALLOWED_SLUGS = ["bench-press"] as const;

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as { orderID?: string; slug?: string };
    const { orderID, slug } = body;

    if (!orderID) {
      return NextResponse.json({ error: "Missing orderID" }, { status: 400 });
    }
    if (!slug || !ALLOWED_SLUGS.includes(slug as (typeof ALLOWED_SLUGS)[number])) {
      return NextResponse.json({ error: "Invalid program slug" }, { status: 400 });
    }

    const program = getProgramById(slug);
    if (!program) {
      return NextResponse.json({ error: "Program not found" }, { status: 404 });
    }

    console.log(`[capture-static-order] Capturing order: ${orderID} for slug: ${slug}`);
    const result = await captureOrder(orderID);

    if (result.status === "ALREADY_CAPTURED") {
      // Payment was already captured legitimately — re-issue the download token
      console.log(`[capture-static-order] Already captured: ${orderID}`);
      return NextResponse.json({ downloadToken: createDownloadToken(slug, orderID) });
    }

    if (result.status !== "COMPLETED") {
      return NextResponse.json(
        { error: `Payment not completed (status: ${result.status}). Please try again or contact support.` },
        { status: 402 }
      );
    }

    const expectedAmount = program.price.toFixed(2);
    if (result.amount !== expectedAmount || result.currency !== "EUR") {
      console.error(
        `[capture-static-order] Amount mismatch — got ${result.amount} ${result.currency}, expected ${expectedAmount} EUR, order: ${orderID}`
      );
      return NextResponse.json(
        { error: "Payment amount verification failed. Please contact support." },
        { status: 402 }
      );
    }

    if (result.referenceId && result.referenceId !== slug) {
      console.error(
        `[capture-static-order] Slug mismatch — order referenceId: ${result.referenceId}, requested slug: ${slug}`
      );
      return NextResponse.json(
        { error: "Order does not match this product. Please contact support." },
        { status: 400 }
      );
    }

    console.log(`[capture-static-order] Verified — ${result.amount} ${result.currency}, slug: ${slug}, order: ${orderID}`);
    return NextResponse.json({ downloadToken: createDownloadToken(slug, orderID) });
  } catch (err) {
    console.error("[capture-static-order]:", err);
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Failed to process payment" },
      { status: 500 }
    );
  }
}
