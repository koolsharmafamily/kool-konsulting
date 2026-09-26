import React from "react";
import Link from "next/link";
import {
  Building2,
  Factory,
  Truck,
  Film,
  Stethoscope,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Sparkles
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata = {
  title: "Case Studies & Results | Kool Konsulting",
  description:
    "Real examples of how we replace manual chaos with simple, reliable automation for businesses in Nagpur and Central India.",
};

const CASE_STUDIES = [
  {
    id: "construction",
    industry: "Real Estate & Construction",
    location: "Wardha Road & Besa, Nagpur",
    title: "Construction Site & Daily Labor Tracking",
    icon: Building2,
    manualWay: {
      headline: "The Old Way: WhatsApp Chaos & Lost Paper Muster",
      description:
        "8 site supervisors sent rough headcounts and challan photos across messy WhatsApp groups. Muster sheets were regularly lost, forcing accountants to spend 4 full days every month reconciling labor wages and contractor bills.",
      points: [
        "Ghost workers and inaccurate daily wage muster",
        "Disputes over cement bags and steel deliveries",
        "Contractor bill payments delayed by weeks",
      ],
      timeLost: "~32 hours lost per week",
    },
    koolWay: {
      headline: "The Kool Konsulting Way: Voice & Photo Check-in",
      description:
        "Site supervisors simply send 1 voice note and 1 photo of the delivery challan on WhatsApp. Our automated system records the headcount, parses the cement/steel challan, and updates the central dashboard immediately.",
      points: [
        "Voice notes in Hindi/Marathi automatically converted to attendance",
        "Challan photos scanned and added to site inventory automatically",
        "Contractor payment statements generated in 1 click",
      ],
      timeSaved: "Instant record · 32 hours saved weekly",
    },
    metrics: [
      { label: "Admin Time Saved", value: "32 hrs/wk" },
      { label: "Muster Errors", value: "Zero" },
      { label: "Billing Turnaround", value: "Same Day" },
    ],
  },
  {
    id: "midc-factory",
    industry: "Heavy Fabrication",
    location: "MIDC Hingna & Butibori, Nagpur",
    title: "Factory Purchase Bills & Tally Automation",
    icon: Factory,
    manualWay: {
      headline: "The Old Way: Typing Paper Bills into Tally at Midnight",
      description:
        "The factory accounts clerk had to manually key in 400+ paper purchase dockets into Tally Prime before the 20th GST return deadline. Typo errors in GSTIN numbers frequently led to blocked tax credits and notices from authorities.",
      points: [
        "14 hours spent typing receipts into Tally each week",
        "Frequent GSTIN typos and missed input tax credit",
        "Zero real-time knowledge of daily plant production costs",
      ],
      timeLost: "~40 hours lost each month",
    },
    koolWay: {
      headline: "The Kool Konsulting Way: Scan Bill → Direct Tally Entry",
      description:
        "When a vendor bill arrives, the accountant simply snaps a photo on WhatsApp. The system reads all line items, checks the vendor's GST number against government records, and posts the purchase voucher into Tally in 4 seconds.",
      points: [
        "99.8% accurate scanning for Indian GST tax invoices",
        "Automatic check against government GST portal records",
        "Daily dashboard on phone showing raw material purchases",
      ],
      timeSaved: "4 seconds per bill · Zero retyping",
    },
    metrics: [
      { label: "Monthly Hours Saved", value: "40+ hrs" },
      { label: "Tax Credit Saved", value: "₹1.4 Lakhs" },
      { label: "Typing Errors", value: "Zero" },
    ],
  },
  {
    id: "fmcg-distributor",
    industry: "Wholesale & Distribution",
    location: "Wardhaman Nagar & Sitabuldi, Nagpur",
    title: "B2B Ordering & Delivery Route Dispatch",
    icon: Truck,
    manualWay: {
      headline: "The Old Way: 150 Phone Calls & Scribbled Chits",
      description:
        "Kirana owners called sales reps all evening to place orders on scraps of paper. Tempo drivers were loaded based on memory, and goods were frequently delivered to shops that already had overdue balances above ₹50,000.",
      points: [
        "Orders lost or misread from scribbled paper notes",
        "Goods delivered to defaulters who hadn't cleared past dues",
        "Tempos wasting fuel driving back and forth across Nagpur",
      ],
      timeLost: "~4 hours delayed daily",
    },
    koolWay: {
      headline: "The Kool Konsulting Way: 24/7 WhatsApp Catalog & Credit Lock",
      description:
        "Retailers order directly from a simple WhatsApp catalog anytime. The system automatically checks unpaid bills against credit limits. If clear, the order is confirmed and batched into optimized delivery routes for tempo drivers.",
      points: [
        "Retailers place orders easily in 1 minute on WhatsApp",
        "Automatic credit check stops defaulters from getting more goods",
        "Orders grouped by area for optimized routing",
      ],
      timeSaved: "Dispatches ready without morning delay",
    },
    metrics: [
      { label: "Order Time", value: "< 2 mins" },
      { label: "Defaulter Slip-ups", value: "Zero" },
      { label: "Tempo Fuel Saved", value: "18%" },
    ],
  },
  {
    id: "clinic-appointment",
    industry: "Healthcare & Diagnostics",
    location: "Dharampeth & Ramdaspeth, Nagpur",
    title: "24/7 Bilingual WhatsApp Appointment Booking",
    icon: Stethoscope,
    manualWay: {
      headline: "The Old Way: Busy Phones & Missed Evening Inquiries",
      description:
        "Receptionists spent most of their morning answering repetitive questions about doctor consultation hours, test fasting instructions, and fees. Phone calls after clinic hours went unanswered, and patient no-show rates reached 28%.",
      points: [
        "Dozens of missed inquiries every evening and on Sundays",
        "Patients waiting in long lines at the reception desk",
        "High no-shows because staff didn't have time to call and remind",
      ],
      timeLost: "~25 hours weekly spent on phone calls",
    },
    koolWay: {
      headline: "The Kool Konsulting Way: Bilingual Booking Agent",
      description:
        "A customized WhatsApp assistant answers patient questions 24/7, shows available doctor slots, books appointments, and sends Google Maps clinic location and fasting preparation instructions in both Hindi and English.",
      points: [
        "Patients can book or reschedule anytime, even at 11 PM",
        "Speaks simple Hindi and English naturally",
        "Automatic reminder messages sent 2 hours before appointment",
      ],
      timeSaved: "Confirmed in 15s without front-desk staff",
    },
    metrics: [
      { label: "Reception Phone Calls", value: "-64%" },
      { label: "After-Hours Bookings", value: "+45%" },
      { label: "Patient No-Shows", value: "-41%" },
    ],
  },
];

export default function WorkPage() {
  return (
    <div className="flex flex-col w-full py-12">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-12 pb-20 space-y-6">
        <ScrollReveal>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-amber-950/30 border border-amber-500/20 text-amber-400 text-xs font-mono uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Real Business Results
          </div>

          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-white tracking-tight leading-tight max-w-4xl mx-auto">
            The proof is in the <span className="text-amber-500">pipeline.</span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            See exactly how manual chaos in Nagpur manufacturing, logistics, construction, and healthcare gets replaced by fast, reliable automated systems.
          </p>
        </ScrollReveal>
      </section>

      {/* Studies List */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 pb-24">
        {CASE_STUDIES.map((study, idx) => {
          const Icon = study.icon;
          return (
            <ScrollReveal key={study.id} delay={0.1}>
              <div className="rounded-2xl surface-card overflow-hidden shadow-2xl relative">
                
                {/* Metric Banner Header */}
                <div className="bg-obsidian border-b border-white/5 p-6 sm:p-8">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                    <div className="flex items-center gap-4">
                      <div className="p-3.5 rounded-xl bg-surface border border-white/10 text-amber-500 shadow-md">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 flex-wrap text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-1">
                          <span>{study.industry}</span>
                          <span className="text-slate-600">•</span>
                          <span className="text-amber-400">{study.location}</span>
                        </div>
                        <h2 className="text-xl sm:text-2xl font-heading font-bold text-white tracking-tight">
                          {study.title}
                        </h2>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 sm:gap-8 border-t border-white/5 pt-6">
                    {study.metrics.map((m, i) => (
                      <div key={i} className="space-y-1">
                        <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider">
                          {m.label}
                        </span>
                        <div className="text-2xl sm:text-3xl font-heading font-extrabold text-white">
                          {m.value}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Side-by-side comparison */}
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  {/* The Old Way */}
                  <div className="p-6 sm:p-8 bg-surface/50 border-r border-white/5 space-y-5">
                    <div className="flex items-center justify-between border-b border-rose-500/10 pb-4">
                      <span className="text-xs font-mono text-rose-400 font-semibold uppercase flex items-center gap-2">
                        <AlertTriangle className="w-4 h-4" />
                        The Old Manual Way
                      </span>
                      <span className="text-[10px] font-mono text-rose-400/80 bg-rose-950/40 px-2 py-0.5 rounded border border-rose-500/30">
                        {study.manualWay.timeLost}
                      </span>
                    </div>

                    <h3 className="text-lg font-heading font-bold text-white">
                      {study.manualWay.headline}
                    </h3>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      {study.manualWay.description}
                    </p>

                    <div className="space-y-2.5 pt-2">
                      {study.manualWay.points.map((pt, i) => (
                        <div key={i} className="flex items-start gap-2 text-sm text-slate-400">
                          <span className="text-rose-500 font-bold shrink-0">✕</span>
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* The Kool Way */}
                  <div className="p-6 sm:p-8 bg-obsidian-light/30 space-y-5 relative overflow-hidden">
                    {/* Subtle glow behind the "after" section */}
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent pointer-events-none" />
                    
                    <div className="flex items-center justify-between border-b border-emerald-500/10 pb-4 relative z-10">
                      <span className="text-xs font-mono text-emerald-400 font-semibold uppercase flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4" />
                        The New Automated Way
                      </span>
                      <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-500/30">
                        {study.koolWay.timeSaved}
                      </span>
                    </div>

                    <h3 className="text-lg font-heading font-bold text-white relative z-10">
                      {study.koolWay.headline}
                    </h3>
                    <p className="text-sm text-slate-300 leading-relaxed relative z-10">
                      {study.koolWay.description}
                    </p>

                    <div className="space-y-2.5 pt-2 relative z-10">
                      {study.koolWay.points.map((pt, i) => (
                        <div key={i} className="flex items-start gap-2 text-sm text-slate-200">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom CTA */}
                <div className="p-4 sm:p-6 border-t border-white/5 bg-obsidian flex justify-end">
                  <Link
                    href={`/contact?caseStudy=${encodeURIComponent(study.title)}`}
                    className="w-full sm:w-auto px-6 py-2.5 rounded-lg text-sm font-heading font-bold text-obsidian bg-amber-500 hover:bg-amber-400 transition-colors flex items-center justify-center gap-2"
                  >
                    <span>Deploy this system for your business</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </section>
    </div>
  );
}
