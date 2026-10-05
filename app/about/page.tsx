import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Section, SectionHeading } from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import FinalCtaSection from "@/components/home/FinalCtaSection";
import { site } from "@/data/site";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { JsonLd } from "@/components/seo/JsonLd";
import { getPersonSchema, getBreadcrumbSchema } from "@/lib/schema";
import { CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "About Kulvir Sharma & Kool Konsulting | Nagpur",
  description:
    "Founder-led technology studio in Nagpur. Background in finance, logistics, and software engineering for Indian MSMEs.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Kulvir Sharma & Kool Konsulting | Nagpur",
    description:
      "Founder-led technology studio in Nagpur. Background in finance, logistics, and software engineering for Indian MSMEs.",
    url: `${site.origin}/about`,
    siteName: site.name,
    locale: "en_IN",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Kulvir Sharma & Kool Konsulting | Nagpur",
    description:
      "Founder-led technology studio in Nagpur. Background in finance, logistics, and software engineering for Indian MSMEs.",
    images: ["/opengraph-image"],
  },
};

export default function AboutPage() {
  const waAboutUrl = getWhatsAppUrl("Hi Kulvir, I was reading your story on the about page. Let's talk about my business.");
  const breadcrumbs = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "About", url: "/about" },
  ]);

  const principles = [
    {
      title: "One accountable builder",
      desc: "You deal directly with Kulvir from the first phone call through architecture, weekly demos, and rollout. No junior account managers or sales disconnect.",
    },
    {
      title: "Fixed written quotes",
      desc: "Every project has a defined scope, timeline, price, and payment milestones agreed in writing before work begins. Zero runaway hourly billing.",
    },
    {
      title: "Everything in your name",
      desc: "The domain, hosting accounts, WhatsApp Business API numbers, database, and complete source code belong 100% to you. No proprietary vendor lock-in.",
    },
    {
      title: "Tech your staff will actually use",
      desc: "We design software around how your team already works at the counter, site, or godown. Large touch targets, minimal typing, in Hindi, Marathi, or English.",
    },
  ];

  return (
    <div className="bg-bg min-h-screen">
      <JsonLd data={getPersonSchema()} />
      <JsonLd data={breadcrumbs} />
      
      {/* 1. Header & Story */}
      <section className="pt-16 pb-16 md:pt-24 md:pb-24 bg-surface border-b border-line">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-sm aspect-[4/5] rounded-card overflow-hidden border border-line shadow-floating bg-bg">
                <Image
                  src="/kulvir-sharma.webp"
                  alt="Kulvir Sharma - Tech Architect & Founder of Kool Konsulting"
                  fill
                  sizes="(min-width: 1024px) 360px, 80vw"
                  className="object-cover"
                  style={{ objectPosition: "60% 22%" }}
                  priority
                />
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-semibold text-kk-indigo bg-kk-indigo-050 px-3 py-1 rounded-full border border-[#DCD9F5]">
                Founder Story
              </span>

              <h1 className="text-3xl sm:text-5xl md:text-6xl font-display font-bold text-ink tracking-tight leading-[1.08] font-stretch-h1">
                Hi, I'm Kulvir Sharma.
              </h1>

              <div className="space-y-4 text-base md:text-lg text-ink-2 font-normal leading-relaxed">
                <p>
                  I studied finance and management at the University of Melbourne, worked in business development at a logistics software company in Melbourne and with distributors at DSP Asset Managers, and before that built my own marketplace, KoolKollects.
                </p>
                <p>
                  Everywhere I looked, the same thing held businesses back: good owners were running on registers, Excel sheets and WhatsApp follow-ups, and their software vendors didn't understand how they worked.
                </p>
                <p>
                  Kool Konsulting is my answer. I build websites, apps, business software and automations around how your team already works, and I stay on WhatsApp after launch. You get my personal number, not a support ticket.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-ink-3">
                <span><strong>Location:</strong> Nagpur, Maharashtra</span>
                <span>•</span>
                <span><strong>Languages:</strong> English, Hindi, Marathi</span>
              </div>

              <div className="pt-2">
                <Button
                  variant="whatsapp"
                  href={waAboutUrl}
                >
                  Chat with Kulvir on WhatsApp
                </Button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Credentials List */}
      <Section variant="bg">
        <SectionHeading
          h2="Background & credentials"
          lead="Rigorous commercial discipline combined with practical software engineering."
        />

        <div className="max-w-3xl mx-auto space-y-3">
          {site.founder.credentials.map((cred, idx) => (
            <div
              key={idx}
              className="p-5 bg-surface rounded-card border border-line flex items-start gap-3.5 shadow-sm"
            >
              <CheckCircle2 className="w-5 h-5 text-kk-indigo flex-shrink-0 mt-0.5" />
              <span className="text-sm md:text-base text-ink font-medium leading-relaxed">
                {cred}
              </span>
            </div>
          ))}
        </div>
      </Section>

      {/* 3. Four Core Principles */}
      <Section variant="surface">
        <SectionHeading
          h2="How I work"
          lead="Four straightforward commitments to protect your time and your business."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {principles.map((pr, idx) => (
            <div
              key={idx}
              className="p-6 md:p-8 bg-bg rounded-stage border border-line space-y-3"
            >
              <div className="w-8 h-8 rounded-full bg-kk-indigo-050 text-kk-indigo font-display font-bold text-sm flex items-center justify-center border border-[#DCD9F5]">
                0{idx + 1}
              </div>
              <h3 className="font-display font-bold text-xl text-ink font-stretch-h3">
                {pr.title}
              </h3>
              <p className="text-sm text-ink-2 leading-relaxed">
                {pr.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center pt-10">
          <Link
            href="/work#earlier"
            className="text-xs font-semibold text-kk-indigo hover:underline"
          >
            See earlier roles, corporate research and prototypes
          </Link>
        </div>
      </Section>

      {/* 4. Final CTA */}
      <FinalCtaSection />

    </div>
  );
}
