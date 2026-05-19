"use client";

import { type Locale } from "@/lib/translations";

const LABELS: Record<Locale, string> = { en: "EN", de: "DE", sq: "SQ" };

export default function LanguageSwitcher({ locale }: { locale: Locale }) {
  function set(l: Locale) {
    document.cookie = `pb_locale=${l}; path=/; max-age=${60 * 60 * 24 * 365}; SameSite=Lax`;
    window.location.reload();
  }

  return (
    <div className="flex items-center gap-1">
      {(["en", "de", "sq"] as Locale[]).map((l) => (
        <button
          key={l}
          onClick={() => set(l)}
          className={`text-[10px] font-bold uppercase tracking-widest px-2 py-1 transition-colors ${
            locale === l
              ? "text-red-500 border border-red-600/40 bg-red-600/10"
              : "text-zinc-600 hover:text-zinc-300"
          }`}
        >
          {LABELS[l]}
        </button>
      ))}
    </div>
  );
}
