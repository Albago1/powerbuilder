"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import type { QuestionnaireData } from "@/types/questionnaire";
import { TOTAL_STEPS, STEP_TITLES } from "@/types/questionnaire";

const BODY_PARTS = [
  "Chest", "Upper Back", "Lower Back", "Shoulders",
  "Biceps", "Triceps", "Forearms", "Core / Abs",
  "Quads", "Hamstrings", "Glutes", "Calves",
];

const initial: QuestionnaireData = {
  age: "", heightCm: "", weightKg: "", gender: "",
  experience: "", trainingDaysPerWeek: "", gymAccess: "", benchExperience: "",
  mainGoal: "", bodyCompositionGoal: "",
  weakBodyParts: [], strongBodyParts: [], injuries: "",
  nutritionPreference: "", sleepQuality: "",
  additionalNotes: "",
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

function Error({ msg }: { msg?: string }) {
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

type StepProps = {
  data: QuestionnaireData;
  errors: Record<string, string>;
  update: (f: keyof QuestionnaireData, v: string) => void;
  toggle?: (f: "weakBodyParts" | "strongBodyParts", v: string) => void;
};

function Step1({ data, errors, update }: StepProps) {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight mb-1">
          Your <span className="text-red-600">Profile</span>
        </h2>
        <p className="text-zinc-500 text-sm">Basic information to personalize your program.</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label>Age</Label>
          <TextInput type="number" value={data.age} onChange={(v) => update("age", v)} placeholder="25" unit="yrs" />
          <Error msg={errors.age} />
        </div>
        <div>
          <Label>Height</Label>
          <TextInput type="number" value={data.heightCm} onChange={(v) => update("heightCm", v)} placeholder="178" unit="cm" />
          <Error msg={errors.heightCm} />
        </div>
        <div className="col-span-2 sm:col-span-1">
          <Label>Weight</Label>
          <TextInput type="number" value={data.weightKg} onChange={(v) => update("weightKg", v)} placeholder="80" unit="kg" />
          <Error msg={errors.weightKg} />
        </div>
      </div>

      <div>
        <Label>Gender</Label>
        <div className="grid grid-cols-2 gap-3">
          {[
            { label: "Male", value: "male" },
            { label: "Female", value: "female" },
            { label: "Other", value: "other" },
            { label: "Prefer not to say", value: "prefer_not" },
          ].map((o) => (
            <OptionCard key={o.value} label={o.label} selected={data.gender === o.value} onClick={() => update("gender", o.value)} />
          ))}
        </div>
        <Error msg={errors.gender} />
      </div>
    </div>
  );
}

function Step2({ data, errors, update }: StepProps) {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight mb-1">
          Your <span className="text-red-600">Training</span>
        </h2>
        <p className="text-zinc-500 text-sm">Your current training background and setup.</p>
      </div>

      <div>
        <Label>Training Experience</Label>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            { label: "Beginner", sub: "< 1 year consistent", value: "beginner" },
            { label: "Intermediate", sub: "1–3 years", value: "intermediate" },
            { label: "Advanced", sub: "3+ years", value: "advanced" },
          ].map((o) => (
            <OptionCard key={o.value} label={o.label} sub={o.sub} selected={data.experience === o.value} onClick={() => update("experience", o.value)} />
          ))}
        </div>
        <Error msg={errors.experience} />
      </div>

      <div>
        <Label>Training Days Per Week</Label>
        <div className="grid grid-cols-4 gap-3">
          {["3", "4", "5", "6"].map((d) => (
            <OptionCard key={d} label={`${d}x`} selected={data.trainingDaysPerWeek === d} onClick={() => update("trainingDaysPerWeek", d)} />
          ))}
        </div>
        <Error msg={errors.trainingDaysPerWeek} />
      </div>

      <div>
        <Label>Gym Access</Label>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            { label: "Full Gym", sub: "Barbell, rack, cables", value: "full_gym" },
            { label: "Home Gym", sub: "Barbell or dumbbells", value: "home_gym" },
            { label: "Limited", sub: "Dumbbells / machines only", value: "limited" },
          ].map((o) => (
            <OptionCard key={o.value} label={o.label} sub={o.sub} selected={data.gymAccess === o.value} onClick={() => update("gymAccess", o.value)} />
          ))}
        </div>
        <Error msg={errors.gymAccess} />
      </div>

      <div>
        <Label>Bench Press Experience</Label>
        <div className="grid grid-cols-2 gap-3">
          {[
            { label: "Never benched", value: "never" },
            { label: "Beginner", sub: "< 1 plate / side", value: "beginner" },
            { label: "Intermediate", sub: "1–2 plates / side", value: "intermediate" },
            { label: "Experienced", sub: "2+ plates / side", value: "experienced" },
          ].map((o) => (
            <OptionCard key={o.value} label={o.label} sub={o.sub} selected={data.benchExperience === o.value} onClick={() => update("benchExperience", o.value)} />
          ))}
        </div>
        <Error msg={errors.benchExperience} />
      </div>
    </div>
  );
}

