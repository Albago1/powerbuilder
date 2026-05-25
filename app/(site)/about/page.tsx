import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Artur | PowerBuilder",
  description:
    "Meet Artur — the strength athlete and coach behind PowerBuilder. Disciplined, evidence-based, results-focused.",
};

const philosophy = [
  {
    num: "01",
    title: "No Bullshit",
    description:
      "No magic rep ranges. No 30-day transformation promises. No content designed to go viral at the expense of truth. Just what actually works.",
  },
  {
    num: "02",
    title: "Evidence-Based",
    description:
      "Progressive overload, periodization, specificity, and adequate recovery — these aren't trends. They're the mechanisms of adaptation. Every program reflects this.",
  },
  {
    num: "03",
    title: "Built for Natural Lifters",
    description:
      "Everything Artur builds assumes you're training without pharmacological assistance. Real timelines, realistic expectations, sustainable results.",
  },
  {
    num: "04",
    title: "Results First",
    description:
      "A program is only as good as the results it produces. The benchmark isn't complexity or clever marketing — it's whether the person gets stronger and builds muscle.",
  },
];

const stats = [
  { value: "7+", label: "Years training" },
  { value: "12+", label: "Programs written & tested" },
  { value: "4", label: "Programs available" },
  { value: "48h", label: "Personalized program delivery" },
];

export default function AboutPage() {
  return (
    <div className="bg-brand-bg pt-16">
      {/* Hero */}
      <section className="relative py-24 md:py-32 border-b border-brand-border overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[400px] bg-red-600/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-label mb-5">Behind the Programs</p>
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight leading-none mb-6">
                I&apos;m Artur.
                <br />
                <span className="text-red-600">I Build Strength.</span>
              </h1>
              <div className="flex flex-col gap-5 text-zinc-400 text-base leading-relaxed">
                <p>
                  I&apos;ve spent years under the bar — competing in powerlifting,
                  studying hypertrophy, and obsessing over what actually moves
                  the needle for natural athletes.
                </p>
                <p>
                  I got tired of vague fitness content. Every week there&apos;s a new
                  &quot;optimal&quot; training style, a new supplement that changes
                  everything, a new influencer claiming their program is the only
                  one that works. None of it is what serious lifters need.
                </p>
                <p>
                  What you need is a system. Structure, progressive overload, and
                  a clear direction. That&apos;s what every PowerBuilder program
                  delivers — whether it&apos;s a ready-made PDF or a system built
                  specifically for you.
                </p>
              </div>
            </div>

            {/* Stats card */}
            <div className="bg-brand-card border border-brand-border p-8 md:p-10">
              <div className="h-0.5 bg-red-600 -mt-8 -mx-8 md:-mt-10 md:-mx-10 mb-8" />
              <div className="grid grid-cols-2 gap-px bg-brand-border">
                {stats.map((stat, i) => (
                  <div key={i} className="bg-brand-card p-6 text-center">
                    <p className="text-red-600 font-black text-4xl mb-1">{stat.value}</p>
                    <p className="text-zinc-500 text-xs uppercase tracking-widest">{stat.label}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-col gap-3">
                {[
                  "Powerlifting + bodybuilding background",
                  "Progressive overload philosophy",
                  "Natural lifting focused",
                  "Evidence-based programming",
                  "Every program personally written",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <svg className="w-4 h-4 text-red-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-zinc-400 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-brand-surface border-b border-brand-border py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="section-label mb-4">Philosophy</p>
            <h2 className="section-heading">
              What I
              <br />
              <span className="text-red-600">Believe In.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-brand-border">
            {philosophy.map((p, i) => (
              <div key={i} className="bg-brand-surface p-8 md:p-10">
                <span className="text-red-600 font-black text-5xl leading-none block mb-4 opacity-30">
                  {p.num}
                </span>
                <h3 className="text-white font-black text-2xl uppercase tracking-tight mb-3">
                  {p.title}
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-24 md:py-32 border-b border-brand-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <svg className="w-8 h-8 text-red-600 mx-auto mb-8 opacity-60" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <blockquote className="text-white font-black text-3xl md:text-4xl uppercase tracking-tight leading-tight mb-8">
            The gym is brutally honest. You either did the work or you didn&apos;t. No amount of motivation replaces structure.
          </blockquote>
          <p className="text-zinc-600 text-sm font-bold uppercase tracking-widest">— Artur</p>
        </div>
      </section>

      {/* Programs overview */}
      <section className="bg-brand-surface border-b border-brand-border py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="section-label mb-4">The Work</p>
            <h2 className="section-heading">
              What Artur
              <br />
              <span className="text-red-600">Builds.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {[
              { title: "Personalized Training & Nutrition System", sub: "4 weeks · Custom · €99 (was €141, Launch -30%)", href: "/personalized" },
              { title: "6 Week Bench Press Program", sub: "PDF · 4x/week · €49 (was €70, Launch -30%)", href: "/programs/bench-press" },
            ].map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className="flex items-center justify-between p-5 border border-brand-border hover:border-zinc-600 hover:bg-brand-card transition-all group"
              >
                <div>
                  <p className="text-white font-bold text-sm group-hover:text-white">{item.title}</p>
                  <p className="text-zinc-600 text-xs mt-0.5">{item.sub}</p>
                </div>
                <svg className="w-4 h-4 text-zinc-600 group-hover:text-red-600 transition-colors shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="section-heading mb-6">
            Ready to Work?
          </h2>
          <p className="text-zinc-400 text-lg mb-10">
            Get a program. Follow it exactly. See what structured work does.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/personalized" className="btn-primary">
              Build My Program — €99 (Launch -30%)
            </Link>
            <Link href="/programs" className="btn-secondary">
              Browse Programs
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
