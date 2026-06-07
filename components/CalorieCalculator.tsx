"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

type Sex = "male" | "female";
type ActivityKey = "sedentary" | "light" | "moderate" | "active" | "very_active";
type GoalKey = "cut" | "maintain" | "bulk";

interface ActivityOption {
  key: string;
  label: string;
  hint: string;
}

interface GoalOption {
  key: string;
  label: string;
}

export interface CalorieCalculatorTranslations {
  label: string;
  title: string;
  subtitle: string;
  sex: { label: string; male: string; female: string };
  age: { label: string };
  weight: { label: string };
  height: { label: string };
  activity: { label: string; options: ActivityOption[] };
  goal: { label: string; options: GoalOption[] };
  results: {
    targetLabel: string;
    kcalUnit: string;
    bmrLabel: string;
    tdeeLabel: string;
    proteinLabel: string;
    carbsLabel: string;
    fatLabel: string;
    gramsUnit: string;
  };
  footnote: string;
  upsellTitle: string;
  upsellCta: string;
}

interface Props {
  t: CalorieCalculatorTranslations;
}

const ACTIVITY_MULTIPLIER: Record<ActivityKey, number> = {
  sedentary: 1.2,
  light: 1.375,
  moderate: 1.55,
  active: 1.725,
  very_active: 1.9,
};

const GOAL_DELTA: Record<GoalKey, number> = {
  cut: -0.12,
  maintain: 0,
  bulk: 0.1,
};

function clamp(n: number, min: number, max: number) {
  return Math.min(Math.max(n, min), max);
}

