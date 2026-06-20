import { NextRequest, NextResponse } from "next/server";
import type { QuestionnaireData } from "@/types/questionnaire";
import { formatSubmissionEmail } from "@/lib/formatEmail";

const VALID_PROGRAMS = ["personalized", "bench-press"] as const;

export async function POST(req: NextRequest) {
  try {
    const raw: QuestionnaireData = await req.json();

    const program = VALID_PROGRAMS.includes(
      raw.program as (typeof VALID_PROGRAMS)[number]
    )
      ? raw.program
      : "personalized";

    const data: QuestionnaireData = { ...raw, program };

    if (!data.age || !data.mainGoal) {
      return NextResponse.json(
        { error: "Incomplete questionnaire data" },
        { status: 400 }
      );
    }

    const emailBody = formatSubmissionEmail(data);

    console.log("=== New PowerBuilder Questionnaire Submission ===");
    console.log(emailBody);

    const apiKey = process.env.RESEND_API_KEY;
    const trainerEmail = process.env.TRAINER_EMAIL;
    const fromEmail = process.env.RESEND_FROM_EMAIL ?? "onboarding@resend.dev";

    if (apiKey && trainerEmail) {
      const { Resend } = await import("resend");
      const resend = new Resend(apiKey);

      const programLabel =
        program === "bench-press" ? "Bench Press" : "Personalized";

      const subject = [
        `New PowerBuilder Application [${programLabel}]`,
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
        console.error("Resend error:", error);
        return NextResponse.json(
          { error: "Could not deliver your application. Please try again or email us directly." },
          { status: 502 }
        );
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
