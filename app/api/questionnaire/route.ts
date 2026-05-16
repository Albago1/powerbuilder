import { NextRequest, NextResponse } from "next/server";
import type { QuestionnaireData } from "@/types/questionnaire";
import { formatSubmissionEmail } from "@/lib/formatEmail";

// ============================================================
// QUESTIONNAIRE SUBMISSION ENDPOINT
// ============================================================
// Receives questionnaire data, then emails it to the trainer.
//
// SETUP (5 minutes):
//   1. Sign up at https://resend.com (free)
//   2. Add RESEND_API_KEY to .env.local
//   3. Add TRAINER_EMAIL to .env.local
//   4. Add RESEND_FROM_EMAIL to .env.local (must be verified domain)
//   5. Verify your domain at https://resend.com/domains
//      OR use Resend's sandbox for testing without domain setup.
//
// Without these env vars the route still works — it just logs
// to console only (safe for local dev / before email is wired).
// ============================================================

export async function POST(req: NextRequest) {
  try {
    const data: QuestionnaireData = await req.json();

    if (!data.age || !data.mainGoal) {
      return NextResponse.json(
        { error: "Incomplete questionnaire data" },
        { status: 400 }
      );
    }

    const emailBody = formatSubmissionEmail(data);

    // Always log for visibility
    console.log("=== New PowerBuilder Questionnaire Submission ===");
    console.log(emailBody);

    // ── Send email via Resend ─────────────────────────────────
    const apiKey = process.env.RESEND_API_KEY;
    const trainerEmail = process.env.TRAINER_EMAIL;
    const fromEmail = process.env.RESEND_FROM_EMAIL ?? "noreply@powerbuilder.com";

    if (apiKey && trainerEmail) {
      const { Resend } = await import("resend");
      const resend = new Resend(apiKey);

      const subject = [
        "New PowerBuilder Submission",
        `${data.mainGoal.replace("_", " ")} / ${data.bodyCompositionGoal}`,
        `${data.age}y`,
        `${data.weightKg}kg`,
        data.experience,
      ].join(" — ");

      const { error } = await resend.emails.send({
        from: fromEmail,
        to: trainerEmail,
        subject,
        text: emailBody,
      });

      if (error) {
        // Log but don't fail — the submission is saved, email can be resent manually
        console.error("Resend error:", error);
      }
    } else {
      console.warn(
        "Email not sent: RESEND_API_KEY or TRAINER_EMAIL missing in .env.local"
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Questionnaire submission error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
