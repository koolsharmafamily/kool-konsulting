import { contact } from "@/data/contact";
export const site = {
  name: "Kool Konsulting",
  origin:
    process.env.NEXT_PUBLIC_SITE_URL || "https://kool-konsulting.vercel.app", // TODO(kulvir): switch to https://koolkonsulting.com once bought and connected
  oneLiner:
    "An independent technology studio creating beautiful digital experiences and intelligent operations for ambitious startups, luxury brands and smart SMEs. Based in Nagpur, India.",
  phoneDisplay: contact.phoneDisplay,
  phoneE164: contact.phoneE164,
  whatsappNumber: contact.whatsappNumber,
  whatsappDefault:
    "Hi Kulvir, I found Kool Konsulting's website. I'd like to talk about my business.",
  email: "hello@koolkonsulting.com",
  emailLive: false, // TODO(kulvir): set to true once the mailbox works
  address: {
    street: "",
    locality: "Nagpur",
    region: "Maharashtra",
    postalCode: "",
    country: "IN",
  }, // TODO(kulvir)
  mapsUrl: "", // TODO(kulvir): Google Maps link to the office
  geo: null as null | { lat: number; lng: number },
  hours: "Mon–Sat, 10 am–7 pm", // TODO(kulvir): confirm
  responsePromise: "within one working day", // never promise anything faster than this
  languages: ["English", "Hindi", "Marathi"], // TODO(kulvir): confirm
  gstin: "", // TODO(kulvir): shown in the footer only if set
  udyam: "", // TODO(kulvir): shown in the footer only if set
  calLink: "", // TODO(kulvir): e.g. "kulvir/30min"
  sameAs: [] as string[], // LinkedIn, Google Business Profile, Instagram once live
  freeFixWindowDays: 30, // TODO(kulvir): confirm
  payments:
    "Projects under ₹2 lakh: 50% to start, 50% at launch. Larger projects: milestones agreed in the quote. UPI or bank transfer.", // TODO(kulvir): confirm
  analytics: {
    provider: "none" as "none" | "plausible" | "umami" | "ga4",
    id: "",
  },
  founder: {
    name: "Kulvir Sharma",
    role: "Founder",
    photo: "/kulvir-sharma.webp",
    credentials: [
      "B.Com in Finance and Management, The University of Melbourne (2022–2026)",
      "Business development, TrakIT (B2B logistics software), Melbourne, 2025",
      "Distributor success (internship), DSP Asset Managers, 2024–25",
      "Founder, KoolKollects, an online and offline footwear and clothing marketplace (2021–22)",
      "Diploma in Digital Marketing, SSCBS, University of Delhi (2021–22)",
    ], // TODO(kulvir): confirm the wording, and add or remove anything
  },
};
