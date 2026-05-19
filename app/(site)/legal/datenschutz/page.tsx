import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzerklärung | PowerBuilder",
};

export default function DatenschutzPage() {
  return (
    <div className="bg-brand-bg pt-16 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="mb-12">
          <p className="section-label mb-4">Legal</p>
          <h1 className="text-4xl font-black uppercase tracking-tight">
            Datenschutzerklärung
          </h1>
        </div>

        <div className="bg-brand-card border border-brand-border p-8 flex flex-col gap-8 text-zinc-400 text-sm leading-relaxed">
          <div>
            <h2 className="text-white font-bold text-base uppercase tracking-widest mb-3">
              1. Datenschutz auf einen Blick
            </h2>
            <h3 className="text-zinc-300 font-semibold mb-2">Allgemeine Hinweise</h3>
            <p>
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
              personenbezogenen Daten passiert, wenn Sie diese Website besuchen.
              Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert
              werden können.
            </p>
          </div>

          <div>
            <h2 className="text-white font-bold text-base uppercase tracking-widest mb-3">
              2. Datenerfassung auf dieser Website
            </h2>
            <h3 className="text-zinc-300 font-semibold mb-2">
              Wer ist verantwortlich für die Datenerfassung auf dieser Website?
            </h3>
            <p>
              Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber.
              Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
            </p>
          </div>

          <div>
            <h2 className="text-white font-bold text-base uppercase tracking-widest mb-3">
              3. Hosting & Technische Daten
            </h2>
            <p>
              Diese Website wird auf Vercel gehostet. Beim Aufruf der Website werden
              technische Zugriffsdaten (IP-Adresse, Zeitstempel, aufgerufene Seite) von
              Vercel als Auftragsverarbeiter verarbeitet. Weitere Informationen findest du
              in der Datenschutzerklärung von Vercel.
            </p>
          </div>

          <div>
            <h2 className="text-white font-bold text-base uppercase tracking-widest mb-3">
              4. Zahlungsabwicklung
            </h2>
            <p>
              Zahlungen werden über Stripe Inc. abgewickelt. Stripe verarbeitet deine
              Zahlungsdaten gemäß ihrer eigenen Datenschutzerklärung. Wir erhalten lediglich
              eine Kaufbestätigung und deine E-Mail-Adresse zur Lieferung des digitalen
              Produkts.
            </p>
          </div>

          <div>
            <h2 className="text-white font-bold text-base uppercase tracking-widest mb-3">
              5. Deine Rechte
            </h2>
            <p>
              Du hast das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der
              Verarbeitung deiner Daten. Für Anfragen wende dich an:{" "}
              <a
                href="mailto:contact@powerbuilder.com"
                className="text-red-500 hover:text-red-400"
              >
                contact@powerbuilder.com
              </a>
            </p>
          </div>

          <div className="border-t border-brand-border pt-6">
            <p className="text-zinc-600 text-xs">
              TODO: Diese Datenschutzerklärung ist ein Platzhalter. Lass sie vor dem
              Launch von einem Rechtsanwalt prüfen und an deine spezifische Situation
              anpassen (Tools, E-Mail-Anbieter, Analytics, etc.).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
