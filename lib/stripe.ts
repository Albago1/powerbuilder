// TODO: Replace with your actual Stripe Secret Key
// Set STRIPE_SECRET_KEY in your .env.local file
// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: "2024-12-18.acacia" });

export const STRIPE_PRICE_ID = "price_REPLACE_WITH_YOUR_STRIPE_PRICE_ID";

export async function createCheckoutSession(): Promise<{ url: string }> {
  // TODO: Install Stripe SDK — run: npm install stripe
  // Then replace this function with the real Stripe implementation below:
  //
  // const session = await stripe.checkout.sessions.create({
  //   payment_method_types: ["card"],
  //   line_items: [
  //     {
  //       price: STRIPE_PRICE_ID,
  //       quantity: 1,
  //     },
  //   ],
  //   mode: "payment",
  //   success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success`,
  //   cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/program`,
  //   billing_address_collection: "required",
  //   metadata: {
  //     product: "8-week-powerbuilder-program",
  //   },
  // });
  // return { url: session.url! };

  // Placeholder — remove when Stripe is configured
  return { url: "#stripe-not-configured" };
}
