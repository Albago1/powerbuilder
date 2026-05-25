import Link from "next/link";
import LaunchCountdown from "./LaunchCountdown";
import { LAUNCH_OFFER } from "@/lib/launchOffer";

interface Props {
  badge: string;
  discountLabel: string;
  countdownLabel: string;
  countdownEnded: string;
  ctaText: string;
  ctaHref?: string;
}

export default function LaunchBanner({
  badge,
  discountLabel,
  countdownLabel,
  countdownEnded,
  ctaText,
  ctaHref = "/programs",
}: Props) {
  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-red-600 text-white shadow-[0_2px_12px_rgba(220,38,38,0.35)]">
      <Link
        href={ctaHref}
        className="flex items-center justify-center gap-2 sm:gap-3 h-10 px-3 hover:bg-red-700 transition-colors text-[10px] sm:text-xs uppercase tracking-widest"
      >
        <span className="hidden sm:inline-flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
          <span className="font-black">{badge}</span>
          <span className="opacity-60">·</span>
        </span>
        <span className="font-bold">{discountLabel}</span>
        <span className="opacity-60">·</span>
        <LaunchCountdown
          endsAt={LAUNCH_OFFER.endsAt}
          labelPrefix={countdownLabel}
          endedLabel={countdownEnded}
          className="font-bold tabular-nums"
        />
        <span className="hidden md:inline opacity-60">·</span>
        <span className="hidden md:inline font-bold underline-offset-2 hover:underline">
          {ctaText}
        </span>
      </Link>
    </div>
  );
}
