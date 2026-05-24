import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzerklärung | PowerBuilder",
};

const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "contact@powerbuilder.com";

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
              2. Verantwortlicher
            </h2>
            <p>
              Verantwortlich für die Datenverarbeitung auf dieser Website ist der im{" "}
              <a href="/legal/impressum" className="text-red-500 hover:text-red-400">
                Impressum
              </a>{" "}
              genannte Betreiber. Kontakt:{" "}
              <a
                href={`mailto:${contactEmail}`}
                className="text-red-500 hover:text-red-400"
              >
                {contactEmail}
              </a>
            </p>
          </div>

          <div>
            <h2 className="text-white font-bold text-base uppercase tracking-widest mb-3">
              3. Hosting (Vercel)
            </h2>
            <p>
              Diese Website wird auf Servern der Vercel Inc., 340 S Lemon Ave #4133,
              Walnut, CA 91789, USA gehostet. Beim Aufruf der Website verarbeitet Vercel
              technische Zugriffsdaten (IP-Adresse, Zeitstempel, aufgerufene Seite,
              User-Agent) zur Bereitstellung und Absicherung des Dienstes. Rechtsgrundlage
              ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse am sicheren Betrieb
              der Website). Mit Vercel besteht ein Auftragsverarbeitungsvertrag.
              Weitere Informationen:{" "}
              <a
                href="https://vercel.com/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-500 hover:text-red-400"
              >
                vercel.com/legal/privacy-policy
              </a>
            </p>
          </div>

          <div>
            <h2 className="text-white font-bold text-base uppercase tracking-widest mb-3">
              4. Zahlungsabwicklung (PayPal)
            </h2>
            <p>
              Zahlungen werden über PayPal (Europe) S.à r.l. et Cie, S.C.A., 22-24
              Boulevard Royal, L-2449 Luxembourg abgewickelt. Bei einem Kauf werden die
              für die Zahlungsabwicklung erforderlichen Daten (z.&nbsp;B. Name,
              E-Mail-Adresse, Zahlungsdaten) direkt an PayPal übermittelt. Wir selbst
              erhalten von PayPal lediglich eine Bestätigung des Zahlungseingangs mit
              Transaktions-ID, Betrag, sowie Name und E-Mail-Adresse des Käufers zur
              Lieferung des digitalen Produkts. Rechtsgrundlage ist Art. 6 Abs. 1 lit.&nbsp;b
              DSGVO (Vertragserfüllung). PayPal-Datenschutzerklärung:{" "}
              <a
                href="https://www.paypal.com/de/legalhub/privacy-full"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-500 hover:text-red-400"
              >
                paypal.com/de/legalhub/privacy-full
              </a>
            </p>
          </div>

          <div>
            <h2 className="text-white font-bold text-base uppercase tracking-widest mb-3">
              5. E-Mail-Versand (Resend)
            </h2>
            <p>
              Für den Versand von E-Mails (insbesondere die Übermittlung der
              Fragebogen-Daten an den Trainer im Rahmen des personalisierten Programms)
              nutzen wir Resend (Resend, Inc., 2261 Market Street #5039, San Francisco,
              CA 94114, USA). Dabei werden die im Fragebogen angegebenen Daten (u.&nbsp;a.
              Name, E-Mail-Adresse, körperliche Angaben, Trainings- und Ernährungspräferenzen)
              an Resend übermittelt und an die Trainer-E-Mail-Adresse zugestellt.
              Rechtsgrundlage ist Art. 6 Abs. 1 lit.&nbsp;b DSGVO (Vertragserfüllung).
              Die Datenübermittlung in die USA erfolgt auf Grundlage der EU-Standardvertragsklauseln
              und des EU-US Data Privacy Framework. Resend-Datenschutzerklärung:{" "}
              <a
                href="https://resend.com/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-500 hover:text-red-400"
              >
                resend.com/legal/privacy-policy
              </a>
            </p>
          </div>

          <div>
            <h2 className="text-white font-bold text-base uppercase tracking-widest mb-3">
              6. Cookies und lokale Speicherung
            </h2>
            <p>
              Diese Website verwendet ausschließlich technisch notwendige Cookies und
              lokale Browser-Speicher (LocalStorage). Es werden keine Tracking-,
              Analyse- oder Werbe-Cookies eingesetzt.
            </p>
            <ul className="mt-3 ml-6 list-disc flex flex-col gap-2">
              <li>
                <strong className="text-zinc-300">pb_locale</strong> (Cookie): Speichert
                die ausgewählte Sprache (Deutsch / Englisch / Albanisch). Lebensdauer:
                1 Jahr. Rechtsgrundlage: § 25 Abs. 2 Nr. 2 TDDDG (technisch notwendig).
              </li>
              <li>
                <strong className="text-zinc-300">pb_questionnaire_pending</strong>{" "}
                (LocalStorage): Speichert die im Fragebogen eingegebenen Daten
                ausschließlich im Browser des Nutzers, bis die Zahlung abgeschlossen ist.
                Die Daten werden erst nach erfolgreicher Zahlung an unseren Server
                übermittelt. Lebensdauer: bis manuelle Löschung oder Abschluss des Kaufs.
                Rechtsgrundlage: § 25 Abs. 2 Nr. 2 TDDDG (technisch notwendig zur Bereitstellung
                des vom Nutzer ausdrücklich angeforderten Dienstes).
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-white font-bold text-base uppercase tracking-widest mb-3">
              7. Speicherdauer
            </h2>
            <p>
              Bestelldaten (Name, E-Mail, Bestell-ID, Kaufbetrag) werden zur Erfüllung
              gesetzlicher Aufbewahrungspflichten gemäß § 257 HGB und § 147 AO für{" "}
              <strong className="text-zinc-300">10 Jahre</strong> aufbewahrt.
              Fragebogen-Daten werden gelöscht, sobald der Vertrag (Erstellung und Lieferung
              des personalisierten Programms) erfüllt ist und keine gesetzlichen
              Aufbewahrungspflichten entgegenstehen.
            </p>
          </div>

          <div>
            <h2 className="text-white font-bold text-base uppercase tracking-widest mb-3">
              8. Ihre Rechte
            </h2>
            <p>
              Sie haben das Recht auf Auskunft (Art. 15 DSGVO), Berichtigung (Art. 16),
              Löschung (Art. 17), Einschränkung der Verarbeitung (Art. 18),
              Datenübertragbarkeit (Art. 20) und Widerspruch (Art. 21). Für Anfragen wenden
              Sie sich bitte an:{" "}
              <a
                href={`mailto:${contactEmail}`}
                className="text-red-500 hover:text-red-400"
              >
                {contactEmail}
              </a>
            </p>
            <p className="mt-2">
              Sie haben außerdem das Recht, sich bei einer Datenschutz-Aufsichtsbehörde
              zu beschweren (Art. 77 DSGVO).
            </p>
          </div>

          <div className="border-t border-brand-border pt-6">
            <p className="text-zinc-600 text-xs">
              Stand: {new Date().toLocaleDateString("de-DE", { month: "long", year: "numeric" })}.
              TODO: Diese Datenschutzerklärung muss vor dem Launch von einem Rechtsanwalt
              geprüft und ggf. an die finale Situation angepasst werden. Bei Hinzufügen
              weiterer Dienste (Analytics, Newsletter, etc.) ist die Erklärung zu erweitern.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
