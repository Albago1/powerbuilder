"use client";

import { type Locale } from "@/lib/translations";

export default function LanguageSwitcher({ locale }: { locale: Locale }) {
  function set(l: Locale) {
    document.cookie = `pb_locale=${l}; path=/; max-age=${60 * 60 * 24 * 365}; SameSite=Lax`;
    window.location.reload();
  }

  return (
    <div className="flex items-center border border-brand-border divide-x divide-brand-border overflow-hidden">
      {(["en", "de", "sq"] as Locale[]).map((l) => (
        <button
          key={l}
          onClick={() => set(l)}
          className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-1.5 transition-colors ${
            locale === l
              ? "text-red-500 bg-red-600/10"
              : "text-zinc-600 hover:text-zinc-400 hover:bg-white/[0.04]"
          }`}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
