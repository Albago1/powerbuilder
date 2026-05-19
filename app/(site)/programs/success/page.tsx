import type { Metadata } from "next";
import Link from "next/link";
import PersonalizedSuccess from "@/components/PersonalizedSuccess";

export const metadata: Metadata = {
  title: "Purchase Complete | PowerBuilder",
  description: "Your purchase was successful. Your program will be delivered to your email shortly.",
};

export default async function ProgramSuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ product?: string; token?: string }>;
}) {
  // PayPal returns: ?token={orderID}&PayerID={payerID}
  const { product, token } = await searchParams;

  return (
    <div className="bg-brand-bg min-h-screen pt-16">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        {product === "personalized" ? (
          <PersonalizedSuccess orderID={token} />
        ) : (
          <StaticProgramSuccess />
        )}
      </div>
    </div>
  );
}

function StaticProgramSuccess() {
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

        <p className="section-label mb-4">Purchase Confirmed</p>
        <h1 className="section-heading mb-6">
          Payment
          <br />
          <span className="text-red-600">Successful.</span>
        </h1>
        <p className="text-zinc-400 text-lg leading-relaxed">
          Your purchase has been confirmed. Your program PDF will be delivered
          to your PayPal email address within a few hours.
        </p>
      </div>

      {/* What happens next */}
      <div className="bg-brand-card border border-brand-border p-8 mb-10">
        <div className="h-0.5 bg-red-600 -mt-8 -mx-8 mb-6" />
        <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-5">
          What Happens Now
        </p>
        <div className="flex flex-col gap-5">
          {[
            {
              num: "01",
              title: "PayPal Receipt",
              description:
                "Check your email for a PayPal payment confirmation. This is your purchase receipt.",
            },
            {
              num: "02",
              title: "PDF Delivery",
              description:
                "Your program PDF will be sent to your PayPal email address within a few hours.",
            },
            {
              num: "03",
              title: "Start Training",
              description:
                "Open your PDF, read the introduction, and start on Day 1. The progressive overload is built in — just follow the plan.",
            },
          ].map((step, i) => (
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
        <p className="text-zinc-500 text-sm mb-2">
          Haven&apos;t received your PDF within 24 hours?
        </p>
        <a
          href={`mailto:${contactEmail}?subject=${encodeURIComponent("PDF Not Received")}`}
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
    </>
  );
}
