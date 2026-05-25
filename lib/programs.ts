export interface TrainingDay {
  label: string;
  focus: string;
  exercises: string[];
}

export interface StaticProgram {
  id: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  duration: string;
  sessionsPerWeek: string;
  price: number;
  // TODO: Replace "#paypal-todo" with your actual PayPal payment link per product.
  // Generate links at: https://www.paypal.com/buttons/smart
  paypalLink: string;
  href: string;
  badge?: string;
  accentLabel: string;
  focus: string[];
  features: string[];
  trainingDays: TrainingDay[];
  whoIsItFor: string[];
}

export const staticPrograms: StaticProgram[] = [
  {
    id: "bench-press",
    title: "6 Week Bench Press Program",
    shortTitle: "Bench Specialist",
    tagline: "Chest Power System",
    description:
      "A laser-focused 6-week specialization program for maximizing bench press strength and chest power. Built for lifters who want to press more.",
    duration: "6 Weeks",
    sessionsPerWeek: "4x / Week",
    price: 49,
    paypalLink: "#paypal-bench-TODO",
    href: "/programs/bench-press",
    badge: "BESTSELLER",
    accentLabel: "SPECIALIST",
    focus: ["Bench Strength", "Chest Power", "Pressing Mechanics"],
    features: [
      "Full 6-week bench specialization plan",
      "Strength + hypertrophy work combined",
      "Tricep & shoulder accessory work",
      "Progressive overload built in",
      "Instant PDF delivery",
    ],
    trainingDays: [
      {
        label: "Day 1",
        focus: "Heavy Bench — Strength",
        exercises: ["Bench Press (Heavy)", "Paused Bench Press", "Close-Grip Bench", "Tricep Pushdown"],
      },
      {
        label: "Day 2",
        focus: "Supplementary Upper",
        exercises: ["Overhead Press", "Incline Dumbbell Press", "Cable Fly", "Face Pulls"],
      },
      {
        label: "Day 3",
        focus: "Volume Bench — Hypertrophy",
        exercises: ["Bench Press (Volume)", "Dumbbell Press", "Cable Crossover", "Skull Crushers"],
      },
      {
        label: "Day 4",
        focus: "Technique & Accessories",
        exercises: ["Paused Bench (Light)", "Dip", "Lateral Raises", "Tricep Work"],
      },
    ],
    whoIsItFor: [
      "Lifters whose bench press has stalled",
      "Athletes wanting to add serious weight to the bar",
      "Those focusing on powerlifting competition prep",
      "Anyone wanting chest strength and thickness",
    ],
  },
];

export function getProgramById(id: string): StaticProgram | undefined {
  return staticPrograms.find((p) => p.id === id);
}
