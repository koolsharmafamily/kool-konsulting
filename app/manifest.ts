import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Kool Konsulting",
    short_name: "Kool Konsulting",
    description:
      "Beautiful digital experiences and intelligent operations for startups, luxury brands and smart SMEs.",
    start_url: "/",
    display: "standalone",
    background_color: "#F3F2EE",
    theme_color: "#5145E5",
    icons: [
      {
        src: "/favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
      {
        src: "/icons/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/icons/icon-maskable-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
