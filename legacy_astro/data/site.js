/**
 * Single source of truth for firm identity, contact details and integrations.
 * EDIT THIS FILE FIRST after buying the domain and creating accounts.
 * Anything marked TODO is a value only Kulvir can supply.
 */

export const SITE = {
  name: "Kool Konsulting",
  legalName: "Kool Konsulting",

  // TODO(domain): ONE LINE TO CHANGE once koolkonsulting.com is bought and
  // pointed at Netlify — swap the two lines below. Canonicals, sitemap, OG tags,
  // social preview images and JSON-LD all read from this.
  //
  // Kept on the live Netlify address for now so that social previews, canonicals
  // and the sitemap all actually resolve today. Pointing it at a domain nobody
  // owns yet would mean every WhatsApp and LinkedIn preview renders blank.
  origin: "https://kool-konsulting.vercel.app",
  // origin: "https://koolkonsulting.com",

  tagline: "Consulting that builds, not just advises.",

  founder: {
    name: "Kulvir Sharma",
    role: "Founder",
    // Cropped to 4:5 (752x940) to match the About panel, cut just below the
    // forearm. Setting this to null falls back to the typographic panel.
    photo: "/kulvir-sharma.webp",
    photoWidth: 752,
    photoHeight: 940,
    photoAlt:
      "Kulvir Sharma, founder of Kool Konsulting, in a navy suit in a Nagpur meeting room",

    // Short credential line used above the fold on the homepage.
    // TODO(credentials): confirm wording and add years/roles you want stated.
    creds:
      "Finance and Management, University of Melbourne · M&A and corporate advisory · built and ran his own venture",

    credentials: [
      {
        title: "Bachelor of Commerce, Finance and Management",
        org: "The University of Melbourne",
        meta: "2022 – 2026",
      },
      {
        title: "Diploma in Digital Marketing",
        org: "Shaheed Sukhdev College of Business Studies, University of Delhi",
        meta: "2021 – 2022",
      },
      {
        title: "M&A and corporate advisory",
        org: "Valuation, financial modelling and market-entry work",
        meta: "Professional experience",
      },
      {
        title: "Founder and operator",
        org: "Built, launched and ran his own venture end to end",
        meta: "Professional experience",
      },
    ],
  },

  // TODO(email): create hello@koolkonsulting.com (Google Workspace or Zoho Mail)
  // and keep this as the only address used anywhere on the site.
  email: "hello@koolkonsulting.com",
  phoneDisplay: "+91 88888 21351",
  phoneE164: "+918888821351",

  whatsappMessage:
    "Hi Kulvir, I found Kool Konsulting online. I'd like to talk about my business.",

  address: {
    street: "", // TODO(address): required for LocalBusiness schema + Google Business Profile
    locality: "Nagpur",
    region: "Maharashtra",
    postalCode: "", // TODO(address)
    country: "IN",
  },

  // TODO(geo): set to the exact pin of the registered address.
  // Placeholder below is central Nagpur.
  geo: { latitude: 21.1458, longitude: 79.0882 },

  openingHours: "Mo-Sa 10:00-19:00",
  priceRange: "₹₹",
  responseWindow: "one working day",

  sameAs: [
    // TODO(profiles): add the live URLs once each profile exists.
    // "https://www.google.com/maps/place/...",  <- Google Business Profile
    // "https://www.linkedin.com/company/...",
  ],

  // TODO(cal): create a Cal.com account, then set this to e.g. "kulvir/30min".
  // The /contact page and every "Book a call" button light up automatically.
  calLink: null,

  // TODO(analytics): Plausible needs only the domain; it is DPDP-friendlier
  // than GA4 and needs no cookie banner. Set to true after adding the domain
  // at plausible.io.
  plausible: false,
};

export const whatsappHref = `https://wa.me/${SITE.phoneE164.replace(
  "+",
  ""
)}?text=${encodeURIComponent(SITE.whatsappMessage)}`;

export const telHref = `tel:${SITE.phoneE164}`;
export const mailHref = `mailto:${SITE.email}`;

export const NAV = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];
