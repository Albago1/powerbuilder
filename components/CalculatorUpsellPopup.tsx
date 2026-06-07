"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";

const STORAGE_KEY = "pb_calc_upsell_dismissed";
const DELAY_MS = 25_000;

export interface CalculatorUpsellPopupTranslations {
  badge: string;
  title: string;
  subtitle: string;
  bullet1: string;
  bullet2: string;
  bullet3: string;
  price: string;
  priceNote: string;
  cta: string;
  dismiss: string;
  closeAria: string;
}

interface Props {
  t: CalculatorUpsellPopupTranslations;
}

export default function CalculatorUpsellPopup({ t }: Props) {
  const [open, setOpen] = useState(false);

  const dismiss = useCallback(() => {
    setOpen(false);
    try {
      localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* localStorage unavailable — fine, popup just won't persist its dismissal */
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      if (localStorage.getItem(STORAGE_KEY) === "1") return;
    } catch {
      /* localStorage unavailable — fall through and still schedule the popup */
    }

    const timer = window.setTimeout(() => setOpen(true), DELAY_MS);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") dismiss();
    };
    window.addEventListener("keydown", handleKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, dismiss]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="calc-upsell-title"
      className="fixed inset-0 z-[100] flex items-center justify-center px-4"
      onClick={dismiss}
    >
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
      <div
        className="relative w-full max-w-md bg-brand-card border border-red-600/40 p-6 md:p-8 shadow-2xl shadow-black/50"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="h-1 -mt-6 md:-mt-8 -mx-6 md:-mx-8 mb-6 bg-red-600" />

        <button
          type="button"
          onClick={dismiss}
          aria-label={t.closeAria}
          className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center text-zinc-500 hover:text-white transition-colors"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
          >
            <path d="M6 6l12 12M6 18L18 6" />
          </svg>
        </button>

        <p className="text-red-500 text-[10px] font-black uppercase tracking-[0.2em] mb-3">
          {t.badge}
        </p>
        <h2
          id="calc-upsell-title"
          className="text-white font-black text-2xl uppercase tracking-tight leading-tight mb-3"
        >
          {t.title}
        </h2>
        <p className="text-zinc-400 text-sm leading-relaxed mb-5">{t.subtitle}</p>

        <ul className="flex flex-col gap-2 mb-6">
          {[t.bullet1, t.bullet2, t.bullet3].map((b) => (
            <li
              key={b}
              className="flex items-start gap-2.5 text-zinc-300 text-xs leading-relaxed"
            >
              <span className="text-red-500 font-black shrink-0 mt-0.5">→</span>
              <span>{b}</span>
            </li>
          ))}
        </ul>

        <div className="flex items-baseline gap-2 mb-5">
          <span className="text-white font-black text-3xl tracking-tight">
            {t.price}
          </span>
          <span className="text-zinc-500 text-xs">{t.priceNote}</span>
        </div>

        <Link
          href="/personalized"
          onClick={dismiss}
          className="btn-primary w-full justify-center mb-3"
        >
          {t.cta}
        </Link>

        <button
          type="button"
          onClick={dismiss}
          className="block w-full text-center text-zinc-600 hover:text-zinc-400 text-xs font-medium transition-colors"
        >
          {t.dismiss}
        </button>
      </div>
    </div>
  );
}
