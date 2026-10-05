import { createOgImage, ogSize, ogContentType } from "@/lib/og-generator";

export const size = ogSize;
export const contentType = ogContentType;

export default async function Image() {
  return createOgImage({
    title: "Website, App and Software Development in Nagpur",
    subtitle:
      "We build websites, apps, business software and automations for growing Indian businesses. Founder-led, fixed quotes, and based in Nagpur.",
    badge: "Nagpur, Maharashtra",
    meta: "Websites · Apps · Business Software · Automation",
  });
}
