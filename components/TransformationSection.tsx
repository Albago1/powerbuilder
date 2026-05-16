const phases = [
  {
    week: "Week 1–2",
    label: "Foundation",
    color: "border-zinc-600",
    accent: "text-zinc-400",
    description:
      "Establish movement patterns, baseline strength, and get locked into the program. Learn the rhythm. Build the habit.",
  },
  {
    week: "Week 3–4",
    label: "Build",
    color: "border-zinc-400",
    accent: "text-zinc-300",
    description:
      "Intensity increases. Volume peaks. Your body starts adapting — strength numbers move, muscle fullness increases.",
  },
  {
    week: "Week 5–6",
    label: "Push",
    color: "border-red-700",
    accent: "text-red-500",
    description:
      "The hard weeks. Progressive overload kicks into high gear. This is where most programs fail — ours doesn't.",
  },
  {
    week: "Week 7–8",
    label: "Peak",
    color: "border-red-600",
    accent: "text-red-400",
    description:
      "Maximum performance. PRs on the big lifts. Your physique reflects 8 weeks of deliberate, accumulated work.",
  },
];

const stats = [
  { value: "4x", label: "Training days per week" },
  { value: "8", label: "Weeks of structured programming" },
  { value: "3–5", label: "Rep range for strength work" },
  { value: "8–15", label: "Rep range for hypertrophy work" },
];

export default function TransformationSection() {
  return (
    <section className="bg-brand-bg py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-brand-border mb-24">
          {stats.map((stat, i) => (
            <div key={i} className="bg-brand-bg px-8 py-10 text-center">
              <p className="text-red-600 font-black text-5xl tracking-tight mb-2">
                {stat.value}
              </p>
              <p className="text-zinc-500 text-sm uppercase tracking-widest">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Phases */}
        <div className="text-center mb-16">
          <p className="section-label mb-4">Program Structure</p>
          <h2 className="section-heading">
            8 Weeks.{" "}
            <span className="text-red-600">4 Phases.</span>
            <br />
            One Direction.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {phases.map((phase, i) => (
            <div
              key={i}
              className={`bg-brand-card border-t-2 ${phase.color} p-6 flex flex-col gap-3`}
            >
              <span className="text-xs text-zinc-600 font-bold uppercase tracking-widest">
                {phase.week}
              </span>
              <h3 className={`font-black text-2xl uppercase tracking-tight ${phase.accent}`}>
                {phase.label}
              </h3>
              <p className="text-zinc-500 text-sm leading-relaxed">
                {phase.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
