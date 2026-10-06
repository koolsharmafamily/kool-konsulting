/** Brand copy and indicative commercial assumptions. Prices need owner approval before launch. */
export interface ServiceFamily {
  slug: "automation" | "websites" | "apps";
  number: string;
  name: string;
  heading: string;
  summary: string;
  intro: string;
  startingAt: string;
  startingScope: string;
  demoSlug: string;
  flow: [string, string, string];
  deliverables: { title: string; body: string }[];
  boundaries: string[];
  examples: string[];
}

export const serviceFamilies: ServiceFamily[] = [
  {
    slug: "automation",
    number: "01",
    name: "AI & Automation",
    heading: "Make the connection. Lose the busywork.",
    summary: "Useful intelligence, connected to the way your business works.",
    intro:
      "From a first enquiry to a well-prepared handoff, we connect your tools and build workflows that give your team the right information at the right moment. AI belongs where it helps; clear rules and human judgement belong around it.",
    startingAt: "₹30,000",
    startingScope: "One bounded automation workflow with limited integrations.",
    demoSlug: "hospitality-concierge",
    flow: [
      "An enquiry arrives",
      "Information is checked",
      "Your team takes over",
    ],
    deliverables: [
      {
        title: "A workflow with a purpose",
        body: "Map the trigger, required information, decisions and useful outcome before choosing the tools.",
      },
      {
        title: "Connections that hold up",
        body: "Integrate agreed systems through supported APIs, with permissions, validation and failure handling.",
      },
      {
        title: "AI with clear boundaries",
        body: "Define the knowledge source, evaluate representative questions and make uncertainty visible.",
      },
      {
        title: "A considered human handoff",
        body: "Keep exceptions, approvals and conversation context in reach of the person responsible.",
      },
    ],
    boundaries: [
      "Platform subscriptions and model usage are separate from the build fee.",
      "Data access, API availability and third-party permissions are checked during discovery.",
      "A workflow's evaluation criteria, logs, support and escalation path are agreed in scope.",
    ],
    examples: [
      "A startup enquiry reaches the right person with useful context.",
      "An SME’s internal assistant finds an answer and cites its approved source.",
      "A guest enquiry becomes an organised reservation request.",
    ],
  },
  {
    slug: "websites",
    number: "02",
    name: "Websites & Experiences",
    heading: "A beautiful first impression. A useful next step.",
    summary:
      "Distinctive websites that turn attention into a clear customer journey.",
    intro:
      "We bring identity, interaction and engineering together — from the opening impression to the enquiry, appointment or purchase. The experience feels considered on every screen, and the business behind it stays connected.",
    startingAt: "₹60,000",
    startingScope: "A premium brand website with an agreed set of core pages.",
    demoSlug: "lifestyle-discovery",
    flow: [
      "Discover the brand",
      "Find the right experience",
      "Start a conversation",
    ],
    deliverables: [
      {
        title: "A distinctive visual direction",
        body: "Typography, composition and a coherent interaction language shaped around your brand and audience.",
      },
      {
        title: "A connected customer journey",
        body: "Make discovery, product information and your booking or enquiry path work together.",
      },
      {
        title: "Content you can keep current",
        body: "A suitable CMS and defined content model, with practical handover for the people maintaining it.",
      },
      {
        title: "Careful engineering",
        body: "Responsive behaviour, accessible controls, search foundations and performance checks throughout the build.",
      },
    ],
    boundaries: [
      "Photography, film, identity work and original 3D production are specifically scoped.",
      "Commerce, migration and bespoke integrations are quoted against their actual complexity.",
      "Hosting, commerce subscriptions and other platform charges are shown separately.",
    ],
    examples: [
      "A luxury collection connects discovery to a private appointment.",
      "A startup's story leads visitors to the right product entry point.",
      "A boutique stay moves from atmosphere to a well-qualified enquiry.",
    ],
  },
  {
    slug: "apps",
    number: "03",
    name: "Apps & Digital Products",
    heading: "Build the thing your business needs next.",
    summary: "Focused products for customers, teams and the work between them.",
    intro:
      "We turn a useful idea into a focused web or mobile product. We start with the central journey, prove the difficult parts early, then build the interfaces and systems around it — with clear roles, sensible scope and room to evolve.",
    startingAt: "₹1,50,000",
    startingScope:
      "A focused web-app MVP with one central workflow and bounded roles.",
    demoSlug: "startup-onboarding",
    flow: [
      "A customer gets started",
      "Rules guide the journey",
      "The team sees what is next",
    ],
    deliverables: [
      {
        title: "A focused first release",
        body: "Define the primary user, central workflow and acceptance criteria before expanding the feature list.",
      },
      {
        title: "A product that feels coherent",
        body: "Design the customer experience and staff tools as connected parts of one system.",
      },
      {
        title: "The systems behind the screens",
        body: "Build agreed authentication, permissions, data models, administrative tools and integrations.",
      },
      {
        title: "A practical route to launch",
        body: "Test key journeys, document the build and agree deployment, handover and any store-submission work.",
      },
    ],
    boundaries: [
      "Cross-platform mobile apps have a separate indicative scope and investment range.",
      "Complex platforms, native builds and unusual integrations need a scoped proposal.",
      "Hosting, app-store accounts, messaging and external service usage are separate costs.",
    ],
    examples: [
      "A startup turns onboarding into a clear path to activation.",
      "An SME’s staff portal brings requests, approvals and follow-up into one place.",
      "A luxury brand’s customer app connects a considered experience with useful operational tools.",
    ],
  },
];

