export type Locale = "en" | "de" | "sq";

// ─── Type inferred from English ────────────────────────────────────────────────
// Add new keys to `en` first; TypeScript will enforce them in de/sq.

const en = {
  // ── Navigation ──────────────────────────────────────────────────────────────
  nav: {
    personalized: "Personalized",
    programs: "Programs",
    about: "About",
    faq: "FAQ",
    contact: "Contact",
    buildMyProgram: "Build My Program",
    fullSite: "Full Site",
    languageLabel: "Language",
  },

  // ── Footer ──────────────────────────────────────────────────────────────────
  footer: {
    tagline: "Premium strength and hypertrophy systems featuring fitness expert Artur Mehmeti. Built for athletes who are serious about results.",
    programsHeading: "Programs",
    navigateHeading: "Navigate",
    legalHeading: "Legal",
    personalizedSystem: "Personalized System",
    home: "Home",
    aboutArtur: "About Artur",
    faq: "FAQ",
    contact: "Contact",
    copyright: "Enrik Gani · Power Builder. All rights reserved.",
    digitalNote: "Digital products — PDF delivery after purchase.",
  },

  // ── Brand Hub (/page.tsx) ───────────────────────────────────────────────────
  brandHub: {
    location: "Berlin, Germany",
    tagline: "Strength. Muscle. Discipline.",
    subtitle: "Powerbuilding programs, coaching, transformations, and training systems.",
    linksLabel: "Links",
    social: { instagram: "Instagram", tiktok: "TikTok", youtube: "YouTube", email: "Email" },
    hub: [
      { label: "Coaching", title: "Personalized Coaching", subtitle: "4-week training & nutrition system built for your goals.", cta: "Start Coaching" },
      { label: "Programs", title: "Artur's Programs", subtitle: "Bench press and strength systems.", cta: "View Programs" },
      { label: "Supplements", title: "Supplements", subtitle: "Maximum discount with code BAUSTELLE.", cta: "Browse" },
      { label: "Content", title: "Transformation Content", subtitle: "Training clips, progress, discipline and education.", cta: "Watch Content" },
      { label: "YouTube", title: "YouTube", subtitle: "Long-form training breakdowns and lifting education.", cta: "Watch on YouTube" },
    ],
    featuredBadge: "Featured Program",
    featuredTitle: "6 Week Bench Press Program",
    featuredSubtitle: "Built to increase pressing strength, power, and upper-body performance.",
    featuredPrice: "€49",
    featuredOriginalPrice: "€70",
    featuredCta: "View Program →",
  },

  // ── Personalized page ───────────────────────────────────────────────────────
  personalized: {
    meta: {
      title: "Personalized Training & Nutrition System | PowerBuilder",
      description: "A custom 4-week training and nutrition system built specifically for you by Artur. Fill the questionnaire and receive your program within 48 hours.",
    },
    hero: {
      badge: "Flagship Offer · Not a Template",
      title1: "Built For You.",
      title2: "Only You.",
      subtitle: "A complete training and nutrition system written from scratch by Artur — for your body, your goals, your schedule. No templates. No guesswork.",
      price: "€99",
      originalPrice: "€141",
      priceNote: "one-time",
      cta: "Start Questionnaire →",
      trust: ["48h delivery", "PayPal secure checkout", "Personally written by Artur"],
    },
    stats: [
      { value: "48h", label: "Program Delivery" },
      { value: "16", label: "Questionnaire Questions" },
      { value: "100%", label: "Personally Written" },
      { value: "€99", label: "One-Time · No Subscription" },
    ],
    included: {
      sectionLabel: "Everything Included",
      title1: "One Price.",
      title2: "Complete System.",
      items: [
        { title: "Custom Training Plan", description: "A 4-week training program designed around your schedule, equipment, experience level, and specific weak points. Every exercise has a reason." },
        { title: "Personalized Nutrition Plan", description: "Exact calorie and macro targets calculated for your body weight, goal, and training intensity. No guessing, no generic advice." },
        { title: "Strength & Hypertrophy Focus", description: "Compound strength on main lifts + hypertrophy accessory work. Both adaptations, one system — built specifically for powerbuilding." },
        { title: "Recovery Optimization", description: "Training frequency, rest days, and deload protocols planned around your recovery capacity and sleep quality." },
        { title: "PDF Delivery — 48h", description: "Your complete system delivered as a clean, organized PDF within 48 hours of submission. Ready to use on any device." },
        { title: "Written By Artur — Personally", description: "Not AI-generated. Not a template. Artur reads every submission and writes every program himself." },
      ],
    },
    coach: {
      sectionLabel: "The Coach",
      title1: "Written By",
      title2: "Artur.",
      credential: "Artur Mehmeti",
      credentialSub: "PowerBuilder Coach · Berlin",
      bio: [
        "Every program is written by Artur personally. He reads your questionnaire, analyzes your data, and builds a system that matches exactly where you are and where you want to go.",
        "This is not AI-generated. This is not a template with your name on it. It takes real time because it requires real attention — and that is precisely what you are paying for.",
      ],
      points: [
        "20 years old, Berlin-based athlete",
        "Trained in powerbuilding for years",
        "Every submission reviewed personally",
        "Programs capped — no factory output",
      ],
    },
    process: {
      sectionLabel: "Process",
      title1: "How It",
      title2: "Works.",
      steps: [
        { num: "01", title: "Fill the Questionnaire", description: "16 questions covering your profile, training history, goals, body assessment, and lifestyle. Takes 5–8 minutes." },
        { num: "02", title: "Complete Payment", description: "Pay €99 via PayPal. Secure checkout. Your questionnaire is submitted to Artur upon payment confirmation." },
        { num: "03", title: "Artur Reviews", description: "Artur personally reads your submission, analyzes your data, and writes your custom program. No templates." },
        { num: "04", title: "Receive Your System", description: "Your full training + nutrition PDF is delivered to your email within 48 hours. Open it and start Day 1." },
      ],
    },
    comparison: {
      sectionLabel: "The Difference",
      title1: "Generic vs.",
      title2: "Personalized.",
      genericLabel: "Generic Program",
      personalizedLabel: "Artur's Personalized System",
      genericItems: [
        "Built for the average person — not you",
        "Same reps, sets, and exercises for everyone",
        "Ignores your weak points and injury history",
        "Nutrition is an afterthought or missing entirely",
        "No accountability — just a PDF download",
      ],
      personalizedItems: [
        "Written for your exact body, goals, and schedule",
        "Every exercise chosen with your data in mind",
        "Weak points targeted, injuries worked around",
        "Nutrition targets calculated for your specific situation",
        "Artur reads your submission and writes it personally",
      ],
    },
    guarantee: {
      sectionLabel: "Our Commitment",
      title1: "If It Doesn't Fit.",
      title2: "Artur Fixes It.",
      description: "If something in your program doesn't match what you described in the questionnaire, contact Artur directly. He will address it — because the goal is a program you can actually execute and get results from.",
    },
    faq: [
      { question: "How long does it take to receive my program?", answer: "Within 48 hours of payment and questionnaire submission. Artur personally reviews each submission, so the delivery time reflects the care that goes into every program. You'll receive a PDF directly to your email." },
      { question: "What exactly is included?", answer: "A complete 4-week training plan (all sessions, exercises, sets, reps, and progressive overload built in) + a personalized nutrition plan (daily calorie target, macro breakdown, meal timing guidance). Both tailored specifically to your answers — not a template." },
      { question: "Is this program generated by AI?", answer: "No. Artur personally reads every questionnaire and writes every program. This is why delivery takes up to 48 hours — real coaching takes real time." },
      { question: "What if I'm not satisfied with the program?", answer: "Contact Artur directly. If something in the program doesn't make sense for your situation or there's a mismatch with what you described in the questionnaire, he'll address it." },
      { question: "How many questions are in the questionnaire?", answer: "16 questions covering your profile (age, height, weight, gender), training background (experience, days/week, gym access, bench experience), goals, body assessment, and lifestyle. Takes about 5–8 minutes." },
      { question: "Can beginners use the personalized program?", answer: "Yes. Unlike the static programs, the personalized program is adjusted to wherever you are. If you're earlier in your journey, Artur designs accordingly — realistic loads, appropriate volume, exercises you can execute safely." },
    ],
    cta: {
      sectionLabel: "Ready?",
      title1: "Start Your",
      title2: "Transformation.",
      subtitle: "Fill the questionnaire. Pay once. Get a system built for exactly who you are.",
      button: "Start Questionnaire — €99 →",
      note: "PayPal · 48-hour delivery · Personally written by Artur",
    },
  },

  // ── Programs listing ────────────────────────────────────────────────────────
  programs: {
    meta: {
      title: "Programs | PowerBuilder",
      description: "Personalized coaching and instant-download specialization programs by Artur.",
    },
    hero: {
      label: "Choose Your Program",
      title1: "Your Program.",
      title2: "Real Results.",
      subtitle: "Personalized coaching or instant-download specialization programs. Built for serious lifters — choose the format that fits your situation.",
    },
    personalizedCard: {
      accentLabel: "Personalized",
      title: "4 Week Personalized Training & Nutrition Program",
      tagline: "100% Custom To You",
      description: "A fully personalized 4-week training and nutrition program built around your goals, experience, lifestyle, and recovery. You answer a few questions — Artur creates your plan.",
      duration: "4 Weeks",
      sessionsPerWeek: "Custom Plan",
      features: [
        "Personalized training plan",
        "Personalized nutrition plan",
        "Strength & hypertrophy focused",
        "Recovery optimized",
        "Built around your goals & schedule",
        "Directly created by Artur",
      ],
    },
  },

  // ── Program detail pages (shared) ───────────────────────────────────────────
  programDetail: {
    priceNote: "One-time · no subscription",
    instantPdf: "Instant PDF",
    structureLabel: "Program Structure",
    focusLabel: "Focus Areas",
    threeTitle1: "The Three",
    threeTitle2: "Pillars.",
    whoForLabel: "Who Is This For",
    ctaNote: (price: number) => `Instant PDF · One-time €${price} · Lifetime access`,
    personalizedLink: "Want something built specifically for you? → Personalized System",
  },

  // ── Bench Press page ────────────────────────────────────────────────────────
  benchPress: {
    structureTitle1: "4 Days.",
    structureTitle2: "Maximum Bench Gains.",
    builtFor: "Built for",
    builtForAccent: "Pressers.",
    ctaTitle1: "6 Weeks From Now,",
    ctaTitle2: "Your Bench Is Different.",
    ctaSubtitle: "One program. Six weeks. Serious strength.",
    pillars: [
      { title: "Bench Strength", description: "Heavy pressing work designed to push your top-end strength ceiling higher every session." },
      { title: "Chest Power", description: "Hypertrophy-focused accessory work that builds the chest thickness pressing strength needs." },
      { title: "Pressing Mechanics", description: "Technique cues and form work refine your bench under load — the fastest way to add sustainable weight." },
    ],
    process: {
      sectionLabel: "Process",
      title1: "How It",
      title2: "Works.",
      steps: [
        { num: "01", title: "Buy", description: "Click Buy and complete checkout via PayPal. Secure card or PayPal balance. Order confirms in seconds." },
        { num: "02", title: "Instant Download", description: "Your 6-week PDF is delivered immediately. Available in English, German, and Albanian." },
        { num: "03", title: "Train", description: "Follow the structured 6-week plan. Sessions, sets, reps, and accessories all laid out for you." },
        { num: "04", title: "Progress", description: "Track gains across the 6 weeks. Re-run the program at a higher baseline anytime — it's yours for life." },
      ],
    },
    faqs: [
      { question: "Do I need a strong bench press to start this program?", answer: "No. You need a solid bench press technique and at least 6 months of consistent training experience. The starting weight doesn't matter — the program builds from wherever you are right now. What matters is that you can execute the movement safely under load." },
      { question: "Can I run this alongside my regular training?", answer: "This is a specialization program — it's designed to be your primary upper body focus for 6 weeks. You can add leg training on off days, but adding additional heavy pressing or chest work will interfere with recovery and reduce results. Follow the program as written." },
      { question: "Will this program add chest size or just strength?", answer: "Both. The program combines heavy strength work with hypertrophy-focused accessory pressing. You'll build chest thickness and pressing strength at the same time." },
      { question: "What equipment do I need?", answer: "A barbell, bench press station, and access to cables or dumbbells for accessory work. A full commercial gym is ideal." },
      { question: "How much progress can I expect in 6 weeks?", answer: "Results depend on your starting point, consistency, and nutrition. The program is structured to push your ceiling each week — what you get out of it reflects what you put in." },
    ],
  },

  // ── Supplements affiliate page ──────────────────────────────────────────────
  supplements: {
    meta: {
      title: "Supplements | PowerBuilder",
      description: "Get the maximum discount on premium supplements with code BAUSTELLE — Artur's recommended supplement partner.",
    },
    hero: {
      badge: "Advertising · Affiliate",
      label: "Supplements",
      title1: "Real Power.",
      title2: "Real Supplements.",
      subtitle: "Artur's recommended supplement partner. Use the code below to unlock the maximum discount available.",
    },
    code: {
      label: "Your Code",
      discountNote: "Maximum discount at checkout",
      copy: "Copy",
      copied: "Copied!",
      cta: "Shop Now →",
      note: "Apply the code at checkout — discount varies based on cart contents and active promotions.",
    },
    why: {
      sectionLabel: "Why this partner",
      title1: "Trusted.",
      title2: "Recommended.",
      cards: [
        { title: "Artur's Pick", description: "Personally selected by Artur for the PowerBuilder community. No compromises on quality." },
        { title: "Maximum Discount", description: "The BAUSTELLE code unlocks the highest available discount on every order." },
        { title: "Fast Checkout", description: "Direct link to the shop, code applies in seconds. No accounts, no tracking — just savings." },
      ],
    },
    how: {
      sectionLabel: "How to redeem",
      title1: "Three Steps.",
      title2: "One Code.",
      steps: [
        { num: "01", title: "Visit the Shop", description: "Click the button below to head straight to Artur's recommended supplement partner." },
        { num: "02", title: "Pick Your Products", description: "Add the supplements you need to your cart. Stack up — the discount applies to the whole order." },
        { num: "03", title: "Apply Code BAUSTELLE", description: "Enter the code at checkout to unlock the maximum discount automatically." },
      ],
    },
    cta: {
      title1: "Ready to",
      title2: "Power Up?",
      subtitle: "Use code BAUSTELLE at checkout. The discount drops the moment you apply it.",
      button: "Shop With BAUSTELLE →",
    },
    disclosure: {
      heading: "Affiliate Notice",
      body: "This page contains affiliate links pursuant to § 5a UWG (German Act Against Unfair Competition). When you purchase through the link above using the code BAUSTELLE, Artur receives a commission — at no additional cost to you. You simultaneously unlock the maximum available discount.",
    },
  },

  // ── Pricing (grand-opening discount label, used on cards and hero price blocks) ─
  pricing: {
    launchBadge: "Grand Opening",
    countdownLabel: "Ends in",
    countdownEnded: "Offer ended",
  },

  // ── Checkout (Widerruf waiver consent, required for § 4 AGB) ────────────────
  checkout: {
    widerrufConsent:
      "I expressly agree that delivery of the digital product begins immediately upon completion of payment, and I acknowledge that my 14-day right of withdrawal expires at the start of performance, in accordance with § 356 (5) BGB (German Civil Code).",
    consentRequired: "Please confirm the withdrawal-waiver above to continue.",
    consentAriaLabel: "Withdrawal-waiver consent",
  },
};

