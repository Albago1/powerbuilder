"use client";

import { useState } from "react";

type Lang = "en" | "de" | "sq";

interface LanguageStrings {
  label: string;
  native: string;
}

interface Props {
  downloadToken: string;
  programTitle: string;
  selectLanguageLabel: string;
  downloadCtaPrefix: string;
  downloadCtaSuffix: string;
  expiryNote: string;
  languages: Record<Lang, LanguageStrings>;
}

const LANG_ORDER: Lang[] = ["en", "de", "sq"];

export default function DownloadPanel({
  downloadToken,
  programTitle,
  selectLanguageLabel,
  downloadCtaPrefix,
  downloadCtaSuffix,
  expiryNote,
  languages,
}: Props) {
  const [selectedLang, setSelectedLang] = useState<Lang>("en");

  const downloadUrl = `/api/download?token=${encodeURIComponent(downloadToken)}&lang=${selectedLang}`;

  return (
    <div className="flex flex-col gap-8">
      {/* Language selector */}
      <div>
        <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-4">
          {selectLanguageLabel}
        </p>
        <div className="grid grid-cols-3 gap-3">
          {LANG_ORDER.map((value) => (
            <button
              key={value}
              onClick={() => setSelectedLang(value)}
              className={`p-4 border text-center transition-all duration-150 ${
                selectedLang === value
                  ? "border-red-600/60 bg-red-600/10 text-white"
                  : "border-brand-border bg-brand-card text-zinc-400 hover:border-zinc-600 hover:text-zinc-200"
              }`}
            >
              <p className="font-black text-sm uppercase tracking-tight">{languages[value].label}</p>
              <p className="text-xs opacity-60 mt-0.5">{languages[value].native}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Download button */}
      <a
        href={downloadUrl}
        className="btn-primary px-10 py-4 text-base w-full justify-center text-center"
      >
        {downloadCtaPrefix} {programTitle} ({languages[selectedLang].label}) {downloadCtaSuffix}
      </a>

      <p className="text-zinc-600 text-xs text-center">{expiryNote}</p>
    </div>
  );
}
