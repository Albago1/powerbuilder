const benefits = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "Progressive Overload",
    description:
      "Every week builds on the last. Structured load increases guarantee continuous strength and muscle gains over the full 8 weeks.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
    title: "Full 8-Week Structure",
    description:
      "4 training days per week. Every session planned — sets, reps, rest periods, and exercise order. Zero guesswork.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Strength & Hypertrophy",
    description:
      "Dual focus: build maximal strength on the big lifts while adding muscle mass through targeted hypertrophy work.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    ),
    title: "Nutrition Basics Included",
    description:
      "A practical nutrition framework — protein targets, meal timing, and calorie guidance based on your goal (bulk or maintain).",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: "Instant PDF Delivery",
    description:
      "Purchase once, download immediately. The full program PDF lands in your inbox the moment payment is confirmed.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Lifetime Access",
    description:
      "One payment, yours forever. Run the program as many times as you want — reset, repeat, progress further.",
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="bg-brand-bg py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-label mb-4">Why PowerBuilder</p>
          <h2 className="section-heading">
            Everything You Need.
            <br />
            <span className="text-red-600">Nothing You Don&apos;t.</span>
          </h2>
          <p className="text-zinc-400 text-lg mt-6 max-w-2xl mx-auto">
            No fluff. No 30-day challenges. Just a serious, structured program
            designed to move the needle on strength and size.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-brand-border">
          {benefits.map((benefit, i) => (
            <div
              key={i}
              className="bg-brand-bg p-8 flex flex-col gap-4 group hover:bg-brand-card transition-colors duration-200"
            >
              <div className="text-red-600">{benefit.icon}</div>
              <h3 className="text-white font-bold text-lg tracking-tight">
                {benefit.title}
              </h3>
              <p className="text-zinc-500 text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
