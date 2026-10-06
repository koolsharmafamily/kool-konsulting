import { createOgImage, ogSize, ogContentType } from "@/lib/og-generator";
import { getProjectBySlug } from "@/data/work";
import { getCaseStudy } from "@/data/caseStudies";
export const size = ogSize;
export const contentType = ogContentType;
export default async function Image({ params }: { params: { slug: string } }) {
  const study = getCaseStudy(params.slug);
  const record = getProjectBySlug(params.slug);
  const project = record?.hidden ? undefined : record;
  return createOgImage({
    title: study?.title || project?.title || "Project records",
    subtitle:
      study?.subtitle ||
      project?.problem ||
      "The experience and the system behind it.",
    badge: study?.status || project?.status || "Project record",
    meta: "Kool Konsulting / Work",
  });
}
