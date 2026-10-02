import React from "react";
import Button from "@/components/ui/Button";
import { site } from "@/data/site";
import { getWhatsAppUrl, getPhoneUrl } from "@/lib/whatsapp";
import { MessageSquare, Phone, ArrowRight } from "lucide-react";

export default function FinalCtaSection() {
  const waCtaUrl = getWhatsAppUrl("Hi Kulvir, I'm ready for a 30-minute tech check-up for my business.");

  return (
    <section className="py-20 md:py-32 bg-paper text-center">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto space-y-6">
          <span className="text-xs font-semibold uppercase tracking-wider text-carbon bg-carbon-050 px-3.5 py-1.5 rounded-full border border-[#DCD9F5] inline-block">
            Start with zero risk
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-6xl font-display font-bold text-ink tracking-tight leading-[1.06] font-stretch-h2">
            Tell us what's slowing your business down.
          </h2>

          <p className="text-lg md:text-xl text-ink-2 font-normal leading-relaxed max-w-2xl mx-auto">
            The 30-minute check-up is free. You'll get a straight answer on what to fix first and roughly what it costs.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              variant="whatsapp"
              href={waCtaUrl}
              icon={<MessageSquare className="w-5 h-5" />}
            >
              Chat on WhatsApp
            </Button>
            <Button
              variant="secondary"
              href={getPhoneUrl()}
              icon={<Phone className="w-4 h-4 text-carbon" />}
            >
              Call Kulvir
            </Button>
            <Button variant="primary" href="/contact">
              Send an enquiry
            </Button>
          </div>

          <div className="pt-4">
            <p className="text-xs text-ink-3">
              Kulvir replies {site.responsePromise}. Based in Nagpur, serving businesses across India.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
