import type { Metadata } from "next";
import QuestionnaireFlow from "@/components/questionnaire/QuestionnaireFlow";

export const metadata: Metadata = {
  title: "Questionnaire | PowerBuilder Personalized Program",
  description:
    "Fill out your training profile. Artur will use your answers to build a custom training and nutrition system.",
};

export default function QuestionnairePage() {
  return <QuestionnaireFlow />;
}
