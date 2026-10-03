/* Every number, place, status, tool and quote here must come from Kulvir. Never fill these in yourself. */

export interface Project {
  slug: string;
  title: string;
  client: string;
  place?: string;
  industry: "construction" | "hospitality" | "trading" | "manufacturing" | "healthcare" | "education" | "retail" | "services";
  services: ("websites" | "apps" | "software" | "automation")[];
  status?: "Live" | "In daily use" | "Pilot" | "Prototype" | "Earlier role";
  year?: string;
  problem: string;
  built: string[];
  howItWorks?: string[];
  tools?: string[];
  results?: { value: string; label: string; source: string }[];
  quote?: { text: string; name: string; role: string };
  images?: { src: string; alt: string; recreated?: boolean }[];
  liveUrl?: string;
  featured?: boolean;
  group: "client" | "earlier";
  hidden?: boolean;
}

export const projects: Project[] = [
  {
    slug: "construction-site-app",
    title: "Attendance, wages and site cash on the supervisor's phone",
    client: "Building site with 30+ workers",
    industry: "construction",
    services: ["apps"],
    year: "2025",
    problem: "Attendance and site cash were kept in registers, so wages and weekly totals were worked out by hand.",
    built: [
      "Cross-platform Android & iOS app with simple PIN login for site supervisors",
      "Daily biometric-free attendance tracking for 30+ site workers with half-day and overtime rules",
      "Automated wage calculation from verified attendance logs",
      "Daily petty cash tracking categorized by vendor and material voucher",
      "Weekly and monthly summary reports automatically generated as PDFs and shared over WhatsApp",
      "Seamless offline sync allowing attendance entry even without mobile network on site",
    ],
    howItWorks: [
      "Supervisor enters site in the morning and taps attendance for each worker in under 2 minutes",
      "Any site petty cash spent on diesel or sand is recorded with a photo of the cash receipt",
      "At end of week, total wages, advances, and net balances calculate with zero manual arithmetic",
      "One tap generates a clean PDF voucher sent directly to the builder's WhatsApp",
    ],
    tools: ["React Native (Expo)", "Firebase"],
    featured: true,
    group: "client",
  },
  {
    slug: "cinema-samosa-forecast",
    title: "How many samosas for the 9 pm show? The app works it out.",
    client: "Multi-screen cinema canteen",
    industry: "hospitality",
    services: ["automation", "apps"],
    year: "2025",
    problem: "The canteen had to guess how many samosas to prepare for each show.",
    built: [
      "Mobile web app predicting food and snack demand for each screening based on advance bookings",
      "Statistical models calibrated on historical cinema register records by showtime, genre, and day type",
      "Digitisation of past paper records captured via voice notes and photos",
      "Real-time kitchen prep alert sent to the head cook 45 minutes before intermission",
    ],
    howItWorks: [
      "Cinema system imports advance booking numbers 2 hours before showtime",
      "Algorithm compares ticket volume against historical concession ratios for that genre",
      "Head cook receives exact prep recommendation (samosas, popcorn tubs) on their phone",
      "Post-show actuals are recorded with one tap to continuously improve future estimates",
    ],
    tools: [],
    featured: true,
    group: "client",
  },
  {
    slug: "movie-promo-autoposting",
    title: "New movie posters and trailers, posted automatically",
    client: "Independent cinema operator",
    industry: "hospitality",
    services: ["automation"],
    year: "2025",
    problem: "Updating show posters, synopsis details, and official YouTube trailers across social channels for 4 to 6 new releases every Friday took hours of manual downloading and formatting.",
    built: [
      "Automated pipeline triggering whenever a movie title is entered into the cinema schedule sheet",
      "Automated lookup of high-resolution theatrical posters and verified official trailers via TMDB API",
      "Auto-formatted social media posts scheduled directly to Facebook Page and Instagram feeds",
      "Confirmation alert sent to the cinema manager's WhatsApp with preview links",
    ],
    howItWorks: [
      "Manager types upcoming film title and showtimes into Google Sheets",
      "Webhook script queries movie database for certified artwork and trailer URLs",
      "Graphic is resized and branded with cinema showtimes overlay",
      "Post is published automatically to social platforms with zero manual intervention",
    ],
    tools: ["Google Sheets", "Google Apps Script", "TMDB API", "Meta Graph API"],
    group: "client",
  },
  {
    slug: "wholesale-shop-billing",
    title: "From carbon-copy parchis to stock that matches the shelves",
    client: "Agri-input wholesale and retail distributor",
    place: "Haryana",
    industry: "trading",
    services: ["software"],
    year: "2024",
    problem: "Every sale was written on a carbon-copy parchi, so stock on the computer rarely matched the shop floor.",
    built: [
      "High-speed counter billing portal designed for fast keyboard-only and barcode entry",
      "Live stock deduction across retail counter and 2 off-site godowns",
      "Customer credit ledger with outstanding balance warning before new dispatch",
      "Thermal printer receipt generation and automatic WhatsApp invoice dispatch to buyer",
      "End-of-day cash reconciliation sheet comparing physical drawer cash with system sales",
    ],
    howItWorks: [
      "Counter staff types customer name and first few letters of item name",
      "Pre-negotiated customer discount automatically applies; stock reserved instantly",
      "Thermal parchi prints in 1 second; copy auto-sent to buyer's WhatsApp",
      "Stock levels update immediately across all godowns preventing duplicate sales",
    ],
    tools: ["React", "Node.js", "SQLite local engine with cloud sync", "Thermal ESC/POS printing"],
    featured: true,
    group: "client",
  },
  {
    slug: "event-ticketing-onboarding",
    title: "Artist sign-ups and ticket requests for live music nights",
    client: "Kool Kalakaars live community",
    industry: "hospitality",
    services: ["software", "automation"],
    year: "2025",
    problem: "Organising community live music and open mic nights required managing hundreds of Instagram DMs, collecting audition audio files across WhatsApp, and manually issuing entry passes.",
    built: [
      "Artist submission portal allowing performers to upload bio and audio links",
      "Audience ticket request interface with automated QR entry pass generation",
      "Centralised organiser dashboard consolidating artist applications and approved attendee lists",
      "Automated WhatsApp confirmation with venue location map and event guidelines",
    ],
    howItWorks: [
      "Musician submits application with short performance sample link",
      "Curators review submissions in a streamlined single-page dashboard",
      "Audience requests guest list pass; system generates unique verified entry QR",
      "Entry scanner at door validates QR code in under a second",
    ],
    tools: ["Next.js", "Tailwind CSS", "Google Apps Script", "Cloudinary"],
    group: "client",
  },
  {
    slug: "bachpan-dance-academy",
    title: "A website for a Kathak and folk dance academy",
    client: "Bachpan Dance Academy",
    place: "Lucknow, Uttar Pradesh",
    industry: "education",
    services: ["websites"],
    year: "2024",
    problem: "Parents were constantly calling instructors during rehearsals to ask basic questions about batch timings, fee structures, age requirements, and workshop schedules.",
    built: [
      "Warm, visually rich multi-page website showcasing classical dance forms and instructors",
      "Interactive batch schedule and transparent fee breakdown",
      "Frictionless 'Book a Free Trial Class' intake connecting straight to WhatsApp",
      "Performance video gallery and student recital showcase",
    ],
    howItWorks: [
      "Parent browses age-appropriate batches (Kathak, Bollywood, Folk) on their mobile",
      "Tapping 'Book Trial Class' opens WhatsApp with pre-filled batch preference",
      "Academy administration receives structured enquiry ready for trial scheduling",
    ],
    tools: ["Next.js", "Tailwind CSS", "Vercel"],
    featured: true,
    group: "client",
  },
  {
    slug: "three-marketeers-website",
    title: "Website for a digital communications agency",
    client: "The Three Marketeers",
    industry: "services",
    services: ["websites"],
    year: "2024",
    problem: "An agency needed a distinctive, fast digital presence to showcase client campaigns and position their creative capability to enterprise brands.",
    built: [
      "Custom brand portfolio website featuring animated case studies",
      "Mobile-optimised interactive showcase of past campaigns",
      "Direct client enquiry intake funnel",
    ],
    tools: ["Next.js", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://the-three-marketeers.netlify.app",
    group: "client",
  },
  {
    slug: "designs-by-deepti",
    title: "Portfolio website for a bespoke jewellery designer",
    client: "Designs by Deepti",
    place: "London, UK",
    industry: "retail",
    services: ["websites"],
    year: "2024",
    problem: "A high-end jewellery artisan required a clean, distraction-free portfolio to display bespoke handmade collections to private gallery clients.",
    built: [
      "Minimalist high-resolution visual lookbook optimised for fast mobile loading",
      "Categorised collection view with detail zoom on craftsmanship",
      "Private appointment inquiry intake form",
    ],
    tools: ["Next.js", "Tailwind CSS"],
    liveUrl: "https://designsbydeepti.vercel.app",
    group: "client",
  },
  {
    slug: "ai-cameras",
    title: "AI cameras for safety and counting",
    client: "Industrial testing facility",
    industry: "manufacturing",
    services: ["automation"],
    problem: "Detecting safety gear compliance and vehicle movement.",
    built: ["Edge AI camera detection"],
    group: "client",
    hidden: true,
  },
  // Earlier work and experiments
  {
    slug: "adlens-ai",
    title: "AdLens AI: Multimodal video intelligence pipeline",
    client: "Creative marketing intelligence prototype",
    industry: "services",
    services: ["automation", "software"],
    status: "Prototype",
    year: "2024",
    problem: "Reviewing hundreds of competitor ad videos manually was slow, subjective, and failed to scale across broad digital ad libraries.",
    built: [
      "Automated video parsing pipeline using multimodal LLMs to analyze video frames and audio tracks",
      "Structured extraction of creative hooks, emotional triggers, call-to-actions, and brand positioning",
      "Searchable catalog indexing competitor video creative patterns",
    ],
    tools: ["Python", "Gemini 1.5 Pro", "FastAPI", "React"],
    group: "earlier",
  },
  {
    slug: "agency-ad-operations",
    title: "Agency ad-operations automation and reporting",
    client: "Performance marketing agency",
    industry: "services",
    services: ["automation"],
    status: "Prototype",
    year: "2024",
    problem: "Centralising spend tracking, anomalous ad fatigue detection, and weekly client reporting across dozens of independent advertising accounts.",
    built: [
      "Multi-account reporting engine extracting daily metrics from Meta and Google Ads",
      "Automated anomaly alerts flagging sudden CPA spikes or budget exhaustion",
      "Automated client PDF reports generated and emailed weekly",
    ],
    tools: ["Python", "Google Cloud Functions", "Meta Marketing API", "Google Ads API"],
    group: "earlier",
  },
  {
    slug: "distributor-workflow-automation",
    title: "Distributor workflow research and automation",
    client: "DSP Asset Managers (Internship)",
    place: "Mumbai, India",
    industry: "services",
    services: ["software", "automation"],
    status: "Earlier role",
    year: "2024",
    problem: "Identifying where operational friction and data lag slowed down mutual fund distributors in servicing clients.",
    built: [
      "Operational workflow mapping across distributor partner touchpoints",
      "Automation of repetitive distributor status alerts and transaction summaries",
    ],
    tools: ["Process Mapping", "Excel Automation", "Enterprise CRM"],
    group: "earlier",
  },
  {
    slug: "trakit-australian-market-entry",
    title: "TrakIT: Australian market entry and SaaS repositioning",
    client: "TrakIT Logistics Software",
    place: "Melbourne, Australia",
    industry: "services",
    services: ["websites", "software"],
    status: "Earlier role",
    year: "2025",
    problem: "Positioning an established enterprise logistics and supply chain tracking platform for local freight forwarders in the Australian market.",
    built: [
      "Market positioning research and competitive capability matrix",
      "Buyer-centric website redesign communicating supply-chain compliance and API connectivity",
    ],
    tools: ["B2B SaaS Strategy", "Web Architecture", "User Research"],
    group: "earlier",
  },
  {
    slug: "finance-data-automation",
    title: "Finance data reconciliation and reporting pipeline",
    client: "Financial operations project",
    industry: "services",
    services: ["automation", "software"],
    status: "Earlier role",
    year: "2024",
    problem: "Manual spreadsheet consolidation between disparate billing exports and management cash-flow forecasts.",
    built: [
      "Automated parsing scripts consolidating multi-sheet operational data into standardized cash flow views",
      "Automated variance detection highlighting billing discrepancies",
    ],
    tools: ["Python", "Pandas", "Excel VBA", "Power BI"],
    group: "earlier",
  },
  {
    slug: "ai-construction-site",
    title: "Computer vision for site safety and operations",
    client: "Construction site exploratory study",
    industry: "construction",
    services: ["automation"],
    status: "Prototype",
    year: "2024",
    problem: "Investigating the technical viability and hardware cost of edge computer vision cameras for PPE compliance on commercial build sites.",
    built: [
      "Feasibility and hardware cost model for site edge-compute cameras",
      "Prototype PPE detection pipeline identifying helmet and vest compliance in video streams",
    ],
    tools: ["YOLOv8", "OpenCV", "Python"],
    group: "earlier",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getClientProjects(): Project[] {
  return projects.filter((p) => p.group === "client" && !p.hidden);
}

export function getEarlierProjects(): Project[] {
  return projects.filter((p) => p.group === "earlier" && !p.hidden);
}
