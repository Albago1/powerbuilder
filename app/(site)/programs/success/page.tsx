import type { Metadata } from "next";
import Link from "next/link";
import PersonalizedSuccess from "@/components/PersonalizedSuccess";
import { getLocale } from "@/lib/locale";
import { getT } from "@/lib/translations";

export async function generateMetadata(): Promise<Metadata> {
  const m = getT(await getLocale()).programsSuccess.meta;
  return { title: m.title, description: m.description };
}

export default async function ProgramSuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ product?: string; token?: string }>;
}) {
  const { product, token } = await searchParams;
  const locale = await getLocale();
  const t = getT(locale);

  return (
    <div className="bg-brand-bg min-h-screen pt-16">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        {product === "personalized" ? (
          <PersonalizedSuccess orderID={token} />
        ) : (
          <StaticProgramSuccess t={t.programsSuccess} />
        )}
      </div>
    </div>
  );
}

function StaticProgramSuccess({ t }: { t: ReturnType<typeof getT>["programsSuccess"] }) {
  const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "contact@powerbuilder.com";

  return (
    <>
      {/* Success icon */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-red-600/10 border border-red-600/30 mb-8">
          <svg className="w-10 h-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <p className="section-label mb-4">{t.label}</p>
        <h1 className="section-heading mb-6">
          {t.title1}
          <br />
          <span className="text-red-600">{t.title2}</span>
        </h1>
        <p className="text-zinc-400 text-lg leading-relaxed">
          {t.body}
        </p>
      </div>

      {/* What happens next */}
      <div className="bg-brand-card border border-brand-border p-8 mb-10">
        <div className="h-0.5 bg-red-600 -mt-8 -mx-8 mb-6" />
        <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-5">
          {t.whatNowLabel}
        </p>
        <div className="flex flex-col gap-5">
          {t.steps.map((step, i) => (
            <div key={i} className="flex gap-4">
              <span className="text-red-600 font-black text-2xl leading-none shrink-0 opacity-50 mt-0.5">
                {step.num}
              </span>
              <div>
                <h3 className="text-white font-bold text-sm uppercase tracking-tight mb-1">
                  {step.title}
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Support */}
      <div className="text-center border-t border-brand-border pt-10">
        <p className="text-zinc-500 text-sm mb-2">{t.supportText}</p>
        <a
          href={`mailto:${contactEmail}?subject=${encodeURIComponent(t.supportSubject)}`}
          className="text-red-500 hover:text-red-400 text-sm font-medium transition-colors"
        >
          {contactEmail}
        </a>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <Link href="/programs" className="btn-secondary text-xs">
            {t.browseMore}
          </Link>
          <Link href="/" className="text-zinc-600 text-sm hover:text-zinc-400 transition-colors">
            {t.backHome}
          </Link>
        </div>
      </div>
    </>
  );
}
