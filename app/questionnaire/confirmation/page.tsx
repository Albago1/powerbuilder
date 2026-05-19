import type { Metadata } from "next";
import Link from "next/link";
import PayPalConfirmButton from "@/components/PayPalConfirmButton";

export const metadata: Metadata = {
  title: "Complete Payment | PowerBuilder",
  description: "Your questionnaire is saved. Complete your payment to activate your personalized program.",
};

const nextSteps = [
  {
    number: "01",
    title: "Complete Payment",
    description:
      "Click the PayPal button below to complete your €99 payment securely.",
  },
  {
    number: "02",
    title: "Submit Your Profile",
    description:
      "After payment you will be prompted to submit your questionnaire to Artur with one click.",
  },
  {
    number: "03",
    title: "Program Delivered",
    description:
      "Artur personally builds your custom training and nutrition system and delivers the PDF within 48 hours.",
  },
];

export default async function ConfirmationPage({
  searchParams,
}: {
  searchParams: Promise<{ email?: string }>;
}) {
  const { email } = await searchParams;

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

          <p className="section-label mb-4">Questionnaire Saved</p>
          <h1 className="section-heading mb-6">
            One Step Left.
            <br />
            <span className="text-red-600">Complete Payment.</span>
          </h1>
          <p className="text-zinc-400 text-lg leading-relaxed max-w-xl mx-auto">
            Your questionnaire is saved securely in your browser. Complete the
            €99 payment below to activate your order — Artur will receive your
            full profile and begin building your program after payment is
            confirmed.
          </p>
          {email && (
            <p className="text-zinc-500 text-sm mt-3">
              Program will be delivered to{" "}
              <span className="text-white font-medium">{email}</span>
            </p>
          )}
        </div>

        {/* Payment card */}
        <div className="bg-brand-card border border-red-600/20 p-8 mb-12 text-center">
          <div className="h-0.5 bg-red-600 -mt-8 -mx-8 mb-6" />
          <p className="text-red-600 text-xs font-bold uppercase tracking-widest mb-3">
            Action Required
          </p>
          <h2 className="text-white font-black text-2xl uppercase tracking-tight mb-4">
            Complete Your Payment
          </h2>
          <p className="text-zinc-400 text-sm leading-relaxed mb-6">
            After payment PayPal will return you to a confirmation page where
            you can submit your questionnaire to Artur with a single click.
          </p>
          {/* ===== PAYPAL INTEGRATION =====
              PayPal return URL must be set to:
              {NEXT_PUBLIC_BASE_URL}/programs/success?product=personalized
              Configure this in your PayPal payment link settings.
          */}
          <PayPalConfirmButton />
        </div>

        {/* What happens next */}
        <div className="mb-12">
          <p className="section-label mb-8 text-center">What Happens Next</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {nextSteps.map((step, i) => (
              <div key={i} className="bg-brand-card border border-brand-border p-6">
                <span className="text-red-600 font-black text-3xl leading-none block mb-3 opacity-50">
                  {step.number}
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
          <p className="text-zinc-500 text-sm mb-2">Questions about your order?</p>
          <a
            href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "contact@powerbuilder.com"}`}
            className="text-red-500 hover:text-red-400 text-sm font-medium transition-colors"
          >
            {process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "contact@powerbuilder.com"}
          </a>
          <div className="mt-8">
            <Link href="/" className="btn-secondary text-xs">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
