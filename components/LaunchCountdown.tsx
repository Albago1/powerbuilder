"use client";

import { useEffect, useState } from "react";

interface Props {
  endsAt: string;
  labelPrefix: string;
  endedLabel: string;
  className?: string;
}

export default function LaunchCountdown({ endsAt, labelPrefix, endedLabel, className }: Props) {
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    setNow(Date.now());
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  if (now === null) {
    return <span className={className} aria-hidden="true">&nbsp;</span>;
  }

  const remaining = new Date(endsAt).getTime() - now;
  const base = className ?? "text-red-500 text-[10px] font-bold uppercase tracking-widest tabular-nums";

  if (remaining <= 0) {
    return <span className={base}>{endedLabel}</span>;
  }

  const totalSeconds = Math.floor(remaining / 1000);
  const d = Math.floor(totalSeconds / 86400);
  const h = Math.floor((totalSeconds % 86400) / 3600);
  const m = Math.floor((totalSeconds % 3600) / 60);
  const s = totalSeconds % 60;

  const pad = (n: number) => String(n).padStart(2, "0");
  const time = d > 0
    ? `${d}d ${pad(h)}h ${pad(m)}m ${pad(s)}s`
    : `${pad(h)}h ${pad(m)}m ${pad(s)}s`;

  return <span className={base}>{labelPrefix} {time}</span>;
}
