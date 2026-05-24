// Single source of truth for the legally responsible operator of the site.
// Imported by Impressum, AGB, Datenschutz, Footer, and root metadata.
// Update here — pages re-render automatically.

export const owner = {
  // Brand the public sees
  brandName: "Power Builder",

  // Merchant of Record — the natural person who legally operates the site,
  // contracts with customers, and receives payments. Cited in Impressum
  // (§ 5 DDG) and named as Anbieter throughout the AGB.
  name: "Enrik Gani",
  addressStreet: "Grünhofer Weg 27",
  addressCity: "13581 Berlin",
  addressCountry: "Deutschland",
  email: "enrikgani77@gmail.com",
  // Optional — leave undefined if Kleinunternehmer (§ 19 UStG) or not yet registered.
  vatId: undefined as string | undefined,

  // Hired talent — fitness expert whose programs are sold on the platform.
  // No legal ownership or liability; named only in marketing context.
  talentName: "Artur Mehmeti",
} as const;

export const ownerFullAddress = `${owner.addressStreet}, ${owner.addressCity}, ${owner.addressCountry}`;
