import React, { Suspense } from "react";
import ContactForm from "@/components/contact/ContactForm";
import { MessageSquare, Phone, Mail, MapPin, Sparkles, Clock, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Contact & Free AI Audit | Kool Konsulting Nagpur",
  description:
    "Ready to get your time back? Submit your operational bottleneck or skip the form and WhatsApp us directly at +91 88888 21351.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full py-12 tech-grid-pattern">
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-20">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyber-purple/10 border border-cyber-purple/30 text-cyber-light text-xs font-mono uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Frictionless Lead Intake
          </div>

          {/* Exact Required Headline */}
          <h1 className="text-4xl sm:text-6xl font-heading font-extrabold text-white tracking-tight leading-tight">
            Ready to get your <span className="cyber-purple-text">time back?</span>
          </h1>

          <p className="text-base sm:text-lg text-zinc-300 max-w-2xl mx-auto">
            Tell us where your team is bleeding hours. You will receive a direct diagnosis and a working prototype architecture within 48 hours.
          </p>

          {/* Prominent Direct WhatsApp Action */}
          <div className="pt-4 flex justify-center">
            <a
              href="https://wa.me/918888821351?text=Hi%20Kulvir,%20I'm%20ready%20to%20get%20my%20time%20back.%20Let's%20talk%20about%20automating%20my%20business."
              target="_blank"
              rel="noopener noreferrer"
              className="light-ray-btn inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-heading font-bold text-base sm:text-lg text-white bg-emerald-600 hover:bg-emerald-500 shadow-[0_0_30px_rgba(16,185,129,0.5)] hover:shadow-[0_0_45px_rgba(16,185,129,0.8)] transition-all transform hover:scale-[1.02] active:scale-[0.98]"
            >
              <MessageSquare className="w-6 h-6 text-white" />
              <span>Skip the form. WhatsApp us directly.</span>
            </a>
          </div>
        </div>

        {/* Form and Contact Detail Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-6xl mx-auto items-start">
          {/* Ultra Minimalist Form */}
          <div className="lg:col-span-7">
            <Suspense fallback={<div className="text-zinc-500 font-mono text-sm p-8">Loading form...</div>}>
              <ContactForm />
            </Suspense>
          </div>

          {/* Direct Details & Trust Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl bg-[#141416] border border-white/10 p-6 sm:p-8 space-y-6 shadow-[0_0_40px_-10px_rgba(0,0,0,0.5)]">
              <h3 className="font-heading font-bold text-xl text-white flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-cyber-purple" />
                The Direct Architect SLA
              </h3>

              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                When you reach out, your message doesn’t get assigned to a call center or junior rep. Kulvir Sharma personally reads every submission and responds with architectural feasibility and budget range.
              </p>

              <div className="space-y-4 pt-2 font-mono text-xs">
                <a
                  href="https://wa.me/918888821351"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-[#18181B] border border-white/5 hover:border-emerald-500/40 transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-emerald-950/60 text-emerald-400 border border-emerald-500/30">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-zinc-500 block text-[10px]">WhatsApp Hotline</span>
                    <span className="text-white group-hover:text-emerald-400 font-bold">
                      +91 88888 21351
                    </span>
                  </div>
                </a>

                <a
                  href="tel:+918888821351"
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-[#18181B] border border-white/5 hover:border-white/20 transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-[#212126] text-zinc-300 border border-white/10">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-zinc-500 block text-[10px]">Direct Phone Call</span>
                    <span className="text-white group-hover:text-cyber-light font-bold">
                      +91 88888 21351
                    </span>
                  </div>
                </a>

                <a
                  href="mailto:hello@koolkonsulting.com"
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-[#18181B] border border-white/5 hover:border-cyber-purple/40 transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-cyber-purple/10 text-cyber-purple border border-cyber-purple/30">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-zinc-500 block text-[10px]">Confidential Email</span>
                    <span className="text-white group-hover:text-cyber-light font-bold">
                      hello@koolkonsulting.com
                    </span>
                  </div>
                </a>

                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#18181B] border border-white/5">
                  <div className="p-2 rounded-lg bg-[#212126] text-zinc-300 border border-white/10">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-zinc-500 block text-[10px]">Physical Operations</span>
                    <span className="text-white font-bold">
                      Nagpur, Maharashtra (MIDC & Citywide)
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <Clock className="w-3.5 h-3.5" /> Average response: &lt; 2 Hours
                </span>
                <span>Encrypted & Private</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
