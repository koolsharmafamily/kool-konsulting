import React from "react";
import HeroSection from "@/components/home/HeroSection";
import BeforeAfterDemo from "@/components/home/BeforeAfterDemo";
import ServicesIndex from "@/components/home/ServicesIndex";
import WhatsAppSimulator from "@/components/home/WhatsAppSimulator";
import IndustryMatrix from "@/components/home/IndustryMatrix";
import ProcessSection from "@/components/home/ProcessSection";
import ComparisonSection from "@/components/home/ComparisonSection";
import FounderSection from "@/components/home/FounderSection";
import BallparkEstimator from "@/components/home/BallparkEstimator";
import FaqSection from "@/components/home/FaqSection";
import FinalCtaSection from "@/components/home/FinalCtaSection";
import { site } from "@/data/site";
import { JsonLd } from "@/components/seo/JsonLd";
import { getWebSiteSchema } from "@/lib/schema";

export const metadata = {
  title: "Website, App and Software Development in Nagpur | Kool Konsulting",
  description:
    "We build websites, apps, business software and automations for growing Indian businesses. Founder-led, fixed quotes, and based in Nagpur.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Website, App and Software Development in Nagpur | Kool Konsulting",
    description:
      "We build websites, apps, business software and automations for growing Indian businesses. Founder-led, fixed quotes, and based in Nagpur.",
    url: site.origin,
    siteName: site.name,
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Website, App and Software Development in Nagpur | Kool Konsulting",
    description:
      "We build websites, apps, business software and automations for growing Indian businesses. Founder-led, fixed quotes, and based in Nagpur.",
  },
};

export default function HomePage() {
  return (
    <div className="flex flex-col w-full bg-bg">
      <JsonLd data={getWebSiteSchema()} />
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Real Work & Before/After Demo */}
      <BeforeAfterDemo />

      {/* 3. What We Build Index */}
      <ServicesIndex />

      {/* 4. Try An Automation (WhatsApp Demo) */}
      <WhatsAppSimulator />

      {/* 5. Built for Businesses Like Yours (Industry Matrix) */}
      <IndustryMatrix />

      {/* 6. How a Project Runs (5-step process) */}
      <ProcessSection />

      {/* 7. Why Owners Choose Us (Comparison Table) */}
      <ComparisonSection />

      {/* 8. You'll Work with Kulvir (Founder Section) */}
      <FounderSection />

      {/* 9. Ballpark Estimator */}
      <BallparkEstimator />

      {/* 10. FAQs */}
      <FaqSection />

      {/* 11. Final Call To Action */}
      <FinalCtaSection />
    </div>
  );
}
