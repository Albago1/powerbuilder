import type { Metadata } from "next";
import Link from "next/link";
import { getProgramById } from "@/lib/programs";
import PayPalButton from "@/components/PayPalButton";
import ProgramFAQ from "@/components/ProgramFAQ";

export const metadata: Metadata = {
  title: "6 Week Cheat Curl Program | PowerBuilder",
  description:
    "6 weeks of supramaximal overload training for maximum arm mass. Heavy loads, eccentric control, serious bicep thickness. €39 — instant PDF delivery.",
};

const faqs = [
  {
    question: "Is the cheat curl safe? Won't it hurt my back?",
    answer:
      "The cheat curl is safe when performed correctly. The controlled hip drive in this program is deliberate and structured — not random swinging. The lower back stress is minimal when technique is solid. The eccentric (lowering) phase, which is the most important part of this program, is always done with strict control. Follow the technique cues in the program.",
  },
  {
    question: "How is this different from the Strict Curl program?",
    answer:
      "The Strict Curl program builds strength through full ROM controlled curling with no body swing. The Cheat Curl program uses supramaximal loads — weights heavier than you could curl strictly — to overload the muscle and then control the descent. Strict curls build peak and strength foundation; cheat curls build raw arm thickness and mass. Both are effective, but they target different adaptations.",
  },
  {
    question: "What weight should I start with?",
    answer:
      "Start with a weight you can cheat curl for the prescribed rep range while still controlling the eccentric. The point is supramaximal load on the way down — you need to actually be able to lower it under control. If you can't slow the negative to 3–4 seconds, the weight is too heavy. Start conservative and add weekly.",
  },
  {
    question: "Do I need a training partner for this program?",
    answer:
      "No. A training partner helps for motivation and safety on very heavy sets, but is not required. The program is structured so you can run it solo. Make sure your starting weights are manageable on your own and use a power rack or pins as a safety measure on heavier attempts.",
  },
  {
    question: "Can I run both the Strict Curl and Cheat Curl programs together?",
    answer:
      "Not simultaneously — that's too much arm volume for most people. Run one at a time. The recommended approach is to run the Strict Curl program first to build your strength foundation, then run the Cheat Curl program to capitalize on that base with supramaximal loads. Wait at least 1–2 weeks between programs.",
  },
];

export default function CheatCurlPage() {
  const program = getProgramById("cheat-curl")!;

  return (
    <div className="bg-brand-bg pt-16">
      {/* Hero */}
      <section className="relative py-24 md:py-32 border-b border-brand-border overflow-hidden">
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[300px] bg-red-600/6 rounded-full blur-[100px] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="section-label mb-3">{program.tagline}</p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight leading-none mb-6">
                6 Week<br />
                <span className="text-red-600">Cheat Curl</span><br />
                Program
              </h1>
              <p className="text-zinc-400 text-lg leading-relaxed mb-8 max-w-xl">
                {program.description} Supramaximal loads, brutal eccentric work, maximum arm mass.
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
                paypalLink={process.env.NEXT_PUBLIC_PAYPAL_CHEAT_CURL_LINK ?? program.paypalLink}
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
              <span className="text-red-600">Maximum Arm Mass.</span>
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
                { title: "Supramaximal Loading", description: "Cheat mechanics let you load 20–40% more than your strict max. This supramaximal stimulus forces adaptation that strict work cannot replicate." },
                { title: "Eccentric Overload", description: "The eccentric (lowering) phase is the strongest phase of the curl. Controlled 3–4 second negatives under heavy load are the most potent mass builder in this program." },
                { title: "Arm Mass & Thickness", description: "Combined with strict accessory work, the cheat curl develops the brachialis and overall arm girth that gives you thick, powerful arms from every angle." },
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
            <h2 className="section-heading">Built for <span className="text-red-600">Mass Builders.</span></h2>
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
            <span className="text-red-600">Arm Mass That Shows.</span>
          </h2>
          <p className="text-zinc-400 text-lg mb-10">Supramaximal loads. Eccentric overload. Serious thickness.</p>
          <PayPalButton
            price={program.price}
            productName={program.title}
            paypalLink={process.env.NEXT_PUBLIC_PAYPAL_CHEAT_CURL_LINK ?? program.paypalLink}
            className="max-w-xs mx-auto"
          />
          <p className="text-zinc-700 text-xs mt-4">Instant PDF · One-time €{program.price} · Lifetime access</p>
          <div className="mt-6">
            <Link href="/programs/strict-curl" className="text-zinc-500 text-xs hover:text-zinc-300 transition-colors">
              Want strict curl strength too? → Check the Strict Curl Program
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
