import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import LaunchCountdown from "@/components/LaunchCountdown";
import { getLocale } from "@/lib/locale";
import { getT } from "@/lib/translations";
import { LAUNCH_OFFER, isLaunchOfferActive } from "@/lib/launchOffer";

export const metadata: Metadata = {
  title: "Artur | PowerBuilder",
  description:
    "Strength. Muscle. Discipline. Powerbuilding programs, coaching, transformations, and training systems.",
};

// ─── Social icons ─────────────────────────────────────────────────────────────

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.75" fill="currentColor" stroke="none" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.55 3.5 12 3.5 12 3.5s-7.55 0-9.38.55A3.02 3.02 0 0 0 .5 6.19C0 8.02 0 12 0 12s0 3.98.5 5.81a3.02 3.02 0 0 0 2.12 2.14C4.45 20.5 12 20.5 12 20.5s7.55 0 9.38-.55a3.02 3.02 0 0 0 2.12-2.14C24 15.98 24 12 24 12s0-3.98-.5-5.81zM9.75 15.5v-7l6.5 3.5-6.5 3.5z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M2 7l10 7 10-7" />
    </svg>
  );
}

// ─── Hub card ─────────────────────────────────────────────────────────────────

interface HubCardProps {
  label: string;
  title: string;
  subtitle: string;
  cta: string;
  href: string;
  comingSoon?: boolean;
  featured?: boolean;
}

function HubCard({ label, title, subtitle, cta, href, comingSoon, featured }: HubCardProps) {
  const inner = (
    <div
      className={`
        flex items-center gap-4 p-5 border transition-all duration-200 group
        ${comingSoon
          ? "border-brand-border bg-brand-card opacity-50 cursor-not-allowed"
          : featured
            ? "border-red-600/40 bg-red-600/5 hover:border-red-600/70 hover:bg-red-600/8"
            : "border-brand-border bg-brand-card hover:border-zinc-600 hover:bg-[#1a1a1f]"
        }
      `}
    >
      <div className="flex-1 min-w-0">
        <p className="text-red-500 text-[10px] font-bold uppercase tracking-[0.2em] mb-0.5">
          {label}
        </p>
        <h3 className="text-white font-black text-sm uppercase tracking-tight leading-tight">
          {title}
        </h3>
        <p className="text-zinc-500 text-xs mt-1 leading-relaxed">{subtitle}</p>
      </div>
      <div className="shrink-0 pl-2">
        {comingSoon ? (
          <span className="text-zinc-600 text-[10px] font-bold uppercase tracking-widest border border-zinc-700 px-2 py-1">
            {cta}
          </span>
        ) : (
          <span className="text-red-600 font-black text-xl group-hover:translate-x-1 transition-transform duration-200 inline-block">
            →
          </span>
        )}
      </div>
    </div>
  );

  if (comingSoon) return <div>{inner}</div>;
  if (href.startsWith("http")) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {inner}
      </a>
    );
  }
  return <Link href={href}>{inner}</Link>;
}

// ─── Hub hrefs (non-translatable) ─────────────────────────────────────────────

