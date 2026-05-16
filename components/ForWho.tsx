const targetAudience = [
  {
    emoji: "💪",
    title: "The Serious Beginner",
    description:
      "You've been training for 6–18 months, you've seen some results, but you know you need a real system to keep progressing.",
  },
  {
    emoji: "🏋️",
    title: "The Intermediate Lifter",
    description:
      "You've hit a plateau. You're going to the gym but not seeing the gains anymore. You need structured programming to break through.",
  },
  {
    emoji: "📈",
    title: "The Goal-Oriented Athlete",
    description:
      "You want to compete, hit a strength goal, or make a significant body composition change in a defined timeframe.",
  },
  {
    emoji: "⚡",
    title: "The Efficient Trainer",
    description:
      "You have limited time and want to maximize every session. 4 days per week, high-quality work, no wasted effort.",
  },
];

const notForYou = [
  "Looking for a quick-fix or 7-day detox",
  "Not willing to train at least 4 days per week",
  "Expecting results without consistent effort",
  "Looking for cardio-only programming",
];

export default function ForWho() {
  return (
    <section className="bg-brand-surface py-24 md:py-32 border-y border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Who it's for */}
          <div>
            <p className="section-label mb-4">Who This Is For</p>
            <h2 className="section-heading mb-10">
              Built for Athletes
              <br />
              <span className="text-red-600">Who Mean It.</span>
            </h2>
            <div className="flex flex-col gap-6">
              {targetAudience.map((item, i) => (
                <div
                  key={i}
                  className="flex gap-4 p-5 border border-brand-border hover:border-red-600/30 transition-colors"
                >
                  <span className="text-2xl mt-0.5 shrink-0">{item.emoji}</span>
                  <div>
                    <h3 className="text-white font-bold mb-1">{item.title}</h3>
                    <p className="text-zinc-500 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Not for you */}
          <div className="lg:mt-16">
            <div className="bg-brand-card border border-brand-border p-8 md:p-10">
              <h3 className="text-white font-black text-2xl uppercase tracking-tight mb-6">
                This Is{" "}
                <span className="text-red-600">Not For You</span> If...
              </h3>
              <div className="flex flex-col gap-4">
                {notForYou.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full border border-zinc-700 flex items-center justify-center shrink-0 mt-0.5">
                      <svg
                        className="w-3 h-3 text-zinc-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <span className="text-zinc-500 text-sm">{item}</span>
                  </div>
                ))}
              </div>

              {/* Separator */}
              <div className="border-t border-brand-border my-8" />

              <p className="text-zinc-400 text-sm leading-relaxed">
                If you&apos;re here and reading this, you&apos;re probably already the right
                person. The only question is whether you&apos;re ready to commit to 8
                weeks of real work.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
