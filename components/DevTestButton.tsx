"use client";

import { useState } from "react";

type State = "idle" | "loading" | "success" | "error";

export default function DevTestButton() {
  const [state, setState] = useState<State>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleClick = async () => {
    setState("loading");
    setErrorMsg("");

    let data: unknown;
    try {
      const stored = sessionStorage.getItem("dev_questionnaire_data");
      if (!stored) {
        setErrorMsg(
          "No questionnaire data in session. Complete the questionnaire first, then return here."
        );
        setState("error");
        return;
      }
      data = JSON.parse(stored);
    } catch {
      setErrorMsg("Failed to parse questionnaire data from sessionStorage.");
      setState("error");
      return;
    }

    try {
      const res = await fetch("/api/questionnaire", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const text = await res.text();
        setErrorMsg(`API returned ${res.status}: ${text}`);
        setState("error");
        return;
      }

      setState("success");
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : "Unknown fetch error");
      setState("error");
    }
  };

  return (
    <div className="border border-dashed border-yellow-600/60 bg-yellow-600/5 p-4 mt-6">
      <p className="text-yellow-600 text-xs font-bold uppercase tracking-widest mb-3">
        Dev Only — Not visible in production
      </p>
      <button
        onClick={handleClick}
        disabled={state === "loading" || state === "success"}
        className="w-full border border-yellow-600 text-yellow-600 text-xs font-bold uppercase tracking-wider px-4 py-3 hover:bg-yellow-600/10 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {state === "loading" ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin w-3 h-3" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Sending…
          </span>
        ) : state === "success" ? (
          "Email sent — check trainer inbox"
        ) : (
          "DEV TEST: Send questionnaire email without payment"
        )}
      </button>
      {state === "error" && (
        <p className="text-red-500 text-xs mt-2 leading-relaxed">{errorMsg}</p>
      )}
      {state === "success" && (
        <p className="text-yellow-600/70 text-xs mt-2">
          Check server logs and the trainer inbox for the submission.
        </p>
      )}
    </div>
  );
}
