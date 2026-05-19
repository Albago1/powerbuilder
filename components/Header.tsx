"use client";

import { useState } from "react";
import Link from "next/link";
import LanguageSwitcher from "./LanguageSwitcher";
import { getT, type Locale } from "@/lib/translations";

export default function Header({ locale }: { locale: Locale }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const t = getT(locale).nav;

  const navLinks = [
    { label: t.personalized, href: "/personalized" },
    { label: t.programs, href: "/programs" },
    { label: t.about, href: "/about" },
    { label: t.faq, href: "/#faq" },
    { label: t.contact, href: "/#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-brand-bg/90 backdrop-blur-sm border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-0 group shrink-0">
            <span className="text-red-600 font-black text-xl tracking-tight">POWER</span>
            <span className="text-white font-black text-xl tracking-tight">BUILDER</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-zinc-400 hover:text-white text-sm font-medium tracking-wide uppercase transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop right side */}
          <div className="hidden md:flex items-center gap-3">
            <LanguageSwitcher locale={locale} />
            <Link href="/personalized" className="btn-primary text-xs px-5 py-3">
              {t.buildMyProgram}
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-white transition-all duration-200 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-200 ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-200 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-brand-surface border-t border-brand-border">
          <div className="px-4 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-zinc-300 hover:text-white text-sm font-medium tracking-wide uppercase py-2 border-b border-brand-border last:border-0"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center justify-between pt-2">
              <span className="text-zinc-700 text-[10px] uppercase tracking-widest">{t.languageLabel}</span>
              <LanguageSwitcher locale={locale} />
            </div>
            <Link
              href="/personalized"
              className="btn-primary text-xs justify-center"
              onClick={() => setMobileOpen(false)}
            >
              {t.buildMyProgram}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
