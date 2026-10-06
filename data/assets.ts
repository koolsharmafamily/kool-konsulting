/** Provenance register. Concept assets never constitute client evidence. */
export const assets = [
  {
    id: "fold-mark",
    paths: ["/brand/kk-mark.svg", "/brand/kk-mark-small.svg"],
    source:
      "Original authored vector geometry; owner-directed left-facing K then right-facing K",
    permission: "Project-authored",
    status: "implemented",
    slot: "Logo, closing scene, icons",
  },
  {
    id: "wordmark",
    paths: ["/brand/kk-logo-horizontal.svg", "/brand/kk-logo-stacked.svg"],
    source: "Original outlined geometric letter paths",
    permission: "Project-authored",
    status: "implemented",
    slot: "Header and business applications",
  },
  {
    id: "fold-material",
    paths: ["/art/kool-fold.webp"],
    source:
      "OpenAI image generation, original concept composition, 6 October 2026",
    permission: "Generated for this project; not client evidence",
    status: "concept-illustration",
    slot: "Hero static artwork and CSS unfolding layers",
  },
  {
    id: "lab-products",
    paths: [],
    source:
      "Original vector product illustrations in components/lab/ProductIllustration.tsx",
    permission: "Project-authored",
    status: "concept-illustration",
    slot: "Fictional FORM collection",
  },
  {
    id: "manrope",
    paths: ["/brand/licenses/Manrope-OFL.txt"],
    source: "@fontsource-variable/manrope 5.3.0",
    permission: "SIL Open Font License 1.1",
    status: "verified-package-licence",
    slot: "Website typography",
  },
  {
    id: "plex",
    paths: ["/brand/licenses/IBM-Plex-Mono-OFL.txt"],
    source: "@fontsource/ibm-plex-mono 5.3.0",
    permission: "SIL Open Font License 1.1",
    status: "verified-package-licence",
    slot: "Workflow annotations",
  },
  {
    id: "founder-photo",
    paths: ["/kulvir-sharma.webp"],
    source: "Existing repository asset; approval not independently established",
    permission: "Owner approval pending",
    status: "not-used",
    slot: "Use typographic founder panel until approved",
  },
  {
    id: "case-proof",
    paths: [],
    source: "Existing data/caseStudies.ts and data/work.ts",
    permission: "Client permissions and evidence require owner review",
    status: "archive-only-no-testimonials-or-metrics",
    slot: "Project records, explicitly labelled by content type",
  },
  {
    id: "social-applications",
    paths: [
      "/brand/applications/proposal-cover.svg",
      "/brand/applications/social-post.svg",
      "/brand/applications/business-card.svg",
      "/brand/applications/social-sharing.svg",
    ],
    source: "Original editable SVG templates",
    permission: "Project-authored",
    status: "implemented",
    slot: "Brand guide and internal direction board",
  },
] as const;
