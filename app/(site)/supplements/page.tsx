import type { Metadata } from "next";
import { getLocale } from "@/lib/locale";
import { getT } from "@/lib/translations";
import { AFFILIATE } from "@/lib/affiliate";
import SupplementCodeCopy from "@/components/SupplementCodeCopy";

export async function generateMetadata(): Promise<Metadata> {
  const t = getT(await getLocale()).supplements;
  return { title: t.meta.title, description: t.meta.description };
}

export default async function SupplementsPage() {
  const locale = await getLocale();
  const s = getT(locale).supplements;

  return (
    <div className="bg-brand-bg pt-16">
      {/* Hero */}
      <section className="relative py-24 md:py-32 border-b border-brand-border overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600/6 rounded-full blur-[120px] pointer-events-none" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="inline-block bg-red-600/10 border border-red-600/40 text-red-500 text-[10px] font-black px-3 py-1 uppercase tracking-widest mb-6">
              {s.hero.badge}
            </span>
            <p className="section-label mb-3">{s.hero.label}</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight leading-none mb-6">
              {s.hero.title1}
              <br />
              <span className="text-red-600">{s.hero.title2}</span>
            </h1>
            <p className="text-zinc-400 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
              {s.hero.subtitle}
            </p>

            {/* Code block */}
            <div className="max-w-xl mx-auto bg-brand-card border border-brand-border p-6 md:p-8">
              <div className="h-1 -mt-6 md:-mt-8 -mx-6 md:-mx-8 mb-6 bg-red-600" />
              <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest mb-3">
                {s.code.label}
              </p>
              <div className="flex items-stretch gap-2 mb-3">
                <div className="flex-1 bg-brand-bg border border-brand-border flex items-center justify-center px-4 py-3">
                  <span className="text-white font-black text-2xl md:text-3xl tracking-[0.3em]">
                    {AFFILIATE.supplementsCode}
                  </span>
                </div>
                <SupplementCodeCopy
                  code={AFFILIATE.supplementsCode}
                  copyLabel={s.code.copy}
                  copiedLabel={s.code.copied}
                />
              </div>
              <p className="text-red-500 text-xs font-bold uppercase tracking-widest mb-6">
                {s.code.discountNote}
              </p>
              <a
                href={AFFILIATE.supplementsUrl}
                target="_blank"
                rel="sponsored noopener noreferrer"
                className="btn-primary w-full justify-center"
              >
                {s.code.cta}
              </a>
              <p className="text-zinc-600 text-xs mt-4 leading-relaxed">{s.code.note}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why this partner */}
      <section className="bg-brand-surface border-b border-brand-border py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="section-label mb-4">{s.why.sectionLabel}</p>
            <h2 className="section-heading">
              {s.why.title1} <span className="text-red-600">{s.why.title2}</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {s.why.cards.map((card, i) => (
              <div key={i} className="bg-brand-card border border-brand-border p-8">
                <span className="text-red-600 font-black text-4xl leading-none block mb-4">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-white font-black text-lg uppercase tracking-tight mb-3">
                  {card.title}
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to redeem */}
      <section className="py-24 md:py-32 border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="section-label mb-4">{s.how.sectionLabel}</p>
            <h2 className="section-heading">
              {s.how.title1} <span className="text-red-600">{s.how.title2}</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-brand-border">
            {s.how.steps.map((step, i) => (
              <div
                key={i}
                className="bg-brand-bg p-8 flex flex-col hover:bg-brand-card transition-colors duration-200"
              >
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

      {/* Final CTA */}
      <section className="py-24 md:py-32 border-b border-brand-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="section-heading mb-6">
            {s.cta.title1}
            <br />
            <span className="text-red-600">{s.cta.title2}</span>
          </h2>
          <p className="text-zinc-400 text-lg mb-10">{s.cta.subtitle}</p>
          <a
            href={AFFILIATE.supplementsUrl}
            target="_blank"
            rel="sponsored noopener noreferrer"
            className="btn-primary max-w-md mx-auto justify-center"
          >
            {s.cta.button}
          </a>
        </div>
      </section>

      {/* Affiliate disclosure */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border border-brand-border bg-brand-card p-6 md:p-8">
            <h3 className="text-zinc-300 font-bold text-xs uppercase tracking-widest mb-3">
              {s.disclosure.heading}
            </h3>
            <p className="text-zinc-500 text-sm leading-relaxed">{s.disclosure.body}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
