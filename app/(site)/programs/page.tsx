import type { Metadata } from "next";
import { staticPrograms } from "@/lib/programs";
import ProgramCard from "@/components/ProgramCard";
import { getLocale } from "@/lib/locale";
import { getT } from "@/lib/translations";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const m = getT(locale).programs.meta;
  return { title: m.title, description: m.description };
}

export default async function ProgramsPage() {
  const locale = await getLocale();
  const { hero, personalizedCard: pc } = getT(locale).programs;

  return (
    <div className="bg-brand-bg pt-16">
      {/* Hero */}
      <section className="py-24 md:py-32 border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="section-label mb-5">{hero.label}</p>
            <h1 className="section-heading mb-6">
              {hero.title1}
              <br />
              <span className="text-red-600">{hero.title2}</span>
            </h1>
            <p className="text-zinc-400 text-lg leading-relaxed">{hero.subtitle}</p>
          </div>
        </div>
      </section>

      {/* Programs grid */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
            {/* Personalized card — first position */}
            <ProgramCard
              accentLabel={pc.accentLabel}
              title={pc.title}
              tagline={pc.tagline}
              description={pc.description}
              duration={pc.duration}
              sessionsPerWeek={pc.sessionsPerWeek}
              price={99}
              features={pc.features}
              href="/personalized"
            />

            {/* Specialist static programs */}
            {staticPrograms.map((program) => (
              <ProgramCard
                key={program.id}
                title={program.title}
                tagline={program.tagline}
                description={program.description}
                duration={program.duration}
                sessionsPerWeek={program.sessionsPerWeek}
                price={program.price}
                features={program.features}
                href={program.href}
                badge={program.badge}
                accentLabel={program.accentLabel}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
