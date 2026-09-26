import React from "react";
import ContactForm from "@/components/contact/ContactForm";
import { MessageSquare, Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata = {
  title: "Book a Discovery Call | Kool Konsulting",
  description:
    "Schedule a free 30-minute operational audit with Kulvir Sharma to identify bottlenecks and automation opportunities in your business.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Header */}
        <section className="pt-12 pb-16 text-center max-w-3xl mx-auto">
          <ScrollReveal>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-white tracking-tight">
              Let's map your <span className="text-amber-500">bottlenecks.</span>
            </h1>
            <p className="mt-6 text-slate-400 text-lg">
              Book a free 30-minute diagnostic call. We'll find the exact spots where your team is wasting time on manual work and tell you plainly if we can fix it.
            </p>
          </ScrollReveal>
        </section>

        {/* Contact Grid */}
        <section className="pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
            
            {/* Left Col: Contact Info & WhatsApp */}
            <div className="lg:col-span-5 space-y-8">
              <ScrollReveal direction="left">
                {/* Primary CTA: WhatsApp */}
                <div className="surface-card p-8 rounded-2xl border border-emerald-500/20 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent pointer-events-none" />
                  
                  <div className="relative z-10 space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400 mb-6">
                      <MessageSquare className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-heading font-bold text-white">
                      Fastest Way: WhatsApp
                    </h3>
                    <p className="text-slate-400 text-sm">
                      Skip the form. Message Kulvir directly. We usually reply within 15 minutes during business hours.
                    </p>
                    <a
                      href="https://wa.me/918888821351?text=Hi%20Kulvir,%20I'd%20like%20to%20discuss%20an%20automation%20project%20for%20my%20business."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 w-full py-3.5 rounded-lg font-heading font-bold text-obsidian bg-emerald-500 hover:bg-emerald-400 transition-colors flex items-center justify-center gap-2"
                    >
                      <span>Message +91 88888 21351</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Secondary Info */}
                <div className="mt-8 space-y-6 px-4">
                  <div className="flex gap-4 items-start">
                    <div className="p-2.5 rounded-lg bg-surface border border-white/10 text-slate-400 mt-1">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Email</h4>
                      <a href="mailto:hello@koolkonsulting.com" className="text-slate-400 text-sm hover:text-amber-400 transition-colors">
                        hello@koolkonsulting.com
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="p-2.5 rounded-lg bg-surface border border-white/10 text-slate-400 mt-1">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Office (By Appointment)</h4>
                      <p className="text-slate-400 text-sm">
                        Nagpur, Maharashtra, India
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="p-2.5 rounded-lg bg-surface border border-white/10 text-slate-400 mt-1">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Response Time</h4>
                      <p className="text-slate-400 text-sm">
                        All inquiries are reviewed directly by the Founder within 24 hours.
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Col: The Form */}
            <div className="lg:col-span-7">
              <ScrollReveal direction="right">
                <div className="surface-card p-6 sm:p-10 rounded-2xl relative">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 blur-[80px] pointer-events-none rounded-full" />
                  
                  <div className="relative z-10 mb-8 border-b border-white/5 pb-6">
                    <h3 className="text-2xl font-heading font-bold text-white mb-2">
                      Request an Audit
                    </h3>
                    <p className="text-slate-400 text-sm">
                      Fill out the details below. We'll review your current setup before the call.
                    </p>
                  </div>

                  <div className="relative z-10">
                    <ContactForm />
                  </div>
                </div>
              </ScrollReveal>
            </div>

          </div>
        </section>
      </div>
    </div>
  );
}
