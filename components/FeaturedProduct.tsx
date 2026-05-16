import Link from "next/link";

const includes = [
  "8-week full training program (PDF)",
  "4 training days per week",
  "Strength & hypertrophy focused sessions",
  "Progressive overload built in",
  "Nutrition framework & protein targets",
  "Exercise substitution guide",
  "Warm-up protocols",
  "Lifetime access — yours forever",
];

export default function FeaturedProduct() {
  return (
    <section className="bg-brand-surface border-y border-brand-border py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="section-label mb-4">The Program</p>
          <h2 className="section-heading">
            One Program.
            <br />
            <span className="text-red-600">Everything Included.</span>
          </h2>
        </div>

        {/* Product card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-brand-card border border-brand-border overflow-hidden">
            {/* Top accent bar */}
            <div className="h-1 bg-red-600" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              {/* Left: product info */}
              <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-brand-border">
                <p className="text-red-600 text-xs font-bold uppercase tracking-widest mb-3">
                  Digital Program — PDF
                </p>
                <h3 className="text-white font-black text-3xl uppercase tracking-tight leading-tight mb-4">
                  8 Week PowerBuilder Program
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-8">
                  A complete, structured 8-week training program for strength
                  and muscle building. Built on progressive overload. Designed
                  for real results.
                </p>

                <div className="flex flex-col gap-3 mb-10">
                  {includes.map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <svg
                        className="w-4 h-4 text-red-600 shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-zinc-300 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: purchase */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="mb-8">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-white font-black text-6xl">€39</span>
                  </div>
                  <p className="text-zinc-600 text-sm">
                    One-time payment — no subscription
                  </p>
                </div>

                <Link href="/program" className="btn-primary w-full mb-4 justify-center">
                  Get the Program Now
                </Link>

                <p className="text-zinc-600 text-xs text-center">
                  Instant PDF delivery after payment
                </p>

                {/* Divider */}
                <div className="border-t border-brand-border my-8" />

                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3 text-zinc-500 text-sm">
                    <svg className="w-4 h-4 text-zinc-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    Secure checkout via Stripe
                  </div>
                  <div className="flex items-center gap-3 text-zinc-500 text-sm">
                    <svg className="w-4 h-4 text-zinc-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    PDF delivered to your email
                  </div>
                  <div className="flex items-center gap-3 text-zinc-500 text-sm">
                    <svg className="w-4 h-4 text-zinc-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    Lifetime access — run it multiple times
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
