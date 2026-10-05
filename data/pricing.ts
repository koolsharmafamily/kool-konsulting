export interface ServicePricing {
  id: "websites" | "apps" | "software" | "automation";
  name: string;
  startingPriceNumber: number;
  startingPriceDisplay: string;
  timeline: string;
  unit?: string;
  included: string[];
  estimator: {
    simple: { range: string; min: number; max: number; example: string };
    standard: { range: string; min: number; max: number; example: string };
    advanced: { range: string; min: number; max: number; example: string };
  };
}

export const servicePricing: Record<string, ServicePricing> = {
  websites: {
    id: "websites",
    name: "Websites",
    startingPriceNumber: 40000,
    startingPriceDisplay: "₹40,000",
    timeline: "2–4 weeks",
    included: [
      "Custom mobile-first design and copywriting support",
      "WhatsApp & call enquiry tracking integration",
      "Google Business Profile setup and structured SEO data",
      "Domain, SSL and email configuration in your name",
      "Training session to update images and content",
    ],
    estimator: {
      simple: {
        range: "₹40,000 – ₹60,000",
        min: 40000,
        max: 60000,
        example: "5-page business website with enquiry forms and WhatsApp lead routing",
      },
      standard: {
        range: "₹60,000 – ₹1,20,000",
        min: 60000,
        max: 120000,
        example: "Multi-page catalogue or service portal with CMS and set up to be found on Google",
      },
      advanced: {
        range: "₹1,20,000 – ₹2,50,000",
        min: 120000,
        max: 250000,
        example: "High-performance digital presence with dynamic booking, client portal, or custom calculators",
      },
    },
  },
  apps: {
    id: "apps",
    name: "Apps",
    startingPriceNumber: 100000,
    startingPriceDisplay: "₹1,00,000",
    timeline: "4–10 weeks",
    included: [
      "Android & iOS from a unified clean codebase",
      "Clean UI designed for quick learning on budget phones",
      "PIN or mobile OTP login",
      "Offline / patchy internet resilience where required",
      "PDF reports & receipts auto-shared to WhatsApp",
      "Store publishing directly in your own developer accounts",
    ],
    estimator: {
      simple: {
        range: "₹1,00,000 – ₹2,00,000",
        min: 100000,
        max: 200000,
        example: "Internal utility app (e.g. site attendance, driver log, order taking)",
      },
      standard: {
        range: "₹2,00,000 – ₹4,00,000",
        min: 200000,
        max: 400000,
        example: "Full client-facing app with user accounts, push notifications, and payment gateway",
      },
      advanced: {
        range: "₹4,00,000 – ₹8,00,000",
        min: 400000,
        max: 800000,
        example: "Complex multi-role operations platform with live tracking, offline sync, and role permissions",
      },
    },
  },
  software: {
    id: "software",
    name: "Business software",
    startingPriceNumber: 150000,
    startingPriceDisplay: "₹1,50,000",
    timeline: "4–12 weeks",
    included: [
      "Process mapping with your counter and godown staff",
      "Multi-godown stock, orders and dispatch ledger",
      "Customer-specific pricing and ledger reconciliation",
      "Owner dashboard accessible on mobile and desktop",
      "Integration with Tally, Excel or Google Sheets",
      "Daily automated backups with 100% data ownership",
    ],
    estimator: {
      simple: {
        range: "₹1,50,000 – ₹2,50,000",
        min: 150000,
        max: 250000,
        example: "Focused internal portal replacing spreadsheets for orders or dispatch",
      },
      standard: {
        range: "₹2,50,000 – ₹5,00,000",
        min: 250000,
        max: 500000,
        example: "Custom ERP module for multi-location stock, dealer orders, and payment tracking",
      },
      advanced: {
        range: "₹5,00,000 – ₹10,00,000",
        min: 500000,
        max: 1000000,
        example: "Complete operational operating system tailored end-to-end to your business workflows",
      },
    },
  },
  automation: {
    id: "automation",
    name: "Automation & AI",
    startingPriceNumber: 25000,
    startingPriceDisplay: "₹25,000",
    unit: "per automation",
    timeline: "1–4 weeks",
    included: [
      "Official WhatsApp Business API setup in your company name",
      "Auto-replies, catalog browsing and order capture",
      "Automated payment and renewal follow-up sequences",
      "Automated extraction of invoices into Tally or Excel",
      "Daily owner summary report sent straight to your WhatsApp",
      "Clear human takeover triggers so your team can step in anytime",
    ],
    estimator: {
      simple: {
        range: "₹25,000 – ₹50,000",
        min: 25000,
        max: 50000,
        example: "Single workflow (e.g. WhatsApp payment reminder or invoice reader into Excel)",
      },
      standard: {
        range: "₹60,000 – ₹1,20,000",
        min: 60000,
        max: 120000,
        example: "Complete WhatsApp ordering flow with Tally voucher sync and customer confirmation",
      },
      advanced: {
        range: "₹1,00,000 – ₹2,00,000",
        min: 100000,
        max: 200000,
        example: "Multi-system automation with custom AI assistant trained on your products, catalogue & FAQs",
      },
    },
  },
};

export const carePlans = [
  {
    name: "Website Care",
    priceDisplay: "₹1,500",
    cadence: "per month",
    description: "Keep your digital presence secure, fast, and up to date without thinking about technical overhead.",
    features: [
      "Fast cloud hosting management & SSL renewal",
      "Weekly automated encrypted backups",
      "Up to 2 small content or image updates per month",
      "Uptime monitoring & security patches",
      "WhatsApp direct support line",
    ],
  },
  {
    name: "App, Software & Automation Care",
    priceDisplay: "₹8,000",
    cadence: "per month",
    description: "Ongoing operational support, server maintenance, API health checks, and priority adjustments for core systems.",
    features: [
      "Database maintenance, scaling & daily offsite backups",
      "WhatsApp API and Tally connector health monitoring",
      "Operating system & library security updates",
      "Up to 5 hours of functional tweaks and UI adjustments each month",
      "Priority same-day response from Kulvir on WhatsApp",
    ],
  },
];

export const estimatorExtras = [
  {
    id: "lang",
    label: "Hindi or Marathi interface",
    priceDisplay: "+10–15%",
    factor: 0.12,
    fixedMin: 0,
    fixedMax: 0,
  },
  {
    id: "tally",
    label: "Tally Prime connection",
    priceDisplay: "+₹25,000 – ₹60,000",
    factor: 0,
    fixedMin: 25000,
    fixedMax: 60000,
  },
  {
    id: "payments",
    label: "Online payments (UPI / Razorpay)",
    priceDisplay: "+₹15,000 – ₹30,000",
    factor: 0,
    fixedMin: 15000,
    fixedMax: 30000,
  },
  {
    id: "whatsappApi",
    label: "WhatsApp Business API setup",
    priceDisplay: "+₹10,000 – ₹20,000",
    factor: 0,
    fixedMin: 10000,
    fixedMax: 20000,
  },
];
