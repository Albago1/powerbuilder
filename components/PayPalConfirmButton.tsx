"use client";

// ============================================================
// PAYPAL CONFIRM BUTTON — Personalized Program (€99)
// ============================================================
// Shown on /questionnaire/confirmation after form submission.
//
// TO ACTIVATE:
//   1. Create a PayPal payment link for €99
//   2. Add to .env.local: NEXT_PUBLIC_PAYPAL_PERSONALIZED_LINK=https://...
//   3. Redeploy — the button will automatically use the real link.
//
// Until configured, falls back to an order-by-email flow.
// ============================================================

export default function PayPalConfirmButton() {
  const paypalLink = process.env.NEXT_PUBLIC_PAYPAL_PERSONALIZED_LINK;
  const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "contact@powerbuilder.com";
  const isLive = paypalLink?.startsWith("http");

  const mailtoHref = `mailto:${contactEmail}?subject=${encodeURIComponent(
    "Personalized Program Payment — €99"
  )}&body=${encodeURIComponent(
    "Hi, I have completed the questionnaire and would like to pay for my Personalized Training & Nutrition System (€99).\n\nPlease send me payment instructions."
  )}`;

  return (
    <div className="flex flex-col items-center gap-3">
      {isLive ? (
        <a
          href={paypalLink}
          className="btn-primary px-10 py-4 text-base"
          rel="noopener noreferrer"
        >
          Pay €99 via PayPal →
        </a>
      ) : (
        <a
          href={mailtoHref}
          className="btn-primary px-10 py-4 text-base"
        >
          Complete Order via Email →
        </a>
      )}
      <p className="text-zinc-600 text-xs">
        {isLive
          ? "Secure checkout via PayPal · Your data stays private"
          : "We'll reply within a few hours with payment instructions"}
      </p>
    </div>
  );
}
