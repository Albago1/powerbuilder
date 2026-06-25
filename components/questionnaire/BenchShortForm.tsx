"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import type { QuestionnaireData } from "@/types/questionnaire";
import { getT, type Locale } from "@/lib/translations";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function buildPayload(name: string, email: string): QuestionnaireData {
  return {
    program: "bench-press",
    age: "", heightCm: "", weightKg: "", gender: "",
    experience: "", trainingDaysPerWeek: "", gymAccess: "", benchExperience: "",
    mainGoal: "", bodyCompositionGoal: "",
    weakBodyParts: [], strongBodyParts: [], injuries: "",
    nutritionPreference: "", sleepQuality: "",
    additionalNotes: "",
    programLanguage: "",
    firstName: name.trim(), lastName: "",
    email: email.trim(), confirmEmail: email.trim(),
    instagram: "", phone: "",
  };
}

export default function BenchShortForm({ locale }: { locale: Locale }) {
  const t = getT(locale).questionnaire;
  const b = t.bench;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});
  const [submitting, setSubmitting] = useState(false);
  const router = useRouter();

  const validate = () => {
    const e: { name?: string; email?: string } = {};
    if (!name.trim()) e.name = b.errors.nameRequired;
    if (!email.trim()) e.email = t.errors.emailRequired;
    else if (!EMAIL_REGEX.test(email.trim())) e.email = t.errors.emailInvalid;
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    try {
      const res = await fetch("/api/questionnaire", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(buildPayload(name, email)),
      });
      if (!res.ok) {
        const json = (await res.json().catch(() => ({}))) as { error?: string };
        throw new Error(json.error ?? `Server error ${res.status}`);
      }
      router.push(
        `/questionnaire/confirmation?email=${encodeURIComponent(email.trim())}&program=bench-press`
      );
    } catch (err) {
      setSubmitting(false);
      alert(err instanceof Error ? err.message : t.errors.submitFailed);
    }
  };

  return (
    <div className="min-h-screen bg-brand-bg pt-16">
      <div className="max-w-xl mx-auto px-4 py-16 md:py-24">
        <div className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-black uppercase tracking-tight mb-2">
            {b.heading.lead} <span className="text-red-600">{b.heading.accent}</span>
          </h1>
          <p className="text-zinc-500 text-sm leading-relaxed">{b.heading.subtitle}</p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div>
            <p className="text-zinc-300 text-sm font-semibold mb-2 uppercase tracking-wider">
              {b.fields.name}
            </p>
            <input
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                setErrors((prev) => ({ ...prev, name: undefined }));
              }}
              placeholder={b.placeholders.name}
              autoComplete="name"
              className="w-full bg-brand-bg border border-brand-border text-white placeholder-zinc-600 px-4 py-3.5 text-base focus:outline-none focus:border-red-600 transition-colors"
            />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
          </div>

          <div>
            <p className="text-zinc-300 text-sm font-semibold mb-2 uppercase tracking-wider">
              {b.fields.email}
            </p>
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setErrors((prev) => ({ ...prev, email: undefined }));
              }}
              placeholder={b.placeholders.email}
              autoComplete="email"
              inputMode="email"
              className="w-full bg-brand-bg border border-brand-border text-white placeholder-zinc-600 px-4 py-3.5 text-base focus:outline-none focus:border-red-600 transition-colors"
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>

          <div className="bg-brand-surface border border-brand-border p-5">
            <p className="text-zinc-400 text-sm leading-relaxed">
              <span className="text-white font-bold">{b.note.lead}</span> {b.note.body}
            </p>
          </div>

          <div className="flex items-center justify-between pt-2">
            <Link
              href="/programs/bench-press"
              className="text-zinc-600 text-sm hover:text-zinc-400 transition-colors"
            >
              {b.cancel}
            </Link>
            <button
              type="submit"
              disabled={submitting}
              className="btn-primary text-xs px-8 py-3 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {submitting ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  {b.submitting}
                </span>
              ) : (
                b.submit
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
