"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const STORAGE_KEY = "pb_calc_sticky_dismissed";
const SHOW_DELAY_MS = 1500;
const FOOTER_PROXIMITY_PX = 160;

export interface CalculatorStickyCTATranslations {
  text: string;
  price: string;
  cta: string;
  closeAria: string;
}

interface Props {
  t: CalculatorStickyCTATranslations;
}

export default function CalculatorStickyCTA({ t }: Props) {
  const [visible, setVisible] = useState(false);
  const [slid, setSlid] = useState(false);
  const [nearBottom, setNearBottom] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      if (sessionStorage.getItem(STORAGE_KEY) === "1") return;
    } catch {
      /* sessionStorage unavailable — still show the bar */
    }
    const timer = window.setTimeout(() => {
      setVisible(true);
      window.setTimeout(() => setSlid(true), 50);
    }, SHOW_DELAY_MS);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!visible) return;
    const onScroll = () => {
      const scrollBottom = window.scrollY + window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      setNearBottom(scrollBottom > docHeight - FOOTER_PROXIMITY_PX);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [visible]);

  function dismiss() {
    setSlid(false);
    window.setTimeout(() => setVisible(false), 300);
    try {
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* ignore */
    }
  }

  if (!visible) return null;

  const hidden = nearBottom || !slid;

  return (
    <div
      className={`fixed bottom-0 inset-x-0 z-50 md:hidden transition-transform duration-300 ease-out ${
        hidden ? "translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="bg-red-600 px-4 py-3 flex items-center gap-3 shadow-2xl shadow-black/40">
        <Link
          href="/personalized"
          className="flex-1 flex items-center justify-between gap-3 text-white"
          onClick={dismiss}
        >
          <div className="flex flex-col leading-tight">
            <span className="text-[9px] font-black uppercase tracking-widest text-white/80">
              {t.text}
            </span>
            <span className="text-sm font-black">
              {t.price} · {t.cta}
            </span>
          </div>
          <span className="text-xl font-black shrink-0">→</span>
        </Link>
        <button
          type="button"
          onClick={dismiss}
          aria-label={t.closeAria}
          className="text-white/70 hover:text-white p-1 -mr-1 shrink-0"
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
      </div>
    </div>
  );
}
