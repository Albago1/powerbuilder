import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { captureOrder } from "@/lib/paypal";
import { createDownloadToken } from "@/lib/downloadToken";
import { getProgramById } from "@/lib/programs";
import DownloadPanel from "@/components/DownloadPanel";

export const metadata: Metadata = {
  title: "Download Your Program | PowerBuilder",
  description: "Select your language and download your program PDF.",
};

const ALLOWED_SLUGS = ["bench-press", "strict-curl", "cheat-curl"];

interface Props {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ token?: string }>;
}

export default async function DownloadPage({ params, searchParams }: Props) {
  const { slug } = await params;
  // PayPal appends ?token={orderID}&PayerID={payerID} to the return URL
  const { token: orderID } = await searchParams;

  if (!ALLOWED_SLUGS.includes(slug)) notFound();

  const program = getProgramById(slug);
  if (!program) notFound();

  const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "contact@powerbuilder.com";

  // No orderID means user landed here directly without paying
  if (!orderID) {
    return (
      <div className="bg-brand-bg min-h-screen pt-16">
        <div className="max-w-2xl mx-auto px-4 py-24 text-center">
          <p className="text-red-500 text-xs font-bold uppercase tracking-widest mb-4">Access Denied</p>
          <h1 className="text-white font-black text-3xl uppercase mb-4">No Payment Found</h1>
          <p className="text-zinc-400 text-sm mb-8">
            This download page is only accessible after completing a purchase.
          </p>
          <Link href={program.href} className="btn-primary">
            Buy {program.shortTitle} →
          </Link>
        </div>
      </div>
    );
  }

  // Capture and verify the PayPal order server-side
  let downloadToken: string;
  try {
    const result = await captureOrder(orderID);

    if (result.status === "ALREADY_CAPTURED") {
      // Re-issue token — legitimate re-access (e.g. page refresh)
      downloadToken = createDownloadToken(slug, orderID);
    } else if (result.status !== "COMPLETED") {
      return <PaymentFailed slug={slug} program={program} contactEmail={contactEmail} />;
    } else {
      const expectedAmount = program.price.toFixed(2);
      if (result.amount !== expectedAmount || result.currency !== "EUR") {
        console.error(
          `[download page] Amount mismatch — got ${result.amount} ${result.currency}, expected ${expectedAmount} EUR, order: ${orderID}`
        );
        return <PaymentFailed slug={slug} program={program} contactEmail={contactEmail} />;
      }

      if (result.referenceId && result.referenceId !== slug) {
        console.error(
          `[download page] Slug mismatch — order referenceId: ${result.referenceId}, page slug: ${slug}`
        );
        return <PaymentFailed slug={slug} program={program} contactEmail={contactEmail} />;
      }

      downloadToken = createDownloadToken(slug, orderID);
    }
  } catch (err) {
    console.error("[download page] captureOrder failed:", err);
    return <PaymentFailed slug={slug} program={program} contactEmail={contactEmail} />;
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
          <p className="section-label mb-4">Purchase Confirmed</p>
          <h1 className="section-heading mb-4">
            Payment <span className="text-red-600">Successful.</span>
          </h1>
          <p className="text-zinc-400 text-lg">
            {program.title} is ready. Select your language below and download.
          </p>
        </div>

        {/* Download card */}
        <div className="bg-brand-card border border-brand-border p-8 mb-10">
          <div className="h-0.5 bg-red-600 -mt-8 -mx-8 mb-6" />
          <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-6">
            Download Your Program
          </p>
          <DownloadPanel downloadToken={downloadToken} programTitle={program.shortTitle} />
        </div>

        {/* Support */}
        <div className="text-center border-t border-brand-border pt-10">
          <p className="text-zinc-500 text-sm mb-2">Issues with your download?</p>
          <a
            href={`mailto:${contactEmail}?subject=${encodeURIComponent(`Download Issue — ${program.title}`)}&body=${encodeURIComponent(`Order ID: ${orderID}`)}`}
            className="text-red-500 hover:text-red-400 text-sm font-medium transition-colors"
          >
            {contactEmail}
          </a>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <Link href="/programs" className="btn-secondary text-xs">
              Browse More Programs
            </Link>
            <Link href="/" className="text-zinc-600 text-sm hover:text-zinc-400 transition-colors">
              Back to Home
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}

function PaymentFailed({
  slug,
  program,
  contactEmail,
}: {
  slug: string;
  program: { title: string; href: string; shortTitle: string };
  contactEmail: string;
}) {
  return (
    <div className="bg-brand-bg min-h-screen pt-16">
      <div className="max-w-2xl mx-auto px-4 py-24 text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-zinc-900 border border-zinc-700 mb-8">
          <svg className="w-10 h-10 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
        <p className="text-red-500 text-xs font-bold uppercase tracking-widest mb-4">Payment Issue</p>
        <h1 className="text-white font-black text-3xl uppercase mb-4">
          Payment Not <span className="text-red-600">Verified</span>
        </h1>
        <p className="text-zinc-400 text-sm leading-relaxed mb-8 max-w-md mx-auto">
          We could not verify your payment. If you were charged, please contact support with your PayPal receipt.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={`mailto:${contactEmail}?subject=${encodeURIComponent(`Payment Issue — ${program.title}`)}`}
            className="btn-primary"
          >
            Contact Support
          </a>
          <Link href={program.href} className="btn-secondary">
            Try Again
          </Link>
        </div>
      </div>
    </div>
  );
}
