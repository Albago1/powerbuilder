import type { Metadata } from "next";
import Link from "next/link";
import { getProgramById } from "@/lib/programs";
import PayPalButton from "@/components/PayPalButton";
import ProgramFAQ from "@/components/ProgramFAQ";

export const metadata: Metadata = {
  title: "6 Week Bench Press Program | PowerBuilder",
  description:
    "A laser-focused 6-week bench press specialization program. Build serious pressing strength and chest power. €49 — instant PDF delivery.",
};

const faqs = [
  {
    question: "Do I need a strong bench press to start this program?",
    answer:
      "No. You need a solid bench press technique and at least 6 months of consistent training experience. The starting weight doesn't matter — the program builds from wherever you are right now. What matters is that you can execute the movement safely under load.",
  },
  {
    question: "Can I run this alongside my regular training?",
    answer:
      "This is a specialization program — it's designed to be your primary upper body focus for 6 weeks. You can add leg training on off days, but adding additional heavy pressing or chest work will interfere with recovery and reduce results. Follow the program as written.",
  },
  {
    question: "Will this program add chest size or just strength?",
    answer:
      "Both. The program combines heavy strength work (1–5 rep range) on the main bench variations with hypertrophy-focused accessory pressing (6–12 reps). You'll build the chest thickness and pressing strength at the same time.",
  },
  {
    question: "What equipment do I need?",
    answer:
      "A barbell, bench press station, and access to cables or dumbbells for accessory work. A full commercial gym is ideal. You cannot run this program effectively with dumbbells only — the main movements require a barbell.",
  },
  {
    question: "How much weight will I add to my bench in 6 weeks?",
    answer:
      "Results depend on your starting point, consistency, and nutrition. Most lifters see 5–15kg added to their working max over 6 weeks when following the program correctly. The program is structured to push your ceiling each week — what you get out of it reflects what you put in.",
  },
];

export default function BenchPressPage() {
  const program = getProgramById("bench-press")!;

  return (
    <div className="bg-brand-bg pt-16">
      {/* Hero */}
      <section className="relative py-24 md:py-32 border-b border-brand-border overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600/6 rounded-full blur-[120px] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="bg-red-600 text-white text-[10px] font-black px-2 py-0.5 uppercase tracking-wider">
                  {program.badge}
                </span>
                <span className="text-zinc-500 text-xs uppercase tracking-widest">{program.accentLabel}</span>
              </div>
              <p className="section-label mb-3">{program.tagline}</p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight leading-none mb-6">
                6 Week<br />
                <span className="text-red-600">Bench Press</span><br />
                Program
              </h1>
              <p className="text-zinc-400 text-lg leading-relaxed mb-8 max-w-xl">
                {program.description} 4 sessions per week, progressive overload built in, strength and hypertrophy combined.
              </p>
              <div className="flex flex-wrap gap-3">
                {[program.duration, program.sessionsPerWeek, "Instant PDF", ...program.focus].map((tag) => (
                  <span key={tag} className="border border-brand-border text-zinc-400 text-xs font-bold uppercase tracking-wider px-3 py-1.5">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Purchase card */}
            <div className="bg-brand-card border border-brand-border p-8 md:p-10">
              <div className="h-1 -mt-8 -mx-8 md:-mt-10 md:-mx-10 mb-8 bg-red-600" />
              <div className="mb-6">
                <span className="text-white font-black text-6xl">€{program.price}</span>
                <p className="text-zinc-600 text-sm mt-1">One-time · no subscription</p>
              </div>

              <PayPalButton
                price={program.price}
                productName={program.title}
                paypalLink={process.env.NEXT_PUBLIC_PAYPAL_BENCH_PRESS_LINK ?? program.paypalLink}
                className="mb-4"
              />

              <div className="border-t border-brand-border pt-6 flex flex-col gap-3">
                {program.features.map((f, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <svg className="w-4 h-4 text-red-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-zinc-400 text-sm">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training days */}
      <section className="py-24 md:py-32 border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="section-label mb-4">Program Structure</p>
            <h2 className="section-heading">
              4 Days.
              <br />
              <span className="text-red-600">Maximum Bench Gains.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {program.trainingDays.map((day, i) => (
              <div key={i} className="bg-brand-card border-t-2 border-red-600 border border-brand-border p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-zinc-500 text-xs font-bold uppercase tracking-widest">{day.label}</span>
                  <span className="text-white font-bold text-sm">{day.focus}</span>
                </div>
                <div className="flex flex-col gap-2">
                  {day.exercises.map((ex, j) => (
                    <div key={j} className="flex items-center gap-2 text-zinc-400 text-sm">
                      <span className="w-1 h-1 rounded-full bg-zinc-600 shrink-0" />
                      {ex}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Focus pillars */}
      <section className="bg-brand-surface border-b border-brand-border py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <p className="section-label mb-4">Focus Areas</p>
              <h2 className="section-heading">
                The Three
                <br />
                <span className="text-red-600">Pillars.</span>
              </h2>
            </div>
            <div className="md:col-span-2 flex flex-col gap-4">
              {[
                {
                  title: "Bench Strength",
                  description: "Heavy work in the 1–5 rep range on main bench variations. Every session pushes the top-end strength ceiling higher.",
                },
                {
                  title: "Chest Power",
                  description: "Hypertrophy-range pressing (6–12 reps) using incline, cable, and dumbbell variations builds the chest thickness that transfers to the bar.",
                },
                {
                  title: "Pressing Mechanics",
                  description: "Technique cues, paused reps, and touch-and-go variations refine your form under load — the fastest way to add sustainable weight.",
                },
              ].map((pillar, i) => (
                <div key={i} className="flex gap-5 p-6 border border-brand-border">
                  <span className="text-red-600 font-black text-4xl leading-none mt-1 shrink-0">{i + 1}</span>
                  <div>
                    <h3 className="text-white font-black text-xl uppercase tracking-tight mb-2">{pillar.title}</h3>
                    <p className="text-zinc-500 text-sm leading-relaxed">{pillar.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="py-24 md:py-32 border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="section-label mb-4">Who Is This For</p>
            <h2 className="section-heading">Built for <span className="text-red-600">Pressers.</span></h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {program.whoIsItFor.map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-5 border border-brand-border">
                <svg className="w-4 h-4 text-red-600 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-zinc-300 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <ProgramFAQ faqs={faqs} />

      {/* Bottom CTA */}
      <section className="py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="section-heading mb-6">
            6 Weeks From Now,<br />
            <span className="text-red-600">Your Bench Is Different.</span>
          </h2>
          <p className="text-zinc-400 text-lg mb-10">One program. Six weeks. Serious strength.</p>
          <PayPalButton
            price={program.price}
            productName={program.title}
            paypalLink={process.env.NEXT_PUBLIC_PAYPAL_BENCH_PRESS_LINK ?? program.paypalLink}
            className="max-w-xs mx-auto"
          />
          <p className="text-zinc-700 text-xs mt-4">Instant PDF · One-time €{program.price} · Lifetime access</p>
          <div className="mt-6">
            <Link href="/personalized" className="text-zinc-500 text-xs hover:text-zinc-300 transition-colors">
              Want something built specifically for you? → Personalized System
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