// ─── German ────────────────────────────────────────────────────────────────────
const de: typeof en = {
  nav: {
    personalized: "Personalisiert",
    programs: "Programme",
    about: "Über",
    faq: "FAQ",
    contact: "Kontakt",
    buildMyProgram: "Mein Programm",
    fullSite: "Vollständige Website",
    languageLabel: "Sprache",
  },
  footer: {
    tagline: "Premium Kraft- und Hypertrophiesysteme mit Fitnessexperte Artur Mehmeti. Für Athleten, die ernsthafte Ergebnisse wollen.",
    programsHeading: "Programme",
    navigateHeading: "Navigation",
    legalHeading: "Rechtliches",
    personalizedSystem: "Individuelles System",
    home: "Startseite",
    aboutArtur: "Über Artur",
    faq: "FAQ",
    contact: "Kontakt",
    copyright: "Enrik Gani · Power Builder. Alle Rechte vorbehalten.",
    digitalNote: "Digitale Produkte — PDF-Lieferung nach dem Kauf.",
  },
  brandHub: {
    location: "Berlin, Deutschland",
    tagline: "Kraft. Muskel. Disziplin.",
    subtitle: "Powerbuilding-Programme, Coaching, Transformationen und Trainingssysteme.",
    linksLabel: "Links",
    social: { instagram: "Instagram", tiktok: "TikTok", youtube: "YouTube", email: "E-Mail" },
    hub: [
      { label: "Coaching", title: "Persönliches Coaching", subtitle: "4-Wochen Training & Ernährungssystem, das auf deine Ziele abgestimmt ist.", cta: "Coaching starten" },
      { label: "Programme", title: "Arturs Programme", subtitle: "Bankdrücken und Kraftsysteme.", cta: "Programme ansehen" },
      { label: "Supplemente", title: "Supplemente", subtitle: "Maximaler Rabatt mit Code BAUSTELLE.", cta: "Ansehen" },
      { label: "Content", title: "Transformation Content", subtitle: "Trainingsclips, Fortschritte, Disziplin und Ausbildung.", cta: "Content ansehen" },
      { label: "YouTube", title: "YouTube", subtitle: "Ausführliche Trainingsanalysen und Kraft-Education.", cta: "Auf YouTube ansehen" },
    ],
    featuredBadge: "Hauptprogramm",
    featuredTitle: "6-Wochen Bankdrück-Programm",
    featuredSubtitle: "Entwickelt zur Steigerung der Druckkraft, Power und Oberkörperleistung.",
    featuredPrice: "€49",
    featuredOriginalPrice: "€70",
    featuredCta: "Programm ansehen →",
  },
  personalized: {
    meta: {
      title: "Personalisiertes Training & Ernährungssystem | PowerBuilder",
      description: "Ein individuelles 4-Wochen Training- und Ernährungssystem, das speziell für dich von Artur erstellt wird. Fülle den Fragebogen aus und erhalte dein Programm innerhalb von 48 Stunden.",
    },
    hero: {
      badge: "Hauptangebot · Kein Template",
      title1: "Für dich gebaut.",
      title2: "Nur für dich.",
      subtitle: "Ein vollständiges Training- und Ernährungssystem, das von Artur von Grund auf neu geschrieben wurde — für deinen Körper, deine Ziele, deinen Zeitplan. Keine Templates. Kein Raten.",
      price: "€99",
      originalPrice: "€141",
      priceNote: "einmalig",
      cta: "Fragebogen ausfüllen →",
      trust: ["48h Lieferung", "Sichere PayPal-Zahlung", "Persönlich von Artur geschrieben"],
    },
    stats: [
      { value: "48h", label: "Programm-Lieferung" },
      { value: "16", label: "Fragebogen-Fragen" },
      { value: "100%", label: "Persönlich geschrieben" },
      { value: "€99", label: "Einmalig · Kein Abo" },
    ],
    included: {
      sectionLabel: "Alles inklusive",
      title1: "Ein Preis.",
      title2: "Vollständiges System.",
      items: [
        { title: "Individueller Trainingsplan", description: "Ein 4-Wochen-Trainingsprogramm, das um deinen Zeitplan, deine Ausrüstung, dein Erfahrungslevel und deine spezifischen Schwachstellen herum entwickelt wurde. Jede Übung hat einen Grund." },
        { title: "Individueller Ernährungsplan", description: "Genaue Kalorien- und Makroziele, berechnet für dein Körpergewicht, dein Ziel und deine Trainingsintensität. Kein Raten, keine allgemeinen Ratschläge." },
        { title: "Kraft- & Hypertrophiefokus", description: "Grundübungen für Kraft + Hypertrophie-Hilfsübungen. Beide Adaptionen, ein System — speziell für Powerbuilding entwickelt." },
        { title: "Regenerationsoptimierung", description: "Trainingsfrequenz, Ruhetage und Deload-Protokolle, geplant um deine Erholungskapazität und Schlafqualität." },
        { title: "PDF-Lieferung — 48h", description: "Dein vollständiges System wird als sauberes, organisiertes PDF innerhalb von 48 Stunden nach der Einreichung geliefert. Auf jedem Gerät einsatzbereit." },
        { title: "Geschrieben von Artur — Persönlich", description: "Keine KI-Generierung. Kein Template. Artur liest jede Einreichung und schreibt jedes Programm selbst." },
      ],
    },
    coach: {
      sectionLabel: "Der Coach",
      title1: "Geschrieben von",
      title2: "Artur.",
      credential: "Artur Mehmeti",
      credentialSub: "PowerBuilder Coach · Berlin",
      bio: [
        "Jedes Programm wird persönlich von Artur geschrieben. Er liest deinen Fragebogen, analysiert deine Daten und entwickelt ein System, das genau dort ansetzt, wo du gerade stehst und wo du hinwillst.",
        "Das ist keine KI-Generierung. Das ist kein Template mit deinem Namen drauf. Es braucht echte Zeit, weil es echte Aufmerksamkeit erfordert — und genau dafür zahlst du.",
      ],
      points: [
        "20-jähriger Berliner Athlet",
        "Jahrelang in Powerbuilding trainiert",
        "Jede Einreichung persönlich überprüft",
        "Begrenzte Programme — keine Massenproduktion",
      ],
    },
    process: {
      sectionLabel: "Ablauf",
      title1: "Wie es",
      title2: "funktioniert.",
      steps: [
        { num: "01", title: "Fragebogen ausfüllen", description: "16 Fragen zu deinem Profil, Trainingsgeschichte, Zielen, Körperbewertung und Lebensstil. Dauert 5–8 Minuten." },
        { num: "02", title: "Zahlung abschließen", description: "Zahle €99 via PayPal. Sichere Zahlung. Dein Fragebogen wird nach Zahlungsbestätigung an Artur übermittelt." },
        { num: "03", title: "Artur prüft", description: "Artur liest persönlich deine Einreichung, analysiert deine Daten und schreibt dein individuelles Programm. Keine Templates." },
        { num: "04", title: "Erhalte dein System", description: "Dein vollständiges Training + Ernährungs-PDF wird innerhalb von 48 Stunden an deine E-Mail geliefert. Öffne es und starte mit Tag 1." },
      ],
    },
    comparison: {
      sectionLabel: "Der Unterschied",
      title1: "Generisch vs.",
      title2: "Personalisiert.",
      genericLabel: "Generisches Programm",
      personalizedLabel: "Arturs Personalisiertes System",
      genericItems: [
        "Für die Durchschnittsperson gebaut — nicht für dich",
        "Gleiche Wiederholungen, Sätze und Übungen für alle",
        "Ignoriert deine Schwachpunkte und Verletzungsgeschichte",
        "Ernährung ist ein Nachgedanke oder fehlt ganz",
        "Keine Verantwortlichkeit — nur ein PDF-Download",
      ],
      personalizedItems: [
        "Für deinen genauen Körper, deine Ziele und deinen Zeitplan geschrieben",
        "Jede Übung mit deinen Daten im Sinn ausgewählt",
        "Schwachpunkte gezielt angegangen, Verletzungen umgangen",
        "Ernährungsziele für deine spezifische Situation berechnet",
        "Artur liest deine Einreichung und schreibt es persönlich",
      ],
    },
    guarantee: {
      sectionLabel: "Unser Versprechen",
      title1: "Wenn es nicht passt.",
      title2: "Artur korrigiert es.",
      description: "Wenn etwas in deinem Programm nicht mit dem übereinstimmt, was du im Fragebogen beschrieben hast, kontaktiere Artur direkt. Er wird es beheben — denn das Ziel ist ein Programm, das du tatsächlich umsetzen und von dem du Ergebnisse erzielen kannst.",
    },
    faq: [
      { question: "Wie lange dauert es, mein Programm zu erhalten?", answer: "Innerhalb von 48 Stunden nach Zahlung und Fragebogen-Einreichung. Artur überprüft persönlich jede Einreichung, daher spiegelt die Lieferzeit die Sorgfalt wider, die in jedes Programm fließt. Du erhältst ein PDF direkt an deine E-Mail." },
      { question: "Was genau ist enthalten?", answer: "Ein vollständiger 4-Wochen-Trainingsplan (alle Einheiten, Übungen, Sätze, Wiederholungen und eingebaute Progressive Overload) + ein individueller Ernährungsplan (tägliches Kalorienziel, Makro-Aufschlüsselung, Mahlzeiten-Timing-Leitfaden). Beides speziell auf deine Antworten zugeschnitten — kein Template." },
      { question: "Wird dieses Programm von KI generiert?", answer: "Nein. Artur liest persönlich jeden Fragebogen und schreibt jedes Programm. Deshalb dauert die Lieferung bis zu 48 Stunden — echtes Coaching braucht echte Zeit." },
      { question: "Was, wenn ich mit dem Programm nicht zufrieden bin?", answer: "Kontaktiere Artur direkt. Wenn etwas im Programm keinen Sinn für deine Situation ergibt oder eine Diskrepanz zu dem besteht, was du im Fragebogen beschrieben hast, wird er es ansprechen." },
      { question: "Wie viele Fragen enthält der Fragebogen?", answer: "16 Fragen zu deinem Profil (Alter, Größe, Gewicht, Geschlecht), Trainingsgeschichte (Erfahrung, Tage/Woche, Gym-Zugang, Bankdrück-Erfahrung), Zielen, Körperbewertung und Lebensstil. Dauert etwa 5–8 Minuten." },
      { question: "Können Anfänger das personalisierte Programm nutzen?", answer: "Ja. Im Gegensatz zu den statischen Programmen wird das personalisierte Programm an deinen aktuellen Stand angepasst. Wenn du noch am Anfang stehst, gestaltet Artur es entsprechend — realistische Lasten, angemessenes Volumen, Übungen, die du sicher ausführen kannst." },
    ],
    cta: {
      sectionLabel: "Bereit?",
      title1: "Starte deine",
      title2: "Transformation.",
      subtitle: "Fülle den Fragebogen aus. Zahle einmal. Erhalte ein System, das genau für dich gebaut wurde.",
      button: "Fragebogen ausfüllen — €99 →",
      note: "PayPal · 48-Stunden-Lieferung · Persönlich von Artur geschrieben",
    },
  },
  programs: {
    meta: {
      title: "Programme | PowerBuilder",
      description: "Persönliches Coaching und sofort herunterladbare Spezialisierungsprogramme von Artur.",
    },
    hero: {
      label: "Wähle dein Programm",
      title1: "Dein Programm.",
      title2: "Echte Ergebnisse.",
      subtitle: "Persönliches Coaching oder sofort herunterladbare Spezialisierungsprogramme. Für ernsthafte Kraftsportler — wähle das Format, das zu deiner Situation passt.",
    },
    personalizedCard: {
      accentLabel: "Personalisiert",
      title: "4-Wochen Personalisiertes Training & Ernährungsprogramm",
      tagline: "100% Auf Dich Zugeschnitten",
      description: "Ein vollständig personalisiertes 4-Wochen Training- und Ernährungsprogramm, das auf deine Ziele, Erfahrung, Lebensstil und Regeneration abgestimmt ist. Du beantwortest einige Fragen — Artur erstellt deinen Plan.",
      duration: "4 Wochen",
      sessionsPerWeek: "Individueller Plan",
      features: [
        "Individueller Trainingsplan",
        "Individueller Ernährungsplan",
        "Kraft- & Hypertrophiefokus",
        "Regenerationsoptimiert",
        "Auf deine Ziele & deinen Zeitplan abgestimmt",
        "Direkt von Artur erstellt",
      ],
    },
  },
  programDetail: {
    priceNote: "Einmalig · kein Abo",
    instantPdf: "Sofort-PDF",
    structureLabel: "Programmstruktur",
    focusLabel: "Schwerpunktbereiche",
    threeTitle1: "Die drei",
    threeTitle2: "Säulen.",
    whoForLabel: "Für wen ist das",
    ctaNote: (price: number) => `Sofort-PDF · Einmalig €${price} · Lebenslanger Zugang`,
    personalizedLink: "Etwas speziell für dich gebaut? → Individuelles System",
  },
  benchPress: {
    structureTitle1: "4 Tage.",
    structureTitle2: "Maximale Bankdrück-Fortschritte.",
    builtFor: "Gebaut für",
    builtForAccent: "Drücker.",
    ctaTitle1: "In 6 Wochen",
    ctaTitle2: "ist dein Bankdrücken anders.",
    ctaSubtitle: "Ein Programm. Sechs Wochen. Ernsthafte Kraft.",
    pillars: [
      { title: "Bankdrück-Kraft", description: "Schweres Drücktraining, das deine Kraftgrenze in jeder Einheit höher schiebt." },
      { title: "Brust-Power", description: "Hypertrophie-fokussierte Zusatzarbeit baut die Brustdicke auf, die Drückkraft braucht." },
      { title: "Drück-Mechanik", description: "Technik-Cues und Formarbeit verfeinern dein Bankdrücken unter Last — der schnellste Weg, nachhaltiges Gewicht hinzuzufügen." },
    ],
    process: {
      sectionLabel: "Ablauf",
      title1: "So",
      title2: "funktioniert's.",
      steps: [
        { num: "01", title: "Kaufen", description: "Klick auf Kaufen und schließe den Bezahlvorgang via PayPal ab. Sicher per Karte oder PayPal-Guthaben. Bestätigung in Sekunden." },
        { num: "02", title: "Sofort-Download", description: "Dein 6-Wochen-PDF wird sofort geliefert. Verfügbar in Englisch, Deutsch und Albanisch." },
        { num: "03", title: "Trainieren", description: "Folge dem strukturierten 6-Wochen-Plan. Einheiten, Sätze, Wiederholungen und Zusatzübungen sind alle für dich ausgelegt." },
        { num: "04", title: "Fortschritt", description: "Verfolge deine Fortschritte über 6 Wochen. Wiederhole das Programm jederzeit auf höherem Niveau — es gehört dir lebenslang." },
      ],
    },
    faqs: [
      { question: "Brauche ich einen starken Bankdruck, um mit diesem Programm zu beginnen?", answer: "Nein. Du brauchst eine solide Bankdrück-Technik und mindestens 6 Monate konsequentes Training. Das Ausgangsgewicht spielt keine Rolle — das Programm baut von dort auf, wo du gerade stehst. Was zählt, ist, dass du die Bewegung sicher unter Last ausführen kannst." },
      { question: "Kann ich es neben meinem regulären Training ausführen?", answer: "Dies ist ein Spezialisierungsprogramm — es ist als dein primärer Oberkörper-Fokus für 6 Wochen ausgelegt. Du kannst an freien Tagen Beintraining hinzufügen, aber zusätzliches schweres Drücken oder Brustarbeit beeinträchtigt die Regeneration und reduziert die Ergebnisse." },
      { question: "Bringt dieses Programm Brustgröße oder nur Kraft?", answer: "Beides. Das Programm kombiniert schweres Krafttraining mit hypertrophiefokussiertem Zusatzdrücken. Du baust Brustdicke und Drückkraft gleichzeitig auf." },
      { question: "Welche Ausrüstung benötige ich?", answer: "Eine Langhantel, Bankdrück-Station und Zugang zu Kabeln oder Kurzhanteln für Zusatzübungen. Ein vollständiges Fitnessstudio ist ideal." },
      { question: "Welche Fortschritte kann ich in 6 Wochen erwarten?", answer: "Die Ergebnisse hängen von deinem Ausgangspunkt, Konsistenz und Ernährung ab. Das Programm ist so strukturiert, dass es deine Grenze jede Woche pusht — was du herausbekommst, spiegelt wider, was du hineinsteckst." },
    ],
  },

  supplements: {
    meta: {
      title: "Supplemente | PowerBuilder",
      description: "Erhalte maximalen Rabatt auf Premium-Supplemente mit Code BAUSTELLE — Arturs empfohlener Supplement-Partner.",
    },
    hero: {
      badge: "Werbung · Affiliate",
      label: "Supplemente",
      title1: "Echte Power.",
      title2: "Echte Supplemente.",
      subtitle: "Arturs empfohlener Supplement-Partner. Nutze den Code unten, um den maximal verfügbaren Rabatt freizuschalten.",
    },
    code: {
      label: "Dein Code",
      discountNote: "Maximaler Rabatt beim Checkout",
      copy: "Kopieren",
      copied: "Kopiert!",
      cta: "Jetzt einkaufen →",
      note: "Code beim Checkout eingeben — Rabatthöhe variiert je nach Warenkorb und aktuellen Aktionen.",
    },
    why: {
      sectionLabel: "Warum dieser Partner",
      title1: "Geprüft.",
      title2: "Empfohlen.",
      cards: [
        { title: "Arturs Wahl", description: "Persönlich von Artur für die PowerBuilder-Community ausgewählt. Keine Kompromisse bei der Qualität." },
        { title: "Maximaler Rabatt", description: "Der Code BAUSTELLE schaltet den höchsten verfügbaren Rabatt auf jede Bestellung frei." },
        { title: "Schneller Checkout", description: "Direkter Link zum Shop, Code wird in Sekunden angewendet. Keine Konten, kein Tracking — nur Ersparnis." },
      ],
    },
    how: {
      sectionLabel: "So einlösen",
      title1: "Drei Schritte.",
      title2: "Ein Code.",
      steps: [
        { num: "01", title: "Shop besuchen", description: "Klicke unten auf den Button, um direkt zu Arturs empfohlenem Supplement-Partner zu gelangen." },
        { num: "02", title: "Produkte wählen", description: "Lege die Supplemente, die du brauchst, in deinen Warenkorb. Stapel ruhig — der Rabatt gilt für die gesamte Bestellung." },
        { num: "03", title: "Code BAUSTELLE eingeben", description: "Gib den Code beim Checkout ein, um den maximalen Rabatt automatisch freizuschalten." },
      ],
    },
    cta: {
      title1: "Bereit für",
      title2: "Power Up?",
      subtitle: "Nutze Code BAUSTELLE beim Checkout. Der Rabatt greift sofort beim Anwenden.",
      button: "Mit BAUSTELLE einkaufen →",
    },
    disclosure: {
      heading: "Affiliate-Hinweis",
      body: "Diese Seite enthält Affiliate-Links gemäß § 5a UWG (Gesetz gegen den unlauteren Wettbewerb). Wenn du über den obigen Link mit dem Code BAUSTELLE einkaufst, erhält Artur eine Provision — für dich entstehen keine zusätzlichen Kosten. Gleichzeitig schaltest du den maximal verfügbaren Rabatt frei.",
    },
  },

  pricing: {
    launchBadge: "Eröffnungsangebot",
    countdownLabel: "Endet in",
    countdownEnded: "Angebot beendet",
  },

  // ── Checkout (Widerrufsverzicht, erforderlich für § 4 AGB) ──────────────────
  checkout: {
    widerrufConsent:
      "Ich stimme ausdrücklich zu, dass die Lieferung des digitalen Produkts unmittelbar nach Abschluss der Zahlung beginnt, und nehme zur Kenntnis, dass mein 14-tägiges Widerrufsrecht gemäß § 356 Abs. 5 BGB mit Beginn der Vertragsausführung erlischt.",
    consentRequired: "Bitte bestätigen Sie den Widerrufsverzicht oben, um fortzufahren.",
    consentAriaLabel: "Widerrufsverzicht-Einwilligung",
  },
};

