import { createOgImage, ogSize, ogContentType } from "@/lib/og-generator";
import { getProjectBySlug } from "@/data/work";

export const size = ogSize;
export const contentType = ogContentType;

export default async function Image({
  params,
}: {
  params: { slug: string };
}) {
  const project = getProjectBySlug(params.slug);

  const title = project ? project.title : "Kool Konsulting Case Study";
  const subtitle = project
    ? project.problem
    : "Proven software delivery for Indian businesses.";
  const badge = project ? `Case Study · ${project.industry}` : "Case Study";
  const meta = project?.tools?.length
    ? project.tools.join(" · ")
    : "Websites · Apps · Business Software · Automation";

  return createOgImage({
    title,
    subtitle,
    badge,
    meta,
  });
}
