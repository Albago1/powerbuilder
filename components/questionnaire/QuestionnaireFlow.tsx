"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import type { QuestionnaireData } from "@/types/questionnaire";
import { TOTAL_STEPS } from "@/types/questionnaire";
import { getT, type Locale } from "@/lib/translations";

const initial: QuestionnaireData = {
  age: "", heightCm: "", weightKg: "", gender: "",
  experience: "", trainingDaysPerWeek: "", gymAccess: "", benchExperience: "",
  mainGoal: "", bodyCompositionGoal: "",
  weakBodyParts: [], strongBodyParts: [], injuries: "",
  nutritionPreference: "", sleepQuality: "",
  additionalNotes: "",
  programLanguage: "",
  firstName: "", lastName: "", email: "", confirmEmail: "", instagram: "", phone: "",
};

// ─── Reusable UI pieces ────────────────────────────────────────────────────

function Label({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-zinc-300 text-sm font-semibold mb-2 uppercase tracking-wider">
      {children}
    </p>
  );
}

function ErrorMsg({ msg }: { msg?: string }) {
  if (!msg) return null;
  return <p className="text-red-500 text-xs mt-1">{msg}</p>;
}

function TextInput({
  value, onChange, placeholder, type = "text", unit,
}: {
  value: string; onChange: (v: string) => void; placeholder?: string; type?: string; unit?: string;
}) {
  return (
    <div className="relative">
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full bg-brand-bg border border-brand-border text-white placeholder-zinc-600 px-4 py-3.5 text-base focus:outline-none focus:border-red-600 transition-colors pr-12"
        inputMode={type === "number" ? "numeric" : undefined}
      />
      {unit && (
        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-600 text-sm font-bold">
          {unit}
        </span>
      )}
    </div>
  );
}

function OptionCard({
  label, sub, selected, onClick,
}: {
  label: string; sub?: string; selected: boolean; onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`p-4 border text-left transition-all duration-150 w-full ${
        selected
          ? "border-red-600 bg-red-600/10 text-white"
          : "border-brand-border bg-brand-card text-zinc-400 hover:border-zinc-500 hover:text-zinc-300"
      }`}
    >
      <span className="font-bold block text-sm">{label}</span>
      {sub && <span className="text-xs text-zinc-500 mt-0.5 block">{sub}</span>}
    </button>
  );
}

function MultiChip({
  label, checked, onChange,
}: {
  label: string; checked: boolean; onChange: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onChange}
      className={`px-3 py-2 border text-xs font-medium transition-all duration-150 ${
        checked
          ? "border-red-600 bg-red-600/10 text-white"
          : "border-brand-border text-zinc-500 hover:border-zinc-500 hover:text-zinc-300"
      }`}
    >
      {label}
    </button>
  );
}

// ─── Progress bar ──────────────────────────────────────────────────────────

function ProgressBar({ step }: { step: number }) {
  return (
    <div className="w-full bg-brand-border h-0.5">
      <div
        className="bg-red-600 h-0.5 transition-all duration-500 ease-out"
        style={{ width: `${(step / TOTAL_STEPS) * 100}%` }}
      />
    </div>
  );
}

// ─── Step components ───────────────────────────────────────────────────────

type Q = ReturnType<typeof getT>["questionnaire"];

type StepProps = {
  data: QuestionnaireData;
  errors: Record<string, string>;
  update: (f: keyof QuestionnaireData, v: string) => void;
  toggle?: (f: "weakBodyParts" | "strongBodyParts", v: string) => void;
  q: Q;
};

function StepHeading({ lead, accent, subtitle }: { lead: string; accent: string; subtitle: string }) {
  return (
    <div>
      <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight mb-1">
        {lead} <span className="text-red-600">{accent}</span>
      </h2>
      <p className="text-zinc-500 text-sm">{subtitle}</p>
    </div>
  );
}

