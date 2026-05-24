import type { Metadata } from "next";
import { owner } from "@/lib/owner";

export const metadata: Metadata = {
  title: `Impressum | ${owner.brandName}`,
};

export default function ImpressumPage() {
  return (
    <div className="bg-brand-bg pt-16 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="mb-12">
          <p className="section-label mb-4">Legal</p>
          <h1 className="text-4xl font-black uppercase tracking-tight">
            Impressum
          </h1>
        </div>

        <div className="prose prose-invert max-w-none">
          <div className="bg-brand-card border border-brand-border p-8 flex flex-col gap-8 text-zinc-400 text-sm leading-relaxed">
            <div>
              <h2 className="text-white font-bold text-base uppercase tracking-widest mb-3">
                Angaben gemäß § 5 DDG
              </h2>
              <p>{owner.name}</p>
              <p>{owner.addressStreet}</p>
              <p>{owner.addressCity}</p>
              <p>{owner.addressCountry}</p>
            </div>

            <div>
              <h2 className="text-white font-bold text-base uppercase tracking-widest mb-3">
                Kontakt
              </h2>
              <p>
                E-Mail:{" "}
                <a
                  href={`mailto:${owner.email}`}
                  className="text-red-500 hover:text-red-400"
                >
                  {owner.email}
                </a>
              </p>
            </div>

            {owner.vatId && (
              <div>
                <h2 className="text-white font-bold text-base uppercase tracking-widest mb-3">
                  Umsatzsteuer-ID
                </h2>
                <p>
                  Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
                </p>
                <p>{owner.vatId}</p>
              </div>
            )}

            <div>
              <h2 className="text-white font-bold text-base uppercase tracking-widest mb-3">
                Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
              </h2>
              <p>{owner.name}</p>
              <p>{owner.addressStreet}</p>
              <p>
                {owner.addressCity}, {owner.addressCountry}
              </p>
            </div>

            <div>
              <h2 className="text-white font-bold text-base uppercase tracking-widest mb-3">
                Streitschlichtung
              </h2>
              <p>
                Die Europäische Kommission stellt eine Plattform zur
                Online-Streitbeilegung (OS) bereit:{" "}
                <a
                  href="https://ec.europa.eu/consumers/odr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-500 hover:text-red-400"
                >
                  https://ec.europa.eu/consumers/odr
                </a>
              </p>
              <p className="mt-2">
                Wir sind nicht bereit oder verpflichtet, an
                Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
                teilzunehmen.
              </p>
            </div>

            <div className="border-t border-brand-border pt-6">
              <p className="text-zinc-600 text-xs">
                Dieser Inhalt stellt keine Rechtsberatung dar. Vor dem Launch
                durch einen Rechtsanwalt prüfen lassen.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
