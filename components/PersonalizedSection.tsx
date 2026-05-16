import Link from "next/link";

const deliverables = [
  "Custom 4-week training plan (strength + hypertrophy)",
  "Personalized nutrition plan with exact macro targets",
  "Bulk or cut protocol based on your goal",
  "Recovery and sleep optimization guidance",
  "Exercise selection based on your weak points",
  "Detailed progression plan for weeks 1–4",
  "PDF delivery within 48 hours",
  "Built specifically for you — not a template",
];

const steps = [
  {
    number: "01",
    title: "Fill the Questionnaire",
    description:
      "Answer 16 detailed questions about your training history, goals, body, nutrition, and lifestyle.",
  },
  {
    number: "02",
    title: "Complete Payment",
    description:
      "Secure payment via PayPal. €99 one-time. Your answers are sent to Artur immediately.",
  },
  {
    number: "03",
    title: "Receive Your Program",
    description:
      "Artur personally reviews your profile and builds your custom system. Delivered as a PDF within 48 hours.",
  },
];

export default function PersonalizedSection() {
  return (
    <section className="bg-brand-surface border-y border-brand-border py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-label mb-4">Flagship Offer</p>
          <h2 className="section-heading">
            Personalized Training
            <br />
            <span className="text-red-600">&amp; Nutrition System.</span>
          </h2>
          <p className="text-zinc-400 text-lg mt-6 max-w-2xl mx-auto">
            Not a template. Not a cookie-cutter plan. A system built around
            you — your body, your goals, your schedule.
          </p>
        </div>

        {/* Main card */}
        <div className="max-w-5xl mx-auto">
          <div className="border border-red-600/30 bg-brand-card overflow-hidden">
            {/* Top accent */}
            <div className="h-1 bg-gradient-to-r from-red-700 via-red-600 to-red-700" />

            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Left: what you get */}
              <div className="p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-brand-border">
                <p className="text-red-600 text-xs font-bold uppercase tracking-widest mb-4">
                  What You Get
                </p>
                <h3 className="text-white font-black text-2xl uppercase tracking-tight leading-tight mb-6">
                  Your Complete Training &amp; Nutrition System
                </h3>

                <div className="flex flex-col gap-3 mb-8">
                  {deliverables.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <svg
                        className="w-4 h-4 text-red-600 shrink-0 mt-0.5"
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

              {/* Right: how it works + CTA */}
              <div className="p-8 md:p-12 flex flex-col justify-between">
                <div>
                  <p className="text-red-600 text-xs font-bold uppercase tracking-widest mb-4">
                    How It Works
                  </p>
                  <div className="flex flex-col gap-6 mb-10">
                    {steps.map((step, i) => (
                      <div key={i} className="flex gap-4">
                        <span className="text-red-600 font-black text-2xl leading-none shrink-0 mt-0.5">
                          {step.number}
                        </span>
                        <div>
                          <h4 className="text-white font-bold mb-1">{step.title}</h4>
                          <p className="text-zinc-500 text-sm leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-white font-black text-5xl">€99</span>
                  </div>
                  <p className="text-zinc-600 text-sm mb-6">
                    One-time · 4-week personalized system · 48h delivery
                  </p>
                  <Link href="/personalized" className="btn-primary w-full justify-center">
                    Start Questionnaire
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
