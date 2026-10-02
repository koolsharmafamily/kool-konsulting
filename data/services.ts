export interface ServiceItem {
  slug: string;
  name: string;
  h1: string;
  lead: string;
  examples: string[];
  deliverables: string[];
  included: string[];
  notIncluded: string[];
  industries: string[];
  relatedWorkSlugs: string[];
  faqs: { q: string; a: string }[];
  whatsappMessage: string;
  metaTitle: string;
  metaDescription: string;
}

export const servicesData: Record<string, ServiceItem> = {
  websites: {
    slug: "websites",
    name: "Websites",
    h1: "Websites that bring in enquiries.",
    lead: "Fast on phones, easy to find on Google, and every enquiry lands on your WhatsApp.",
    examples: ["Business websites", "Product catalogues", "Online booking"],
    deliverables: [
      "Custom mobile-first design, with help writing the words",
      "Fast, lightweight build that opens instantly on budget Android phones",
      "WhatsApp and direct call buttons configured with enquiry tracking",
      "Lead enquiry forms that deliver submissions straight to your phone",
      "Google Business Profile setup for local discovery in Nagpur and beyond",
      "Search foundations: semantic markup, meta tags, structured data and sitemap",
      "Clean privacy-friendly analytics you can actually understand",
      "Domain, hosting, SSL certificate and custom business email set up in your name",
      "Personal walkthrough to train your team to update text and photos easily",
    ],
    included: [
      "Copywriting refinement and content structure",
      "Responsive design tested across phones, tablets, and desktops",
      "Google Search Console registration and sitemap submission",
      "WhatsApp button with custom pre-filled message",
      "100% ownership of code, assets, domain and accounts",
    ],
    notIncluded: [
      "Managing paid Google or Meta advertising campaigns",
      "Ongoing monthly SEO retainers or link building schemes",
    ],
    industries: [
      "Retail showrooms and boutiques",
      "Schools, coaching institutes and academies",
      "Manufacturers needing a modern export-grade presence",
      "Clinics, doctors, and diagnostic centres",
      "Hospitality, restaurants, and entertainment venues",
    ],
    relatedWorkSlugs: [
      "bachpan-dance-academy",
      "three-marketeers-website",
      "designs-by-deepti",
    ],
    faqs: [
      {
        q: "How long does a website take to build?",
        a: "A typical 5 to 7 page business website takes 2 to 4 weeks from kickoff to launch. You receive a demo link every week to review progress directly on your phone.",
      },
      {
        q: "Can I update photos or products myself?",
        a: "Yes. We configure simple content editing controls and provide a 30-minute training session so anyone on your team can update prices, images, and text without touching code.",
      },
      {
        q: "Who owns the website and domain?",
        a: "You do. Everything—domain registration, hosting accounts, and full source code—is created in your company name. There are zero licensing fees or lock-ins.",
      },
    ],
    whatsappMessage: "Hi Kulvir, I saw your websites page. I'm looking for a website for my business.",
    metaTitle: "Website Development Company in Nagpur | Kool Konsulting",
    metaDescription: "Fast, custom websites for growing Indian businesses. Mobile-first, Google-optimised, and designed to send enquiries straight to your WhatsApp.",
  },
  apps: {
    slug: "apps",
    name: "Apps",
    h1: "Apps your staff and customers actually use.",
    lead: "Android and iOS from one build, in Hindi, Marathi or English, and quick on budget phones.",
    examples: ["Staff attendance and field apps", "Ordering and booking apps", "Customer portals"],
    deliverables: [
      "Clean interface designed specifically for staff to learn in a single day",
      "Android and iOS native applications from a single unified codebase",
      "Companion web portal for management oversight from a laptop",
      "Secure login via 4-digit PIN or mobile OTP",
      "Offline caching and sync for uninterrupted work on patchy internet connections",
      "Automated summary PDFs and dispatch slips shared directly over WhatsApp",
      "Direct integration with UPI payment links and QR generation",
      "Owner admin dashboard with live counters and exportable logs",
      "Direct publishing to Google Play Store and Apple App Store in your accounts",
    ],
    included: [
      "Full UI/UX wireframes tested with real operational staff",
      "Cross-platform compilation for Android and iOS",
      "Offline local database storage with conflict resolution",
      "Role-based permission controls (supervisor, staff, owner)",
      "Source code handover and documentation",
    ],
    notIncluded: [
      "App Store annual developer account fees ($99/year to Apple, $25 one-time to Google)",
      "Third-party SMS OTP gateway balance costs",
    ],
    industries: [
      "Builders and contractors managing multiple sites",
      "Wholesale distributors with field sales representatives",
      "Logistics, fleet, and transport operators",
      "Service technicians and field maintenance teams",
      "Membership communities and academies",
    ],
    relatedWorkSlugs: [
      "construction-site-app",
      "cinema-samosa-forecast",
    ],
    faqs: [
      {
        q: "Will my site supervisors or factory workers know how to use it?",
        a: "Yes. We design interfaces around large touch targets, minimal typing, and familiar Hindi or Marathi terminology. In practice, site supervisors master attendance and wage tracking in under 15 minutes.",
      },
      {
        q: "Does it work when there is no mobile network on site?",
        a: "Yes. For field and construction apps, entries are saved directly on the phone storage. As soon as the device reconnects to mobile data or Wi-Fi, records automatically sync to the central system.",
      },
      {
        q: "Do I have to pay monthly software rent per user?",
        a: "No. You pay a one-time build cost and own the code. You only pay for standard server hosting or your care plan if you choose one.",
      },
    ],
    whatsappMessage: "Hi Kulvir, I saw your apps page. I'm looking for an app for my business.",
    metaTitle: "Mobile App Development in Nagpur, Android and iOS | Kool Konsulting",
    metaDescription: "Custom mobile apps for Indian businesses. Built for Android and iOS, works offline on budget phones, with Hindi and Marathi language support.",
  },
  software: {
    slug: "software",
    name: "Business software",
    h1: "Software shaped around how you already work.",
    lead: "Billing, stock, orders and follow-ups in one place, connected to Tally, Excel or Google Sheets.",
    examples: ["Billing and inventory", "Order and dispatch tracking", "Dealer portals", "Owner dashboards"],
    deliverables: [
      "Process mapping on-site with your counter staff before writing any code",
      "Fast billing system with customer-specific pricing and credit limits",
      "Multi-godown stock ledger with real-time transfer tracking",
      "Order entry, warehouse dispatch status, and delivery confirmation",
      "Customer ledger reconciliation with outstanding payment tracking",
      "Executive dashboard accessible securely on mobile and desktop",
      "Direct two-way connections to Tally Prime, Excel or Google Sheets",
      "Granular user roles and permissions preventing unauthorised discounts",
      "Daily automated offsite database backups",
    ],
    included: [
      "Detailed process diagram and operational requirement specification",
      "Custom relational database schema designed for speed",
      "Tally XML / API sync connectors where required",
      "Staff onboarding and live shadow sessions during rollout",
      "30 days of post-launch bug fixes included",
    ],
    notIncluded: [
      "Hardware purchases (computers, barcode scanners, thermal printers)",
      "Tally Prime software licence fees",
    ],
    industries: [
      "Traders and mandi distributors (Itwari, Gandhibagh, Kalamna)",
      "Manufacturers in industrial zones (MIDC Hingna, Butibori)",
      "FMCG and building material distributors",
      "Multi-branch retail and spare parts dealers",
    ],
    relatedWorkSlugs: [
      "wholesale-shop-billing",
      "event-ticketing-onboarding",
    ],
    faqs: [
      {
        q: "Why custom software instead of an off-the-shelf ERP?",
        a: "Generic ERPs force you to change your workflow and charge expensive recurring fees for features you never touch. Custom software fits your exact billing habits, godown routes, and WhatsApp communications, without monthly per-seat licensing.",
      },
      {
        q: "Does it connect with our existing Tally setup?",
        a: "Yes. We can push sales vouchers and receipts directly into Tally, or sync customer balances from Tally into your phone portal, eliminating double data entry.",
      },
    ],
    whatsappMessage: "Hi Kulvir, I saw your business software page. I'd like to streamline our internal operations.",
    metaTitle: "Custom Business Software in Nagpur: Billing, Stock, CRM | Kool Konsulting",
    metaDescription: "Tailor-made software for Indian trading and manufacturing businesses. Multi-godown stock, custom billing, order dispatch, and seamless Tally integration.",
  },
  automation: {
    slug: "automation",
    name: "Automation & AI",
    h1: "Let software do the repetitive work.",
    lead: "WhatsApp replies, payment reminders, daily reports and data entry that run on their own, with a person stepping in when needed.",
    examples: ["WhatsApp order capture", "Payment reminders", "Bills read into Tally", "Demand forecasts", "AI cameras"],
    deliverables: [
      "Official Meta WhatsApp Business API registration and verification in your name",
      "Interactive auto-reply menus and catalogue browsing on WhatsApp",
      "Automated WhatsApp payment and invoice reminder sequences",
      "Daily owner summary report sent straight to your personal WhatsApp at 8 pm",
      "Automated document reading: extracts PDF bills into Excel or Tally",
      "Automated social media posting for movie schedules and inventory arrivals",
      "Historical demand forecasting based on your own past sales data",
      "Custom AI assistants trained strictly on your internal catalogues and pricing rules",
      "Clear human takeover triggers ensuring any conversation can transfer to staff",
    ],
    included: [
      "Configuration of official WhatsApp API webhooks and templates",
      "Fallback routing to human staff on complex queries",
      "Data sanitation and prompt guardrails preventing hallucinated pricing",
      "End-to-end testing with your existing telephone numbers",
    ],
    notIncluded: [
      "Meta WhatsApp conversation fees (billed directly to you at cost by Meta)",
      "Third-party AI API token fees (OpenAI / Anthropic billed at raw cost)",
    ],
    industries: [
      "Wholesale traders chasing overdue receivables",
      "Clinics and hospitals managing patient appointment bookings",
      "Cinemas and event organisers scheduling updates and demand planning",
      "Manufacturers tracking daily dispatch and raw material arrivals",
    ],
    relatedWorkSlugs: [
      "movie-promo-autoposting",
      "cinema-samosa-forecast",
    ],
    faqs: [
      {
        q: "What happens if a customer asks something unusual on WhatsApp?",
        a: "The system is designed with a clear human takeover rule. If a question is outside the bot's configured knowledge, it immediately alerts your team and pauses automation for that customer so a human can reply.",
      },
      {
        q: "Do I need a new phone number for WhatsApp automation?",
        a: "You can either use a new dedicated number or migrate an existing landline/mobile number to the official WhatsApp Business Cloud API. We guide you through the verification process step-by-step.",
      },
    ],
    whatsappMessage: "Hi Kulvir, I saw your automation and AI page. I'd like to automate manual tasks in my business.",
    metaTitle: "WhatsApp Automation and AI for Businesses | Kool Konsulting, Nagpur",
    metaDescription: "WhatsApp automation, payment reminders, invoice parsers, and practical AI systems for Indian businesses. Turn hours of manual busywork into seconds.",
  },
};
