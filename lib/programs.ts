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
    id: "8-week-powerbuilder",
    title: "8 Week PowerBuilder Program",
    shortTitle: "PowerBuilder",
    tagline: "Strength & Muscle System",
    description:
      "The complete foundation program for serious strength and muscle building. Progressive overload built in, nutrition framework included.",
    duration: "8 Weeks",
    sessionsPerWeek: "4x / Week",
    price: 39,
    paypalLink: "#paypal-8week-TODO",
    href: "/program",
    accentLabel: "FOUNDATION",
    focus: ["Progressive Overload", "Upper/Lower Split", "Hypertrophy"],
    features: [
      "Full 8-week periodized plan",
      "4 training days per week",
      "Strength & hypertrophy split",
      "Progressive overload built in",
      "Nutrition framework & protein targets",
      "Exercise substitution guide",
      "Warm-up protocols",
      "Instant PDF delivery",
    ],
    trainingDays: [
      {
        label: "Day A",
        focus: "Upper — Strength",
        exercises: ["Bench Press", "Weighted Pull-Ups", "Overhead Press", "Barbell Row"],
      },
      {
        label: "Day B",
        focus: "Lower — Strength",
        exercises: ["Squat", "Romanian Deadlift", "Leg Press", "Leg Curl"],
      },
      {
        label: "Day C",
        focus: "Upper — Hypertrophy",
        exercises: ["Incline Press", "Cable Row", "Lateral Raises", "Face Pulls"],
      },
      {
        label: "Day D",
        focus: "Lower — Hypertrophy",
        exercises: ["Deadlift", "Hack Squat", "Walking Lunges", "Leg Extension"],
      },
    ],
    whoIsItFor: [
      "Lifters with 6+ months of training experience",
      "Athletes wanting a structured strength & size system",
      "Those ready to train 4 days per week consistently",
      "Anyone plateaued and needing a proven program",
    ],
  },
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
  {
    id: "strict-curl",
    title: "6 Week Strict Curl Program",
    shortTitle: "Strict Curl",
    tagline: "Arm Strength System",
    description:
      "A strength-focused 6-week arm specialization built around the strict curl. Full ROM, controlled power, serious bicep development.",
    duration: "6 Weeks",
    sessionsPerWeek: "3x / Week",
    price: 39,
    paypalLink: "#paypal-strict-curl-TODO",
    href: "/programs/strict-curl",
    accentLabel: "SPECIALIST",
    focus: ["Strict Curl Strength", "Arm Specialization", "Controlled Power"],
    features: [
      "Full 6-week strict curl plan",
      "Strict-form arm specialization",
      "Bicep peak & thickness work",
      "Progressive overload built in",
      "Instant PDF delivery",
    ],
    trainingDays: [
      {
        label: "Day 1",
        focus: "Strict Curl — Heavy",
        exercises: ["Standing Strict Curl (3–5 RM)", "Seated Incline Curl", "Hammer Curl", "Cable Curl"],
      },
      {
        label: "Day 2",
        focus: "Volume & Isolation",
        exercises: ["Preacher Curl", "Concentration Curl", "EZ-Bar Curl", "Forearm Work"],
      },
      {
        label: "Day 3",
        focus: "Strength + Technique",
        exercises: ["Strict Curl (Heavy Singles)", "Barbell Curl (Volume)", "Spider Curl", "Reverse Curl"],
      },
    ],
    whoIsItFor: [
      "Lifters wanting serious arm strength and size",
      "Athletes focusing on the strict curl movement",
      "Those training for arm specialization competitions",
      "Anyone whose biceps have stopped growing",
    ],
  },
  {
    id: "cheat-curl",
    title: "6 Week Cheat Curl Program",
    shortTitle: "Cheat Curl",
    tagline: "Arm Mass System",
    description:
      "6 weeks of supramaximal overload training to build arm thickness that strict curls alone can't achieve. Heavy loads, eccentric control, massive biceps.",
    duration: "6 Weeks",
    sessionsPerWeek: "3x / Week",
    price: 39,
    paypalLink: "#paypal-cheat-curl-TODO",
    href: "/programs/cheat-curl",
    accentLabel: "SPECIALIST",
    focus: ["Arm Mass", "Overload Techniques", "Biceps Thickness"],
    features: [
      "Full 6-week cheat curl specialization",
      "Overload-focused arm programming",
      "Bicep mass-building approach",
      "Progressive overload built in",
      "Instant PDF delivery",
    ],
    trainingDays: [
      {
        label: "Day 1",
        focus: "Cheat Curl — Max Load",
        exercises: ["Barbell Cheat Curl (Heavy)", "Slow Eccentric Curl", "Partial Top-Range Curls", "Cable Curl"],
      },
      {
        label: "Day 2",
        focus: "Overload & Mass",
        exercises: ["Cheat Curl (Volume)", "EZ-Bar Curl (Strict)", "Dumbbell Overload Curl", "Hammer Curl"],
      },
      {
        label: "Day 3",
        focus: "Eccentric Focus",
        exercises: ["Supramaximal Eccentric Curl", "Cheat Curl + Pause", "Incline Curl", "Reverse Curl"],
      },
    ],
    whoIsItFor: [
      "Intermediate lifters wanting maximum arm mass",
      "Athletes who've maxed out strict curl gains",
      "Those wanting thick, powerful biceps",
      "Anyone willing to train with serious intensity",
    ],
  },
];

export function getProgramById(id: string): StaticProgram | undefined {
  return staticPrograms.find((p) => p.id === id);
}
