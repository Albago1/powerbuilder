import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Artur | PowerBuilder",
  description:
    "Strength. Muscle. Discipline. Powerbuilding programs, coaching, transformations, and training systems by Artur.",
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
    title: "Artur | PowerBuilder",
    description: "Strength. Muscle. Discipline. Programs, coaching, and training systems by Artur.",
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
