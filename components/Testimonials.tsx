const testimonials = [
  {
    initials: "MK",
    name: "Markus K.",
    location: "Berlin, DE",
    rating: 5,
    text: "I&apos;ve tried a dozen programs over the years. PowerBuilder is the first one where I actually saw my squat and deadlift go up every single week. The structure is exactly what I was missing. Went from 120kg to 142.5kg squat in 8 weeks.",
    result: "+22.5kg squat",
  },
  {
    initials: "JR",
    name: "Julian R.",
    location: "Vienna, AT",
    rating: 5,
    text: "I was skeptical about a €39 PDF, but this is genuinely more useful than programs I&apos;ve paid 5x more for. The nutrition section alone helped me understand how to eat for strength gains. Gained 4kg of lean mass in the 8 weeks.",
    result: "+4kg lean mass",
  },
  {
    initials: "TW",
    name: "Tobias W.",
    location: "Zurich, CH",
    rating: 5,
    text: "Clean layout, no filler, everything makes sense. The progressive overload is built in so you never wonder what to do next. Benched 100kg for the first time in my life at week 7. Program does what it says.",
    result: "First 100kg bench",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-brand-bg py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="section-label mb-4">Results</p>
          <h2 className="section-heading">
            Real People.
            <br />
            <span className="text-red-600">Real Gains.</span>
          </h2>
          <p className="text-zinc-500 text-sm mt-4">
            * Results are individual and depend on consistency, effort, and diet.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-brand-card border border-brand-border p-8 flex flex-col gap-6">
              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <svg
                    key={j}
                    className="w-4 h-4 text-red-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-zinc-400 text-sm leading-relaxed flex-1">
                &quot;{t.text}&quot;
              </p>

              {/* Result badge */}
              <div className="inline-flex">
                <span className="bg-red-600/10 border border-red-600/20 text-red-500 text-xs font-bold px-3 py-1 uppercase tracking-wider">
                  {t.result}
                </span>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 border-t border-brand-border pt-5">
                <div className="w-9 h-9 rounded-full bg-brand-border flex items-center justify-center text-xs font-bold text-zinc-400">
                  {t.initials}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-zinc-600 text-xs">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
