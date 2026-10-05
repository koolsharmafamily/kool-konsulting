import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Kool Konsulting",
    short_name: "Kool Konsulting",
    description:
      "We build the tech that runs growing Indian businesses. Websites, apps, business software and automations.",
    start_url: "/",
    display: "standalone",
    background_color: "#F6F7FB",
    theme_color: "#3D35E0",
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
