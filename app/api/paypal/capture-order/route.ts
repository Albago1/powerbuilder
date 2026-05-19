import { NextRequest, NextResponse } from "next/server";
import { captureOrder } from "@/lib/paypal";
import type { QuestionnaireData } from "@/types/questionnaire";
import { formatSubmissionEmail } from "@/lib/formatEmail";

const EXPECTED_AMOUNT = "99.00";
const EXPECTED_CURRENCY = "EUR";

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as {
      orderID: string;
      questionnaireData: QuestionnaireData;
    };

    const { orderID, questionnaireData } = body;

    if (!orderID) {
      return NextResponse.json({ error: "Missing orderID" }, { status: 400 });
    }
    if (!questionnaireData?.age || !questionnaireData?.mainGoal) {
      return NextResponse.json({ error: "Missing questionnaire data" }, { status: 400 });
    }

    // ── Step 1: Capture and verify with PayPal ────────────────────────────
    console.log(`[capture-order] Capturing order: ${orderID}`);
    const result = await captureOrder(orderID);

    if (result.status === "ALREADY_CAPTURED") {
      console.log(`[capture-order] Order already captured: ${orderID}`);
      return NextResponse.json(
        {
          error:
            "This payment has already been processed. If you have not received your program, please contact support.",
          paymentCaptured: true,
        },
        { status: 409 }
      );
    }

    if (result.status !== "COMPLETED") {
      console.error(`[capture-order] Payment not completed — status: ${result.status}, order: ${orderID}`);
      return NextResponse.json(
        {
          error: `Payment not completed (status: ${result.status}). Please try again or contact support.`,
        },
        { status: 402 }
      );
    }

    if (result.amount !== EXPECTED_AMOUNT || result.currency !== EXPECTED_CURRENCY) {
      console.error(
        `[capture-order] Amount mismatch — got ${result.amount} ${result.currency}, expected ${EXPECTED_AMOUNT} ${EXPECTED_CURRENCY}, order: ${orderID}`
      );
      return NextResponse.json(
        { error: "Payment amount verification failed. Please contact support." },
        { status: 402 }
      );
    }

    console.log(
      `[capture-order] Payment verified — ${result.amount} ${result.currency}, order: ${orderID}`
    );
    console.log(
      `[capture-order] Customer: ${questionnaireData.firstName} ${questionnaireData.lastName} <${questionnaireData.email}>`
    );

    // ── Step 2: Send questionnaire to trainer ─────────────────────────────
    const apiKey = process.env.RESEND_API_KEY;
    const trainerEmail = process.env.TRAINER_EMAIL;
    const fromEmail = process.env.RESEND_FROM_EMAIL ?? "noreply@powerbuilder.com";

    if (!apiKey || !trainerEmail) {
      console.error(
        "[capture-order] Email not configured — RESEND_API_KEY or TRAINER_EMAIL missing"
      );
      return NextResponse.json(
        {
          error:
            "Payment received, but questionnaire delivery failed. Please contact support.",
          paymentCaptured: true,
        },
        { status: 500 }
      );
    }

    const subject = [
      "New PowerBuilder Submission [PAID ✓]",
      `${questionnaireData.mainGoal.replace(/_/g, " ")} / ${questionnaireData.bodyCompositionGoal}`,
      `${questionnaireData.age}y`,
      `${questionnaireData.weightKg}kg`,
      questionnaireData.experience,
    ].join(" — ");

    const emailBody = formatSubmissionEmail(questionnaireData);

    console.log(`[capture-order] Sending email to trainer: ${trainerEmail}`);

    const { Resend } = await import("resend");
    const resend = new Resend(apiKey);

    const { data: emailData, error: emailError } = await resend.emails.send({
      from: fromEmail,
      to: trainerEmail,
      subject,
      text: emailBody,
    });

    if (emailError) {
      console.error("[capture-order] Email delivery FAILED:", emailError);
      return NextResponse.json(
        {
          error:
            "Payment received, but questionnaire delivery failed. Please contact support.",
          paymentCaptured: true,
        },
        { status: 500 }
      );
    }

    console.log(`[capture-order] Email sent successfully — Resend id: ${emailData?.id}`);
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[capture-order] Unexpected error:", err);
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Failed to process payment" },
      { status: 500 }
    );
  }
}
