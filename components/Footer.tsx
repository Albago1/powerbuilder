import Link from "next/link";

const programs = [
  { label: "6-Week Bench Press", href: "/programs/bench-press" },
  { label: "6-Week Strict Curl", href: "/programs/strict-curl" },
  { label: "6-Week Cheat Curl", href: "/programs/cheat-curl" },
];

export default function Footer() {
  return (
    <footer className="bg-brand-surface border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="flex flex-col gap-4 sm:col-span-2 md:col-span-1">
            <div className="flex items-center gap-0">
              <span className="text-red-600 font-black text-lg tracking-tight">POWER</span>
              <span className="text-white font-black text-lg tracking-tight">BUILDER</span>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed max-w-xs">
              Premium strength and hypertrophy systems by Artur. Built for athletes who are serious about results.
            </p>
          </div>

          {/* Programs */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-bold text-xs uppercase tracking-widest">Programs</h3>
            <div className="flex flex-col gap-3">
              <Link href="/personalized" className="text-zinc-500 hover:text-white text-sm transition-colors">
                Personalized System
              </Link>
              {programs.map((p) => (
                <Link key={p.href} href={p.href} className="text-zinc-500 hover:text-white text-sm transition-colors">
                  {p.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Navigate */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-bold text-xs uppercase tracking-widest">Navigate</h3>
            <div className="flex flex-col gap-3">
              {[
                { label: "Home", href: "/" },
                { label: "About Artur", href: "/about" },
                { label: "FAQ", href: "/#faq" },
                { label: "Contact", href: "/#contact" },
              ].map((link) => (
                <Link key={link.href} href={link.href} className="text-zinc-500 hover:text-white text-sm transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-bold text-xs uppercase tracking-widest">Legal</h3>
            <div className="flex flex-col gap-3">
              {[
                { label: "Impressum", href: "/legal/impressum" },
                { label: "Datenschutz", href: "/legal/datenschutz" },
                { label: "AGB", href: "/legal/agb" },
              ].map((link) => (
                <Link key={link.href} href={link.href} className="text-zinc-500 hover:text-white text-sm transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-brand-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-zinc-600 text-xs">
            © {new Date().getFullYear()} PowerBuilder by Artur. All rights reserved.
          </p>
          <p className="text-zinc-700 text-xs">
            Digital products — PDF delivery after purchase.
          </p>
        </div>
      </div>
    </footer>
  );
}
