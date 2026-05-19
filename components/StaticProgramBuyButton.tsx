"use client";

import { useState } from "react";

type State = "idle" | "loading" | "error";

interface Props {
  slug: string;
  price: number;
  className?: string;
}

export default function StaticProgramBuyButton({ slug, price, className }: Props) {
  const [state, setState] = useState<State>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handlePay = async () => {
    setState("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/paypal/create-static-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slug }),
      });
      const data = (await res.json()) as { approvalUrl?: string; error?: string };

      if (!res.ok || !data.approvalUrl) {
        throw new Error(data.error ?? `Server error ${res.status}`);
      }

      window.location.href = data.approvalUrl;
    } catch (err) {
      setErrorMsg(
        err instanceof Error ? err.message : "Could not connect to PayPal — please try again"
      );
      setState("error");
    }
  };

  return (
    <div className={`flex flex-col items-center gap-3 ${className ?? ""}`}>
      <button
        onClick={handlePay}
        disabled={state === "loading"}
        className="btn-primary px-10 py-4 text-base w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {state === "loading" ? (
          <span className="flex items-center gap-2 justify-center">
            <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Connecting to PayPal…
          </span>
        ) : (
          `Pay €${price} via PayPal →`
        )}
      </button>

      {state === "error" && (
        <p className="text-red-500 text-xs max-w-xs text-center leading-relaxed">{errorMsg}</p>
      )}

      <p className="text-zinc-600 text-xs">Secure checkout · Verified by PayPal</p>
    </div>
  );
}
