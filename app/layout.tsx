import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/data/site";
import { JsonLd } from "@/components/seo/JsonLd";
import { getOrganizationSchema } from "@/lib/schema";
const manrope = localFont({
  src: "../node_modules/@fontsource-variable/manrope/files/manrope-latin-wght-normal.woff2",
  variable: "--font-manrope",
  display: "swap",
});
const mono = localFont({
  src: "../node_modules/@fontsource/ibm-plex-mono/files/ibm-plex-mono-latin-400-normal.woff2",
  variable: "--font-mono",
  display: "swap",
  preload: false,
});
export const metadata: Metadata = {
  metadataBase: new URL(site.origin),
  title: {
    default: "Kool Konsulting — Beautiful experiences. Intelligent operations.",
    template: "%s | Kool Konsulting",
  },
  description: site.oneLiner,
  openGraph: {
    title: "Kool Konsulting",
    description: site.oneLiner,
    siteName: site.name,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Beautiful experiences. Intelligent operations. Kool Konsulting.",
      },
    ],
  },
  twitter: { card: "summary_large_image", images: ["/opengraph-image"] },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    apple: "/apple-touch-icon.png",
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-IN" className={`${manrope.variable} ${mono.variable}`}>
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <JsonLd data={getOrganizationSchema()} />
        <Header />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
