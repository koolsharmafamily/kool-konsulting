import { site } from "@/data/site";

export function getWhatsAppUrl(customMessage?: string): string {
  const text = customMessage || site.whatsappDefault;
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

export function getPhoneUrl(): string {
  return `tel:${site.phoneE164}`;
}
