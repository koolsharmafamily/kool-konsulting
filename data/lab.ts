/** Fictional, local-only demonstrations. Never use this data as client proof. */
export const labDemos = [
  {
    slug: "hospitality-concierge",
    number: "03",
    title: "A thoughtful first welcome.",
    name: "Hospitality concierge",
    audience: "Hospitality",
    description:
      "From a dinner enquiry to the details your team needs. Explore availability, preferences and a considered human handoff.",
    contentType: "concept" as const,
    readiness: "ready" as const,
  },
  {
    slug: "lifestyle-discovery",
    number: "02",
    title: "A little more personal.",
    name: "Lifestyle discovery",
    audience: "Luxury brands",
    description:
      "Discover a fictional collection, explore a recommendation and see how the conversation becomes a useful client record.",
    contentType: "concept" as const,
    readiness: "ready" as const,
  },
  {
    slug: "startup-onboarding",
    number: "01",
    title: "A better next step.",
    name: "Startup onboarding",
    audience: "Startups & smart SMEs",
    description:
      "Turn an enquiry into a clear next action. Change a qualification rule and see the route adapt, with a person in control.",
    contentType: "concept" as const,
    readiness: "ready" as const,
  },
];

export const diningDates = [
  { value: "2026-11-13", label: "Friday, 13 November" },
  { value: "2026-11-14", label: "Saturday, 14 November" },
  { value: "2026-11-15", label: "Sunday, 15 November" },
] as const;
export const diningTimes = ["18:30", "19:30", "20:30"] as const;
export type DiningTime = (typeof diningTimes)[number];
export type DiningRequest = {
  date: string;
  time: DiningTime;
  party: number;
  preference: "No preference" | "Vegetarian" | "Quiet table";
};
export const initialDining: DiningRequest = {
  date: "2026-11-14",
  time: "19:30",
  party: 2,
  preference: "No preference",
};
const sampleTables: Record<string, Record<DiningTime, number>> = {
  "2026-11-13": { "18:30": 8, "19:30": 4, "20:30": 6 },
  "2026-11-14": { "18:30": 6, "19:30": 0, "20:30": 8 },
  "2026-11-15": { "18:30": 8, "19:30": 6, "20:30": 4 },
};
export function checkDiningAvailability(request: DiningRequest) {
  const slots = sampleTables[request.date];
  if (
    !slots ||
    !Number.isInteger(request.party) ||
    request.party < 1 ||
    request.party > 8 ||
    !diningTimes.includes(request.time)
  ) {
    return {
      status: "error" as const,
      alternative: null,
      message: "Choose a sample date, time and party of 1–8 guests.",
    };
  }
  if (slots[request.time] >= request.party)
    return {
      status: "available" as const,
      alternative: null,
      message: `${request.time} is available for ${request.party} in the sample schedule.`,
    };
  const alternative =
    diningTimes.find(
      (time) => time !== request.time && slots[time] >= request.party,
    ) ?? null;
  return {
    status: "unavailable" as const,
    alternative,
    message: `${request.time} is unavailable for ${request.party} in the sample schedule.${alternative ? ` ${alternative} is an alternative on the same date.` : " A host would need to suggest another date."}`,
  };
}
export function diningDateLabel(value: string) {
  return diningDates.find((date) => date.value === value)?.label ?? value;
}
export function lookupDiningKnowledge(question: string) {
  const query = question.trim().toLowerCase();
  if (!query)
    return {
      kind: "error" as const,
      answer: "Enter a question, or choose an example below.",
    };
  // Exact examples keep the boundary honest: unfamiliar wording is a human handoff.
  const answers: Record<string, string> = {
    "are vegetarian options available?":
      "The fictional menu includes a vegetarian tasting option. Your preference can be included in the sample request.",
    "is parking available?":
      "The sample venue guide lists a guest parking area beside the entrance. This is fictional venue information.",
    "can you accommodate an allergy?":
      "Allergy requests need a host to confirm suitability. No dietary safety assurance is made by this demo.",
  };
  if (query === "can you accommodate an allergy?")
    return { kind: "human" as const, answer: answers[query] };
  if (answers[query])
    return { kind: "answer" as const, answer: answers[query] };
  return {
    kind: "human" as const,
    answer:
      "That is outside this sample venue guide. A host would need to answer; your question can accompany the sample handoff.",
  };
}

