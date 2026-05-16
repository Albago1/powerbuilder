import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum | PowerBuilder",
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
            {/* TODO: Fill in your actual legal details */}
            <div>
              <h2 className="text-white font-bold text-base uppercase tracking-widest mb-3">
                Angaben gemäß § 5 TMG
              </h2>
              <p>[Vorname Nachname]</p>
              <p>[Straße und Hausnummer]</p>
              <p>[PLZ Ort]</p>
              <p>[Land]</p>
            </div>

            <div>
              <h2 className="text-white font-bold text-base uppercase tracking-widest mb-3">
                Kontakt
              </h2>
              <p>
                E-Mail:{" "}
                <a
                  href="mailto:contact@powerbuilder.com"
                  className="text-red-500 hover:text-red-400"
                >
                  contact@powerbuilder.com
                </a>
              </p>
            </div>

            <div>
              <h2 className="text-white font-bold text-base uppercase tracking-widest mb-3">
                Umsatzsteuer-ID
              </h2>
              <p>
                Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
              </p>
              <p>[USt-IdNr. eintragen oder Abschnitt entfernen wenn nicht vorhanden]</p>
            </div>

            <div>
              <h2 className="text-white font-bold text-base uppercase tracking-widest mb-3">
                Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
              </h2>
              <p>[Vorname Nachname]</p>
              <p>[Adresse wie oben]</p>
            </div>

            <div className="border-t border-brand-border pt-6">
              <p className="text-zinc-600 text-xs">
                TODO: Ersetze alle Platzhalter in eckigen Klammern durch deine echten Angaben.
                Dieser Inhalt stellt keine Rechtsberatung dar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
