import type { Metadata } from "next";
import { Anek_Latin, Mukta, Kalam } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileActionBar from "@/components/MobileActionBar";
import { site } from "@/data/site";

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
  title: "Website, App and Software Development in Nagpur | Kool Konsulting",
  description: site.oneLiner,
  icons: {
    icon: "/favicon.svg",
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
      <body className="min-h-screen bg-paper text-ink font-sans antialiased flex flex-col selection:bg-carbon-050 selection:text-carbon">
        <Header />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
        <MobileActionBar />
      </body>
    </html>
  );
}