function Step1({ data, errors, update, q }: StepProps) {
  const o = q.options.gender;
  return (
    <div className="flex flex-col gap-6">
      <StepHeading {...q.steps[1]} />
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label>{q.fields.age}</Label>
          <TextInput type="number" value={data.age} onChange={(v) => update("age", v)} placeholder={q.placeholders.age} unit={q.units.yrs} />
          <ErrorMsg msg={errors.age} />
        </div>
        <div>
          <Label>{q.fields.height}</Label>
          <TextInput type="number" value={data.heightCm} onChange={(v) => update("heightCm", v)} placeholder={q.placeholders.height} unit={q.units.cm} />
          <ErrorMsg msg={errors.heightCm} />
        </div>
        <div className="col-span-2 sm:col-span-1">
          <Label>{q.fields.weight}</Label>
          <TextInput type="number" value={data.weightKg} onChange={(v) => update("weightKg", v)} placeholder={q.placeholders.weight} unit={q.units.kg} />
          <ErrorMsg msg={errors.weightKg} />
        </div>
      </div>
      <div>
        <Label>{q.fields.gender}</Label>
        <div className="grid grid-cols-2 gap-3">
          {(["male", "female", "other", "prefer_not"] as const).map((v) => (
            <OptionCard key={v} label={o[v]} selected={data.gender === v} onClick={() => update("gender", v)} />
          ))}
        </div>
        <ErrorMsg msg={errors.gender} />
      </div>
    </div>
  );
}

function Step2({ data, errors, update, q }: StepProps) {
  return (
    <div className="flex flex-col gap-6">
      <StepHeading {...q.steps[2]} />
      <div>
        <Label>{q.fields.trainingExperience}</Label>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {(["beginner", "intermediate", "advanced"] as const).map((v) => (
            <OptionCard key={v} label={q.options.experience[v].label} sub={q.options.experience[v].sub} selected={data.experience === v} onClick={() => update("experience", v)} />
          ))}
        </div>
        <ErrorMsg msg={errors.experience} />
      </div>
      <div>
        <Label>{q.fields.trainingDaysPerWeek}</Label>
        <div className="grid grid-cols-4 gap-3">
          {["3", "4", "5", "6"].map((d) => (
            <OptionCard key={d} label={`${d}x`} selected={data.trainingDaysPerWeek === d} onClick={() => update("trainingDaysPerWeek", d)} />
          ))}
        </div>
        <ErrorMsg msg={errors.trainingDaysPerWeek} />
      </div>
      <div>
        <Label>{q.fields.gymAccess}</Label>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {(["full_gym", "home_gym", "limited"] as const).map((v) => (
            <OptionCard key={v} label={q.options.gymAccess[v].label} sub={q.options.gymAccess[v].sub} selected={data.gymAccess === v} onClick={() => update("gymAccess", v)} />
          ))}
        </div>
        <ErrorMsg msg={errors.gymAccess} />
      </div>
      <div>
        <Label>{q.fields.benchExperience}</Label>
        <div className="grid grid-cols-2 gap-3">
          {(["never", "beginner", "intermediate", "experienced"] as const).map((v) => {
            const opt = q.options.benchExperience[v];
            return <OptionCard key={v} label={opt.label} sub={opt.sub || undefined} selected={data.benchExperience === v} onClick={() => update("benchExperience", v)} />;
          })}
        </div>
        <ErrorMsg msg={errors.benchExperience} />
      </div>
    </div>
  );
}

function Step3({ data, errors, update, q }: StepProps) {
  return (
    <div className="flex flex-col gap-6">
      <StepHeading {...q.steps[3]} />
      <div>
        <Label>{q.fields.primaryGoal}</Label>
        <div className="grid grid-cols-2 gap-3">
          {(["muscle_gain", "fat_loss", "strength", "recomposition"] as const).map((v) => (
            <OptionCard key={v} label={q.options.mainGoal[v].label} sub={q.options.mainGoal[v].sub} selected={data.mainGoal === v} onClick={() => update("mainGoal", v)} />
          ))}
        </div>
        <ErrorMsg msg={errors.mainGoal} />
      </div>
      <div>
        <Label>{q.fields.bodyCompositionPhase}</Label>
        <div className="grid grid-cols-3 gap-3">
          {(["bulk", "cut", "maintain"] as const).map((v) => (
            <OptionCard key={v} label={q.options.bodyCompositionGoal[v].label} sub={q.options.bodyCompositionGoal[v].sub} selected={data.bodyCompositionGoal === v} onClick={() => update("bodyCompositionGoal", v)} />
          ))}
        </div>
        <ErrorMsg msg={errors.bodyCompositionGoal} />
      </div>
    </div>
  );
}

