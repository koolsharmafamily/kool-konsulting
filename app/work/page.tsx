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
  Play,
  ArrowRight,
  Sparkles,
  Clock,
  IndianRupee,
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata = {
  title: "Case Studies: Real Results from Nagpur | Kool Konsulting",
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
      headline: "The Old Way: 12 WhatsApp Groups & Lost Paper Muster",
      description:
        "8 site supervisors sent rough headcounts and challan photos across messy WhatsApp groups. Muster sheets were regularly lost on site, forcing 3 accountants in the head office to spend 4 full days every month reconciling labor wages and contractor bills.",
      points: [
        "Ghost workers and inaccurate daily wage muster",
        "Disputes over cement bags and steel deliveries",
        "Contractor bill payments delayed by weeks",
      ],
      timeLost: "~32 hours lost per week",
    },
    koolWay: {
      headline: "The Kool Konsulting Way: Simple WhatsApp Voice & Photo Check-in",
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
    industry: "Heavy Fabrication & Manufacturing",
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
      headline: "The Kool Konsulting Way: Scan Bill on WhatsApp → Direct Tally Entry",
      description:
        "When a vendor bill arrives, the accountant simply forwards the PDF or snaps a photo on WhatsApp. The system reads all line items, checks the vendor's GST number against government records, and posts the purchase voucher into Tally in 4 seconds.",
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
    title: "Wholesale B2B Ordering & Delivery Route Dispatch",
    icon: Truck,
    manualWay: {
      headline: "The Old Way: 150 Phone Calls Daily & Scribbled Chits",
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
      headline: "The Kool Konsulting Way: 24/7 B2B WhatsApp Catalog & Credit Lock",
      description:
        "Retailers order directly from a simple WhatsApp catalog anytime. The system automatically checks whether the retailer has unpaid bills exceeding the credit limit. If clear, the order is confirmed and batched into optimized delivery routes for tempo drivers.",
      points: [
        "Retailers place orders easily in 1 minute on WhatsApp",
        "Automatic credit check stops defaulters from getting more goods",
        "Orders grouped by area (East Nagpur, West Nagpur, MIDC) for drivers",
      ],
      timeSaved: "Dispatches ready in morning without delay",
    },
    metrics: [
      { label: "Order Time", value: "< 2 mins" },
      { label: "Defaulter Slip-ups", value: "Zero" },
      { label: "Tempo Fuel Saved", value: "18%" },
    ],
  },
  {
    id: "hospitality-cinema",
    industry: "Hospitality & Cinema",
    location: "Central Nagpur Entertainment Venue",
    title: "QR WhatsApp Food & Beverage Ordering Without Queues",
    icon: Film,
    manualWay: {
      headline: "The Old Way: 20-Minute Counter Queues During Intermission",
      description:
        "During a 15-minute movie interval or peak restaurant rush, dozens of customers rushed the physical food counters. Many customers gave up and walked away without buying food due to long lines, and cashiers frequently made mistakes under pressure.",
      points: [
        "Over 30% of customers abandoned buying food due to lines",
        "Cashiers made mistakes taking orders in the rush",
        "Customers frustrated by missing the start of the movie",
      ],
      timeLost: "30% food revenue lost every weekend",
    },
    koolWay: {
      headline: "The Kool Konsulting Way: Seat-Side QR Menu with UPI Payment",
      description:
        "QR codes on seat armrests and tables. Customers scan with their phone, select food on WhatsApp, and pay via Google Pay or PhonePe. The kitchen screen prepares the order and notifies the customer on WhatsApp when ready.",
      points: [
        "No app download needed—runs 100% inside WhatsApp",
        "Instant UPI payment confirmation with digital bill",
        "Kitchen staff sees clear order tickets with zero confusion",
      ],
      timeSaved: "Zero line wait time for customers",
    },
    metrics: [
      { label: "Food Revenue", value: "+34%" },
      { label: "Queue Time", value: "0 mins" },
      { label: "Orders Handled", value: "3x More" },
    ],
  },
  {
    id: "clinic-appointment",
    industry: "Healthcare & Diagnostics",
    location: "Dharampeth & Ramdaspeth, Nagpur",
    title: "24/7 Bilingual WhatsApp Patient Appointment Booking",
    icon: Stethoscope,
    manualWay: {
      headline: "The Old Way: Busy Reception Phones & Missed Evening Inquiries",
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
      headline: "The Kool Konsulting Way: Bilingual (Hindi/English) Booking Agent",
      description:
        "A customized WhatsApp assistant answers patient questions 24/7, shows available doctor slots, books appointments, and sends Google Maps clinic location and fasting preparation instructions in both Hindi and English.",
      points: [
        "Patients can book or reschedule anytime, even at 11 PM",
        "Speaks simple Hindi and English naturally",
        "Automatic reminder messages sent 2 hours before appointment",
      ],
      timeSaved: "Confirmed in 15 seconds without front-desk staff",
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
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-6 pb-16 space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs font-mono uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-purple-400" />
          Real Nagpur Case Studies
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-white tracking-tight leading-tight max-w-4xl mx-auto">
          The Proof: The Old Manual Way vs.{" "}
          <span className="text-purple-400">The Kool Konsulting Way</span>
        </h1>

        <p className="text-base sm:text-lg text-zinc-300 max-w-3xl mx-auto leading-relaxed">
          See exactly how manual chaos in Nagpur manufacturing, logistics, construction, and healthcare gets replaced by fast, reliable software systems.
        </p>
      </section>

      {/* Studies List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 pb-24">
        {CASE_STUDIES.map((study, idx) => {
          const Icon = study.icon;
          return (
            <ScrollReveal key={study.id}>
              <div className="rounded-3xl bg-[#141416] border border-zinc-800 p-6 sm:p-10 shadow-xl space-y-8">
                {/* Title bar */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-zinc-800 pb-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3.5 rounded-2xl bg-purple-950/50 border border-purple-500/30 text-purple-400">
                      <Icon className="w-7 h-7" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 flex-wrap text-xs font-mono text-zinc-400">
                        <span>{study.industry}</span>
                        <span>•</span>
                        <span className="text-purple-300">{study.location}</span>
                      </div>
                      <h2 className="text-xl sm:text-2xl font-heading font-bold text-white mt-1">
                        {study.title}
                      </h2>
                    </div>
                  </div>

                  <span className="px-3.5 py-1.5 rounded-full text-xs font-mono bg-zinc-900 border border-zinc-800 text-zinc-300 self-start md:self-center">
                    Case Study #{idx + 1}
                  </span>
                </div>

                {/* Side-by-side comparison */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* The Old Way */}
                  <div className="p-6 rounded-2xl bg-zinc-900/60 border border-red-500/20 space-y-4">
                    <div className="flex items-center justify-between border-b border-red-500/10 pb-3">
                      <span className="text-xs font-mono text-red-400 font-semibold uppercase flex items-center gap-1.5">
                        <AlertTriangle className="w-4 h-4" />
                        The Old Manual Way
                      </span>
                      <span className="text-xs font-mono text-red-400/80 bg-red-950/40 px-2.5 py-0.5 rounded border border-red-500/30">
                        {study.manualWay.timeLost}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-heading font-bold text-white">
                      {study.manualWay.headline}
                    </h3>

                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                      {study.manualWay.description}
                    </p>

                    <div className="space-y-2 pt-2">
                      {study.manualWay.points.map((pt, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-zinc-400">
                          <span className="text-red-400 font-bold">✕</span>
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* The Kool Way */}
                  <div className="p-6 rounded-2xl bg-zinc-900/80 border border-purple-500/40 space-y-4 shadow-lg shadow-purple-950/20">
                    <div className="flex items-center justify-between border-b border-purple-500/20 pb-3">
                      <span className="text-xs font-mono text-purple-300 font-semibold uppercase flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-purple-400" />
                        The Kool Konsulting Way
                      </span>
                      <span className="text-xs font-mono text-emerald-400 bg-emerald-950/60 px-2.5 py-0.5 rounded border border-emerald-500/30">
                        {study.koolWay.timeSaved}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-heading font-bold text-white">
                      {study.koolWay.headline}
                    </h3>

                    <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                      {study.koolWay.description}
                    </p>

                    <div className="space-y-2 pt-2">
                      {study.koolWay.points.map((pt, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-zinc-200">
                          <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Outcome Metrics */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-zinc-800">
                  <div className="grid grid-cols-3 gap-4 sm:gap-8 w-full sm:w-auto">
                    {study.metrics.map((m, i) => (
                      <div key={i} className="space-y-0.5">
                        <span className="text-[11px] font-mono text-zinc-400 uppercase">
                          {m.label}
                        </span>
                        <div className="text-lg sm:text-xl font-heading font-extrabold text-white">
                          {m.value}
                        </div>
                      </div>
                    ))}
                  </div>

                  <Link
                    href={`/contact?caseStudy=${encodeURIComponent(study.title)}`}
                    className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs sm:text-sm font-heading font-bold text-white bg-purple-600 hover:bg-purple-500 transition-colors flex items-center justify-center gap-2"
                  >
                    <span>Deploy This System For Your Business</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </section>

      {/* Bottom CTA */}
      <section className="py-16 text-center max-w-4xl mx-auto px-4 space-y-6 border-t border-zinc-900">
        <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white">
          Want to See How This Works for Your Specific Business?
        </h3>
        <p className="text-zinc-300 text-sm sm:text-base max-w-2xl mx-auto">
          Every business has its own quirks. Tell us your biggest bottleneck and we’ll map out how an automated workflow or marketing engine solves it.
        </p>
        <div className="pt-2">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-heading font-bold text-sm text-white bg-purple-600 hover:bg-purple-500 transition-colors"
          >
            <span>Book a Free 20-Min Call</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