export interface InvestmentRange {
  id: string;
  family: ServiceFamily["slug"] | "care";
  name: string;
  range: string;
  scope: string;
}

export const investmentRanges: InvestmentRange[] = [
  {
    id: "automation-sprint",
    family: "automation",
    name: "Focused automation sprint",
    range: "₹30,000–₹60,000",
    scope:
      "One bounded workflow, a limited number of integrations, testing and handover.",
  },
  {
    id: "connected-ai",
    family: "automation",
    name: "AI assistant or connected workflow",
    range: "₹75,000–₹2,00,000",
    scope:
      "Defined knowledge source, integrations, evaluation, logs and human handoff.",
  },
  {
    id: "brand-website",
    family: "websites",
    name: "Premium brand website",
    range: "₹60,000–₹1,50,000",
    scope:
      "Custom art direction, core pages, CMS, considered motion and conversion or booking integration.",
  },
  {
    id: "flagship-website",
    family: "websites",
    name: "Immersive flagship website",
    range: "₹1,50,000–₹3,00,000+",
    scope:
      "Original visual direction, substantial motion or 3D, and a specifically agreed asset-production scope.",
  },
  {
    id: "web-app",
    family: "apps",
    name: "Focused web-app MVP",
    range: "₹1,50,000–₹3,50,000",
    scope: "One central workflow with bounded roles, backend and integrations.",
  },
  {
    id: "mobile-app",
    family: "apps",
    name: "Cross-platform mobile MVP",
    range: "₹2,00,000–₹5,00,000",
    scope:
      "Defined screens and features, backend or admin scope, and store-submission work.",
  },
  {
    id: "website-care",
    family: "care",
    name: "Website care",
    range: "₹3,000–₹8,000/month",
    scope:
      "Defined monitoring, updates, backups and a content-change allowance.",
  },
  {
    id: "system-care",
    family: "care",
    name: "App or AI system care",
    range: "₹10,000–₹25,000/month",
    scope:
      "Agreed monitoring, evaluation, incident response and a support-hour allowance.",
  },
];

export const commercialStatus = {
  approval: "proposed" as const,
  label: "Indicative project ranges",
  notice:
    "These proposed ranges are a guide to scope, not a quotation. Final fees follow discovery and a written agreement.",
  launchDependency:
    "Owner validation of delivery effort, specialist costs, support capacity, margin and applicable tax treatment is required before publication as final commercial commitments.",
};

export const processSteps = [
  {
    number: "01",
    title: "Understand",
    body: "Understand the business, the people using it and the opportunity worth pursuing.",
  },
  {
    number: "02",
    title: "Design & prove",
    body: "Shape the experience and prove the critical workflow before building out the detail.",
  },
  {
    number: "03",
    title: "Build & refine",
    body: "Build, test and improve with regular demonstrations and clear decisions.",
  },
  {
    number: "04",
    title: "Launch & support",
    body: "Launch with a considered handover and support under an agreed scope.",
  },
];

export const brandFaqs = [
  {
    q: "Where should we start?",
    a: "Start with the outcome you need. On the first call, we discuss your business, identify an appropriate first scope and assess whether working together makes sense. You do not need a finished technical brief.",
  },
  {
    q: "How long does a project take?",
    a: "Timing depends on scope, content readiness, integrations and review availability. Discovery leads to a realistic delivery plan with milestones; dates are agreed in the proposal.",
  },
  {
    q: "Can you connect the tools we already use?",
    a: "Often, yes. We check API access, permissions, data quality and platform limits first. If a connection is unsuitable, we explain the constraint and propose a practical alternative.",
  },
  {
    q: "Who owns the finished work?",
    a: "Ownership, source-code handover, administrative access and any third-party licences are set out in the written agreement. We discuss these before the build so there are no surprises at handover.",
  },
  {
    q: "What happens after launch?",
    a: "Handover, any defect-resolution period and optional ongoing care are agreed in scope. Care can cover monitoring, updates, evaluation and an agreed support allowance; it is not unlimited support.",
  },
  {
    q: "Are the Lab demonstrations real client projects?",
    a: "No. Kool Lab uses fictional scenarios and sample data to demonstrate interactions and connected workflows. It does not make reservations, take payments or send messages.",
  },
];

/** Proof is a separate editorial state; a concept never inherits client status. */
export type WorkReadiness = {
  contentType: "client-record" | "earlier-role" | "prototype" | "concept";
  readiness: "archive" | "approved";
  outcomesApproved: boolean;
  testimonialApproved: boolean;
};

export function workReadiness(status?: string, group?: string): WorkReadiness {
  const contentType =
    status === "Concept design"
      ? "concept"
      : status === "Built prototype" || status === "Prototype"
        ? "prototype"
        : status === "Delivered in role" ||
            status === "Earlier role" ||
            group === "earlier"
          ? "earlier-role"
          : "client-record";
  return {
    contentType,
    readiness: "archive",
    outcomesApproved: false,
    testimonialApproved: false,
  };
}
