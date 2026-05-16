import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "PowerBuilder | 8-Week Strength & Muscle Program by Artur",
  description:
    "Stop wasting time in the gym. The 8-Week PowerBuilder Program delivers a science-backed system for building serious strength and muscle. €39 — instant PDF delivery.",
  keywords: [
    "powerbuilding",
    "strength training",
    "muscle building",
    "training program",
    "powerlifting",
    "bodybuilding",
    "progressive overload",
  ],
  openGraph: {
    title: "PowerBuilder | 8-Week Strength & Muscle Program",
    description:
      "Stop wasting time in the gym. Build serious strength and muscle in 8 weeks.",
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
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