// ─── Albanian (Shqip) ──────────────────────────────────────────────────────────
const sq: typeof en = {
  nav: {
    personalized: "Personalizuar",
    programs: "Programet",
    about: "Rreth",
    faq: "Pyetje",
    contact: "Kontakt",
    buildMyProgram: "Krijo Programin",
    fullSite: "Faqja e plotë",
    languageLabel: "Gjuha",
  },
  footer: {
    tagline: "Sisteme premium të forcës dhe hipertrofisë me ekspertin e fitnesit Artur Mehmeti. Ndërtuar për atletë seriozë.",
    programsHeading: "Programet",
    navigateHeading: "Navigim",
    legalHeading: "Juridike",
    personalizedSystem: "Sistemi Personal",
    home: "Kryefaqja",
    aboutArtur: "Rreth Arturit",
    faq: "Pyetje",
    contact: "Kontakt",
    copyright: "Enrik Gani · Power Builder. Të gjitha të drejtat e rezervuara.",
    digitalNote: "Produkte dixhitale — dorëzim PDF pas blerjes.",
  },
  brandHub: {
    location: "Berlin, Gjermani",
    tagline: "Forcë. Muskuj. Disiplinë.",
    subtitle: "Programe powerbuilding, coaching, transformime dhe sisteme stërvitjeje.",
    linksLabel: "Lidhje",
    social: { instagram: "Instagram", tiktok: "TikTok", youtube: "YouTube", email: "Email" },
    hub: [
      { label: "Coaching", title: "Coaching Personal", subtitle: "Sistem stërvitjeje & ushqimi 4 javë i ndërtuar për qëllimet tuaja.", cta: "Fillo Coaching" },
      { label: "Programet", title: "Programet e Arturit", subtitle: "Bench press dhe sisteme force.", cta: "Shiko Programet" },
      { label: "Suplementa", title: "Suplementa", subtitle: "Zbritja maksimale me kodin BAUSTELLE.", cta: "Shiko" },
      { label: "Content", title: "Content Transformimi", subtitle: "Klipe stërvitjeje, progres, disiplinë dhe edukim.", cta: "Shiko Content" },
      { label: "YouTube", title: "YouTube", subtitle: "Analiza të gjata stërvitjeje dhe edukim ngritjeje.", cta: "Shiko në YouTube" },
    ],
    featuredBadge: "Programi i Veçantë",
    featuredTitle: "Program Bench Press 6 Javë",
    featuredSubtitle: "Ndërtuar për të rritur forcën e shtytjes, fuqinë dhe performancën e trupit të sipërm.",
    featuredPrice: "€49",
    featuredOriginalPrice: "€70",
    featuredCta: "Shiko Programin →",
  },
  personalized: {
    meta: {
      title: "Sistemi Personal i Stërvitjes & Ushqimit | PowerBuilder",
      description: "Një sistem stërvitjeje dhe ushqimi 4-javë i ndërtuar posaçërisht për ty nga Arturi. Plotëso pyetësorin dhe merr programin tënd brenda 48 orëve.",
    },
    hero: {
      badge: "Oferta Kryesore · Jo Shabllone",
      title1: "Ndërtuar Për Ty.",
      title2: "Vetëm Ty.",
      subtitle: "Një sistem i plotë stërvitjeje dhe ushqimi i shkruar nga e para nga Arturi — për trupin tënd, qëllimet e tua, orarin tënd. Pa shabllone. Pa hamendje.",
      price: "€99",
      originalPrice: "€141",
      priceNote: "njëherë",
      cta: "Fillo Pyetësorin →",
      trust: ["Dorëzim 48h", "Pagesë e sigurt PayPal", "Shkruar personalisht nga Arturi"],
    },
    stats: [
      { value: "48h", label: "Dorëzimi i Programit" },
      { value: "16", label: "Pyetje Pyetësori" },
      { value: "100%", label: "Shkruar Personalisht" },
      { value: "€99", label: "Njëherë · Pa Abonim" },
    ],
    included: {
      sectionLabel: "Gjithçka e Përfshirë",
      title1: "Një Çmim.",
      title2: "Sistem i Plotë.",
      items: [
        { title: "Plan Stërvitjeje Personal", description: "Një program stërvitjeje 4-javë i hartuar rreth orarit, pajisjeve, nivelit të përvojës dhe pikave specifike të dobëta. Çdo ushtrim ka një arsye." },
        { title: "Plan Ushqimi Personal", description: "Objektivat e sakta të kalorive dhe makrove të llogaritura për peshën e trupit, qëllimin dhe intensitetin e stërvitjes. Pa hamendësim, pa këshilla të përgjithshme." },
        { title: "Fokus Forcë & Hipertrofi", description: "Forcë në ushtrimet kryesore + punë ndihmëse hipertrofie. Të dyja adaptimet, një sistem — ndërtuar posaçërisht për powerbuilding." },
        { title: "Optimizim Rikuperimi", description: "Frekuenca e stërvitjes, ditët e pushimit dhe protokollet deload të planifikuara rreth kapacitetit të rikuperimit dhe cilësisë së gjumit." },
        { title: "Dorëzim PDF — 48h", description: "Sistemi yt i plotë dorëzohet si PDF i pastër brenda 48 orëve. Gati për t'u përdorur në çdo pajisje." },
        { title: "Shkruar Nga Arturi — Personalisht", description: "Jo i gjeneruar nga AI. Jo shabllone. Arturi lexon çdo dorëzim dhe shkruan çdo program vetë." },
      ],
    },
    coach: {
      sectionLabel: "Trajneri",
      title1: "Shkruar Nga",
      title2: "Arturi.",
      credential: "Artur Mehmeti",
      credentialSub: "Trajner PowerBuilder · Berlin",
      bio: [
        "Çdo program shkruhet personalisht nga Arturi. Ai lexon pyetësorin tënd, analizon të dhënat e tua dhe ndërton një sistem që përputhet saktësisht me vendin ku je dhe ku dëshiron të shkosh.",
        "Kjo nuk është e gjeneruar nga AI. Kjo nuk është shabllone me emrin tënd. Kërkon kohë reale sepse kërkon vëmendje reale — dhe pikërisht për këtë po paguan.",
      ],
      points: [
        "Atlet 20-vjeçar me bazë në Berlin",
        "Stërvitur në powerbuilding për vite",
        "Çdo dorëzim rishikohet personalisht",
        "Programe të kufizuara — asnjë prodhim masiv",
      ],
    },
    process: {
      sectionLabel: "Procesi",
      title1: "Si",
      title2: "Funksionon.",
      steps: [
        { num: "01", title: "Plotëso Pyetësorin", description: "16 pyetje që mbulojnë profilin tënd, historinë e stërvitjes, qëllimet, vlerësimin e trupit dhe stilin e jetesës. Zgjat 5–8 minuta." },
        { num: "02", title: "Kryej Pagesën", description: "Paguaj €99 nëpërmjet PayPal. Pagesë e sigurt. Pyetësori yt dërgohet tek Arturi pas konfirmimit të pagesës." },
        { num: "03", title: "Arturi Shqyrton", description: "Arturi lexon personalisht dorëzimin tënd, analizon të dhënat dhe shkruan programin tënd personal. Pa shabllone." },
        { num: "04", title: "Merr Sistemin Tënd", description: "PDF-ja e plotë e stërvitjes + ushqimit dorëzohet në emailin tënd brenda 48 orëve. Hapeni dhe filloni Ditën 1." },
      ],
    },
    comparison: {
      sectionLabel: "Dallimi",
      title1: "Gjenerik kundër",
      title2: "Personalizuar.",
      genericLabel: "Program Gjenerik",
      personalizedLabel: "Sistemi Personal i Arturit",
      genericItems: [
        "Ndërtuar për personin mesatar — jo për ty",
        "Të njëjtat përsëritje, seri dhe ushtrime për të gjithë",
        "Injoron pikat e dobëta dhe historinë e lëndimeve",
        "Ushqimi është mendim i dytë ose mungon krejtësisht",
        "Asnjë llogaridhënie — vetëm një shkarkim PDF",
      ],
      personalizedItems: [
        "Shkruar për trupin, qëllimet dhe orarin tënd të saktë",
        "Çdo ushtrim i zgjedhur duke pasur parasysh të dhënat e tua",
        "Pikat e dobëta të synuara, lëndimet e kapërcyera",
        "Objektivat ushqimore të llogaritura për situatën tënde specifike",
        "Arturi lexon dorëzimin tënd dhe e shkruan personalisht",
      ],
    },
    guarantee: {
      sectionLabel: "Angazhimi Ynë",
      title1: "Nëse Nuk Përshtatet.",
      title2: "Arturi e Rregullon.",
      description: "Nëse diçka në programin tënd nuk përputhet me atë që ke përshkruar në pyetësor, kontakto Arturin drejtpërdrejt. Ai do ta adresojë — sepse qëllimi është një program që mund ta ekzekutosh dhe nga i cili mund të marrësh rezultate.",
    },
    faq: [
      { question: "Sa kohë duhet për të marrë programin tim?", answer: "Brenda 48 orëve nga pagesa dhe dorëzimi i pyetësorit. Arturi shqyrton personalisht çdo dorëzim, kështu që koha e dorëzimit pasqyron kujdesin që shkon në çdo program. Do të marrësh një PDF drejtpërdrejt në emailin tënd." },
      { question: "Çfarë përfshihet saktësisht?", answer: "Një plan i plotë stërvitjeje 4-javë (të gjitha seancat, ushtrimet, seritë, përsëritjet dhe ngarkesa progresive e ndërtuar) + një plan ushqimi personal (objektivi ditor i kalorive, ndarja e makrove, udhëzimi i kohës së vakteve). Të dyja të adaptuara posaçërisht për përgjigjet e tua — jo shabllone." },
      { question: "A është ky program i gjeneruar nga AI?", answer: "Jo. Arturi lexon personalisht çdo pyetësor dhe shkruan çdo program. Kjo është arsyeja pse dorëzimi zgjat deri në 48 orë — coaching i vërtetë kërkon kohë të vërtetë." },
      { question: "Çfarë nëse nuk jam i kënaqur me programin?", answer: "Kontakto Arturin drejtpërdrejt. Nëse diçka në program nuk ka kuptim për situatën tënde ose ka mospërputhje me atë që ke përshkruar në pyetësor, ai do ta adresojë." },
      { question: "Sa pyetje ka pyetësori?", answer: "16 pyetje që mbulojnë profilin tënd (moshë, gjatësi, peshë, gjini), historinë e stërvitjes (përvojë, ditë/javë, qasja në palestër, përvojë bench press), qëllimet, vlerësimin e trupit dhe stilin e jetesës. Zgjat rreth 5–8 minuta." },
      { question: "A mund të përdorin fillestarët programin personal?", answer: "Po. Ndryshe nga programet statike, programi personal adaptohet për ku je ti. Nëse je në fillim të rrugëtimit tënd, Arturi harton në përputhje me rrethanat — ngarkesa realiste, vëllim i përshtatshëm, ushtrime që mund t'i ekzekutosh në mënyrë të sigurt." },
    ],
    cta: {
      sectionLabel: "Gati?",
      title1: "Fillo",
      title2: "Transformimin Tënd.",
      subtitle: "Plotëso pyetësorin. Paguaj njëherë. Merr një sistem të ndërtuar saktësisht për atë që je.",
      button: "Fillo Pyetësorin — €99 →",
      note: "PayPal · Dorëzim 48 orë · Shkruar personalisht nga Arturi",
    },
  },
  programs: {
    meta: {
      title: "Programet | PowerBuilder",
      description: "Coaching personal dhe programe specializimi me shkarkim të menjëhershëm nga Arturi.",
    },
    hero: {
      label: "Zgjidh Programin Tënd",
      title1: "Programi Yt.",
      title2: "Rezultate Reale.",
      subtitle: "Coaching personal ose programe specializimi me shkarkim të menjëhershëm. Ndërtuar për ngritës seriozë — zgjidh formatin që përshtatet me situatën tënde.",
    },
    personalizedCard: {
      accentLabel: "Personalizuar",
      title: "Program Personal Stërvitjeje & Ushqimi 4 Javë",
      tagline: "100% Personal Për Ty",
      description: "Një program i plotë personal stërvitjeje dhe ushqimi 4-javë i ndërtuar rreth qëllimeve, përvojës, stilit të jetesës dhe rikuperimit tënd. Ti u përgjigji disa pyetjeve — Arturi krijon planin tënd.",
      duration: "4 Javë",
      sessionsPerWeek: "Plan Personal",
      features: [
        "Plan stërvitjeje personal",
        "Plan ushqimi personal",
        "Fokus forcë & hipertrofi",
        "Rikuperim i optimizuar",
        "Ndërtuar rreth qëllimeve & orarit tënd",
        "Krijuar drejtpërdrejt nga Arturi",
      ],
    },
  },
  programDetail: {
    priceNote: "Njëherë · pa abonim",
    instantPdf: "PDF i Menjëhershëm",
    structureLabel: "Struktura e Programit",
    focusLabel: "Fushat e Fokusit",
    threeTitle1: "Tre",
    threeTitle2: "Shtyllat.",
    whoForLabel: "Për Kë Është Ky",
    ctaNote: (price: number) => `PDF i menjëhershëm · Njëherë €${price} · Qasje e përjetshme`,
    personalizedLink: "Dëshiron diçka të ndërtuar posaçërisht për ty? → Sistemi Personal",
  },
  benchPress: {
    structureTitle1: "4 Ditë.",
    structureTitle2: "Fitime Maksimale Bench Press.",
    builtFor: "Ndërtuar për",
    builtForAccent: "Shtytësit.",
    ctaTitle1: "Pas 6 Javësh,",
    ctaTitle2: "Bench Presi Yt Është Ndryshe.",
    ctaSubtitle: "Një program. Gjashtë javë. Forcë serioze.",
    pillars: [
      { title: "Forcë Bench Press", description: "Punë e rëndë shtytëse e dizajnuar të shtyjë tavanin tënd të forcës më lart në çdo seancë." },
      { title: "Fuqi Gjoksi", description: "Punë ndihmëse e fokusuar në hipertrofi që ndërton trashësinë e gjoksit që forca shtytëse kërkon." },
      { title: "Mekanika e Shtytjes", description: "Sugjerime teknike dhe punë formash që rafinojnë bench press-in tënd nën ngarkesë — mënyra më e shpejtë për të shtuar peshë të qëndrueshme." },
    ],
    process: {
      sectionLabel: "Procesi",
      title1: "Si",
      title2: "Funksionon.",
      steps: [
        { num: "01", title: "Blej", description: "Kliko Blej dhe përfundo pagesën nëpërmjet PayPal. Kartë e sigurt ose llogari PayPal. Konfirmimi në sekonda." },
        { num: "02", title: "Shkarkim i Menjëhershëm", description: "PDF-i yt 6-javësh dorëzohet menjëherë. I disponueshëm në anglisht, gjermanisht dhe shqip." },
        { num: "03", title: "Stërvitu", description: "Ndiq planin e strukturuar 6-javësh. Seancat, setet, përsëritjet dhe ushtrimet ndihmëse janë të gjitha të planifikuara për ty." },
        { num: "04", title: "Progres", description: "Ndiqi përparimet gjatë 6 javëve. Ripërsërit programin në një bazë më të lartë në çdo kohë — është i yti përgjithmonë." },
      ],
    },
    faqs: [
      { question: "A më duhet bench press i fortë për të filluar?", answer: "Jo. Të nevojitet teknikë solide bench press dhe të paktën 6 muaj stërvitje konsistente. Pesha fillestare nuk ka rëndësi — programi ndërtοhet nga aty ku je tani. Ajo që ka rëndësi është që mund ta ekzekutosh lëvizjen në mënyrë të sigurt nën ngarkesë." },
      { question: "A mund ta drejtoj krahas stërvitjes sime të rregullt?", answer: "Ky është program specializimi — është hartuar të jetë fokusi yt kryesor i trupit të sipërm për 6 javë. Mund të shtosh stërvitje këmbësh në ditët e lira, por shtimi i shtytjes shtesë të rëndë ose punës së gjoksit do të ndërhyjë me rikuperimin dhe do të reduktojë rezultatet." },
      { question: "A do të shtojë ky program madhësinë e gjoksit apo vetëm forcën?", answer: "Të dyja. Programi kombinon punë të rëndë force me shtytje ndihmëse të fokusuar në hipertrofi. Do të ndërtosh trashësinë e gjoksit dhe forcën e shtytjes njëkohësisht." },
      { question: "Çfarë pajisje më duhen?", answer: "Një shtangë e gjatë, stacion bench press dhe qasje në kabllo ose gjevrekë për punë ndihmëse. Një palestër komerciale e plotë është ideale." },
      { question: "Çfarë progresi mund të pres në 6 javë?", answer: "Rezultatet varen nga pika juaj fillestare, konsistenca dhe ushqyerja. Programi është i strukturuar të shtyjë tavanin tënd çdo javë — ajo që merr prej tij reflekton atë që fut në të." },
    ],
  },

  supplements: {
    meta: {
      title: "Suplemente | PowerBuilder",
      description: "Merr zbritjen maksimale në suplemente premium me kodin BAUSTELLE — partneri i rekomanduar i suplementeve nga Arturi.",
    },
    hero: {
      badge: "Reklamë · Affiliate",
      label: "Suplemente",
      title1: "Fuqi e Vërtetë.",
      title2: "Suplemente të Vërteta.",
      subtitle: "Partneri i suplementeve i rekomanduar nga Arturi. Përdor kodin më poshtë për të zbërthyer zbritjen maksimale të disponueshme.",
    },
    code: {
      label: "Kodi yt",
      discountNote: "Zbritja maksimale në checkout",
      copy: "Kopjo",
      copied: "U kopjua!",
      cta: "Bli tani →",
      note: "Apliko kodin në checkout — zbritja ndryshon sipas përmbajtjes së shportës dhe ofertave aktive.",
    },
    why: {
      sectionLabel: "Pse ky partner",
      title1: "I Besueshëm.",
      title2: "I Rekomanduar.",
      cards: [
        { title: "Zgjedhja e Arturit", description: "I përzgjedhur personalisht nga Arturi për komunitetin PowerBuilder. Pa kompromise në cilësi." },
        { title: "Zbritja Maksimale", description: "Kodi BAUSTELLE hap zbritjen më të lartë të disponueshme në çdo porosi." },
        { title: "Checkout i Shpejtë", description: "Lidhje direkte për në dyqan, kodi aplikohet brenda sekondave. Pa llogari, pa ndjekje — vetëm kursime." },
      ],
    },
    how: {
      sectionLabel: "Si të aplikosh",
      title1: "Tri Hapa.",
      title2: "Një Kod.",
      steps: [
        { num: "01", title: "Vizito Dyqanin", description: "Kliko butonin më poshtë për të shkuar drejt te partneri i suplementeve i rekomanduar nga Arturi." },
        { num: "02", title: "Zgjidh Produktet", description: "Shto suplementet që të nevojiten në shportë. Mblidhi pa frikë — zbritja vlen për të gjithë porosinë." },
        { num: "03", title: "Apliko Kodin BAUSTELLE", description: "Vendos kodin në checkout për të zbërthyer automatikisht zbritjen maksimale." },
      ],
    },
    cta: {
      title1: "Gati për",
      title2: "Power Up?",
      subtitle: "Përdor kodin BAUSTELLE në checkout. Zbritja zbatohet menjëherë sapo ta aplikosh.",
      button: "Bli me BAUSTELLE →",
    },
    disclosure: {
      heading: "Njoftim Affiliate",
      body: "Kjo faqe përmban lidhje affiliate sipas § 5a UWG (Ligji gjerman kundër konkurrencës së pandershme). Kur blen përmes lidhjes së mësipërme duke përdorur kodin BAUSTELLE, Arturi merr një komision — pa kosto shtesë për ty. Njëkohësisht zbërthen zbritjen maksimale të disponueshme.",
    },
  },

  pricing: {
    launchBadge: "Hapja e Madhe",
    countdownLabel: "Përfundon në",
    countdownEnded: "Oferta përfundoi",
  },

  // ── Checkout (Heqja dorë nga tërheqja — kërkohet për § 4 AGB) ───────────────
  checkout: {
    widerrufConsent:
      "Pranoj shprehimisht që dorëzimi i produktit dixhital fillon menjëherë pas përfundimit të pagesës dhe njoftohem se e drejta ime 14-ditore për tërheqje skadon me fillimin e ekzekutimit, në përputhje me § 356 (5) BGB (Kodi Civil Gjerman).",
    consentRequired: "Ju lutem konfirmoni heqjen dorë nga tërheqja më lart për të vazhduar.",
    consentAriaLabel: "Pëlqimi për heqjen dorë nga tërheqja",
  },
};

// ─── Exports ───────────────────────────────────────────────────────────────────

export const translations: Record<Locale, typeof en> = { en, de, sq };

export function getT(locale: Locale) {
  return translations[locale];
}
