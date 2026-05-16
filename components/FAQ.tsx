"use client";

import { useState } from "react";

const faqs = [
  {
    question: "How does the personalized program work?",
    answer:
      "You fill out a detailed questionnaire covering your age, training history, goals, injuries, nutrition preferences, and more. Artur personally reviews every submission and builds a custom training and nutrition system tailored specifically to you. No templates — every program is written from scratch.",
  },
  {
    question: "How long until I receive my personalized program?",
    answer:
      "After payment and questionnaire submission, your personalized program is delivered within 48 hours. You'll receive it directly via email as a PDF document.",
  },
  {
    question: "Are the static programs instant download?",
    answer:
      "Yes. The 6-Week Bench Press, 6-Week Strict Curl, and 6-Week Cheat Curl programs are all instant digital downloads. After payment is confirmed, the PDF is delivered to your email immediately.",
  },
  {
    question: "Is nutrition included in the programs?",
    answer:
      "The personalized program includes a full custom nutrition plan with calorie targets, macros, and meal timing guidance. The static programs include a nutrition framework (protein targets, calorie ranges, timing principles) — not a custom meal plan, but all the key principles you need.",
  },
  {
    question: "Is this beginner friendly?",
    answer:
      "The static programs are best suited for lifters with at least 6 months of consistent training experience who know the main compound lifts. Complete beginners should build a movement foundation first. The personalized program is adjusted to your exact experience level — including if you're earlier in your journey.",
  },
  {
    question: "What equipment do I need?",
    answer:
      "The PowerBuilder and Bench Press programs require a full gym with barbells, squat rack, bench, and cables. The Curl programs can be run with barbells and dumbbells. The personalized program is designed around whatever equipment you have access to — you specify this in the questionnaire.",
  },
  {
    question: "Can I run a static program more than once?",
    answer:
      "Yes. All static programs are yours permanently. You can run them multiple times, resetting at a slightly higher baseline each time. Progressive overload carries forward — you will keep improving.",
  },
  {
    question: "What's the difference between the Strict Curl and Cheat Curl programs?",
    answer:
      "The Strict Curl program builds strength and peak through controlled, full-ROM curling with no body swing. The Cheat Curl program uses supramaximal loads and eccentric overload to add raw arm thickness — you use momentum to lift more than you could strictly, then control the descent. Both are effective, but they solve different problems.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-brand-surface border-t border-brand-border py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="section-label mb-4">FAQ</p>
          <h2 className="section-heading">
            Frequently Asked
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
