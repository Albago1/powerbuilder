import type { Metadata } from "next";
import QuestionnaireFlow from "@/components/questionnaire/QuestionnaireFlow";
import { getLocale } from "@/lib/locale";
import { getT } from "@/lib/translations";
import type { ProgramTarget } from "@/types/questionnaire";

export async function generateMetadata(): Promise<Metadata> {
  const m = getT(await getLocale()).questionnaire.meta;
  return { title: m.title, description: m.description };
}

const VALID_PROGRAMS: ProgramTarget[] = ["personalized", "bench-press"];

export default async function QuestionnairePage({
  searchParams,
}: {
  searchParams: Promise<{ program?: string }>;
}) {
  const { program: rawProgram } = await searchParams;
  const program: ProgramTarget = VALID_PROGRAMS.includes(rawProgram as ProgramTarget)
    ? (rawProgram as ProgramTarget)
    : "personalized";

  const locale = await getLocale();
  return <QuestionnaireFlow locale={locale} program={program} />;
}
