import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kool Konsulting | AI Automation & Business Growth Strategies · Nagpur",
  description:
    "We build AI automations, local marketing engines, and custom software that eliminate manual busywork. Designed for growing businesses in Nagpur & Central India.",
  keywords: [
    "AI Automation Nagpur",
    "Workflow Automation India",
    "Digital Marketing Agency Nagpur",
    "Custom Software Nagpur",
    "Tally Automation",
    "WhatsApp AI Agents",
    "Business Strategy Consulting",
    "Kulvir Sharma",
    "Kool Konsulting"
  ],
  authors: [{ name: "Kulvir Sharma", url: "https://koolkonsulting.com" }],
  creator: "Kulvir Sharma",
  openGraph: {
    title: "Kool Konsulting | Strategic AI & Growth Partner",
    description:
      "Transform manual bottlenecks into automated workflows. We help businesses in Central India scale without increasing overhead.",
    url: "https://koolkonsulting.com",
    siteName: "Kool Konsulting",
    locale: "en_IN",
    type: "website",
  },
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
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} dark scroll-smooth`}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className="min-h-screen bg-obsidian text-slate-200 antialiased relative selection:bg-amber-500 selection:text-black">
        {/* Subtle Ambient Background Glows */}
        <div className="fixed top-0 left-1/4 -translate-y-1/2 w-[600px] h-[400px] bg-amber-500/[0.04] blur-[120px] pointer-events-none rounded-full z-0" />
        <div className="fixed top-1/2 right-0 translate-x-1/3 w-[500px] h-[500px] bg-amber-600/[0.03] blur-[150px] pointer-events-none rounded-full z-0" />

        <Navbar />

        <main className="relative z-10 pt-20 flex flex-col min-h-screen">
          {children}
        </main>

        <Footer />
        <WhatsAppFloat />

        {/* LocalBusiness Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Kool Konsulting",
              image: "https://koolkonsulting.com/kulvir-sharma.webp",
              "@id": "https://koolkonsulting.com",
              url: "https://koolkonsulting.com",
              telephone: "+918888821351",
              priceRange: "₹₹₹",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Nagpur",
                addressRegion: "Maharashtra",
                addressCountry: "IN",
              },
              founder: {
                "@type": "Person",
                name: "Kulvir Sharma",
                jobTitle: "Founder & Tech Architect",
                alumniOf: "The University of Melbourne",
              },
              knowsAbout: [
                "Artificial Intelligence",
                "Workflow Automation",
                "Business Intelligence",
                "Local SEO",
                "Custom Software Development"
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
