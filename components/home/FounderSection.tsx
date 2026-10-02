import React from "react";
import Image from "next/image";
import { Section, SectionHeading } from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { site } from "@/data/site";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { MessageSquare, CheckCircle2 } from "lucide-react";

export default function FounderSection() {
  const waFounderUrl = getWhatsAppUrl("Hi Kulvir, I'd like to schedule a 30-minute tech check-up call.");

  return (
    <Section id="about" variant="surface">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Cropped Photo in 4:5 aspect ratio in colour */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-full max-w-sm aspect-[4/5] rounded-card overflow-hidden border border-line shadow-floating bg-paper">
            <Image
              src="/kulvir-sharma.webp"
              alt="Kulvir Sharma - Founder of Kool Konsulting in Nagpur"
              fill
              sizes="(max-width: 768px) 100vw, 400px"
              className="object-cover"
              style={{ objectPosition: "60% 22%" }}
            />
          </div>
        </div>

        {/* Right Column: Bio & Credentials */}
        <div className="lg:col-span-7 space-y-6">
          <span className="text-xs font-semibold uppercase tracking-wider text-carbon bg-carbon-050 px-3 py-1 rounded-full border border-[#DCD9F5]">
            Founder-Led Practice
          </span>

          <h2 className="text-3xl md:text-5xl font-display font-bold text-ink tracking-tight leading-[1.08] font-stretch-h2">
            You'll work with Kulvir.
          </h2>

          <p className="text-lg text-ink-2 font-normal leading-relaxed">
            I studied finance and management at the University of Melbourne, worked in business development at a logistics software company in Melbourne and with distributors at DSP Asset Managers, and before that built my own marketplace, KoolKollects.
          </p>

          <p className="text-base text-ink-2 leading-relaxed">
            Kool Konsulting is my answer to the typical agency disconnect. I build websites, apps, business software and automations around how your team already works, and I stay on WhatsApp after launch. You get my personal number, not a support ticket.
          </p>

          {/* Plain list of credentials */}
          <div className="pt-2 border-t border-line space-y-2">
            <span className="text-xs font-semibold text-ink uppercase tracking-wider block mb-2">
              Background & Credentials
            </span>
            <ul className="space-y-1.5 text-xs text-ink-2">
              {site.founder.credentials.map((cred, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-carbon flex-shrink-0 mt-0.5" />
                  <span>{cred}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-4">
            <Button
              variant="whatsapp"
              href={waFounderUrl}
              icon={<MessageSquare className="w-5 h-5" />}
            >
              Chat with Kulvir on WhatsApp
            </Button>
          </div>
        </div>

      </div>
    </Section>
  );
}
