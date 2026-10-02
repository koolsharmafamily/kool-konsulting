import { site } from "./site";

export interface FAQItem {
  id: string;
  q: string;
  a: string;
  category?: "pricing" | "process" | "tech" | "general";
}

export const faqs: FAQItem[] = [
  {
    id: "cost",
    category: "pricing",
    q: "How much will it cost?",
    a: "Starting prices are transparently listed on our pricing page: websites start from ₹40,000, automations from ₹25,000, apps from ₹1,00,000, and custom business software from ₹1,50,000. After our free 30-minute tech check-up, you receive a fixed written quote with defined deliverables and milestones. There is no hourly billing and zero hidden surprises.",
  },
  {
    id: "timeline",
    category: "process",
    q: "How long does it take?",
    a: "Websites usually take 2 to 4 weeks and individual automations 1 to 4 weeks. Mobile apps and custom business software typically take 4 to 12 weeks depending on complexity. You receive a demo link every week to try out features on your own phone as they are built.",
  },
  {
    id: "staff-usability",
    category: "general",
    q: "Will my staff be able to use it?",
    a: "That is our primary design constraint. We design software around the people who actually use it at the counter, site, or godown. Interfaces use clear fonts, large touch targets, minimal typing, and familiar terminology in Hindi, Marathi, or English. We personally train your team at rollout and stay close during the first weeks.",
  },
  {
    id: "tally-integration",
    category: "tech",
    q: "Does it work with Tally?",
    a: "In most cases, yes. We can push sales vouchers and payment receipts directly into Tally Prime, read balances out of it, or connect via scheduled Excel and Google Sheet exports. We verify the exact Tally version and network setup during the initial check-up.",
  },
  {
    id: "ownership",
    category: "pricing",
    q: "Who owns the code, the data and the accounts?",
    a: "You do, 100%. The domain, cloud hosting, app store developer accounts, WhatsApp Business API credentials, and complete source code are all registered in your business's name. There are no proprietary lock-ins or recurring licence fees paid to us.",
  },
  {
    id: "post-launch",
    category: "process",
    q: "What happens if something breaks after launch?",
    a: `Any bugs or defects in what we built are fixed free of charge for ${site.freeFixWindowDays} days after launch. After that initial window, you can subscribe to an ongoing monthly care plan for hosting and maintenance, or handle changes on an as-needed basis.`,
  },
  {
    id: "location",
    category: "general",
    q: "Do you only work in Nagpur?",
    a: "Our studio is based in Nagpur and we frequently visit businesses across Nagpur and the wider Vidarbha region (including Hingna, Butibori, and surrounding districts). For businesses elsewhere in India, everything runs smoothly over phone, Google Meet, and WhatsApp.",
  },
  {
    id: "data-safety",
    category: "tech",
    q: "Is my business data safe?",
    a: "Yes. We deploy exclusively on established cloud infrastructure (AWS, Google Cloud, Vercel), implement automated encrypted backups, restrict access to authorized personnel only, and strictly comply with India's Digital Personal Data Protection (DPDP) Act.",
  },
  {
    id: "existing-tools",
    category: "tech",
    q: "Can you work with the tools I already use?",
    a: "Yes. In fact, that is almost always where we start. Connecting the daily tools your team already knows—like WhatsApp, Excel, paper parchis, and Tally—is usually faster, cheaper, and less disruptive than attempting to replace everything at once.",
  },
  {
    id: "start-small",
    category: "process",
    q: "Can I start small?",
    a: "Yes, and we actively encourage it. Many business owners start by automating a single painful bottleneck—such as chasing overdue payments or building a single attendance app—and only expand into broader systems once they see tangible time saved.",
  },
];