function Step4({ data, errors, update, toggle, q }: StepProps) {
  return (
    <div className="flex flex-col gap-6">
      <StepHeading {...q.steps[4]} />
      <div>
        <Label>{q.fields.weakBodyParts}</Label>
        <p className="text-zinc-600 text-xs mb-3">{q.fields.weakHint}</p>
        <div className="flex flex-wrap gap-2">
          {q.bodyParts.map((part) => (
            <MultiChip
              key={part}
              label={part}
              checked={data.weakBodyParts.includes(part)}
              onChange={() => toggle?.("weakBodyParts", part)}
            />
          ))}
        </div>
      </div>
      <div>
        <Label>{q.fields.strongBodyParts}</Label>
        <p className="text-zinc-600 text-xs mb-3">{q.fields.strongHint}</p>
        <div className="flex flex-wrap gap-2">
          {q.bodyParts.map((part) => (
            <MultiChip
              key={part}
              label={part}
              checked={data.strongBodyParts.includes(part)}
              onChange={() => toggle?.("strongBodyParts", part)}
            />
          ))}
        </div>
      </div>
      <div>
        <Label>{q.fields.injuries}</Label>
        <p className="text-zinc-600 text-xs mb-3">{q.fields.injuriesHint}</p>
        <textarea
          value={data.injuries}
          onChange={(e) => update("injuries", e.target.value)}
          placeholder={q.fields.injuriesPlaceholder}
          rows={3}
          className="w-full bg-brand-bg border border-brand-border text-white placeholder-zinc-600 px-4 py-3 text-sm focus:outline-none focus:border-red-600 transition-colors resize-none"
        />
        <ErrorMsg msg={errors.injuries} />
      </div>
    </div>
  );
}

function Step5({ data, errors, update, q }: StepProps) {
  return (
    <div className="flex flex-col gap-6">
      <StepHeading {...q.steps[5]} />
      <div>
        <Label>{q.fields.nutritionPreference}</Label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {(["flexible", "strict", "vegetarian", "vegan", "no_preference"] as const).map((v) => (
            <OptionCard key={v} label={q.options.nutritionPreference[v].label} sub={q.options.nutritionPreference[v].sub} selected={data.nutritionPreference === v} onClick={() => update("nutritionPreference", v)} />
          ))}
        </div>
        <ErrorMsg msg={errors.nutritionPreference} />
      </div>
      <div>
        <Label>{q.fields.sleepQuality}</Label>
        <div className="grid grid-cols-2 gap-3">
          {(["poor", "average", "good", "excellent"] as const).map((v) => (
            <OptionCard key={v} label={q.options.sleepQuality[v].label} sub={q.options.sleepQuality[v].sub} selected={data.sleepQuality === v} onClick={() => update("sleepQuality", v)} />
          ))}
        </div>
        <ErrorMsg msg={errors.sleepQuality} />
      </div>
    </div>
  );
}

function Step6({ data, update, q }: StepProps) {
  const summaryRows = [
    { label: q.summary.ageHeightWeight, value: `${data.age} ${q.units.yrs}, ${data.heightCm} ${q.units.cm}, ${data.weightKg} ${q.units.kg}` },
    { label: q.summary.gender, value: data.gender ? q.options.gender[data.gender] : "" },
    { label: q.summary.experience, value: data.experience ? q.options.experience[data.experience].label : "" },
    { label: q.summary.trainingDays, value: data.trainingDaysPerWeek ? `${data.trainingDaysPerWeek}${q.summary.daysPerWeek}` : "" },
    { label: q.summary.gym, value: data.gymAccess ? q.options.gymAccess[data.gymAccess].label : "" },
    { label: q.summary.mainGoal, value: data.mainGoal ? q.options.mainGoal[data.mainGoal].label : "" },
    { label: q.summary.phase, value: data.bodyCompositionGoal ? q.options.bodyCompositionGoal[data.bodyCompositionGoal].label : "" },
    { label: q.summary.nutrition, value: data.nutritionPreference ? q.options.nutritionPreference[data.nutritionPreference].label : "" },
    { label: q.summary.sleep, value: data.sleepQuality ? q.options.sleepQuality[data.sleepQuality].label : "" },
  ];

  return (
    <div className="flex flex-col gap-6">
      <StepHeading {...q.steps[6]} />
      <div className="bg-brand-card border border-brand-border p-5">
        <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-4">{q.fields.yourAnswers}</p>
        <div className="flex flex-col divide-y divide-brand-border">
          {summaryRows.map((row, i) => (
            <div key={i} className="flex justify-between items-center py-2.5 gap-4">
              <span className="text-zinc-500 text-xs">{row.label}</span>
              <span className="text-zinc-300 text-xs font-medium">{row.value || "—"}</span>
            </div>
          ))}
        </div>
      </div>
      <div>
        <Label>{q.fields.additionalNotes}</Label>
        <p className="text-zinc-600 text-xs mb-2">{q.fields.additionalNotesHint}</p>
        <textarea
          value={data.additionalNotes}
          onChange={(e) => update("additionalNotes", e.target.value)}
          placeholder={q.fields.additionalNotesPlaceholder}
          rows={4}
          className="w-full bg-brand-bg border border-brand-border text-white placeholder-zinc-600 px-4 py-3 text-sm focus:outline-none focus:border-red-600 transition-colors resize-none"
        />
      </div>
      <div className="bg-brand-surface border border-brand-border p-5">
        <p className="text-zinc-400 text-sm leading-relaxed">
          <span className="text-white font-bold">{q.notes.almostThereLead}</span> {q.notes.almostThereBody}
        </p>
      </div>
    </div>
  );
}

