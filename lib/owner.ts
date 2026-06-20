// Single source of truth for the operator of the site.
// Imported by Impressum, AGB, Datenschutz, Footer, and root metadata.
// Update here — pages re-render automatically.

export const owner = {
  // Brand the public sees
  brandName: "Power Builder",

  // Operator named on legal pages and as contract partner in the AGB.
  name: "Artur Mehmeti",
  email: "arturmehmeti777@icloud.com",
  // Optional — leave undefined if Kleinunternehmer (§ 19 UStG) or not yet registered.
  vatId: undefined as string | undefined,

  // Trainer / fitness expert whose programs are sold on the platform.
  // Same person as the operator on this site.
  talentName: "Artur Mehmeti",
} as const;
