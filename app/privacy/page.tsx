import React from "react";
import Link from "next/link";
import { site } from "@/data/site";
import { Section } from "@/components/ui/Section";

export const metadata = {
  title: "Privacy Notice | Kool Konsulting",
  description:
    "Plain-language privacy policy complying with India's Digital Personal Data Protection (DPDP) Act 2023.",
};

export default function PrivacyPage() {
  return (
    <div className="bg-paper min-h-screen py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="border-b border-line pb-6 space-y-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-carbon bg-carbon-050 px-3 py-1 rounded-full border border-[#DCD9F5]">
            Compliance
          </span>
          <h1 className="text-3xl md:text-5xl font-display font-bold text-ink tracking-tight font-stretch-h1">
            Privacy Notice
          </h1>
          <p className="text-sm text-ink-3">
            In accordance with India's Digital Personal Data Protection (DPDP) Act, 2023. Last updated: October 2026.
          </p>
        </div>

        <div className="space-y-6 text-sm md:text-base text-ink-2 leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-xl font-bold text-ink font-display">
              1. What information we collect
            </h2>
            <p>
              We collect personal data only when you voluntarily provide it:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Information entered into our tech check-up enquiry form (name, business name, phone number, city, email, and project notes).</li>
              <li>Messages and communications initiated by you through WhatsApp, phone, or email.</li>
              <li>Basic, non-invasive website analytics (pages visited, referral source, device type) without tracking your identity across the web.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-bold text-ink font-display">
              2. Why we collect it
            </h2>
            <p>
              Your data is used solely to respond to your inquiry, understand your business's technical requirements, schedule free consultation calls, and prepare written proposals. We never sell, rent, or trade your contact information to any third-party marketing companies.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-bold text-ink font-display">
              3. Data processors and infrastructure
            </h2>
            <p>
              To run our studio securely, we use reputable cloud infrastructure partners who process data on our behalf under strict confidentiality:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><strong>Hosting & Serverless:</strong> Vercel Inc.</li>
              <li><strong>Transactional Email:</strong> Resend Inc.</li>
              <li><strong>Communication Channels:</strong> Meta Platforms / WhatsApp Cloud API.</li>
              <li><strong>Backups:</strong> Google Workspace / Google Cloud.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-bold text-ink font-display">
              4. Data retention and rights
            </h2>
            <p>
              We retain project inquiries for up to 24 months to reference past proposals. Under the DPDP Act 2023, you have the right to request access to your data, demand corrections, or ask for complete deletion of your records from our systems.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-bold text-ink font-display">
              5. Grievance Officer & Contact
            </h2>
            <p>
              For any questions, corrections, or grievance redressal regarding your personal data, you may contact our designated data representative directly:
            </p>
            <div className="p-4 bg-surface rounded-card border border-line text-sm text-ink space-y-1">
              <p><strong>Name:</strong> {site.founder.name}</p>
              <p><strong>Role:</strong> Founder & Data Grievance Contact, Kool Konsulting</p>
              <p><strong>Location:</strong> Nagpur, Maharashtra, India</p>
              <p><strong>Phone:</strong> {site.phoneDisplay}</p>
              <p><strong>Response Timeline:</strong> We aim to resolve all privacy inquiries within 7 business days (legally within 90 days maximum).</p>
            </div>
          </section>
        </div>

        <div className="pt-8 border-t border-line">
          <Link href="/" className="text-xs font-semibold text-carbon hover:underline">
            ← Return to Homepage
          </Link>
        </div>

      </div>
    </div>
  );
}
