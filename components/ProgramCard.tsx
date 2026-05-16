import Link from "next/link";

interface ProgramCardProps {
  title: string;
  tagline: string;
  description: string;
  duration: string;
  sessionsPerWeek: string;
  price: number;
  features: string[];
  href: string;
  badge?: string;
  accentLabel: string;
}

export default function ProgramCard({
  title,
  tagline,
  description,
  duration,
  sessionsPerWeek,
  price,
  features,
  href,
  badge,
  accentLabel,
}: ProgramCardProps) {
  return (
    <div className="relative bg-brand-card border border-brand-border flex flex-col group hover:border-zinc-600 transition-colors duration-200">
      {/* Top accent bar */}
      <div className="h-0.5 bg-red-600" />

      <div className="p-6 md:p-8 flex flex-col flex-1 gap-5">
        {/* Labels row */}
        <div className="flex items-center justify-between gap-2">
          <span className="text-red-600 text-xs font-bold uppercase tracking-widest">
            {accentLabel}
          </span>
          {badge && (
            <span className="bg-red-600 text-white text-[10px] font-black px-2 py-0.5 uppercase tracking-wider">
              {badge}
            </span>
          )}
        </div>

        {/* Title + tagline */}
        <div>
          <h3 className="text-white font-black text-xl uppercase tracking-tight leading-tight mb-1">
            {title}
          </h3>
          <p className="text-zinc-500 text-xs font-semibold uppercase tracking-widest">
            {tagline}
          </p>
        </div>

        {/* Description */}
        <p className="text-zinc-400 text-sm leading-relaxed">{description}</p>

        {/* Meta */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5 text-zinc-500 text-xs">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {duration}
          </div>
          <div className="flex items-center gap-1.5 text-zinc-500 text-xs">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {sessionsPerWeek}
          </div>
        </div>

        {/* Features */}
        <div className="flex flex-col gap-2 flex-1">
          {features.slice(0, 5).map((f, i) => (
            <div key={i} className="flex items-center gap-2">
              <svg className="w-3.5 h-3.5 text-red-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-zinc-400 text-xs">{f}</span>
            </div>
          ))}
        </div>

        {/* Price + CTA */}
        <div className="border-t border-brand-border pt-5 mt-2 flex items-center justify-between gap-4">
          <span className="text-white font-black text-3xl">€{price}</span>
          <Link
            href={href}
            className="btn-primary text-xs px-5 py-3"
          >
            View Program
          </Link>
        </div>
      </div>
    </div>
  );
}
