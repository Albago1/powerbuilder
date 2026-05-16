import Link from "next/link";
import { staticPrograms } from "@/lib/programs";
import ProgramCard from "@/components/ProgramCard";

const personalizedFeatures = [
  "Personalized training plan",
  "Personalized nutrition plan",
  "Strength & hypertrophy focused",
  "Recovery optimized",
  "Built around your goals & schedule",
  "Directly created by Artur",
];

// Exclude the 8-week PowerBuilder — shown separately on /program
const specialistPrograms = staticPrograms.filter(
  (p) => p.id !== "8-week-powerbuilder"
);

export default function StaticPrograms() {
  return (
    <section id="programs" className="bg-brand-bg py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <p className="section-label mb-4">Choose Your Program</p>
            <h2 className="section-heading">
              Artur&apos;s
              <br />
              <span className="text-red-600">Programs.</span>
            </h2>
          </div>
          <p className="text-zinc-500 text-base max-w-sm md:text-right">
            Personalized coaching or instant-download specialization programs — built for results.
          </p>
        </div>

        {/* Programs grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
          {/* Personalized card — first position */}
          <ProgramCard
            accentLabel="Personalized"
            title="4 Week Personalized Training & Nutrition Program"
            tagline="100% Custom To You"
            description="A fully personalized 4-week training and nutrition program built around your goals, experience, lifestyle, and recovery. You answer a few questions — Artur creates your plan."
            duration="4 Weeks"
            sessionsPerWeek="Custom Plan"
            price={99}
            features={personalizedFeatures}
            href="/personalized"
          />

          {/* Specialist static programs */}
          {specialistPrograms.map((program) => (
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

        {/* Bottom link */}
        <div className="text-center mt-12">
          <Link href="/programs" className="btn-secondary text-xs">
            View All Programs
          </Link>
        </div>
      </div>
    </section>
  );
}
