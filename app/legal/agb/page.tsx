import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AGB | PowerBuilder",
};

export default function AGBPage() {
  return (
    <div className="bg-brand-bg pt-16 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="mb-12">
          <p className="section-label mb-4">Legal</p>
          <h1 className="text-4xl font-black uppercase tracking-tight">
            Allgemeine Geschäftsbedingungen (AGB)
          </h1>
        </div>

        <div className="bg-brand-card border border-brand-border p-8 flex flex-col gap-8 text-zinc-400 text-sm leading-relaxed">
          <div>
            <h2 className="text-white font-bold text-base uppercase tracking-widest mb-3">
              § 1 Geltungsbereich
            </h2>
            <p>
              Diese Allgemeinen Geschäftsbedingungen gelten für alle Käufe digitaler
              Produkte über diese Website, betrieben von Artur [Nachname], [Adresse].
            </p>
          </div>

          <div>
            <h2 className="text-white font-bold text-base uppercase tracking-widest mb-3">
              § 2 Vertragsgegenstand
            </h2>
            <p>
              Gegenstand des Vertrages ist der Kauf des digitalen Produkts
              &quot;8 Week PowerBuilder Program&quot; in Form einer PDF-Datei.
              Das Produkt wird nach erfolgreicher Zahlung per E-Mail als Download
              zur Verfügung gestellt.
            </p>
          </div>

          <div>
            <h2 className="text-white font-bold text-base uppercase tracking-widest mb-3">
              § 3 Vertragsschluss
            </h2>
            <p>
              Der Vertrag kommt durch Klick auf den Kaufen-Button und Abschluss des
              Bezahlvorgangs über Stripe zustande. Du erhältst eine
              Kaufbestätigungsmail mit dem Download-Link.
            </p>
          </div>

          <div>
            <h2 className="text-white font-bold text-base uppercase tracking-widest mb-3">
              § 4 Widerrufsrecht & Rückgabe
            </h2>
            <p>
              Da es sich um ein digitales Produkt handelt, das sofort nach Kauf
              bereitgestellt wird, erlischt das Widerrufsrecht gemäß § 356 Abs. 5 BGB
              mit Beginn der Vertragserfüllung (d.h. mit Bereitstellung des
              Download-Links), sofern du dem ausdrücklich zugestimmt hast.
            </p>
            <p className="mt-2">
              Bei technischen Problemen mit der Lieferung wende dich bitte an:{" "}
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
              § 5 Preise & Zahlung
            </h2>
            <p>
              Alle Preise verstehen sich als Endpreise in Euro (€). Die Zahlung
              erfolgt über Stripe (Kreditkarte, SEPA, etc.). Es fallen keine
              zusätzlichen Versandkosten an — das Produkt ist digital.
            </p>
          </div>

          <div>
            <h2 className="text-white font-bold text-base uppercase tracking-widest mb-3">
              § 6 Nutzungsrecht
            </h2>
            <p>
              Nach dem Kauf erhältst du ein einfaches, nicht übertragbares Nutzungsrecht
              für den persönlichen Gebrauch. Eine Weitergabe, Vervielfältigung oder
              kommerzielle Nutzung des PDFs ist nicht gestattet.
            </p>
          </div>

          <div>
            <h2 className="text-white font-bold text-base uppercase tracking-widest mb-3">
              § 7 Haftungsausschluss
            </h2>
            <p>
              Das Trainingsprogramm ersetzt keine medizinische Beratung. Konsultiere
              vor Beginn eines neuen Trainingsprogramms einen Arzt, wenn du gesundheitliche
              Einschränkungen hast. Für Verletzungen, die im Zusammenhang mit dem
              Programm entstehen, wird keine Haftung übernommen.
            </p>
          </div>

          <div>
            <h2 className="text-white font-bold text-base uppercase tracking-widest mb-3">
              § 8 Anwendbares Recht
            </h2>
            <p>
              Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des
              UN-Kaufrechts.
            </p>
          </div>

          <div className="border-t border-brand-border pt-6">
            <p className="text-zinc-600 text-xs">
              TODO: Diese AGB sind ein Platzhalter. Lass sie vor dem Launch von einem
              Rechtsanwalt prüfen und an deine konkrete Situation anpassen.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
