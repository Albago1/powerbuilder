import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { owner } from "@/lib/owner";
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={inter.variable}>
      <body className="bg-brand-bg text-white antialiased">
        {children}
      </body>
    </html>
  );
}
