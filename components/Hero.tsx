import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-bg">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Red glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[400px] bg-red-600/8 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 text-center">
        {/* Label */}
        <div className="inline-flex items-center gap-2 mb-8">
          <span className="w-8 h-px bg-red-600" />
          <span className="section-label">Premium Fitness Systems</span>
          <span className="w-8 h-px bg-red-600" />
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight leading-none mb-6">
          <span className="block text-white">Build Strength.</span>
          <span className="block text-red-600">Build Muscle.</span>
          <span className="block text-white">Build Discipline.</span>
        </h1>

        {/* Sub */}
        <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mt-8 mb-10 leading-relaxed">
          Premium strength and hypertrophy systems built for serious lifters.
          Personalized coaching or instant-download programs — your choice.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/personalized" className="btn-primary text-sm w-full sm:w-auto">
            Build My Program
          </Link>
          <Link href="/programs" className="btn-secondary text-sm w-full sm:w-auto">
            Explore Programs
          </Link>
        </div>

        {/* Trust signals */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12">
          {[
            "Personalized coaching — €99",
            "Static programs from €39",
            "Instant PDF delivery",
          ].map((signal) => (
            <div key={signal} className="flex items-center gap-2 text-zinc-500 text-sm">
              <svg className="w-4 h-4 text-red-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              {signal}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brand-bg to-transparent pointer-events-none" />
    </section>
  );
}
