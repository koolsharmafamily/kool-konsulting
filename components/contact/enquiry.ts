export const projectInterests = [
  "AI & Automation",
  "Websites & Experiences",
  "Apps & Digital Products",
  "Not sure yet",
] as const;
export const budgetOptions = [
  "Not sure yet",
  "Under ₹60,000",
  "₹60,000–₹1,50,000",
  "₹1,50,000–₹3,00,000",
  "₹3,00,000+",
] as const;
export const timingOptions = [
  "Not sure yet",
  "As soon as practical",
  "In the next 1–3 months",
  "Later this year",
  "Exploring for now",
] as const;

export function normaliseInterest(value: string) {
  const lower = value.toLowerCase();
  if (
    lower.includes("automat") ||
    lower.includes("ai") ||
    lower.includes("workflow")
  )
    return projectInterests[0];
  if (lower.includes("web") || lower.includes("experience"))
    return projectInterests[1];
  if (
    lower.includes("app") ||
    lower.includes("software") ||
    lower.includes("product")
  )
    return projectInterests[2];
  return projectInterests[3];
}

export type Enquiry = {
  name: string;
  contact: string;
  business: string;
  service: string;
  description: string;
  budget: string;
  timing: string;
  context: string;
};
export type EnquiryErrors = Partial<Record<keyof Enquiry, string>>;

export function validateEnquiry(raw: Record<string, unknown>): {
  values: Enquiry;
  errors: EnquiryErrors;
} {
  const read = (key: string) =>
    typeof raw[key] === "string" ? (raw[key] as string).trim() : "";
  const values: Enquiry = {
    name: read("name"),
    contact: read("contact") || read("email") || read("phone"),
    business: read("business"),
    service: read("service") || "Not sure yet",
    description: read("description") || read("problem") || read("notes"),
    budget: read("budget") || "Not sure yet",
    timing: read("timing") || "Not sure yet",
    context: read("context"),
  };
  const errors: EnquiryErrors = {};
  if (values.name.length < 2 || values.name.length > 100)
    errors.name = "Enter your name (2–100 characters).";
  const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.contact);
  const isPhone =
    /^[+()\d\s.-]+$/.test(values.contact) &&
    values.contact.replace(/\D/g, "").length >= 8 &&
    values.contact.replace(/\D/g, "").length <= 15;
  if ((!isEmail && !isPhone) || values.contact.length > 254)
    errors.contact =
      "Enter a valid email address or phone number with country code.";
  if (!values.business || values.business.length > 200)
    errors.business =
      "Enter your business name or website (up to 200 characters).";
  if (values.description.length < 10 || values.description.length > 3000)
    errors.description =
      "Tell us a little about your project (10–3,000 characters).";
  if (
    !projectInterests.includes(
      values.service as (typeof projectInterests)[number],
    )
  )
    errors.service = "Choose one of the project interests.";
  if (!budgetOptions.includes(values.budget as (typeof budgetOptions)[number]))
    errors.budget = "Choose one of the budget options.";
  if (!timingOptions.includes(values.timing as (typeof timingOptions)[number]))
    errors.timing = "Choose one of the timing options.";
  if (values.context.length > 500)
    errors.context =
      "The project context is too long. Please return to the contact page.";
  return { values, errors };
}

export function enquiryWhatsAppText(values: Enquiry) {
  return [
    "Hi Kulvir, I would like to request a call.",
    `Name: ${values.name}`,
    `Preferred contact: ${values.contact}`,
    `Business: ${values.business}`,
    `Project interest: ${values.service}`,
    `Project: ${values.description}`,
    `Budget: ${values.budget}`,
    `Timing: ${values.timing}`,
    values.context ? `Context: ${values.context}` : "",
  ]
    .filter(Boolean)
    .join("\n");
}
