import { NextRequest, NextResponse } from "next/server";
import { createOrder } from "@/lib/paypal";
import { getProgramById } from "@/lib/programs";

const ALLOWED_SLUGS = ["bench-press"] as const;

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as { slug?: string; consented?: boolean };
    const { slug, consented } = body;

    if (!slug || !ALLOWED_SLUGS.includes(slug as (typeof ALLOWED_SLUGS)[number])) {
      return NextResponse.json({ error: "Invalid program slug" }, { status: 400 });
    }

    if (consented !== true) {
      return NextResponse.json(
        { error: "Withdrawal-waiver consent required" },
        { status: 400 }
      );
    }

    const program = getProgramById(slug);
    if (!program) {
      return NextResponse.json({ error: "Program not found" }, { status: 404 });
    }

    const base = process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3000";
    const { orderID, approvalUrl } = await createOrder(
      `${base}/programs/${slug}/download`,
      `${base}/programs/cancel`,
      {
        amount: program.price.toFixed(2),
        description: program.title,
        referenceId: slug,
      }
    );

    return NextResponse.json({ orderID, approvalUrl });
  } catch (err) {
    console.error("[create-static-order]:", err);
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Failed to create order" },
      { status: 500 }
    );
  }
}
