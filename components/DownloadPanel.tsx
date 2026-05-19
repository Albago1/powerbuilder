"use client";

import { useState } from "react";

const LANGS = [
  { value: "en", label: "English", native: "English" },
  { value: "de", label: "German", native: "Deutsch" },
  { value: "sq", label: "Albanian", native: "Shqip" },
] as const;

type Lang = (typeof LANGS)[number]["value"];

interface Props {
  downloadToken: string;
  programTitle: string;
}

export default function DownloadPanel({ downloadToken, programTitle }: Props) {
  const [selectedLang, setSelectedLang] = useState<Lang>("en");

  const downloadUrl = `/api/download?token=${encodeURIComponent(downloadToken)}&lang=${selectedLang}`;

  return (
    <div className="flex flex-col gap-8">
      {/* Language selector */}
      <div>
        <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-4">
          Select Language
        </p>
        <div className="grid grid-cols-3 gap-3">
          {LANGS.map((lang) => (
            <button
              key={lang.value}
              onClick={() => setSelectedLang(lang.value)}
              className={`p-4 border text-center transition-all duration-150 ${
                selectedLang === lang.value
                  ? "border-red-600/60 bg-red-600/10 text-white"
                  : "border-brand-border bg-brand-card text-zinc-400 hover:border-zinc-600 hover:text-zinc-200"
              }`}
            >
              <p className="font-black text-sm uppercase tracking-tight">{lang.label}</p>
              <p className="text-xs opacity-60 mt-0.5">{lang.native}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Download button */}
      <a
        href={downloadUrl}
        className="btn-primary px-10 py-4 text-base w-full justify-center text-center"
      >
        Download {programTitle} ({LANGS.find((l) => l.value === selectedLang)?.label}) →
      </a>

      <p className="text-zinc-600 text-xs text-center">
        Download link is valid for 24 hours · PDF · Instant delivery
      </p>
    </div>
  );
}
