"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Section, SectionHeading } from "@/components/ui/Section";
import { PhoneFrame } from "@/components/ui/PhoneFrame";
import { LedgerPaper, ParchiSlip } from "@/components/ui/LedgerPaper";
import { ArrowRight, Check, SlidersHorizontal } from "lucide-react";
import { projects } from "@/data/work";

type TabId = "construction" | "cinema" | "wholesale" | "dance";

export default function BeforeAfterDemo() {
  const [activeTab, setActiveTab] = useState<TabId>("construction");
  const [sliderPos, setSliderPos] = useState(50); // 0 to 100%
  const [mobileView, setMobileView] = useState<"before" | "after">("after");

  const tabContent = {
    construction: {
      name: "Construction site",
      projectSlug: "construction-site-app",
      projectTitle: "Site attendance & wages app",
      facts: [
        "One-tap attendance on the supervisor's phone",
        "Wages and overtime calculated automatically",
        "Petty cash logged with a photo of the receipt",
      ],
      before: (
        <LedgerPaper className="h-full">
          <div className="space-y-3">
            <div className="text-center font-bold text-ledger-red border-b border-ledger-red/30 pb-1">
              Haziri register, October, Site 2
            </div>
            <p>12 Oct: Ramesh Mistry — P (Adv ₹500)</p>
            <p>12 Oct: Suresh Beldar — P (Adv Nil)</p>
            <p>12 Oct: Sonu Mazdoor — A</p>
            <p>12 Oct: Monu Mazdoor — P (Half day)</p>
            <p>Site Cash Spent: ₹1,450 (Diesel) — Parchi lost</p>
            <p className="text-ledger-red font-bold">Total hafta to calculate: pending</p>
          </div>
        </LedgerPaper>
      ),
      after: (
        <div className="space-y-3 font-sans">
          <div className="flex justify-between items-center pb-2 border-b border-line">
            <div>
              <span className="font-bold text-ink text-sm block">Site #2 Attendance</span>
              <span className="text-[11px] text-ink-3">Today: 28 Present · 4 Absent</span>
            </div>
            <span className="px-2 py-0.5 rounded bg-[#E6F4EA] text-leaf text-xs font-semibold">
              Live Sync
            </span>
          </div>

          <div className="space-y-1.5 text-xs">
            <div className="p-2 rounded bg-paper flex justify-between items-center border border-line">
              <div>
                <span className="font-semibold text-ink block">Ramesh Mistry</span>
                <span className="text-ink-3 text-[10px]">Wage: ₹950/day · Overtime: 1 hr</span>
              </div>
              <span className="font-bold text-leaf">P (+OT)</span>
            </div>
            <div className="p-2 rounded bg-paper flex justify-between items-center border border-line">
              <div>
                <span className="font-semibold text-ink block">Suresh Beldar</span>
                <span className="text-ink-3 text-[10px]">Wage: ₹700/day</span>
              </div>
              <span className="font-bold text-leaf">P</span>
            </div>
            <div className="p-2 rounded bg-paper flex justify-between items-center border border-line">
              <div>
                <span className="font-semibold text-ink block">Sonu Mazdoor</span>
                <span className="text-ink-3 text-[10px]">No check-in</span>
              </div>
              <span className="font-bold text-ink-3">Absent</span>
            </div>
          </div>

          <div className="p-2 rounded-lg bg-carbon-050 text-carbon text-xs flex justify-between items-center font-medium">
            <span>Today's Estimated Wages:</span>
            <span className="font-bold tabular-nums">₹22,450</span>
          </div>
        </div>
      ),
    },
    cinema: {
      name: "Cinema canteen",
      projectSlug: "cinema-samosa-forecast",
      projectTitle: "Showtime snack demand forecast",
      facts: [
        "Eliminated manual guessing of interval food preparation",
        "Predicts exact samosa and popcorn demand based on show advance booking",
        "Kitchen prep alert sent 45 minutes before intermission",
      ],
      before: (
        <LedgerPaper className="h-full">
          <div className="space-y-3">
            <div className="text-center font-bold text-ledger-red border-b border-ledger-red/30 pb-1">
              CANTEEN STOCK REGISTER
            </div>
            <p>Fri 9 pm show: Cooked 250 samosas (guessed)</p>
            <p>Sold: 140 only. 110 leftover cold.</p>
            <p>Sat 6 pm show: Made 120 samosas.</p>
            <p>Heavy demand! Sold out in 5 mins. Loss of sales.</p>
            <p className="text-ledger-red">Chef note: How to know ticket counts early?</p>
          </div>
        </LedgerPaper>
      ),
      after: (
        <div className="space-y-3 font-sans">
          <div className="flex justify-between items-center pb-2 border-b border-line">
            <div>
              <span className="font-bold text-ink text-sm block">9:00 PM Show — Screen 1</span>
              <span className="text-[11px] text-ink-3">Action Blockbuster · 410 Seats Booked</span>
            </div>
            <span className="px-2 py-0.5 rounded bg-carbon-050 text-carbon text-xs font-semibold">
              Forecast Ready
            </span>
          </div>

          <div className="space-y-2 text-xs">
            <div className="p-2.5 rounded-lg bg-[#E6F4EA] border border-[#CEEAD6] flex justify-between items-center">
              <div>
                <span className="font-bold text-ink block">Recommended Samosas</span>
                <span className="text-ink-3 text-[10px]">Ratio: 0.48 per attendee</span>
              </div>
              <span className="text-base font-bold text-leaf tabular-nums">195 pcs</span>
            </div>

            <div className="p-2.5 rounded-lg bg-paper border border-line flex justify-between items-center">
              <div>
                <span className="font-bold text-ink block">Popcorn Large Tubs</span>
                <span className="text-ink-3 text-[10px]">Ratio: 0.22 per attendee</span>
              </div>
              <span className="text-base font-bold text-ink tabular-nums">90 tubs</span>
            </div>
          </div>

          <div className="p-2 bg-paper rounded border border-line text-[11px] text-ink-2">
            Chef alert dispatched to kitchen WhatsApp at 8:15 PM.
          </div>
        </div>
      ),
    },
    wholesale: {
      name: "Wholesale shop",
      projectSlug: "wholesale-shop-billing",
      projectTitle: "Mandi counter billing & stock ledger",
      facts: [
        "Replaced slow handwritten paper parchis during peak morning rush",
        "Stock deducts simultaneously across retail counter and 2 offsite godowns",
        "Automatic customer balance check prevents credit to overdue buyers",
      ],
      before: (
        <ParchiSlip
          title="PARCHI #408"
          items={[
            { label: "DAP Khad 50kg", qty: "10 bag", amount: "₹13,500" },
            { label: "Urea Neem Coated", qty: "20 bag", amount: "₹5,400" },
            { label: "Insecticide 1L", qty: "4 btl", amount: "₹2,800" },
          ]}
          total="₹21,700"
        />
      ),
      after: (
        <div className="space-y-3 font-sans">
          <div className="flex justify-between items-center pb-2 border-b border-line">
            <div>
              <span className="font-bold text-ink text-sm block">Invoice #KK-892</span>
              <span className="text-[11px] text-ink-3">Buyer: Kisan Agro Traders</span>
            </div>
            <span className="px-2 py-0.5 rounded bg-carbon-050 text-carbon text-xs font-semibold">
              Instant Bill
            </span>
          </div>

          <div className="space-y-1 text-xs">
            <div className="flex justify-between py-1 border-b border-line">
              <span>DAP Fertilizer (10 Bags)</span>
              <span className="font-medium tabular-nums">₹13,500</span>
            </div>
            <div className="flex justify-between py-1 border-b border-line">
              <span>Neem Urea (20 Bags)</span>
              <span className="font-medium tabular-nums">₹5,400</span>
            </div>
            <div className="flex justify-between py-1">
              <span>Pesticide 1L (4 Btls)</span>
              <span className="font-medium tabular-nums">₹2,800</span>
            </div>
          </div>

          <div className="p-2 rounded bg-paper border border-line text-xs space-y-1">
            <div className="flex justify-between font-bold text-ink">
              <span>Total Bill:</span>
              <span className="tabular-nums">₹21,700</span>
            </div>
            <div className="text-[10px] text-leaf">
              Godown #1 stock auto-updated · Receipt sent to buyer WhatsApp
            </div>
          </div>
        </div>
      ),
    },
    dance: {
      name: "Dance academy",
      projectSlug: "bachpan-dance-academy",
      projectTitle: "Online class schedule & trial bookings",
      facts: [
        "Replaced hundreds of phone interruptions during rehearsal hours",
        "Clear timetable for Kathak, Folk and Bollywood batches",
        "Direct trial bookings pre-populate on WhatsApp with student age & batch",
      ],
      before: (
        <div className="p-6 bg-[#FAF7EF] border border-[#E2DCBD] rounded-card font-sans text-xs text-ink-2 space-y-3 h-full flex flex-col justify-center">
          <div className="text-center font-bold text-sm text-ink pb-2 border-b border-line">
            PAMPHLET / NOTICE BOARD
          </div>
          <p>Parents calling during live rehearsals asking: "Batch kitne baje hai?"</p>
          <p>Trial class requests written on sticky notes and lost.</p>
          <p>Fees payments chased on paper register.</p>
        </div>
      ),
      after: (
        <div className="space-y-3 font-sans">
          <div className="flex justify-between items-center pb-2 border-b border-line">
            <div>
              <span className="font-bold text-ink text-sm block">Bachpan Dance Academy</span>
              <span className="text-[11px] text-ink-3">Kathak & Performing Arts</span>
            </div>
            <span className="px-2 py-0.5 rounded bg-[#E6F4EA] text-leaf text-xs font-semibold">
              Live Website
            </span>
          </div>

          <div className="space-y-1.5 text-xs">
            <div className="p-2 rounded bg-paper border border-line">
              <span className="font-semibold text-ink block">Kathak Beginner (Ages 6-12)</span>
              <span className="text-ink-3 text-[10px]">Tue & Thu, 5:00 PM · ₹1,800/mo</span>
            </div>
            <div className="p-2 rounded bg-paper border border-line">
              <span className="font-semibold text-ink block">Semi-Classical (Teens & Adults)</span>
              <span className="text-ink-3 text-[10px]">Sat & Sun, 11:00 AM · ₹2,200/mo</span>
            </div>
          </div>

          <div className="p-2 rounded-lg bg-whatsapp/20 border border-whatsapp/40 text-ink text-xs text-center font-semibold">
            Book Free Trial on WhatsApp →
          </div>
        </div>
      ),
    },
  };

  const current = tabContent[activeTab];

  return (
    <Section variant="surface">
      <SectionHeading
        h2="Software that replaced the register"
        lead="See how real Indian businesses switched from notebooks, carbon-copy parchis, and guesswork to custom software."
      />

      {/* Tab Selector */}
      <div className="flex flex-wrap items-center gap-2 mb-8 border-b border-line pb-4">
        {(Object.keys(tabContent) as TabId[]).map((tabKey) => (
          <button
            key={tabKey}
            onClick={() => {
              setActiveTab(tabKey);
              setSliderPos(50);
            }}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
              activeTab === tabKey
                ? "bg-carbon text-paper shadow-sm"
                : "bg-paper text-ink-2 hover:text-ink hover:bg-surface"
            }`}
          >
            {tabContent[tabKey].name}
          </button>
        ))}
      </div>

      {/* Interactive Before/After Stage */}
      <div className="bg-paper border border-line rounded-stage p-6 md:p-10 mb-8">
        
        {/* Mobile View Toggle */}
        <div className="flex sm:hidden justify-center mb-6">
          <div className="inline-flex p-1 rounded-full bg-surface border border-line text-xs font-semibold">
            <button
              onClick={() => setMobileView("before")}
              className={`px-4 py-1.5 rounded-full transition-colors ${
                mobileView === "before" ? "bg-ink text-paper" : "text-ink-2"
              }`}
            >
              On paper (Before)
            </button>
            <button
              onClick={() => setMobileView("after")}
              className={`px-4 py-1.5 rounded-full transition-colors ${
                mobileView === "after" ? "bg-carbon text-paper" : "text-ink-2"
              }`}
            >
              With the app (After)
            </button>
          </div>
        </div>

        {/* Desktop Split Stage with Range Slider */}
        <div className="relative min-h-[420px] hidden sm:grid grid-cols-2 gap-8 items-center">
          {/* Left: Before */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-semibold text-ink-3 uppercase tracking-wider mb-2">
              <span>On Paper (Before)</span>
              <span className="text-ledger-red font-mono">Manual</span>
            </div>
            <div className="h-[360px] flex items-center justify-center">
              {current.before}
            </div>
          </div>

          {/* Right: After */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-semibold text-ink-3 uppercase tracking-wider mb-2">
              <span>With Custom App (After)</span>
              <span className="text-leaf font-mono">Automated</span>
            </div>
            <div className="h-[360px] flex items-center justify-center">
              <PhoneFrame>{current.after}</PhoneFrame>
            </div>
          </div>
        </div>

        {/* Mobile Single View Display */}
        <div className="sm:hidden min-h-[360px] flex items-center justify-center">
          {mobileView === "before" ? (
            <div className="w-full">{current.before}</div>
          ) : (
            <PhoneFrame>{current.after}</PhoneFrame>
          )}
        </div>

        {/* Facts and Proof Points below the stage */}
        <div className="mt-8 pt-6 border-t border-line grid grid-cols-1 md:grid-cols-3 gap-4">
          {current.facts.map((fact, idx) => (
            <div key={idx} className="flex items-start gap-2.5 text-xs text-ink-2">
              <Check className="w-4 h-4 text-leaf flex-shrink-0 mt-0.5" />
              <span>{fact}</span>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ink-3">
          <span>Recreated with sample data.</span>
          <Link
            href={`/work/${current.projectSlug}`}
            className="text-carbon font-semibold hover:underline inline-flex items-center gap-1"
          >
            <span>See full project details</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>

      {/* Featured Project Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
        {projects
          .filter((p) => p.featured && p.group === "client")
          .slice(0, 3)
          .map((project) => (
            <Link
              key={project.slug}
              href={`/work/${project.slug}`}
              className="group block p-6 bg-surface border border-line rounded-card hover:border-line-strong hover:shadow-floating transition-all duration-200"
            >
              <div className="flex justify-between items-start text-xs text-ink-3 mb-3">
                <span className="font-semibold uppercase tracking-wider text-carbon">
                  {project.services.join(", ")}
                </span>
                <span>{project.place || "India"}</span>
              </div>
              <h3 className="font-display font-bold text-xl text-ink group-hover:text-carbon transition-colors leading-snug mb-2 font-stretch-h3">
                {project.title}
              </h3>
              <p className="text-xs text-ink-2 line-clamp-2 leading-relaxed mb-4">
                {project.problem}
              </p>
              <div className="text-xs font-semibold text-carbon inline-flex items-center gap-1">
                <span>View case study</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
      </div>

      <div className="text-center pt-10">
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-base font-semibold text-carbon hover:text-carbon-600 transition-colors"
        >
          <span>See all projects and client work</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </Section>
  );
}
