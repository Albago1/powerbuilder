export type Gender = "male" | "female" | "other" | "prefer_not" | "";
export type Experience = "beginner" | "intermediate" | "advanced" | "";
export type GymAccess = "full_gym" | "home_gym" | "limited" | "";
export type BenchExperience = "never" | "beginner" | "intermediate" | "experienced" | "";
export type MainGoal = "muscle_gain" | "fat_loss" | "strength" | "recomposition" | "";
export type BodyCompositionGoal = "bulk" | "cut" | "maintain" | "";
export type NutritionPreference =
  | "flexible"
  | "strict"
  | "vegetarian"
  | "vegan"
  | "no_preference"
  | "";
export type SleepQuality = "poor" | "average" | "good" | "excellent" | "";
export type ProgramLanguage = "english" | "german" | "albanian" | "";

export interface QuestionnaireData {
  // Step 1: Profile
  age: string;
  heightCm: string;
  weightKg: string;
  gender: Gender;

  // Step 2: Training
  experience: Experience;
  trainingDaysPerWeek: string;
  gymAccess: GymAccess;
  benchExperience: BenchExperience;

  // Step 3: Goal
  mainGoal: MainGoal;
  bodyCompositionGoal: BodyCompositionGoal;

  // Step 4: Body
  weakBodyParts: string[];
  strongBodyParts: string[];
  injuries: string;

  // Step 5: Lifestyle
  nutritionPreference: NutritionPreference;
  sleepQuality: SleepQuality;

  // Step 6: Notes
  additionalNotes: string;

  // Step 7: Program Language
  programLanguage: ProgramLanguage;

  // Step 8: Contact & Delivery
  firstName: string;
  lastName: string;
  email: string;
  confirmEmail: string;
  instagram: string;
  phone: string;
}

export const TOTAL_STEPS = 8;