function Step7({ data, errors, update, q }: StepProps) {
  return (
    <div className="flex flex-col gap-6">
      <StepHeading {...q.steps[7]} />
      <div>
        <div className="grid grid-cols-1 gap-3">
          {(["english", "german", "albanian"] as const).map((v) => (
            <OptionCard
              key={v}
              label={q.options.programLanguage[v].label}
              sub={q.options.programLanguage[v].sub}
              selected={data.programLanguage === v}
              onClick={() => update("programLanguage", v)}
            />
          ))}
        </div>
        <ErrorMsg msg={errors.programLanguage} />
      </div>
      <div className="bg-brand-surface border border-brand-border p-5">
        <p className="text-zinc-400 text-sm leading-relaxed">
          <span className="text-white font-bold">{q.notes.languageLead}</span> {q.notes.languageBody}
        </p>
      </div>
    </div>
  );
}

function Step8({ data, errors, update, q }: StepProps) {
  return (
    <div className="flex flex-col gap-6">
      <StepHeading {...q.steps[8]} />
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label>{q.fields.firstName}</Label>
          <TextInput value={data.firstName} onChange={(v) => update("firstName", v)} placeholder={q.placeholders.firstName} />
          <ErrorMsg msg={errors.firstName} />
        </div>
        <div>
          <Label>{q.fields.lastName}</Label>
          <TextInput value={data.lastName} onChange={(v) => update("lastName", v)} placeholder={q.placeholders.lastName} />
          <ErrorMsg msg={errors.lastName} />
        </div>
      </div>
      <div>
        <Label>{q.fields.email}</Label>
        <TextInput type="email" value={data.email} onChange={(v) => update("email", v)} placeholder={q.placeholders.email} />
        <ErrorMsg msg={errors.email} />
      </div>
      <div>
        <Label>{q.fields.confirmEmail}</Label>
        <TextInput type="email" value={data.confirmEmail} onChange={(v) => update("confirmEmail", v)} placeholder={q.placeholders.email} />
        <ErrorMsg msg={errors.confirmEmail} />
      </div>
      <div className="border-t border-brand-border pt-4">
        <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-4">{q.fields.optional}</p>
        <div className="flex flex-col gap-4">
          <div>
            <Label>{q.fields.instagram}</Label>
            <TextInput value={data.instagram} onChange={(v) => update("instagram", v)} placeholder={q.placeholders.instagram} />
          </div>
          <div>
            <Label>{q.fields.phone}</Label>
            <TextInput type="tel" value={data.phone} onChange={(v) => update("phone", v)} placeholder={q.placeholders.phone} />
          </div>
        </div>
      </div>
      <div className="bg-brand-surface border border-brand-border p-5">
        <p className="text-zinc-400 text-sm leading-relaxed">
          <span className="text-white font-bold">{q.notes.finalLead}</span> {q.notes.finalBody}
        </p>
      </div>
    </div>
  );
}

// ─── Main component ─────────────────────────────────────────────────────────

