"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { QuestionnaireData } from "@/types/questionnaire";

const STORAGE_KEY = "pb_questionnaire_pending";

type UIState =
  | "checking"
  | "no_payment"    // no PayPal token in URL — payment not verified
  | "no_data"       // token present but no questionnaire in localStorage
  | "ready"         // token + data present — ready to submit
  | "submitting"
  | "success"       // payment captured + email sent
  | "email_failed"  // payment captured but Resend failed — needs support
  | "error";        // payment verification failed or network error

interface Props {
  orderID?: string;
}

export default function PersonalizedSuccess({ orderID }: Props) {
  const [data, setData] = useState<QuestionnaireData | null>(null);
  const [uiState, setUiState] = useState<UIState>("checking");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    if (!orderID) {
      setUiState("no_payment");
      return;
    }
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        setData(JSON.parse(raw) as QuestionnaireData);
        setUiState("ready");
      } else {
        setUiState("no_data");
      }
    } catch {
      setUiState("no_data");
    }
  }, [orderID]);

  const handleSubmit = async () => {
    if (!data || !orderID) return;
    setUiState("submitting");
    try {
      const res = await fetch("/api/paypal/capture-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ orderID, questionnaireData: data }),
      });
      const json = (await res.json()) as {
        error?: string;
        paymentCaptured?: boolean;
      };
      if (!res.ok) {
        if (json.paymentCaptured) {
          // Payment was captured but email delivery failed — do NOT clear localStorage
          setUiState("email_failed");
        } else {
          setErrorMsg(json.error ?? `Server error ${res.status}`);
          setUiState("error");
        }
        return;
      }
      localStorage.removeItem(STORAGE_KEY);
      setUiState("success");
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : "Network error — please try again");
      setUiState("error");
    }
  };

  // ── Reading localStorage ─────────────────────────────────────────────────
  if (uiState === "checking") {
    return <div className="min-h-[60vh]" />;
  }

  // ── No PayPal token — user navigated here without paying ─────────────────
  if (uiState === "no_payment") {
    return (
      <>
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-yellow-600/10 border border-yellow-600/30 mb-8">
            <svg className="w-10 h-10 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
            </svg>
          </div>
          <p className="section-label mb-4">Payment Required</p>
          <h1 className="section-heading mb-6">
            Payment Not
            <br />
            <span className="text-red-600">Verified.</span>
          </h1>
          <p className="text-zinc-400 text-lg leading-relaxed max-w-lg mx-auto">
            We couldn&apos;t verify a completed payment. To activate your order,
            please complete the questionnaire and payment process.
          </p>
        </div>
        <div className="bg-brand-card border border-brand-border p-8 mb-10 text-center">
          <div className="h-0.5 bg-red-600 -mt-8 -mx-8 mb-6" />
          <p className="text-zinc-400 text-sm leading-relaxed mb-6 max-w-md mx-auto">
            If you already paid, return to the checkout page and complete the
            process there. Your questionnaire data is still saved in this browser.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/questionnaire/confirmation" className="btn-primary px-8 py-3 text-sm">
              Return to Checkout →
            </Link>
            <Link href="/questionnaire" className="btn-secondary px-8 py-3 text-sm">
              Restart Questionnaire
            </Link>
          </div>
        </div>
        <div className="text-center border-t border-brand-border pt-10">
          <p className="text-zinc-500 text-sm mb-2">Need help?</p>
          <a
            href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "contact@powerbuilder.com"}`}
            className="text-red-500 hover:text-red-400 text-sm font-medium transition-colors"
          >
            {process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "contact@powerbuilder.com"}
          </a>
        </div>
      </>
    );
  }

  // ── Token present but questionnaire not in this browser ──────────────────
  if (uiState === "no_data") {
    return (
      <>
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-yellow-600/10 border border-yellow-600/30 mb-8">
            <svg className="w-10 h-10 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
            </svg>
          </div>
          <p className="section-label mb-4">Action Required</p>
          <h1 className="section-heading mb-6">
            Profile Not
            <br />
            <span className="text-red-600">Found.</span>
          </h1>
          <p className="text-zinc-400 text-lg leading-relaxed max-w-lg mx-auto">
            Your payment is confirmed, but we couldn&apos;t find your questionnaire
            in this browser. This can happen if you paid from a different device
            or cleared your browser data.
          </p>
        </div>
        <div className="bg-brand-card border border-brand-border p-8 mb-10 text-center">
          <div className="h-0.5 bg-red-600 -mt-8 -mx-8 mb-6" />
          <p className="text-zinc-400 text-sm leading-relaxed mb-6 max-w-md mx-auto">
            Please complete the questionnaire now. Your payment is already
            confirmed — mention it in the additional notes so Artur can match
            it to your order.
          </p>
          <Link href="/questionnaire" className="btn-primary px-8 py-4">
            Complete Questionnaire →
          </Link>
        </div>
        <div className="text-center border-t border-brand-border pt-10">
          <p className="text-zinc-500 text-sm mb-2">Need help? Contact us directly:</p>
          <a
            href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "contact@powerbuilder.com"}`}
            className="text-red-500 hover:text-red-400 text-sm font-medium transition-colors"
          >
            {process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "contact@powerbuilder.com"}
          </a>
        </div>
      </>
    );
  }

  // ── Payment captured but email delivery failed ───────────────────────────
  if (uiState === "email_failed") {
    const contactEmail =
      process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "contact@powerbuilder.com";
    const mailtoHref = `mailto:${contactEmail}?subject=${encodeURIComponent(
      `Questionnaire Delivery Failed — PayPal Order ${orderID ?? ""}`
    )}&body=${encodeURIComponent(
      `Hi,\n\nMy payment was captured but my questionnaire was not delivered to the trainer.\n\nPayPal Order ID: ${orderID ?? "unknown"}\nMy email: ${data?.email ?? "unknown"}\n\nPlease send my personalized program.\n\nThank you.`
    )}`;

    return (
      <>
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-yellow-600/10 border border-yellow-600/30 mb-8">
            <svg className="w-10 h-10 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
            </svg>
          </div>
          <p className="section-label mb-4">Delivery Failed</p>
          <h1 className="section-heading mb-6">
            Payment Received.
            <br />
            <span className="text-yellow-500">Contact Support.</span>
          </h1>
          <p className="text-zinc-400 text-lg leading-relaxed max-w-xl mx-auto">
            Your €99 payment was captured successfully, but we could not
            deliver your questionnaire to the trainer. This is a technical
            issue on our end — your money is safe.
          </p>
        </div>

        <div className="bg-brand-card border border-yellow-600/30 p-8 mb-8">
          <div className="h-0.5 bg-yellow-600 -mt-8 -mx-8 mb-6" />
          <p className="text-yellow-600 text-xs font-bold uppercase tracking-widest mb-3">
            Action Required
          </p>
          <h2 className="text-white font-black text-xl uppercase tracking-tight mb-4">
            Contact Us Immediately
          </h2>
          <p className="text-zinc-400 text-sm leading-relaxed mb-6">
            Email us and we will manually process your order within 24 hours.{" "}
            <span className="text-white font-bold">Do not pay again</span> — your
            payment is confirmed.
          </p>

          <div className="bg-brand-bg border border-brand-border p-4 mb-6 text-left">
            <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-3">
              Include in your email
            </p>
            <div className="flex flex-col divide-y divide-brand-border">
              {orderID && (
                <div className="flex justify-between items-start gap-4 py-2">
                  <span className="text-zinc-500 text-xs shrink-0">PayPal Order ID</span>
                  <span className="text-zinc-300 text-xs font-mono break-all">{orderID}</span>
                </div>
              )}
              {data?.email && (
                <div className="flex justify-between items-center gap-4 py-2">
                  <span className="text-zinc-500 text-xs">Your Email</span>
                  <span className="text-zinc-300 text-xs">{data.email}</span>
                </div>
              )}
              {data?.firstName && (
                <div className="flex justify-between items-center gap-4 py-2">
                  <span className="text-zinc-500 text-xs">Your Name</span>
                  <span className="text-zinc-300 text-xs">{data.firstName} {data.lastName}</span>
                </div>
              )}
            </div>
          </div>

          <a href={mailtoHref} className="btn-primary w-full text-center px-8 py-4 block">
            Email Support Now →
          </a>
        </div>

        <div className="text-center border-t border-brand-border pt-10">
          <p className="text-zinc-500 text-sm mb-1">Support email:</p>
          <a
            href={`mailto:${contactEmail}`}
            className="text-red-500 hover:text-red-400 text-sm font-medium transition-colors"
          >
            {contactEmail}
          </a>
        </div>
      </>
    );
  }

  // ── Submitted successfully ───────────────────────────────────────────────
  if (uiState === "success") {
    return (
      <>
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-red-600/10 border border-red-600/30 mb-8">
            <svg className="w-10 h-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <p className="section-label mb-4">Questionnaire Submitted</p>
          <h1 className="section-heading mb-6">
            You&apos;re In.
            <br />
            <span className="text-red-600">Now We Build.</span>
          </h1>
          <p className="text-zinc-400 text-lg leading-relaxed max-w-xl mx-auto">
            Artur has received your full profile and will begin building your
            personalized program immediately.
          </p>
          {data?.email && (
            <p className="text-zinc-500 text-sm mt-3">
              Your program will be delivered to{" "}
              <span className="text-white font-medium">{data.email}</span>
            </p>
          )}
        </div>

        <div className="bg-brand-card border border-brand-border p-8 mb-10">
          <div className="h-0.5 bg-red-600 -mt-8 -mx-8 mb-6" />
          <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-5">
            What Happens Next
          </p>
          <div className="flex flex-col gap-5">
            {[
              {
                num: "01",
                title: "Artur Reviews Your Profile",
                desc: "Artur personally reads your questionnaire and begins building your custom training and nutrition system.",
              },
              {
                num: "02",
                title: "Program Built for You",
                desc: "Every session, rep scheme, and nutrition target is tailored exactly to your goals, equipment, and lifestyle.",
              },
              {
                num: "03",
                title: "PDF Delivered Within 48h",
                desc: data?.email
                  ? `Your program PDF is sent to ${data.email}. Open it and start on Day 1.`
                  : "Your program PDF is sent to your email address. Open it and start on Day 1.",
              },
            ].map((step, i) => (
              <div key={i} className="flex gap-4">
                <span className="text-red-600 font-black text-2xl leading-none shrink-0 opacity-50 mt-0.5">
                  {step.num}
                </span>
                <div>
                  <h3 className="text-white font-bold text-sm uppercase tracking-tight mb-1">
                    {step.title}
                  </h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center border-t border-brand-border pt-10">
          <Link href="/" className="btn-secondary text-xs">
            Back to Home
          </Link>
        </div>
      </>
    );
  }

  // ── Ready to submit (+ error retry) ─────────────────────────────────────
  const isSubmitting = uiState === "submitting";

  return (
    <>
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-red-600/10 border border-red-600/30 mb-8">
          <svg className="w-10 h-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <p className="section-label mb-4">Payment Confirmed</p>
        <h1 className="section-heading mb-6">
          Payment Received.
          <br />
          <span className="text-red-600">Submit Your Profile.</span>
        </h1>
        <p className="text-zinc-400 text-lg leading-relaxed max-w-xl mx-auto">
          {data?.firstName ? `Welcome, ${data.firstName}. ` : ""}
          Your €99 payment is confirmed. Send your questionnaire to Artur now
          to activate your order.
        </p>
        {data?.email && (
          <p className="text-zinc-500 text-sm mt-3">
            Program will be delivered to{" "}
            <span className="text-white font-medium">{data.email}</span>
          </p>
        )}
      </div>

      <div className="bg-brand-card border border-red-600/20 p-8 mb-8 text-center">
        <div className="h-0.5 bg-red-600 -mt-8 -mx-8 mb-6" />
        <p className="text-red-600 text-xs font-bold uppercase tracking-widest mb-3">
          Final Step
        </p>
        <h2 className="text-white font-black text-2xl uppercase tracking-tight mb-4">
          Submit Your Questionnaire
        </h2>
        <p className="text-zinc-400 text-sm leading-relaxed mb-6 max-w-md mx-auto">
          Your answers are saved in this browser. Clicking below verifies your
          payment and sends your profile directly to Artur.
        </p>

        {data && (
          <div className="bg-brand-bg border border-brand-border p-4 mb-6 text-left">
            <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-3">
              Your Submission
            </p>
            <div className="flex flex-col divide-y divide-brand-border">
              {[
                ["Name", `${data.firstName} ${data.lastName}`],
                ["Goal", data.mainGoal.replace(/_/g, " ")],
                ["Experience", data.experience],
                ["Training Days", `${data.trainingDaysPerWeek}x / week`],
              ].map(([label, value]) => (
                <div key={label} className="flex justify-between items-center py-2">
                  <span className="text-zinc-500 text-xs">{label}</span>
                  <span className="text-zinc-300 text-xs font-medium capitalize">{value}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        <button
          onClick={handleSubmit}
          disabled={isSubmitting}
          className="btn-primary px-10 py-4 text-base w-full sm:w-auto disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Verifying payment &amp; sending to Artur…
            </span>
          ) : (
            "Submit My Questionnaire →"
          )}
        </button>

        {uiState === "error" && (
          <p className="text-red-500 text-xs mt-3 leading-relaxed">{errorMsg}</p>
        )}
      </div>

      <div className="text-center border-t border-brand-border pt-10">
        <p className="text-zinc-600 text-xs">
          Questions?{" "}
          <a
            href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "contact@powerbuilder.com"}`}
            className="text-red-500 hover:text-red-400 transition-colors"
          >
            {process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "contact@powerbuilder.com"}
          </a>
        </p>
      </div>
    </>
  );
}
