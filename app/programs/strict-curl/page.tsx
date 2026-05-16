import type { Metadata } from "next";
import Link from "next/link";
import { getProgramById } from "@/lib/programs";
import PayPalButton from "@/components/PayPalButton";
import ProgramFAQ from "@/components/ProgramFAQ";

export const metadata: Metadata = {
  title: "6 Week Strict Curl Program | PowerBuilder",
  description:
    "A strength-focused 6-week strict curl specialization program. Full ROM, controlled power, serious bicep development. €39 — instant PDF delivery.",
};

const faqs = [
  {
    question: "What exactly is a strict curl?",
    answer:
      "A strict curl is a barbell or dumbbell curl performed with zero body swing. Your torso stays fixed, your elbows stay at your sides, and you control the weight through the full range of motion — from a full stretch at the bottom to a peak contraction at the top. No momentum, no hip drive. Maximum tension on the bicep throughout.",
  },
  {
    question: "Can I run this program alongside my regular training?",
    answer:
      "Yes. This is an arm specialization program with 3 sessions per week. You can keep your regular chest, back, and leg training on the other days. Just make sure you're not hitting heavy bicep work on your rest days from this program — recovery is where the growth happens.",
  },
  {
    question: "Do I need any special equipment?",
    answer:
      "A barbell, EZ bar, and a set of dumbbells cover everything in this program. Cables are useful for some accessory exercises but not essential. This program can be run in almost any gym.",
  },
  {
    question: "How much weight should I start with?",
    answer:
      "Start lighter than you think. Strict curls with no momentum feel significantly harder than cheat curls or casual dumbbell curls. Choose a weight you can lift for the prescribed reps with perfect form — no swing at all. You'll increase from there each week as the program builds.",
  },
  {
    question: "Is this program only for people competing in arm strength?",
    answer:
      "No. Most people who run this program are doing it for arm size and strength — not competition. The strict curl is simply one of the most effective tools for building peak bicep strength and size with proper form. Competitors use it, but so do anyone who wants genuinely strong and developed arms.",
  },
];

export default function StrictCurlPage() {
  const program = getProgramById("strict-curl")!;

  return (
    <div className="bg-brand-bg pt-16">
      {/* Hero */}
      <section className="relative py-24 md:py-32 border-b border-brand-border overflow-hidden">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-red-600/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="section-label mb-3">{program.tagline}</p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight leading-none mb-6">
                6 Week<br />
                <span className="text-red-600">Strict Curl</span><br />
                Program
              </h1>
              <p className="text-zinc-400 text-lg leading-relaxed mb-8 max-w-xl">
                {program.description} Full ROM, controlled tempo, maximum strength development.
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
                paypalLink={process.env.NEXT_PUBLIC_PAYPAL_STRICT_CURL_LINK ?? program.paypalLink}
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
              3 Days.<br />
              <span className="text-red-600">Maximum Curl Strength.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
              <p className="section-label mb-4">Training Focus</p>
              <h2 className="section-heading">
                The Three<br />
                <span className="text-red-600">Pillars.</span>
              </h2>
            </div>
            <div className="md:col-span-2 flex flex-col gap-4">
              {[
                { title: "Strict Curl Strength", description: "Heavy strict curls in the 3–5 rep range build the neural strength and tendon resilience that make your arms genuinely powerful." },
                { title: "Full ROM Development", description: "Complete range of motion on every rep. Full stretch at the bottom, full contraction at the top. No half-reps, no momentum — real development." },
                { title: "Arm Specialization", description: "Every session targets the biceps from multiple angles. Short-head, long-head, brachialis — all covered to build complete arm thickness and peak." },
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
            <h2 className="section-heading">Built for <span className="text-red-600">Arm Builders.</span></h2>
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
            6 Weeks.<br />
            <span className="text-red-600">Serious Arm Strength.</span>
          </h2>
          <p className="text-zinc-400 text-lg mb-10">Controlled power. Full ROM. Real gains.</p>
          <PayPalButton
            price={program.price}
            productName={program.title}
            paypalLink={process.env.NEXT_PUBLIC_PAYPAL_STRICT_CURL_LINK ?? program.paypalLink}
            className="max-w-xs mx-auto"
          />
          <p className="text-zinc-700 text-xs mt-4">Instant PDF · One-time €{program.price} · Lifetime access</p>
          <div className="mt-6">
            <Link href="/programs/cheat-curl" className="text-zinc-500 text-xs hover:text-zinc-300 transition-colors">
              Want more arm mass? → Check the Cheat Curl Program
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