export default function QuestionnaireFlow({ locale }: { locale: Locale }) {
  const q = getT(locale).questionnaire;
  const [step, setStep] = useState(1);
  const [data, setData] = useState<QuestionnaireData>(initial);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const router = useRouter();

  const update = (field: keyof QuestionnaireData, value: string) => {
    setData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const toggle = (field: "weakBodyParts" | "strongBodyParts", part: string) => {
    setData((prev) => ({
      ...prev,
      [field]: prev[field].includes(part)
        ? prev[field].filter((p) => p !== part)
        : [...prev[field], part],
    }));
  };

  const validate = (): boolean => {
    const e: Record<string, string> = {};
    if (step === 1) {
      if (!data.age || Number(data.age) < 13 || Number(data.age) > 80) e.age = q.errors.age;
      if (!data.heightCm) e.heightCm = q.errors.required;
      if (!data.weightKg) e.weightKg = q.errors.required;
      if (!data.gender) e.gender = q.errors.selectOption;
    }
    if (step === 2) {
      if (!data.experience) e.experience = q.errors.selectExperience;
      if (!data.trainingDaysPerWeek) e.trainingDaysPerWeek = q.errors.selectDays;
      if (!data.gymAccess) e.gymAccess = q.errors.selectGym;
      if (!data.benchExperience) e.benchExperience = q.errors.selectBench;
    }
    if (step === 3) {
      if (!data.mainGoal) e.mainGoal = q.errors.selectGoal;
      if (!data.bodyCompositionGoal) e.bodyCompositionGoal = q.errors.selectPhase;
    }
    if (step === 4) {
      if (!data.injuries.trim()) e.injuries = q.errors.injuriesRequired;
    }
    if (step === 5) {
      if (!data.nutritionPreference) e.nutritionPreference = q.errors.selectOption;
      if (!data.sleepQuality) e.sleepQuality = q.errors.selectOption;
    }
    if (step === 7) {
      if (!data.programLanguage) e.programLanguage = q.errors.selectLanguage;
    }
    if (step === 8) {
      if (!data.firstName.trim()) e.firstName = q.errors.firstNameRequired;
      if (!data.lastName.trim()) e.lastName = q.errors.lastNameRequired;
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!data.email.trim()) e.email = q.errors.emailRequired;
      else if (!emailRegex.test(data.email.trim())) e.email = q.errors.emailInvalid;
      if (!data.confirmEmail.trim()) e.confirmEmail = q.errors.confirmEmailRequired;
      else if (data.email.trim() !== data.confirmEmail.trim()) e.confirmEmail = q.errors.emailMismatch;
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const next = () => {
    if (validate()) {
      setStep((s) => Math.min(s + 1, TOTAL_STEPS));
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const back = () => {
    setStep((s) => Math.max(s - 1, 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubmit = () => {
    if (!validate()) return;
    setSubmitting(true);
    try {
      localStorage.setItem("pb_questionnaire_pending", JSON.stringify(data));
      router.push(`/questionnaire/confirmation?email=${encodeURIComponent(data.email)}`);
    } catch {
      setSubmitting(false);
      alert(q.errors.submitFailed);
    }
  };

  const stepProps: StepProps = { data, errors, update, toggle, q };

  return (
    <div className="min-h-screen bg-brand-bg">
      {/* Sticky progress header */}
      <div className="sticky top-16 z-40 bg-brand-bg border-b border-brand-border">
        <ProgressBar step={step} />
        <div className="max-w-2xl mx-auto px-4 py-3 flex items-center justify-between">
          <span className="text-zinc-600 text-xs">
            {q.progress.stepLabel} {step} {q.progress.of} {TOTAL_STEPS}
          </span>
          <span className="text-zinc-400 text-xs font-bold uppercase tracking-widest">
            {q.stepTitles[step as 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8]}
          </span>
        </div>
      </div>

      {/* Step content */}
      <div className="max-w-2xl mx-auto px-4 py-12 md:py-16">
        <div key={step} className="animate-fade-up">
          {step === 1 && <Step1 {...stepProps} />}
          {step === 2 && <Step2 {...stepProps} />}
          {step === 3 && <Step3 {...stepProps} />}
          {step === 4 && <Step4 {...stepProps} />}
          {step === 5 && <Step5 {...stepProps} />}
          {step === 6 && <Step6 {...stepProps} />}
          {step === 7 && <Step7 {...stepProps} />}
          {step === 8 && <Step8 {...stepProps} />}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-10 pt-8 border-t border-brand-border">
          {step > 1 ? (
            <button onClick={back} className="btn-secondary text-xs px-6 py-3">
              {q.nav.back}
            </button>
          ) : (
            <Link href="/personalized" className="text-zinc-600 text-sm hover:text-zinc-400 transition-colors">
              {q.nav.cancel}
            </Link>
          )}

          {step < TOTAL_STEPS ? (
            <button onClick={next} className="btn-primary text-xs px-8 py-3">
              {q.nav.continue}
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              disabled={submitting}
              className="btn-primary text-xs px-8 py-3 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {submitting ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  {q.nav.submitting}
                </span>
              ) : (
                q.nav.submit
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
