import { createOgImage, ogSize, ogContentType } from "@/lib/og-generator";
import { servicesData } from "@/data/services";
import { servicePricing } from "@/data/pricing";

export const size = ogSize;
export const contentType = ogContentType;

export default async function Image({
  params,
}: {
  params: { slug: string };
}) {
  const service = servicesData[params.slug];
  const pricing = servicePricing[params.slug];

  const title = service ? service.name : "Kool Konsulting Service";
  const subtitle = service
    ? service.lead
    : "Custom software and automations for growing Indian businesses.";
  const badge = pricing
    ? `From Rs. ${pricing.startingPriceNumber.toLocaleString("en-IN")}`
    : "Capabilities";
  const meta = service ? service.deliverables.slice(0, 3).join(" · ") : "Custom Development";

  return createOgImage({
    title,
    subtitle,
    badge,
    meta,
  });
}
