import type { Metadata } from "next";
import { Space_Grotesk, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Kool Konsulting | AI Automation & Custom Software Agency · Nagpur",
  description:
    "Stop running your Nagpur business on WhatsApp and broken Excel sheets. We build AI agents, custom software, and automated workflows that turn 40 hours of manual work into 4 seconds.",
  keywords: [
    "AI Automation Nagpur",
    "Custom Software Nagpur",
    "MIDC Automation",
    "WhatsApp AI Agents",
    "Tally Automation Nagpur",
    "Kool Konsulting",
    "Kulvir Sharma",
  ],
  authors: [{ name: "Kulvir Sharma", url: "https://koolkonsulting.com" }],
  creator: "Kulvir Sharma",
  openGraph: {
    title: "Kool Konsulting | AI Automation & Custom Software for Central India",
    description:
      "Turn 40 hours of manual work into 4 seconds. Custom AI agents, automated workflows, and dashboards for manufacturers, builders, and distributors.",
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
    <html lang="en" className={`${spaceGrotesk.variable} ${plusJakartaSans.variable} dark scroll-smooth`}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className="min-h-screen bg-[#09090B] text-[#F4F5F7] antialiased selection:bg-cyber-purple selection:text-white relative">
        {/* Ambient background glow layers */}
        <div className="fixed top-0 left-1/4 -translate-y-1/2 w-[700px] h-[500px] bg-cyber-purple/[0.08] blur-[150px] pointer-events-none rounded-full z-0" />
        <div className="fixed top-1/2 right-0 translate-x-1/3 w-[600px] h-[600px] bg-purple-900/[0.05] blur-[170px] pointer-events-none rounded-full z-0" />

        {/* Global Navigation */}
        <Navbar />

        {/* Main Content Area */}
        <main className="relative z-10 pt-20 flex flex-col min-h-screen">
          {children}
        </main>

        {/* Global Footer */}
        <Footer />

        {/* LocalBusiness Schema for Nagpur */}
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
              priceRange: "₹₹",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Nagpur",
                addressRegion: "Maharashtra",
                addressCountry: "IN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 21.1458,
                longitude: 79.0882,
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
                "ERP and Tally Integration",
                "Custom Software Development",
                "Business Intelligence",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
