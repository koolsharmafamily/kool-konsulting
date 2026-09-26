import React, { Suspense } from "react";
import ContactForm from "@/components/contact/ContactForm";
import { MessageSquare, Phone, Mail, MapPin, Clock } from "lucide-react";

export const metadata = {
  title: "Contact & Free AI Audit | Kool Konsulting Nagpur",
  description:
    "Ready to get your time back? Submit your operational bottleneck or skip the form and WhatsApp us directly at +91 88888 21351.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full bg-black min-h-screen">
      
      {/* Header */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 border-b border-white/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <div className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest border border-white/15 px-3 py-1 bg-white/5 inline-block">
              Intake & Audit
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-sans font-bold text-white tracking-tighter leading-tight">
              Ready to get your time back?
            </h1>
            <p className="text-lg md:text-xl text-neutral-400 leading-relaxed font-mono">
              Tell us where your team is bleeding hours. You will receive a direct diagnosis and a working prototype architecture within 48 hours.
            </p>

            <div className="pt-4">
              <a
                href="https://wa.me/918888821351"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-terminal-green text-black font-mono uppercase tracking-widest text-sm font-bold hover:bg-white transition-colors"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Skip the form. WhatsApp directly.</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Form and Contact Detail Split */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border border-white/15 bg-[#050505]">
            
            {/* Ultra Minimalist Form (Brutalist style applied via ContactForm internally if possible, or we wrap it) */}
            <div className="lg:col-span-7 p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-white/15">
              <Suspense fallback={<div className="text-neutral-500 font-mono text-sm">Loading form...</div>}>
                <ContactForm />
              </Suspense>
            </div>

            {/* Direct Details & Trust Card */}
            <div className="lg:col-span-5 p-8 md:p-12 flex flex-col justify-between">
              <div className="space-y-8">
                <div>
                  <h3 className="font-sans font-bold text-2xl text-white mb-2">
                    The Direct Architect SLA
                  </h3>
                  <p className="text-sm font-mono text-neutral-400 leading-relaxed">
                    When you reach out, your message doesn’t get assigned to a call center or junior rep. Kulvir Sharma personally reads every submission and responds with architectural feasibility and budget range.
                  </p>
                </div>

                <div className="space-y-4 font-mono text-xs">
                  <a
                    href="https://wa.me/918888821351"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 border border-white/15 bg-black hover:bg-white/5 transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <MessageSquare className="w-4 h-4 text-terminal-green" />
                      <span className="text-neutral-400 uppercase tracking-widest">WhatsApp Hotline</span>
                    </div>
                    <span className="text-white font-bold group-hover:text-terminal-green transition-colors">+91 88888 21351</span>
                  </a>

                  <a
                    href="tel:+918888821351"
                    className="flex items-center justify-between p-4 border border-white/15 bg-black hover:bg-white/5 transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <Phone className="w-4 h-4 text-white" />
                      <span className="text-neutral-400 uppercase tracking-widest">Direct Phone</span>
                    </div>
                    <span className="text-white font-bold">+91 88888 21351</span>
                  </a>

                  <a
                    href="mailto:hello@koolkonsulting.com"
                    className="flex items-center justify-between p-4 border border-white/15 bg-black hover:bg-white/5 transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <Mail className="w-4 h-4 text-white" />
                      <span className="text-neutral-400 uppercase tracking-widest">Email</span>
                    </div>
                    <span className="text-white font-bold">hello@koolkonsulting.com</span>
                  </a>

                  <div className="flex items-center justify-between p-4 border border-white/15 bg-black">
                    <div className="flex items-center gap-3">
                      <MapPin className="w-4 h-4 text-white" />
                      <span className="text-neutral-400 uppercase tracking-widest">Location</span>
                    </div>
                    <span className="text-white font-bold text-right max-w-[150px]">Nagpur, IN</span>
                  </div>
                </div>
              </div>

              <div className="pt-8 mt-8 border-t border-white/15 flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-neutral-500">
                <span className="flex items-center gap-2 text-terminal-green">
                  <Clock className="w-3.5 h-3.5" /> Resp: &lt; 2 Hours
                </span>
                <span>Encrypted</span>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
