import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { captureOrder } from "@/lib/paypal";
import { createDownloadToken } from "@/lib/downloadToken";
import { getProgramById } from "@/lib/programs";
import DownloadPanel from "@/components/DownloadPanel";
import { getLocale } from "@/lib/locale";
import { getT } from "@/lib/translations";

export async function generateMetadata(): Promise<Metadata> {
  const m = getT(await getLocale()).download.meta;
  return { title: m.title, description: m.description };
}

const ALLOWED_SLUGS = ["bench-press"];

interface Props {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ token?: string }>;
}

export default async function DownloadPage({ params, searchParams }: Props) {
  const { slug } = await params;
  const { token: orderID } = await searchParams;
  const locale = await getLocale();
  const t = getT(locale);
  const d = t.download;
  const dp = t.downloadPanel;

  if (!ALLOWED_SLUGS.includes(slug)) notFound();

  const program = getProgramById(slug);
  if (!program) notFound();

  const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "contact@powerbuilder.com";

  if (!orderID) {
    return (
      <div className="bg-brand-bg min-h-screen pt-16">
        <div className="max-w-2xl mx-auto px-4 py-24 text-center">
          <p className="text-red-500 text-xs font-bold uppercase tracking-widest mb-4">{d.noPayment.label}</p>
          <h1 className="text-white font-black text-3xl uppercase mb-4">{d.noPayment.title}</h1>
          <p className="text-zinc-400 text-sm mb-8">{d.noPayment.body}</p>
          <Link href={program.href} className="btn-primary">
            {d.noPayment.buyPrefix} {program.shortTitle} →
          </Link>
        </div>
      </div>
    );
  }

  let downloadToken: string;
  try {
    const result = await captureOrder(orderID);

    if (result.status === "ALREADY_CAPTURED") {
      downloadToken = createDownloadToken(slug, orderID);
    } else if (result.status !== "COMPLETED") {
      return <PaymentFailed slug={slug} program={program} contactEmail={contactEmail} d={d} />;
    } else {
      const expectedAmount = program.price.toFixed(2);
      if (result.amount !== expectedAmount || result.currency !== "EUR") {
        console.error(
          `[download page] Amount mismatch — got ${result.amount} ${result.currency}, expected ${expectedAmount} EUR, order: ${orderID}`
        );
        return <PaymentFailed slug={slug} program={program} contactEmail={contactEmail} d={d} />;
      }

      if (result.referenceId && result.referenceId !== slug) {
        console.error(
          `[download page] Slug mismatch — order referenceId: ${result.referenceId}, page slug: ${slug}`
        );
        return <PaymentFailed slug={slug} program={program} contactEmail={contactEmail} d={d} />;
      }

      downloadToken = createDownloadToken(slug, orderID);
    }
  } catch (err) {
    console.error("[download page] captureOrder failed:", err);
    return <PaymentFailed slug={slug} program={program} contactEmail={contactEmail} d={d} />;
  }

  return (
    <div className="bg-brand-bg min-h-screen pt-16">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-24">

        {/* Success header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-red-600/10 border border-red-600/30 mb-8">
            <svg className="w-10 h-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <p className="section-label mb-4">{d.success.label}</p>
          <h1 className="section-heading mb-4">
            {d.success.title1} <span className="text-red-600">{d.success.title2}</span>
          </h1>
          <p className="text-zinc-400 text-lg">
            {program.title} {d.success.bodySuffix}
          </p>
        </div>

        {/* Download card */}
        <div className="bg-brand-card border border-brand-border p-8 mb-10">
          <div className="h-0.5 bg-red-600 -mt-8 -mx-8 mb-6" />
          <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-6">
            {d.success.sectionLabel}
          </p>
          <DownloadPanel
            downloadToken={downloadToken}
            programTitle={program.shortTitle}
            selectLanguageLabel={dp.selectLanguage}
            downloadCtaPrefix={dp.downloadCtaPrefix}
            downloadCtaSuffix={dp.downloadCtaSuffix}
            expiryNote={dp.expiryNote}
            languages={dp.languages}
          />
        </div>

        {/* Support */}
        <div className="text-center border-t border-brand-border pt-10">
          <p className="text-zinc-500 text-sm mb-2">{d.success.supportText}</p>
          <a
            href={`mailto:${contactEmail}?subject=${encodeURIComponent(`${d.success.supportSubjectPrefix} ${program.title}`)}&body=${encodeURIComponent(`${d.success.supportBodyPrefix} ${orderID}`)}`}
            className="text-red-500 hover:text-red-400 text-sm font-medium transition-colors"
          >
            {contactEmail}
          </a>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <Link href="/programs" className="btn-secondary text-xs">
              {d.success.browseMore}
            </Link>
            <Link href="/" className="text-zinc-600 text-sm hover:text-zinc-400 transition-colors">
              {d.success.backHome}
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}

function PaymentFailed({
  program,
  contactEmail,
  d,
}: {
  slug: string;
  program: { title: string; href: string; shortTitle: string };
  contactEmail: string;
  d: ReturnType<typeof getT>["download"];
}) {
  return (
    <div className="bg-brand-bg min-h-screen pt-16">
      <div className="max-w-2xl mx-auto px-4 py-24 text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-zinc-900 border border-zinc-700 mb-8">
          <svg className="w-10 h-10 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
        <p className="text-red-500 text-xs font-bold uppercase tracking-widest mb-4">{d.failed.label}</p>
        <h1 className="text-white font-black text-3xl uppercase mb-4">
          {d.failed.title1} <span className="text-red-600">{d.failed.title2}</span>
        </h1>
        <p className="text-zinc-400 text-sm leading-relaxed mb-8 max-w-md mx-auto">
          {d.failed.body}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={`mailto:${contactEmail}?subject=${encodeURIComponent(`${d.failed.supportSubjectPrefix} ${program.title}`)}`}
            className="btn-primary"
          >
            {d.failed.contactSupport}
          </a>
          <Link href={program.href} className="btn-secondary">
            {d.failed.tryAgain}
          </Link>
        </div>
      </div>
    </div>
  );
}
