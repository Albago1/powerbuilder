import type { QuestionnaireData } from "@/types/questionnaire";

const programLabels: Record<QuestionnaireData["program"], string> = {
  personalized: "Personalized Training & Nutrition System",
  "bench-press": "6 Week Bench Press Program",
};

const labelMap: Record<string, string> = {
  male: "Male", female: "Female", other: "Other", prefer_not: "Prefer not to say",
  beginner: "Beginner", intermediate: "Intermediate", advanced: "Advanced",
  full_gym: "Full Gym", home_gym: "Home Gym", limited: "Limited Equipment",
  never: "Never benched",
  muscle_gain: "Muscle Gain", fat_loss: "Fat Loss", strength: "Strength", recomposition: "Recomposition",
  bulk: "Bulk", cut: "Cut", maintain: "Maintain",
  flexible: "Flexible", strict: "Strict Tracking", vegetarian: "Vegetarian", vegan: "Vegan", no_preference: "No Preference",
  poor: "Poor (< 6h)", average: "Average (6–7h)", good: "Good (7–8h)", excellent: "Excellent (8h+)",
  english: "English", german: "German", albanian: "Albanian",
};

const label = (val: string) => labelMap[val] ?? val;

export function formatSubmissionEmail(data: QuestionnaireData): string {
  const timestamp = new Date().toLocaleString("de-DE", {
    timeZone: "Europe/Berlin",
    dateStyle: "full",
    timeStyle: "short",
  });

  const productLine = programLabels[data.program] ?? data.program;

  return `
NEW POWERBUILDER QUESTIONNAIRE SUBMISSION
==========================================
Submitted:  ${timestamp}
Product:    ${productLine}
==========================================

CUSTOMER DETAILS
  Name:             ${data.firstName} ${data.lastName}
  Email:            ${data.email}
  Instagram:        ${data.instagram || "—"}
  Phone/WhatsApp:   ${data.phone || "—"}

PROGRAM LANGUAGE
  Language:         ${label(data.programLanguage)}

PROFILE
  Age:              ${data.age} years
  Height:           ${data.heightCm} cm
  Weight:           ${data.weightKg} kg
  Gender:           ${label(data.gender)}

TRAINING BACKGROUND
  Experience:       ${label(data.experience)}
  Training days:    ${data.trainingDaysPerWeek}x per week
  Gym access:       ${label(data.gymAccess)}
  Bench experience: ${label(data.benchExperience)}

GOALS
  Main goal:        ${label(data.mainGoal)}
  Phase:            ${label(data.bodyCompositionGoal)}

BODY ASSESSMENT
  Weak parts:       ${data.weakBodyParts.length ? data.weakBodyParts.join(", ") : "None specified"}
  Strong parts:     ${data.strongBodyParts.length ? data.strongBodyParts.join(", ") : "None specified"}
  Injuries:         ${data.injuries || "None"}

LIFESTYLE
  Nutrition:        ${label(data.nutritionPreference)}
  Sleep quality:    ${label(data.sleepQuality)}

ADDITIONAL NOTES FROM CLIENT
${data.additionalNotes || "None"}

==========================================
NEXT STEPS
  1. Reach out to the client to confirm and arrange payment
  2. Build the ${productLine} IN ${label(data.programLanguage).toUpperCase()}
  3. Deliver PDF to client by email
==========================================
Source: powerbuilder.com/questionnaire
  `.trim();
}
