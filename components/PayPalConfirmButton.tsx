"use client";

// ============================================================
// PAYPAL CONFIRM BUTTON — Personalized Program (€99)
// ============================================================
// Calls /api/paypal/create-order to create a PayPal order,
// then redirects the user to the PayPal approval page.
//
// After payment, PayPal returns the user to:
//   /programs/success?product=personalized&token={orderID}
//
// The success page then calls /api/paypal/capture-order to
// verify the payment server-side before sending any email.
// ============================================================

import { useId, useState } from "react";

type State = "idle" | "loading" | "error";

interface Props {
  consentLabel: string;
  consentRequiredMessage: string;
  consentAriaLabel: string;
  payPrefix: string;
  paySuffix: string;
  connectingLabel: string;
  secureNote: string;
  errorFallback: string;
}

export default function PayPalConfirmButton({
  consentLabel,
  consentRequiredMessage,
  consentAriaLabel,
  payPrefix,
  paySuffix,
  connectingLabel,
  secureNote,
  errorFallback,
}: Props) {
  const [state, setState] = useState<State>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [consented, setConsented] = useState(false);
  const checkboxId = useId();

  const handlePay = async () => {
    if (!consented) {
      setErrorMsg(consentRequiredMessage);
      setState("error");
      return;
    }
    setState("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/paypal/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ consented: true }),
      });
      const data = (await res.json()) as { approvalUrl?: string; error?: string };

      if (!res.ok || !data.approvalUrl) {
        throw new Error(data.error ?? `Server error ${res.status}`);
      }

      window.location.href = data.approvalUrl;
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : errorFallback);
      setState("error");
    }
  };

  const disabled = state === "loading" || !consented;

  return (
    <div className="flex flex-col items-stretch gap-4 max-w-md mx-auto">
      <label
        htmlFor={checkboxId}
        className="flex items-start gap-3 cursor-pointer text-zinc-400 text-xs leading-relaxed text-left select-none"
      >
        <input
          id={checkboxId}
          type="checkbox"
          checked={consented}
          onChange={(e) => {
            setConsented(e.target.checked);
            if (state === "error") {
              setState("idle");
              setErrorMsg("");
            }
          }}
          aria-label={consentAriaLabel}
          className="mt-0.5 w-4 h-4 accent-red-600 cursor-pointer flex-shrink-0"
        />
        <span>{consentLabel}</span>
      </label>

      <button
        onClick={handlePay}
        disabled={disabled}
        className="btn-primary px-10 py-4 text-base justify-center disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {state === "loading" ? (
          <span className="flex items-center gap-2 justify-center">
            <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            {connectingLabel}
          </span>
        ) : (
          `${payPrefix} €99 ${paySuffix}`
        )}
      </button>

      {state === "error" && (
        <p className="text-red-500 text-xs leading-relaxed text-center">{errorMsg}</p>
      )}

      <p className="text-zinc-600 text-xs text-center">{secureNote}</p>
    </div>
  );
}
