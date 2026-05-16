"use client";

// ============================================================
// PAYPAL BUTTON
// ============================================================
// To activate real payments, update the paypalLink in
// lib/programs.ts to your actual PayPal payment URL.
//
// HOW TO CREATE A PAYPAL PAYMENT LINK:
//   Option A — PayPal Payment Link (recommended for MVP):
//     1. Go to paypal.com → "Pay & Get Paid" → "Payment Buttons"
//     2. Create a "Buy Now" button for each product
//     3. Copy the hosted page URL (starts with paypal.com/ncp/payment/...)
//     4. Paste it into lib/programs.ts → paypalLink field
//
//   Option B — PayPal.me (simplest):
//     e.g. https://paypal.me/YourName/49EUR
//     Works instantly, no setup required.
//
//   Option C — Advanced SDK (@paypal/react-paypal-js):
//     For full control over the payment flow.
//     See: https://paypal.github.io/react-paypal-js/
//
// PAYPAL RETURN/CANCEL URLS (configure in PayPal dashboard):
//   Return URL (success): https://yoursite.com/programs/success
//   Cancel URL:           https://yoursite.com/programs/cancel
// ============================================================

interface PayPalButtonProps {
  price: number;
  productName: string;
  paypalLink?: string;
  className?: string;
}

export default function PayPalButton({
  price,
  productName,
  paypalLink,
  className = "",
}: PayPalButtonProps) {
  const isLive = paypalLink?.startsWith("http");
  const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "contact@powerbuilder.com";

  const mailtoHref = `mailto:${contactEmail}?subject=${encodeURIComponent(
    `Purchase: ${productName}`
  )}&body=${encodeURIComponent(
    `Hi, I would like to purchase the ${productName} (€${price}).\n\nPlease send me payment instructions.`
  )}`;

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {isLive ? (
        <a
          href={paypalLink}
          className="btn-primary w-full justify-center"
          rel="noopener noreferrer"
        >
          Buy Now — €{price}
        </a>
      ) : (
        <a
          href={mailtoHref}
          className="btn-primary w-full justify-center"
        >
          Order Now — €{price}
        </a>
      )}
      <p className="text-zinc-600 text-xs text-center">
        {isLive
          ? "Secure payment via PayPal · Instant PDF delivery"
          : "Click to order via email · PDF delivered within 24h"}
      </p>
    </div>
  );
}
