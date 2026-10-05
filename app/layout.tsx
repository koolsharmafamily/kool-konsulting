import type { Metadata } from "next";
import { Anek_Latin, Mukta, Kalam } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileActionBar from "@/components/MobileActionBar";
import { site } from "@/data/site";
import { JsonLd } from "@/components/seo/JsonLd";
import { getOrganizationSchema } from "@/lib/schema";

// Display: Anek Latin with width axis
const anekLatin = Anek_Latin({
  subsets: ["latin"],
  variable: "--font-anek",
  display: "swap",
  axes: ["wdth"],
});

// Text: Mukta for body, UI, buttons, and forms
const mukta = Mukta({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mukta",
  display: "swap",
});

// Handwriting: Kalam for ledger illustrations only
const kalam = Kalam({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-kalam",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.origin),
  title: {
    default: "Website, App and Software Development in Nagpur | Kool Konsulting",
    template: "%s | Kool Konsulting",
  },
  description: site.oneLiner,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Website, App and Software Development in Nagpur | Kool Konsulting",
    description: site.oneLiner,
    url: site.origin,
    siteName: site.name,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Kool Konsulting - Website, App and Software Development in Nagpur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Website, App and Software Development in Nagpur | Kool Konsulting",
    description: site.oneLiner,
    images: ["/opengraph-image"],
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${anekLatin.variable} ${mukta.variable} ${kalam.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-bg text-ink font-sans antialiased flex flex-col selection:bg-kk-indigo-050 selection:text-kk-indigo">
        <JsonLd data={getOrganizationSchema()} />
        <Header />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
        <MobileActionBar />
      </body>
    </html>
  );
}