export type Occasion = "Everyday" | "Evening" | "A weekend away";
export type Finish = "Warm neutrals" | "Deep tones";
export type CollectionProduct = {
  id: string;
  name: string;
  occasion: Occasion;
  finish: Finish;
  material: string;
  colour: string;
  stock: number;
  shape: "tote" | "cuff" | "pouch";
  description: string;
};
export const collection: CollectionProduct[] = [
  {
    id: "FT-S",
    name: "Fold tote / Sand",
    occasion: "Everyday",
    finish: "Warm neutrals",
    material: "Canvas · sculpted handle",
    colour: "#B7A18B",
    stock: 4,
    shape: "tote",
    description:
      "A generous silhouette with a folded side seam. Made for the small rituals of a busy day.",
  },
  {
    id: "FT-I",
    name: "Fold tote / Ink",
    occasion: "Everyday",
    finish: "Deep tones",
    material: "Canvas · sculpted handle",
    colour: "#252D3B",
    stock: 2,
    shape: "tote",
    description:
      "The everyday tote in a deeper tone, with a sculptural handle and room for the essentials.",
  },
  {
    id: "AC-B",
    name: "Arc cuff / Brushed brass",
    occasion: "Evening",
    finish: "Warm neutrals",
    material: "Brass · satin finish",
    colour: "#B19C72",
    stock: 3,
    shape: "cuff",
    description:
      "One continuous curve, with a brushed finish that catches the light quietly.",
  },
  {
    id: "AC-G",
    name: "Arc cuff / Graphite",
    occasion: "Evening",
    finish: "Deep tones",
    material: "Coated brass · satin finish",
    colour: "#4B505B",
    stock: 0,
    shape: "cuff",
    description:
      "A simple sculptural accent in graphite. Currently unavailable in the sample inventory.",
  },
  {
    id: "WP-S",
    name: "Weekender pouch / Stone",
    occasion: "A weekend away",
    finish: "Warm neutrals",
    material: "Woven cotton · brass zip",
    colour: "#BDB7A9",
    stock: 5,
    shape: "pouch",
    description:
      "A considered home for travel essentials, with a softly structured shape and generous opening.",
  },
  {
    id: "WP-I",
    name: "Weekender pouch / Ink",
    occasion: "A weekend away",
    finish: "Deep tones",
    material: "Woven cotton · brass zip",
    colour: "#333A49",
    stock: 3,
    shape: "pouch",
    description:
      "Small essentials, neatly together. A tactile travel companion in a deep ink colour.",
  },
];
export function recommendProduct(occasion: Occasion, finish: Finish) {
  return (
    collection.find(
      (product) => product.occasion === occasion && product.finish === finish,
    ) ?? collection[0]
  );
}
export function validateProductEnquiry(
  product: CollectionProduct,
  quantity: number,
) {
  if (!Number.isInteger(quantity) || quantity < 1 || quantity > 6)
    return "Choose a quantity between 1 and 6.";
  if (product.stock === 0)
    return "This finish is unavailable in the sample inventory. Choose the alternative finish to continue.";
  if (quantity > product.stock)
    return `Only ${product.stock} are shown in sample inventory. Choose a smaller quantity; your selection has not been changed.`;
  return null;
}

export type OnboardingInput = {
  company: string;
  teamSize: number;
  goal:
    "Connect an existing workflow" | "Explore a new product" | "Not sure yet";
  consent: boolean;
  needsReview: boolean;
};
export type QualificationRule = {
  minimumTeam: number;
  requireClearGoal: boolean;
};
export const initialOnboarding: OnboardingInput = {
  company: "Orbit Studio",
  teamSize: 8,
  goal: "Connect an existing workflow",
  consent: true,
  needsReview: false,
};
export const initialRule: QualificationRule = {
  minimumTeam: 5,
  requireClearGoal: true,
};
export function qualifyOnboarding(
  input: OnboardingInput,
  rule: QualificationRule,
) {
  if (
    !input.company.trim() ||
    input.company.trim().length > 60 ||
    !Number.isInteger(input.teamSize) ||
    input.teamSize < 1 ||
    input.teamSize > 100
  ) {
    return {
      route: "error" as const,
      title: "Check the sample enquiry",
      reason:
        "Add a company name (up to 60 characters) and choose a team of 1–100.",
    };
  }
  if (!input.consent)
    return {
      route: "paused" as const,
      title: "Awaiting permission",
      reason:
        "Follow-up permission is off. The sample enquiry stays paused, without being routed to a team.",
    };
  if (input.needsReview)
    return {
      route: "human" as const,
      title: "Human review",
      reason:
        "The customer asked to speak to a person. This takes priority over automatic qualification.",
    };
  if (rule.requireClearGoal && input.goal === "Not sure yet")
    return {
      route: "human" as const,
      title: "Human review",
      reason:
        "The rule requires a clear goal. A person would clarify the opportunity before routing.",
    };
  if (input.teamSize >= rule.minimumTeam)
    return {
      route: "qualified" as const,
      title: "Discovery queue",
      reason: `Team of ${input.teamSize} meets the ${rule.minimumTeam}-person threshold. A team member would arrange discovery.`,
    };
  return {
    route: "guided" as const,
    title: "Guided introduction",
    reason: `Team of ${input.teamSize} is below the ${rule.minimumTeam}-person threshold. A team member would offer an introductory resource and a useful next step.`,
  };
}
