import type { Metadata } from "next";
import CalorieCalculator from "@/components/CalorieCalculator";
import { getLocale } from "@/lib/locale";
import { getT } from "@/lib/translations";

export async function generateMetadata(): Promise<Metadata> {
  const m = getT(await getLocale()).calorieCalculator.meta;
  return { title: m.title, description: m.description };
}

export default async function CalculatorPage() {
  const locale = await getLocale();
  const t = getT(locale).calorieCalculator;

  return (
    <div className="bg-brand-bg min-h-screen pt-16">
      <div className="max-w-md mx-auto px-4 py-16 md:py-24">
        <CalorieCalculator t={t} />
      </div>
    </div>
  );
}
