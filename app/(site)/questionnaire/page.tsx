import type { Metadata } from "next";
import QuestionnaireFlow from "@/components/questionnaire/QuestionnaireFlow";
import { getLocale } from "@/lib/locale";
import { getT } from "@/lib/translations";

export async function generateMetadata(): Promise<Metadata> {
  const m = getT(await getLocale()).questionnaire.meta;
  return { title: m.title, description: m.description };
}

export default async function QuestionnairePage() {
  const locale = await getLocale();
  return <QuestionnaireFlow locale={locale} />;
}