export default function CalorieCalculator({ t }: Props) {
  const [sex, setSex] = useState<Sex>("male");
  const [age, setAge] = useState("25");
  const [weight, setWeight] = useState("75");
  const [height, setHeight] = useState("175");
  const [activity, setActivity] = useState<ActivityKey>("moderate");
  const [goal, setGoal] = useState<GoalKey>("maintain");

  const result = useMemo(() => {
    const ageNum = parseFloat(age);
    const weightNum = parseFloat(weight);
    const heightNum = parseFloat(height);

    if (
      !Number.isFinite(ageNum) ||
      !Number.isFinite(weightNum) ||
      !Number.isFinite(heightNum)
    ) {
      return null;
    }

    const a = clamp(ageNum, 14, 100);
    const w = clamp(weightNum, 30, 250);
    const h = clamp(heightNum, 120, 230);

    // Mifflin-St Jeor BMR
    const bmr =
      sex === "male"
        ? 10 * w + 6.25 * h - 5 * a + 5
        : 10 * w + 6.25 * h - 5 * a - 161;

    const tdee = bmr * ACTIVITY_MULTIPLIER[activity];
    const target = Math.max(tdee * (1 + GOAL_DELTA[goal]), 1000);

    // Macros: 2 g protein / kg, 25% fat, remainder carbs
    const proteinG = w * 2;
    const proteinKcal = proteinG * 4;
    const fatKcal = target * 0.25;
    const fatG = fatKcal / 9;
    const carbsKcal = Math.max(target - proteinKcal - fatKcal, 0);
    const carbsG = carbsKcal / 4;

    const totalKcal = proteinKcal + fatKcal + carbsKcal;
    const proteinPct = totalKcal > 0 ? (proteinKcal / totalKcal) * 100 : 0;
    const carbsPct = totalKcal > 0 ? (carbsKcal / totalKcal) * 100 : 0;
    const fatPct = totalKcal > 0 ? (fatKcal / totalKcal) * 100 : 0;

    return {
      bmr: Math.round(bmr),
      tdee: Math.round(tdee),
      target: Math.round(target),
      protein: Math.round(proteinG),
      carbs: Math.round(carbsG),
      fat: Math.round(fatG),
      proteinPct,
      carbsPct,
      fatPct,
    };
  }, [sex, age, weight, height, activity, goal]);

  return (
    <div className="border border-brand-border bg-brand-card p-6">
      <p className="text-red-500 text-[10px] font-bold uppercase tracking-[0.2em] mb-2">
        {t.label}
      </p>
      <h2 className="text-white font-black text-lg uppercase tracking-tight leading-tight mb-1">
        {t.title}
      </h2>
      <p className="text-zinc-500 text-xs leading-relaxed mb-5">{t.subtitle}</p>

      {/* Sex */}
      <p className="text-zinc-400 text-[10px] font-bold uppercase tracking-widest mb-2">
        {t.sex.label}
      </p>
      <div className="grid grid-cols-2 gap-1.5 mb-4">
        {(
          [
            ["male", t.sex.male],
            ["female", t.sex.female],
          ] as const
        ).map(([key, label]) => (
          <button
            key={key}
            type="button"
            onClick={() => setSex(key)}
            className={`py-2 text-xs font-bold uppercase tracking-wider border transition-all ${
              sex === key
                ? "border-red-600 bg-red-600/15 text-white"
                : "border-brand-border bg-transparent text-zinc-500 hover:text-zinc-300 hover:border-zinc-600"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Age / Weight / Height */}
      <div className="grid grid-cols-3 gap-2 mb-4">
        {[
          { label: t.age.label, value: age, set: setAge, unit: "" },
          { label: t.weight.label, value: weight, set: setWeight, unit: "kg" },
          { label: t.height.label, value: height, set: setHeight, unit: "cm" },
        ].map((f) => (
          <div key={f.label}>
            <label className="block text-zinc-400 text-[10px] font-bold uppercase tracking-widest mb-2">
              {f.label}
            </label>
            <div className="relative">
              <input
                type="number"
                inputMode="numeric"
                value={f.value}
                onChange={(e) => f.set(e.target.value)}
                className="w-full bg-brand-bg border border-brand-border text-white font-bold text-base px-3 py-2.5 focus:outline-none focus:border-red-600 transition-colors tabular-nums"
              />
              {f.unit && (
                <span className="absolute right-2.5 top-1/2 -translate-y-1/2 text-zinc-600 text-[10px] uppercase font-bold tracking-wider pointer-events-none">
                  {f.unit}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Activity */}
      <p className="text-zinc-400 text-[10px] font-bold uppercase tracking-widest mb-2">
        {t.activity.label}
      </p>
      <div className="flex flex-col gap-1 mb-4">
        {t.activity.options.map((opt) => (
          <button
            key={opt.key}
            type="button"
            onClick={() => setActivity(opt.key as ActivityKey)}
            className={`flex items-center justify-between gap-3 text-left px-3 py-2 border transition-all ${
              activity === opt.key
                ? "border-red-600 bg-red-600/10"
                : "border-brand-border bg-transparent hover:border-zinc-600"
            }`}
          >
            <span
              className={`text-xs font-bold uppercase tracking-tight ${
                activity === opt.key ? "text-white" : "text-zinc-300"
              }`}
            >
              {opt.label}
            </span>
            <span className="text-zinc-500 text-[10px] leading-tight text-right">
              {opt.hint}
            </span>
          </button>
        ))}
      </div>

      {/* Goal */}
      <p className="text-zinc-400 text-[10px] font-bold uppercase tracking-widest mb-2">
        {t.goal.label}
      </p>
      <div className="grid grid-cols-3 gap-1.5 mb-2">
        {t.goal.options.map((opt) => (
          <button
            key={opt.key}
            type="button"
            onClick={() => setGoal(opt.key as GoalKey)}
            className={`py-2 text-[11px] font-bold uppercase tracking-wider border transition-all ${
              goal === opt.key
                ? "border-red-600 bg-red-600/15 text-white"
                : "border-brand-border bg-transparent text-zinc-500 hover:text-zinc-300 hover:border-zinc-600"
            }`}
          >
            {opt.label}
          </button>
        ))}
      </div>

      {/* Results */}
      {result && (
        <div className="mt-5 pt-5 border-t border-brand-border">
          <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest mb-1">
            {t.results.targetLabel}
          </p>
          <p className="text-white font-black text-3xl tracking-tight tabular-nums">
            {result.target.toLocaleString()}
            <span className="text-zinc-500 text-sm font-bold uppercase tracking-wider ml-2">
              {t.results.kcalUnit}
            </span>
          </p>

          {/* Macro split bar */}
          <div className="flex h-1.5 w-full mt-4 overflow-hidden bg-brand-bg">
            <div
              className="bg-red-500 transition-all duration-300"
              style={{ width: `${result.proteinPct}%` }}
            />
            <div
              className="bg-amber-500 transition-all duration-300"
              style={{ width: `${result.carbsPct}%` }}
            />
            <div
              className="bg-sky-400 transition-all duration-300"
              style={{ width: `${result.fatPct}%` }}
            />
          </div>

          {/* Macro values */}
          <div className="grid grid-cols-3 gap-2 mt-3">
            {[
              { dot: "bg-red-500", label: t.results.proteinLabel, value: result.protein },
              { dot: "bg-amber-500", label: t.results.carbsLabel, value: result.carbs },
              { dot: "bg-sky-400", label: t.results.fatLabel, value: result.fat },
            ].map((m) => (
              <div key={m.label}>
                <div className="flex items-center gap-1.5 mb-0.5">
                  <span className={`w-1.5 h-1.5 ${m.dot}`} />
                  <span className="text-zinc-500 text-[9px] font-bold uppercase tracking-widest">
                    {m.label}
                  </span>
                </div>
                <p className="text-white font-bold text-sm tabular-nums">
                  {m.value}
                  <span className="text-zinc-500 text-xs font-normal ml-0.5">
                    {t.results.gramsUnit}
                  </span>
                </p>
              </div>
            ))}
          </div>

          {/* BMR / TDEE */}
          <div className="grid grid-cols-2 gap-2 mt-4 pt-4 border-t border-brand-border">
            <div>
              <p className="text-zinc-500 text-[9px] font-bold uppercase tracking-widest mb-0.5">
                {t.results.bmrLabel}
              </p>
              <p className="text-zinc-300 text-xs font-bold tabular-nums">
                {result.bmr.toLocaleString()} {t.results.kcalUnit}
              </p>
            </div>
            <div>
              <p className="text-zinc-500 text-[9px] font-bold uppercase tracking-widest mb-0.5">
                {t.results.tdeeLabel}
              </p>
              <p className="text-zinc-300 text-xs font-bold tabular-nums">
                {result.tdee.toLocaleString()} {t.results.kcalUnit}
              </p>
            </div>
          </div>
        </div>
      )}

      <p className="text-zinc-600 text-[10px] leading-relaxed mt-4">
        {t.footnote}
      </p>

      <Link
        href="/personalized"
        className="block mt-4 pt-4 border-t border-brand-border text-center group"
      >
        <p className="text-zinc-400 text-xs leading-relaxed mb-1.5">
          {t.upsellTitle}
        </p>
        <span className="text-red-500 group-hover:text-red-400 text-xs font-black uppercase tracking-widest transition-colors">
          {t.upsellCta} →
        </span>
      </Link>
    </div>
  );
}