const HUB_HREFS = [
  { href: "/personalized", featured: true },
  { href: "/programs" },
  { href: "/supplements" },
  { href: "/calculator" },
  { href: "https://www.tiktok.com/@artur.contentalb?is_from_webapp=1&sender_device=pc" },
  { href: "https://youtube.com/@artur.mehmetii?si=ILYBKWUIkXGrS9Nu" },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "contact@powerbuilder.com";

export default async function BrandHub() {
  const locale = await getLocale();
  const tt = getT(locale);
  const t = tt.brandHub;
  const launchActive = isLaunchOfferActive();

  const hubItems: HubCardProps[] = t.hub.map((item, i) => ({
    ...item,
    ...HUB_HREFS[i],
  }));

  return (
    <div className={`min-h-screen bg-brand-bg flex flex-col ${launchActive ? "pt-10" : ""}`}>

      {/* ── Minimal top bar ────────────────────────────────────────── */}
      <header className="flex items-center justify-between px-4 py-3.5 border-b border-brand-border">
        <div className="flex items-center">
          <span className="text-red-600 font-black text-base tracking-tight">POWER</span>
          <span className="text-white font-black text-base tracking-tight">BUILDER</span>
        </div>
        <div className="flex items-center gap-2.5">
          <LanguageSwitcher locale={locale} />
        </div>
      </header>

      {/* ── Main content ───────────────────────────────────────────── */}
      <main className="flex-1 w-full max-w-md mx-auto px-4 pt-10 pb-12">

        {/* Profile */}
        <div className="flex flex-col items-center text-center mb-8">
          <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-red-600/50 mb-5 shadow-lg shadow-red-900/30 shrink-0">
            <Image
              src="/Profile.jpg"
              alt="Artur"
              width={96}
              height={96}
              className="w-full h-full object-cover object-top"
              priority
            />
          </div>

          <h1 className="text-white font-black text-2xl uppercase tracking-tight">
            Artur Mehmeti
          </h1>
          <p className="text-red-500 text-[10px] font-bold uppercase tracking-[0.25em] mt-1">
            PowerBuilder
          </p>

          <div className="flex items-center gap-2 mt-3">
            <span className="text-zinc-500 text-xs">20</span>
            <span className="text-zinc-700 text-xs">·</span>
            <span className="text-zinc-500 text-xs">{t.location}</span>
            <span className="text-zinc-700 text-xs">·</span>
            <span className="text-zinc-600 text-xs italic">Baustelle Genetik Albaner</span>
          </div>

          <p className="text-white font-bold text-base mt-4 tracking-tight">
            {t.tagline}
          </p>
          <p className="text-zinc-400 text-sm leading-relaxed mt-2 max-w-xs">
            {t.subtitle}
          </p>
        </div>

        {/* Social row */}
        <div className="flex items-center justify-center gap-6 mb-9">
          {[
            {
              icon: <InstagramIcon />,
              label: t.social.instagram,
              href: "https://www.instagram.com/artur.mehmetii?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
              external: true,
            },
            {
              icon: <TikTokIcon />,
              label: t.social.tiktok,
              href: "https://www.tiktok.com/@artur.contentalb?is_from_webapp=1&sender_device=pc",
              external: true,
            },
            {
              icon: <YouTubeIcon />,
              label: t.social.youtube,
              href: "https://youtube.com/@artur.mehmetii?si=ILYBKWUIkXGrS9Nu",
              external: true,
            },
            {
              icon: <EmailIcon />,
              label: t.social.email,
              href: `mailto:${contactEmail}`,
              external: false,
            },
          ].map(({ icon, label, href, external }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="flex flex-col items-center gap-1.5 text-zinc-500 hover:text-white transition-colors duration-200"
            >
              {icon}
              <span className="text-[9px] uppercase tracking-widest font-bold">{label}</span>
            </a>
          ))}
        </div>

        {/* Limited Offer callout (inline, brand hub only) */}
        {launchActive && (
          <Link
            href="/programs"
            className="block relative overflow-hidden border-2 border-red-600 bg-gradient-to-r from-red-600/20 via-red-600/[0.08] to-red-600/20 px-5 py-4 mb-7 group hover:from-red-600/25 hover:to-red-600/25 transition-colors"
          >
            <div className="absolute top-0 right-0 bg-red-600 text-white text-[9px] font-black px-2 py-0.5 uppercase tracking-widest">
              -30%
            </div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
              <span className="text-red-400 text-[10px] font-black uppercase tracking-[0.2em]">
                {tt.pricing.launchBadge}
              </span>
            </div>
            <p className="text-white font-black text-sm uppercase tracking-tight mb-2">
              {tt.pricing.bannerDiscountLabel}
            </p>
            <LaunchCountdown
              endsAt={LAUNCH_OFFER.endsAt}
              labelPrefix={tt.pricing.countdownLabel}
              endedLabel={tt.pricing.countdownEnded}
              className="text-red-400 text-xs font-bold uppercase tracking-widest tabular-nums"
            />
          </Link>
        )}

        {/* Divider */}
        <div className="flex items-center gap-3 mb-7">
          <div className="flex-1 h-px bg-brand-border" />
          <span className="text-zinc-700 text-[9px] uppercase tracking-widest font-bold">{t.linksLabel}</span>
          <div className="flex-1 h-px bg-brand-border" />
        </div>

        {/* Hub cards */}
        <div className="flex flex-col gap-2.5 mb-9">
          {hubItems.map((item) => (
            <HubCard key={item.href} {...item} />
          ))}
        </div>

        {/* Featured offer */}
        <div className="border border-red-600/30 bg-red-600/5 p-6 mb-2">
          <div className="h-0.5 bg-red-600 -mt-6 -mx-6 mb-5" />
          <p className="text-red-500 text-[10px] font-bold uppercase tracking-[0.2em] mb-2">
            {t.featuredBadge}
          </p>
          <h2 className="text-white font-black text-lg uppercase tracking-tight leading-tight mb-1">
            {t.featuredTitle}
          </h2>
          <p className="text-zinc-400 text-sm mb-2">
            {t.featuredSubtitle}
          </p>
          <div className="flex items-center gap-2 mb-1">
            {launchActive && (
              <span className="text-zinc-600 text-sm line-through">{t.featuredOriginalPrice}</span>
            )}
            <span className="text-white font-bold text-base">{t.featuredPrice}</span>
            {launchActive && (
              <span className="bg-red-600 text-white text-[9px] font-black px-1.5 py-0.5 uppercase tracking-wider">
                -30%
              </span>
            )}
          </div>
          {launchActive && (
            <div className="flex flex-col gap-0.5 mb-5">
              <span className="text-red-500 text-[10px] font-bold uppercase tracking-widest">
                {tt.pricing.launchBadge}
              </span>
              <LaunchCountdown
                endsAt={LAUNCH_OFFER.endsAt}
                labelPrefix={tt.pricing.countdownLabel}
                endedLabel={tt.pricing.countdownEnded}
                className="text-red-500 text-[10px] font-bold uppercase tracking-widest tabular-nums"
              />
            </div>
          )}
          {!launchActive && <div className="mb-5" />}
          <Link href="/programs/bench-press" className="btn-primary w-full justify-center">
            {t.featuredCta}
          </Link>
        </div>

      </main>

      {/* ── Minimal footer ─────────────────────────────────────────── */}
      <footer className="border-t border-brand-border py-6 px-4">
        <div className="max-w-md mx-auto flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs">
          <span className="text-zinc-500 font-bold uppercase tracking-wide">PowerBuilder</span>
          <Link href="/legal/impressum" className="text-zinc-600 hover:text-zinc-300 transition-colors">
            Impressum
          </Link>
          <Link href="/legal/datenschutz" className="text-zinc-600 hover:text-zinc-300 transition-colors">
            Datenschutz
          </Link>
          <Link href="/legal/agb" className="text-zinc-600 hover:text-zinc-300 transition-colors">
            AGB
          </Link>
        </div>
      </footer>

    </div>
  );
}
