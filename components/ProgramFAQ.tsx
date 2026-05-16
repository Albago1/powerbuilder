"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

export default function ProgramFAQ({ faqs }: { faqs: FAQItem[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-brand-surface border-b border-brand-border py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="section-label mb-4">FAQ</p>
          <h2 className="section-heading">
            Common
            <br />
            <span className="text-red-600">Questions.</span>
          </h2>
        </div>

        <div className="flex flex-col divide-y divide-brand-border border border-brand-border">
          {faqs.map((faq, i) => (
            <div key={i}>
              <button
                className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 hover:bg-brand-card transition-colors"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span className="text-white font-semibold text-sm md:text-base pr-4">
                  {faq.question}
                </span>
                <span
                  className={`text-red-600 shrink-0 transition-transform duration-200 ${open === i ? "rotate-45" : ""}`}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </span>
              </button>
              {open === i && (
                <div className="px-6 pb-5">
                  <p className="text-zinc-400 text-sm leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
