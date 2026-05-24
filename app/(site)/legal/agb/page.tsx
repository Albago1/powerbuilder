import type { Metadata } from "next";
import { owner, ownerFullAddress } from "@/lib/owner";

export const metadata: Metadata = {
  title: `AGB | ${owner.brandName}`,
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
              § 1 Geltungsbereich und Anbieter
            </h2>
            <p>
              Diese Allgemeinen Geschäftsbedingungen (nachfolgend „AGB&ldquo;)
              gelten für alle Verträge über den Kauf digitaler Produkte, die
              über die Website {owner.brandName} (powerbuilder.vercel.app)
              zwischen dem nachfolgend genannten Anbieter und dem Kunden
              abgeschlossen werden.
            </p>
            <p className="mt-3">
              <strong className="text-zinc-300">Anbieter und Vertragspartner:</strong>
              <br />
              {owner.name}
              <br />
              {ownerFullAddress}
              <br />
              E-Mail:{" "}
              <a
                href={`mailto:${owner.email}`}
                className="text-red-500 hover:text-red-400"
              >
                {owner.email}
              </a>
            </p>
            <p className="mt-3">
              Der Kaufvertrag kommt ausschließlich zwischen dem Kunden und{" "}
              {owner.name} zustande. Die auf der Website angebotenen
              Trainingsprogramme wurden vom Fitnessexperten{" "}
              {owner.talentName} konzipiert. {owner.talentName} ist nicht
              Vertragspartner und übernimmt keine vertraglichen Pflichten
              gegenüber dem Kunden.
            </p>
          </div>

          <div>
            <h2 className="text-white font-bold text-base uppercase tracking-widest mb-3">
              § 2 Vertragsgegenstand
            </h2>
            <p>Gegenstand des Vertrages ist der Kauf eines der folgenden digitalen Produkte:</p>
            <ul className="mt-3 ml-6 list-disc flex flex-col gap-2">
              <li>
                <strong className="text-zinc-300">Personalized Training &amp; Nutrition System (€99)</strong>{" "}
                — individuelles, auf den Fragebogen des Kunden zugeschnittenes
                Trainings- und Ernährungsprogramm, das nach Zahlungseingang
                innerhalb von 48 Stunden erstellt und an die vom Kunden
                angegebene E-Mail-Adresse übermittelt wird.
              </li>
              <li>
                <strong className="text-zinc-300">6 Week Bench Press Program (€49)</strong>{" "}
                — vorgefertigtes Trainingsprogramm im PDF-Format, sofortiger
                Download nach erfolgreicher Zahlung.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-white font-bold text-base uppercase tracking-widest mb-3">
              § 3 Vertragsschluss
            </h2>
            <p>
              Die Darstellung der Produkte auf der Website stellt kein
              rechtlich bindendes Angebot dar, sondern eine unverbindliche
              Aufforderung zur Bestellung. Durch Klick auf den Kaufen-Button
              und Abschluss des Bezahlvorgangs gibt der Kunde ein verbindliches
              Angebot zum Kauf gegenüber {owner.name} ab. Der Vertrag kommt mit
              Bestätigung des Zahlungseingangs durch den Zahlungsdienstleister
              PayPal und anschließender Bereitstellung des digitalen Produkts
              (Download-Link bzw. E-Mail) zustande.
            </p>
          </div>

          <div>
            <h2 className="text-white font-bold text-base uppercase tracking-widest mb-3">
              § 4 Widerrufsrecht &amp; Erlöschen
            </h2>
            <p>
              Verbraucher haben grundsätzlich ein 14-tägiges Widerrufsrecht
              nach § 355 BGB. Bei digitalen Inhalten, die nicht auf einem
              körperlichen Datenträger geliefert werden, erlischt das
              Widerrufsrecht gemäß § 356 Abs. 5 BGB, wenn der Kunde
            </p>
            <ul className="mt-3 ml-6 list-disc flex flex-col gap-2">
              <li>ausdrücklich zugestimmt hat, dass der Anbieter mit der Vertragsausführung vor Ablauf der Widerrufsfrist beginnt, und</li>
              <li>seine Kenntnis davon bestätigt hat, dass durch seine Zustimmung mit Beginn der Vertragsausführung sein Widerrufsrecht erlischt.</li>
            </ul>
            <p className="mt-3">
              Beide Bestätigungen werden beim Abschluss des Kaufvorgangs
              ausdrücklich per Checkbox eingeholt. Bei technischen Problemen
              mit der Lieferung wenden Sie sich an:{" "}
              <a
                href={`mailto:${owner.email}`}
                className="text-red-500 hover:text-red-400"
              >
                {owner.email}
              </a>
            </p>
          </div>

          <div>
            <h2 className="text-white font-bold text-base uppercase tracking-widest mb-3">
              § 5 Preise &amp; Zahlung
            </h2>
            <p>
              Alle Preise verstehen sich als Endpreise in Euro (€). Gemäß § 19
              UStG (Kleinunternehmerregelung) wird keine Umsatzsteuer berechnet
              und in den Preisen nicht ausgewiesen. Da es sich um ausschließlich
              digital lieferbare Produkte handelt, fallen keine Versandkosten
              an. Die Zahlung erfolgt über PayPal (PayPal-Konto, Kreditkarte als
              Gast-Zahlung, SEPA-Lastschrift sowie weitere von PayPal angebotene
              Zahlungsmethoden). Empfänger der Zahlung ist ausschließlich{" "}
              {owner.name}.
            </p>
          </div>

          <div>
            <h2 className="text-white font-bold text-base uppercase tracking-widest mb-3">
              § 6 Lieferung
            </h2>
            <p>
              Die Lieferung erfolgt ausschließlich digital. Vorgefertigte
              Trainingsprogramme (PDFs) werden unmittelbar nach erfolgreicher
              Zahlung per Download-Link bereitgestellt. Das personalisierte
              Trainings- &amp; Ernährungssystem wird innerhalb von 48 Stunden
              nach Zahlungseingang erstellt und per E-Mail an die vom Kunden im
              Fragebogen angegebene Adresse versendet.
            </p>
          </div>

          <div>
            <h2 className="text-white font-bold text-base uppercase tracking-widest mb-3">
              § 7 Nutzungsrecht &amp; Urheberrecht
            </h2>
            <p>
              Mit dem Kauf erhält der Kunde ein einfaches, nicht
              ausschließliches, nicht übertragbares Nutzungsrecht am gekauften
              Produkt für den persönlichen, nicht-kommerziellen Gebrauch. Die
              Vervielfältigung, Weitergabe, öffentliche Zugänglichmachung oder
              kommerzielle Nutzung der Inhalte (insbesondere PDFs,
              personalisierte Pläne, Texte, Bilder) ist ohne ausdrückliche
              schriftliche Zustimmung von {owner.name} nicht gestattet. Alle
              Inhalte sind urheberrechtlich geschützt.
            </p>
          </div>

          <div>
            <h2 className="text-white font-bold text-base uppercase tracking-widest mb-3">
              § 8 Haftungsausschluss &amp; Gesundheitshinweis
            </h2>
            <p>
              Die angebotenen Trainings- und Ernährungsinhalte ersetzen keine
              medizinische, physiotherapeutische oder ernährungsberatende
              Beratung. Der Kunde verpflichtet sich, vor Beginn eines neuen
              Trainings- oder Ernährungsprogramms einen Arzt zu konsultieren,
              insbesondere bei Vorerkrankungen, Verletzungen, Schwangerschaft
              oder anderen gesundheitlichen Einschränkungen. Die Ausführung
              der Übungen erfolgt auf eigenes Risiko. Weder {owner.name} noch{" "}
              {owner.talentName} haften für Schäden, die aus der Anwendung der
              Inhalte entstehen, soweit nicht eine Haftung nach den
              gesetzlichen Vorschriften zwingend vorgeschrieben ist (insb.
              Vorsatz, grobe Fahrlässigkeit, Verletzung von Leben, Körper und
              Gesundheit).
            </p>
          </div>

          <div>
            <h2 className="text-white font-bold text-base uppercase tracking-widest mb-3">
              § 9 Anwendbares Recht &amp; Gerichtsstand
            </h2>
            <p>
              Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss
              des UN-Kaufrechts. Gegenüber Verbrauchern gilt diese Rechtswahl
              nur insoweit, als nicht der gewährte Schutz durch zwingende
              Bestimmungen des Rechts des Staates, in dem der Verbraucher
              seinen gewöhnlichen Aufenthalt hat, entzogen wird.
            </p>
          </div>

          <div>
            <h2 className="text-white font-bold text-base uppercase tracking-widest mb-3">
              § 10 Salvatorische Klausel
            </h2>
            <p>
              Sollten einzelne Bestimmungen dieser AGB ganz oder teilweise
              unwirksam sein oder werden, bleibt die Wirksamkeit der übrigen
              Bestimmungen unberührt.
            </p>
          </div>

          <div className="border-t border-brand-border pt-6">
            <p className="text-zinc-600 text-xs">
              Stand:{" "}
              {new Date().toLocaleDateString("de-DE", {
                month: "long",
                year: "numeric",
              })}
              . Diese AGB sind ein Entwurf und müssen vor dem Launch durch
              einen Rechtsanwalt geprüft werden.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
