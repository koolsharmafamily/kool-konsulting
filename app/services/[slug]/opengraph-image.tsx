import { createOgImage, ogSize, ogContentType } from "@/lib/og-generator";
import { serviceFamilies } from "@/data/brand-content";
export const size = ogSize;
export const contentType = ogContentType;
export default async function Image({ params }: { params: { slug: string } }) {
  const service = serviceFamilies.find(
    (s) => s.slug === (params.slug === "software" ? "apps" : params.slug),
  );
  return createOgImage({
    title: service?.name || "Expertise",
    subtitle:
      service?.summary || "Beautiful experiences. Intelligent operations.",
    badge: "KOOL KONSULTING / EXPERTISE",
    meta: "An independent technology studio · Nagpur",
  });
}
