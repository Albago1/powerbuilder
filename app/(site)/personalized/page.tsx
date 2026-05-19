import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ProgramFAQ from "@/components/ProgramFAQ";
import { getLocale } from "@/lib/locale";
import { getT } from "@/lib/translations";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const m = getT(locale).personalized.meta;
  return { title: m.title, description: m.description };
}

const ICONS = [
  <svg key="plan" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
  </svg>,
  <svg key="nutrition" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
  </svg>,
  <svg key="strength" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>,
  <svg key="recovery" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>,
  <svg key="pdf" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>,
  <svg key="personal" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>,
];

export default async function PersonalizedPage() {
  const locale = await getLocale();
  const p = getT(locale).personalized;

  return (
    <div className="bg-brand-bg pt-16">

      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section className="relative py-24 md:py-36 border-b border-brand-border overflow-hidden">
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/5 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-red-600/4 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 border border-red-600/30 bg-red-600/5 px-3 py-1.5 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
              <span className="text-red-400 text-[10px] font-bold uppercase tracking-[0.2em]">
                {p.hero.badge}
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight leading-none mb-6">
              {p.hero.title1}
              <br />
              <span className="text-red-600">{p.hero.title2}</span>
            </h1>
            <p className="text-zinc-400 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl">
              {p.hero.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 mb-10">
              <Link href="/questionnaire" className="btn-primary text-sm px-10 py-4">
                {p.hero.cta}
              </Link>
              <div>
                <span className="text-white font-black text-3xl">{p.hero.price}</span>
                <span className="text-zinc-600 text-sm ml-2">{p.hero.priceNote}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {p.hero.trust.map((t) => (
                <div key={t} className="flex items-center gap-2">
                  <svg className="w-3.5 h-3.5 text-red-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-zinc-500 text-xs">{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats bar ─────────────────────────────────────────────────── */}
      <section className="bg-brand-surface border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-brand-border">
            {p.stats.map((stat, i) => (
              <div key={i} className="py-8 px-6 text-center">
                <p className="text-red-600 font-black text-4xl mb-1.5">{stat.value}</p>
                <p className="text-zinc-600 text-xs uppercase tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What's included ───────────────────────────────────────────── */}
      <section className="py-24 md:py-32 border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="section-label mb-4">{p.included.sectionLabel}</p>
            <h2 className="section-heading">
              {p.included.title1}
              <br />
              <span className="text-red-600">{p.included.title2}</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-brand-border">
            {p.included.items.map((item, i) => (
              <div key={i} className="bg-brand-bg p-8 flex flex-col gap-4 hover:bg-brand-card transition-colors duration-200 group">
                <div className="text-red-600 group-hover:scale-110 transition-transform duration-200 w-fit">
                  {ICONS[i]}
                </div>
                <h3 className="text-white font-bold text-base tracking-tight">{item.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Built by Artur ────────────────────────────────────────────── */}
      <section className="bg-brand-surface border-b border-brand-border py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">

            <div className="flex justify-center md:justify-end">
              <div className="relative">
                <div className="absolute -inset-4 bg-red-600/8 blur-2xl rounded-full" />
                <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-red-600/30 shadow-2xl shadow-red-900/20">
                  <Image
                    src="/Profile.jpg"
                    alt="Artur Mehmeti — PowerBuilder Coach"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 256px, 320px"
                  />
                </div>
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-brand-card border border-brand-border px-5 py-2.5 whitespace-nowrap">
                  <p className="text-white font-black text-xs uppercase tracking-widest text-center">
                    {p.coach.credential}
                  </p>
                  <p className="text-red-500 text-[10px] uppercase tracking-widest text-center mt-0.5">
                    {p.coach.credentialSub}
                  </p>
                </div>
              </div>
            </div>

            <div className="md:pl-4 mt-8 md:mt-0">
              <p className="section-label mb-5">{p.coach.sectionLabel}</p>
              <h2 className="section-heading mb-6">
                {p.coach.title1}
                <br />
                <span className="text-red-600">{p.coach.title2}</span>
              </h2>
              <div className="flex flex-col gap-5 text-zinc-400 leading-relaxed">
                {p.coach.bio.map((para, i) => <p key={i}>{para}</p>)}
              </div>
              <div className="mt-8 flex flex-col gap-3">
                {p.coach.points.map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-600 mt-1.5 shrink-0" />
                    <span className="text-zinc-400 text-sm">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── How it works ──────────────────────────────────────────────── */}
      <section className="py-24 md:py-32 border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="section-label mb-4">{p.process.sectionLabel}</p>
            <h2 className="section-heading">
              {p.process.title1}
              <br />
              <span className="text-red-600">{p.process.title2}</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-brand-border">
            {p.process.steps.map((step, i) => (
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

      {/* ── Why personalized ──────────────────────────────────────────── */}
      <section className="bg-brand-surface border-b border-brand-border py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="section-label mb-4">{p.comparison.sectionLabel}</p>
            <h2 className="section-heading">
              {p.comparison.title1}
              <br />
              <span className="text-red-600">{p.comparison.title2}</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-brand-border max-w-4xl mx-auto">
            <div className="bg-brand-bg p-8 md:p-10">
              <p className="text-zinc-600 text-xs font-bold uppercase tracking-widest mb-6">
                {p.comparison.genericLabel}
              </p>
              <div className="flex flex-col gap-4">
                {p.comparison.genericItems.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <svg className="w-4 h-4 text-zinc-700 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span className="text-zinc-600 text-sm leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-brand-card border-l border-red-600/20 p-8 md:p-10">
              <div className="h-0.5 bg-red-600 -mt-8 -mx-8 md:-mx-10 mb-6" />
              <p className="text-red-500 text-xs font-bold uppercase tracking-widest mb-6">
                {p.comparison.personalizedLabel}
              </p>
              <div className="flex flex-col gap-4">
                {p.comparison.personalizedItems.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <svg className="w-4 h-4 text-red-600 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-zinc-300 text-sm leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Guarantee ─────────────────────────────────────────────────── */}
      <section className="py-24 md:py-32 border-b border-brand-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 border border-red-600/30 bg-red-600/5 mb-8">
            <svg className="w-7 h-7 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <p className="section-label mb-4">{p.guarantee.sectionLabel}</p>
          <h2 className="section-heading mb-6">
            {p.guarantee.title1}
            <br />
            <span className="text-red-600">{p.guarantee.title2}</span>
          </h2>
          <p className="text-zinc-400 text-lg leading-relaxed max-w-xl mx-auto">
            {p.guarantee.description}
          </p>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────── */}
      <ProgramFAQ faqs={p.faq} />

      {/* ── Bottom CTA ────────────────────────────────────────────────── */}
      <section className="relative py-24 md:py-36 overflow-hidden">
        <div className="absolute inset-0 bg-brand-surface" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-600/6 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="section-label mb-4">{p.cta.sectionLabel}</p>
          <h2 className="section-heading mb-6">
            {p.cta.title1}
            <br />
            <span className="text-red-600">{p.cta.title2}</span>
          </h2>
          <p className="text-zinc-400 text-lg mb-10 leading-relaxed">
            {p.cta.subtitle}
          </p>
          <Link href="/questionnaire" className="btn-primary text-sm px-12 py-5">
            {p.cta.button}
          </Link>
          <p className="text-zinc-700 text-xs mt-5">
            {p.cta.note}
          </p>
        </div>
      </section>

    </div>
  );
}
