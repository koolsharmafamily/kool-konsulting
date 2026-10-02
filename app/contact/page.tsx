import React, { Suspense } from "react";
import ContactForm from "@/components/contact/ContactForm";
import { site } from "@/data/site";
import { getWhatsAppUrl, getPhoneUrl } from "@/lib/whatsapp";
import { MessageSquare, Phone, Clock, MapPin, Mail, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Get a Free Tech Check-up | Kool Konsulting Nagpur",
  description:
    "Schedule a 30-minute operational review with Kulvir Sharma. No sales pitches, just practical software recommendations for your business.",
};

export default function ContactPage() {
  const waContactUrl = getWhatsAppUrl("Hi Kulvir, I'd like to book a free 30-minute tech check-up for my business.");

  return (
    <div className="bg-paper min-h-screen py-12 md:py-24">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Top Title */}
        <div className="max-w-2xl mb-12 space-y-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-carbon bg-carbon-050 px-3 py-1 rounded-full border border-[#DCD9F5]">
            Direct Intake
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-ink tracking-tight font-stretch-h1">
            Get a free tech check-up.
          </h1>
          <p className="text-lg md:text-xl text-ink-2 font-normal leading-relaxed">
            30 minutes by phone, Google Meet, or at your office in Nagpur. We'll examine what's slowing your operations down and give you a straight answer on what to fix first.
          </p>
        </div>

        {/* Two-Column Grid */}
        <div id="check-up" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Form */}
          <div className="lg:col-span-7">
            <Suspense fallback={<div className="p-8 text-xs text-ink-3">Loading form...</div>}>
              <ContactForm />
            </Suspense>
          </div>

          {/* Right Column: Direct Contact & Guarantees */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct WhatsApp Callout */}
            <div className="p-8 bg-surface rounded-stage border border-line shadow-sm space-y-6">
              <span className="text-xs font-semibold text-ink uppercase tracking-wider block">
                Skip the form & reach out directly
              </span>

              <div className="space-y-3">
                <a
                  href={waContactUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-btn bg-whatsapp text-ink font-semibold flex items-center justify-between shadow-sm hover:opacity-95 transition-opacity"
                >
                  <div className="flex items-center gap-3">
                    <MessageSquare className="w-5 h-5 flex-shrink-0" />
                    <div>
                      <span className="text-[11px] block opacity-80 uppercase">WhatsApp Directly</span>
                      <span className="text-base font-bold tabular-nums">{site.phoneDisplay}</span>
                    </div>
                  </div>
                  <span className="text-xs font-semibold underline">Chat now →</span>
                </a>

                <a
                  href={getPhoneUrl()}
                  className="p-4 rounded-btn bg-paper border border-line text-ink font-semibold flex items-center justify-between hover:border-line-strong transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 flex-shrink-0 text-carbon" />
                    <div>
                      <span className="text-[11px] text-ink-3 block uppercase">Phone Call</span>
                      <span className="text-base font-bold tabular-nums">{site.phoneDisplay}</span>
                    </div>
                  </div>
                  <span className="text-xs text-carbon font-semibold">Call →</span>
                </a>
              </div>

              <div className="pt-4 border-t border-line space-y-3 text-xs text-ink-2">
                <div className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-carbon flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Response commitment:</strong> Kulvir replies {site.responsePromise}.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-carbon flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Location:</strong> Nagpur, Maharashtra. On-site visits available across MIDC Hingna, Butibori, and Central India.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-leaf flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Founder guarantee:</strong> You talk directly with Kulvir, not a sales representative or junior intern.
                  </span>
                </div>
              </div>
            </div>

            {/* Practical note */}
            <div className="p-6 bg-carbon-050 rounded-card border border-[#DCD9F5] text-xs text-ink-2 space-y-1.5">
              <span className="font-bold text-carbon block">What to have ready for the call:</span>
              <p>
                Nothing formal. Just know roughly how many hours your staff spends on WhatsApp, Tally, or Excel each day, and what problem you'd most like solved first.
              </p>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