function Step3({ data, errors, update }: StepProps) {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight mb-1">
          Your <span className="text-red-600">Goal</span>
        </h2>
        <p className="text-zinc-500 text-sm">What you want to achieve over the next 4 weeks.</p>
      </div>

      <div>
        <Label>Primary Goal</Label>
        <div className="grid grid-cols-2 gap-3">
          {[
            { label: "Muscle Gain", sub: "More size, more mass", value: "muscle_gain" },
            { label: "Fat Loss", sub: "Leaner, more defined", value: "fat_loss" },
            { label: "Strength", sub: "Bigger numbers on the bar", value: "strength" },
            { label: "Recomposition", sub: "Build muscle, lose fat", value: "recomposition" },
          ].map((o) => (
            <OptionCard key={o.value} label={o.label} sub={o.sub} selected={data.mainGoal === o.value} onClick={() => update("mainGoal", o.value)} />
          ))}
        </div>
        <Error msg={errors.mainGoal} />
      </div>

      <div>
        <Label>Body Composition Phase</Label>
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: "Bulk", sub: "Gain mass + some fat", value: "bulk" },
            { label: "Cut", sub: "Lose fat, keep muscle", value: "cut" },
            { label: "Maintain", sub: "Same weight, optimize", value: "maintain" },
          ].map((o) => (
            <OptionCard key={o.value} label={o.label} sub={o.sub} selected={data.bodyCompositionGoal === o.value} onClick={() => update("bodyCompositionGoal", o.value)} />
          ))}
        </div>
        <Error msg={errors.bodyCompositionGoal} />
      </div>
    </div>
  );
}

