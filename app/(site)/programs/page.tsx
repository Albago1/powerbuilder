import type { Metadata } from "next";
import { staticPrograms } from "@/lib/programs";
import ProgramCard from "@/components/ProgramCard";

export const metadata: Metadata = {
  title: "Programs | PowerBuilder",
  description:
    "Personalized coaching and instant-download specialization programs by Artur. Bench Press, Strict Curl, Cheat Curl, and a fully custom training & nutrition system.",
};

const personalizedFeatures = [
  "Personalized training plan",
  "Personalized nutrition plan",
  "Strength & hypertrophy focused",
  "Recovery optimized",
  "Built around your goals & schedule",
  "Directly created by Artur",
];

const specialistPrograms = staticPrograms.filter(
  (p) => p.id !== "8-week-powerbuilder"
);

export default function ProgramsPage() {
  return (
    <div className="bg-brand-bg pt-16">
      {/* Hero */}
      <section className="py-24 md:py-32 border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="section-label mb-5">Choose Your Program</p>
            <h1 className="section-heading mb-6">
              Your Program.
              <br />
              <span className="text-red-600">Real Results.</span>
            </h1>
            <p className="text-zinc-400 text-lg leading-relaxed">
              Personalized coaching or instant-download specialization programs.
              Built for serious lifters — choose the format that fits your situation.
            </p>
          </div>
        </div>
      </section>

      {/* Programs grid */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
        </div>
      </section>
    </div>
  );
}
