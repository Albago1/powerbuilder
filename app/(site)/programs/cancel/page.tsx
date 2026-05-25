import type { Metadata } from "next";
import Link from "next/link";
import { getLocale } from "@/lib/locale";
import { getT } from "@/lib/translations";

export async function generateMetadata(): Promise<Metadata> {
  const m = getT(await getLocale()).programsCancel.meta;
  return { title: m.title, description: m.description };
}

export default async function ProgramCancelPage() {
  const c = getT(await getLocale()).programsCancel;

  return (
    <div className="bg-brand-bg min-h-screen pt-16">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-center">
        {/* Icon */}
        <div className="inline-flex items-center justify-center w-20 h-20 bg-brand-card border border-brand-border mb-8">
          <svg className="w-10 h-10 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>

        <p className="section-label mb-4">{c.label}</p>
        <h1 className="section-heading mb-6">
          {c.title1}
          <br />
          <span className="text-red-600">{c.title2}</span>
        </h1>
        <p className="text-zinc-400 text-lg leading-relaxed mb-12 max-w-md mx-auto">
          {c.body}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/programs" className="btn-primary">
            {c.viewPrograms}
          </Link>
          <Link href="/" className="btn-secondary">
            {c.backHome}
          </Link>
        </div>

        <p className="text-zinc-600 text-sm mt-10">
          {c.questions}{" "}
          <a
            href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "contact@powerbuilder.com"}`}
            className="text-red-500 hover:text-red-400 transition-colors"
          >
            {process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "contact@powerbuilder.com"}
          </a>
        </p>
      </div>
    </div>
  );
}
