import type { Metadata } from "next";
import Link from "next/link";
import { getProgramById } from "@/lib/programs";
import ProgramFAQ from "@/components/ProgramFAQ";
import LaunchCountdown from "@/components/LaunchCountdown";
import { getLocale } from "@/lib/locale";
import { getT } from "@/lib/translations";
import { LAUNCH_OFFER, isLaunchOfferActive } from "@/lib/launchOffer";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "6 Week Bench Press Program | PowerBuilder",
    description:
      "A laser-focused 6-week bench press specialization program. Build serious pressing strength and chest power.",
  };
}

export default async function BenchPressPage() {
  const locale = await getLocale();
  const t = getT(locale);
  const pd = t.programDetail;
  const bp = t.benchPress;
  const program = getProgramById("bench-press")!;
  const launchActive = isLaunchOfferActive();
  const applyHref = "/questionnaire?program=bench-press";

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
                {program.description}
              </p>
              <div className="flex flex-wrap gap-3">
                {[program.duration, program.sessionsPerWeek, ...program.focus].map((tag) => (
                  <span key={tag} className="border border-brand-border text-zinc-400 text-xs font-bold uppercase tracking-wider px-3 py-1.5">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Apply card */}
            <div className="bg-brand-card border border-brand-border p-8 md:p-10">
              <div className="h-1 -mt-8 -mx-8 md:-mt-10 md:-mx-10 mb-8 bg-red-600" />
              <div className="mb-6">
                {launchActive && program.originalPrice && (
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-zinc-600 text-xl line-through">€{program.originalPrice}</span>
                    <span className="bg-red-600 text-white text-[10px] font-black px-2 py-0.5 uppercase tracking-wider">
                      -30%
                    </span>
                  </div>
                )}
                <span className="text-white font-black text-6xl">€{program.price}</span>
                {launchActive && (
                  <div className="mt-2 flex flex-col gap-0.5">
                    <p className="text-red-500 text-xs font-bold uppercase tracking-widest">{t.pricing.launchBadge}</p>
                    <LaunchCountdown
                      endsAt={LAUNCH_OFFER.endsAt}
                      labelPrefix={t.pricing.countdownLabel}
                      endedLabel={t.pricing.countdownEnded}
                      className="text-red-500 text-xs font-bold uppercase tracking-widest tabular-nums"
                    />
                  </div>
                )}
                <p className="text-zinc-600 text-sm mt-1">{pd.priceNote}</p>
              </div>
              <Link href={applyHref} className="btn-primary w-full justify-center mb-4">
                {pd.applyCta}
              </Link>
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

      {/* Focus pillars */}
      <section className="bg-brand-surface border-b border-brand-border py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <p className="section-label mb-4">{pd.focusLabel}</p>
              <h2 className="section-heading">
                {pd.threeTitle1}<br />
                <span className="text-red-600">{pd.threeTitle2}</span>
              </h2>
            </div>
            <div className="md:col-span-2 flex flex-col gap-4">
              {bp.pillars.map((pillar, i) => (
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

      {/* How it works */}
      <section className="py-24 md:py-32 border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="section-label mb-4">{bp.process.sectionLabel}</p>
            <h2 className="section-heading">
              {bp.process.title1}
              <br />
              <span className="text-red-600">{bp.process.title2}</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-brand-border">
            {bp.process.steps.map((step, i) => (
              <div key={i} className="bg-brand-bg p-8 flex flex-col hover:bg-brand-card transition-colors duration-200">
                <span className="text-red-600 font-black text-6xl leading-none mb-5 opacity-30">
                  {step.num}
                </span>
                <h3 className="text-white font-black text-base uppercase tracking-tight mb-3">
                  {step.title}
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="py-24 md:py-32 border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="section-label mb-4">{pd.whoForLabel}</p>
            <h2 className="section-heading">
              {bp.builtFor} <span className="text-red-600">{bp.builtForAccent}</span>
            </h2>
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
      <ProgramFAQ faqs={bp.faqs} />

      {/* Bottom CTA */}
      <section className="py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="section-heading mb-6">
            {bp.ctaTitle1}<br />
            <span className="text-red-600">{bp.ctaTitle2}</span>
          </h2>
          <p className="text-zinc-400 text-lg mb-10">{bp.ctaSubtitle}</p>
          <Link href={applyHref} className="btn-primary max-w-md mx-auto justify-center">
            {pd.applyCta}
          </Link>
          <p className="text-zinc-700 text-xs mt-4">{pd.applyNote}</p>
          <div className="mt-6">
            <Link href="/personalized" className="text-zinc-500 text-xs hover:text-zinc-300 transition-colors">
              {pd.personalizedLink}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
