import type { Metadata } from "next";
import Link from "next/link";
import PayPalConfirmButton from "@/components/PayPalConfirmButton";
import { getLocale } from "@/lib/locale";
import { getT } from "@/lib/translations";

export async function generateMetadata(): Promise<Metadata> {
  const m = getT(await getLocale()).questionnaire.confirmation.meta;
  return { title: m.title, description: m.description };
}

export default async function ConfirmationPage({
  searchParams,
}: {
  searchParams: Promise<{ email?: string }>;
}) {
  const { email } = await searchParams;
  const locale = await getLocale();
  const t = getT(locale);
  const c = t.questionnaire.confirmation;

  return (
    <div className="bg-brand-bg min-h-screen pt-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        {/* Status indicator */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-red-600/10 border border-red-600/30 mb-6">
            <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>

          <p className="section-label mb-4">{c.statusLabel}</p>
          <h1 className="section-heading mb-6">
            {c.title1}
            <br />
            <span className="text-red-600">{c.title2}</span>
          </h1>
          <p className="text-zinc-400 text-lg leading-relaxed max-w-xl mx-auto">
            {c.body}
          </p>
          {email && (
            <p className="text-zinc-500 text-sm mt-3">
              {c.deliveryNotePrefix}{" "}
              <span className="text-white font-medium">{email}</span>
            </p>
          )}
        </div>

        {/* Payment card */}
        <div className="bg-brand-card border border-red-600/20 p-8 mb-12 text-center">
          <div className="h-0.5 bg-red-600 -mt-8 -mx-8 mb-6" />
          <p className="text-red-600 text-xs font-bold uppercase tracking-widest mb-3">
            {c.cardLabel}
          </p>
          <h2 className="text-white font-black text-2xl uppercase tracking-tight mb-4">
            {c.cardTitle}
          </h2>
          <p className="text-zinc-400 text-sm leading-relaxed mb-6">
            {c.cardBody}
          </p>
          <PayPalConfirmButton
            consentLabel={t.checkout.widerrufConsent}
            consentRequiredMessage={t.checkout.consentRequired}
            consentAriaLabel={t.checkout.consentAriaLabel}
          />
        </div>

        {/* What happens next */}
        <div className="mb-12">
          <p className="section-label mb-8 text-center">{c.whatHappensNext}</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {c.nextSteps.map((step, i) => (
              <div key={i} className="bg-brand-card border border-brand-border p-6">
                <span className="text-red-600 font-black text-3xl leading-none block mb-3 opacity-50">
                  {step.num}
                </span>
                <h3 className="text-white font-bold text-base uppercase tracking-tight mb-2">
                  {step.title}
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact note */}
        <div className="text-center border-t border-brand-border pt-10">
          <p className="text-zinc-500 text-sm mb-2">{c.questionsLabel}</p>
          <a
            href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "contact@powerbuilder.com"}`}
            className="text-red-500 hover:text-red-400 text-sm font-medium transition-colors"
          >
            {process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "contact@powerbuilder.com"}
          </a>
          <div className="mt-8">
            <Link href="/" className="btn-secondary text-xs">
              {c.backHome}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
