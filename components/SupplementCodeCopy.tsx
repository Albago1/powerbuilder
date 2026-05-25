"use client";

import { useState } from "react";

export default function SupplementCodeCopy({
  code,
  copyLabel,
  copiedLabel,
}: {
  code: string;
  copyLabel: string;
  copiedLabel: string;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={copyLabel}
      className="shrink-0 bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-widest px-4 py-3 transition-colors duration-150"
    >
      {copied ? copiedLabel : copyLabel}
    </button>
  );
}