function Step4({ data, errors, update, toggle }: StepProps) {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight mb-1">
          Your <span className="text-red-600">Body</span>
        </h2>
        <p className="text-zinc-500 text-sm">Body assessment to target the right areas.</p>
      </div>

      <div>
        <Label>Weak Body Parts</Label>
        <p className="text-zinc-600 text-xs mb-3">Select all that apply. These get prioritized.</p>
        <div className="flex flex-wrap gap-2">
          {BODY_PARTS.map((part) => (
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
        <Label>Strong Body Parts</Label>
        <p className="text-zinc-600 text-xs mb-3">What&apos;s already well-developed.</p>
        <div className="flex flex-wrap gap-2">
          {BODY_PARTS.map((part) => (
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
        <Label>Injuries or Limitations</Label>
        <p className="text-zinc-600 text-xs mb-3">Enter &quot;None&quot; if you have no injuries.</p>
        <textarea
          value={data.injuries}
          onChange={(e) => update("injuries", e.target.value)}
          placeholder='e.g., "Left shoulder impingement" or "None"'
          rows={3}
          className="w-full bg-brand-bg border border-brand-border text-white placeholder-zinc-600 px-4 py-3 text-sm focus:outline-none focus:border-red-600 transition-colors resize-none"
        />
        <Error msg={errors.injuries} />
      </div>
    </div>
  );
}

function Step5({ data, errors, update }: StepProps) {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight mb-1">
          Your <span className="text-red-600">Lifestyle</span>
        </h2>
        <p className="text-zinc-500 text-sm">Nutrition and recovery context for your program.</p>
      </div>

      <div>
        <Label>Nutrition Preference</Label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { label: "Flexible", sub: "No dietary restrictions", value: "flexible" },
            { label: "Strict Tracking", sub: "Track every macro", value: "strict" },
            { label: "Vegetarian", sub: "No meat", value: "vegetarian" },
            { label: "Vegan", sub: "No animal products", value: "vegan" },
            { label: "No Preference", sub: "Adapt to what works", value: "no_preference" },
          ].map((o) => (
            <OptionCard key={o.value} label={o.label} sub={o.sub} selected={data.nutritionPreference === o.value} onClick={() => update("nutritionPreference", o.value)} />
          ))}
        </div>
        <Error msg={errors.nutritionPreference} />
      </div>

      <div>
        <Label>Average Sleep Quality</Label>
        <div className="grid grid-cols-2 gap-3">
          {[
            { label: "Poor", sub: "Under 6 hours / restless", value: "poor" },
            { label: "Average", sub: "6–7 hours", value: "average" },
            { label: "Good", sub: "7–8 hours", value: "good" },
            { label: "Excellent", sub: "8+ hours, solid recovery", value: "excellent" },
          ].map((o) => (
            <OptionCard key={o.value} label={o.label} sub={o.sub} selected={data.sleepQuality === o.value} onClick={() => update("sleepQuality", o.value)} />
          ))}
        </div>
        <Error msg={errors.sleepQuality} />
      </div>
    </div>
  );
}

function Step6({ data, update }: StepProps) {
  const summaryRows = [
    { label: "Age / Height / Weight", value: `${data.age} yrs, ${data.heightCm} cm, ${data.weightKg} kg` },
    { label: "Gender", value: data.gender },
    { label: "Experience", value: data.experience },
    { label: "Training days", value: `${data.trainingDaysPerWeek}x per week` },
    { label: "Gym", value: data.gymAccess.replace("_", " ") },
    { label: "Main goal", value: data.mainGoal.replace("_", " ") },
    { label: "Phase", value: data.bodyCompositionGoal },
    { label: "Nutrition", value: data.nutritionPreference.replace("_", " ") },
    { label: "Sleep", value: data.sleepQuality },
  ];

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight mb-1">
          Review &amp; <span className="text-red-600">Payment</span>
        </h2>
        <p className="text-zinc-500 text-sm">Check your answers, add any notes, then proceed to payment.</p>
      </div>

      {/* Summary */}
      <div className="bg-brand-card border border-brand-border p-5">
        <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-4">Your Answers</p>
        <div className="flex flex-col divide-y divide-brand-border">
          {summaryRows.map((row, i) => (
            <div key={i} className="flex justify-between items-center py-2.5 gap-4">
              <span className="text-zinc-500 text-xs">{row.label}</span>
              <span className="text-zinc-300 text-xs font-medium capitalize">{row.value || "—"}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Additional notes */}
      <div>
        <Label>Additional Notes for Artur</Label>
        <p className="text-zinc-600 text-xs mb-2">Anything else you want Artur to know? (Optional)</p>
        <textarea
          value={data.additionalNotes}
          onChange={(e) => update("additionalNotes", e.target.value)}
          placeholder="Any context, specific requests, or goals you haven't mentioned..."
          rows={4}
          className="w-full bg-brand-bg border border-brand-border text-white placeholder-zinc-600 px-4 py-3 text-sm focus:outline-none focus:border-red-600 transition-colors resize-none"
        />
      </div>

      {/* Step note */}
      <div className="bg-brand-surface border border-brand-border p-5">
        <p className="text-zinc-400 text-sm leading-relaxed">
          <span className="text-white font-bold">Almost there:</span> Review your answers above, then continue to provide your contact and delivery details before payment.
        </p>
      </div>
    </div>
  );
}

function Step7({ data, errors, update }: StepProps) {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight mb-1">
          Contact &amp; <span className="text-red-600">Delivery</span>
        </h2>
        <p className="text-zinc-500 text-sm">Where your personalized program will be sent.</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label>First Name</Label>
          <TextInput value={data.firstName} onChange={(v) => update("firstName", v)} placeholder="John" />
          <Error msg={errors.firstName} />
        </div>
        <div>
          <Label>Last Name</Label>
          <TextInput value={data.lastName} onChange={(v) => update("lastName", v)} placeholder="Smith" />
          <Error msg={errors.lastName} />
        </div>
      </div>

      <div>
        <Label>Email Address</Label>
        <TextInput type="email" value={data.email} onChange={(v) => update("email", v)} placeholder="john@example.com" />
        <Error msg={errors.email} />
      </div>

      <div>
        <Label>Confirm Email Address</Label>
        <TextInput type="email" value={data.confirmEmail} onChange={(v) => update("confirmEmail", v)} placeholder="john@example.com" />
        <Error msg={errors.confirmEmail} />
      </div>

      <div className="border-t border-brand-border pt-4">
        <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-4">Optional</p>
        <div className="flex flex-col gap-4">
          <div>
            <Label>Instagram Username</Label>
            <TextInput value={data.instagram} onChange={(v) => update("instagram", v)} placeholder="@username" />
          </div>
          <div>
            <Label>Phone / WhatsApp</Label>
            <TextInput type="tel" value={data.phone} onChange={(v) => update("phone", v)} placeholder="+49 123 456 789" />
          </div>
        </div>
      </div>

      <div className="bg-brand-surface border border-brand-border p-5">
        <p className="text-zinc-400 text-sm leading-relaxed">
          <span className="text-white font-bold">Final step:</span> After payment, your personalized program will be delivered to your email within 48 hours.
        </p>
      </div>
    </div>
  );
}

// ─── Main component ─────────────────────────────────────────────────────────

export default function QuestionnaireFlow() {
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
      if (!data.age || Number(data.age) < 13 || Number(data.age) > 80) e.age = "Enter a valid age (13–80)";
      if (!data.heightCm) e.heightCm = "Required";
      if (!data.weightKg) e.weightKg = "Required";
      if (!data.gender) e.gender = "Please select an option";
    }
    if (step === 2) {
      if (!data.experience) e.experience = "Please select your experience level";
      if (!data.trainingDaysPerWeek) e.trainingDaysPerWeek = "Please select training days";
      if (!data.gymAccess) e.gymAccess = "Please select gym access type";
      if (!data.benchExperience) e.benchExperience = "Please select your bench experience";
    }
    if (step === 3) {
      if (!data.mainGoal) e.mainGoal = "Please select your main goal";
      if (!data.bodyCompositionGoal) e.bodyCompositionGoal = "Please select a phase";
    }
    if (step === 4) {
      if (!data.injuries.trim()) e.injuries = "Required — enter 'None' if no injuries";
    }
    if (step === 5) {
      if (!data.nutritionPreference) e.nutritionPreference = "Please select an option";
      if (!data.sleepQuality) e.sleepQuality = "Please select an option";
    }
    if (step === 7) {
      if (!data.firstName.trim()) e.firstName = "First name is required";
      if (!data.lastName.trim()) e.lastName = "Last name is required";
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!data.email.trim()) e.email = "Email address is required";
      else if (!emailRegex.test(data.email.trim())) e.email = "Enter a valid email address";
      if (!data.confirmEmail.trim()) e.confirmEmail = "Please confirm your email";
      else if (data.email.trim() !== data.confirmEmail.trim()) e.confirmEmail = "Email addresses do not match";
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

  const handleSubmit = async () => {
    if (!validate()) return;
    setSubmitting(true);
    try {
      await fetch("/api/questionnaire", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (process.env.NODE_ENV === "development") {
        sessionStorage.setItem("dev_questionnaire_data", JSON.stringify(data));
      }
      router.push(`/questionnaire/confirmation?email=${encodeURIComponent(data.email)}`);
    } catch {
      setSubmitting(false);
      alert("Something went wrong. Please try again or contact us directly.");
    }
  };

  const stepProps: StepProps = { data, errors, update, toggle };

  return (
    <div className="min-h-screen bg-brand-bg">
      {/* Sticky progress header */}
      <div className="sticky top-16 z-40 bg-brand-bg border-b border-brand-border">
        <ProgressBar step={step} />
        <div className="max-w-2xl mx-auto px-4 py-3 flex items-center justify-between">
          <span className="text-zinc-600 text-xs">
            Step {step} of {TOTAL_STEPS}
          </span>
          <span className="text-zinc-400 text-xs font-bold uppercase tracking-widest">
            {STEP_TITLES[step]}
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
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-10 pt-8 border-t border-brand-border">
          {step > 1 ? (
            <button onClick={back} className="btn-secondary text-xs px-6 py-3">
              Back
            </button>
          ) : (
            <Link href="/personalized" className="text-zinc-600 text-sm hover:text-zinc-400 transition-colors">
              ← Cancel
            </Link>
          )}

          {step < TOTAL_STEPS ? (
            <button onClick={next} className="btn-primary text-xs px-8 py-3">
              Continue
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
                  Submitting...
                </span>
              ) : (
                "Proceed to Payment →"
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
