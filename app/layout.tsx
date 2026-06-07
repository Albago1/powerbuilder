import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { owner } from "@/lib/owner";
import LaunchBanner from "@/components/LaunchBanner";
import { getLocale } from "@/lib/locale";
import { getT } from "@/lib/translations";
import { isLaunchOfferActive } from "@/lib/launchOffer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const siteDescription = `Strength. Muscle. Discipline. Training programs, personalized coaching, and lifting systems featuring fitness expert ${owner.talentName}. A platform by ${owner.name}.`;

export const metadata: Metadata = {
  title: owner.brandName,
  description: siteDescription,
  keywords: [
    "powerbuilding",
    "strength training",
    "muscle building",
    "training program",
    "powerlifting",
    "bodybuilding",
    "progressive overload",
    "personalized coaching",
  ],
  openGraph: {
    title: owner.brandName,
    description: siteDescription,
    type: "website",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const t = getT(locale).pricing;
  const launchActive = isLaunchOfferActive();

  return (
    <html lang="de" className={inter.variable}>
      <body className="bg-brand-bg text-white antialiased">
        {launchActive && (
          <LaunchBanner
            badge={t.launchBadge}
            discountLabel={t.bannerDiscountLabel}
            countdownLabel={t.countdownLabel}
            countdownEnded={t.countdownEnded}
            ctaText={t.bannerCta}
          />
        )}
        {children}
        <Analytics />
      </body>
    </html>
  );
}
