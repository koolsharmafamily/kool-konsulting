"use client";

import React from "react";
import Logo from "@/components/ui/Logo";
import { site } from "@/data/site";
import { servicesData } from "@/data/services";
import { servicePricing } from "@/data/pricing";
import { projects } from "@/data/work";
import { Printer, Check, CheckCircle2 } from "lucide-react";

export default function CredentialsPage() {
  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  const clientProjects = projects.filter((p) => p.group === "client").slice(0, 4);

  return (
    <div className="bg-bg min-h-screen py-10 print:p-0 print:bg-white text-ink">
      
      {/* Top Floating Control Bar */}
      <div className="max-w-[800px] mx-auto mb-6 px-4 flex justify-between items-center print:hidden">
        <span className="text-xs font-semibold text-ink-3">
          1-Page Capability Sheet (A4)
        </span>
        <button
          onClick={handlePrint}
          className="inline-flex items-center gap-2 px-4 py-2 bg-ink text-white rounded-btn text-xs font-semibold shadow hover:bg-kk-indigo transition-colors"
        >
          <Printer className="w-4 h-4" />
          <span>Save as PDF / Print</span>
        </button>
      </div>

      {/* The Printable A4 Sheet */}
      <div className="max-w-[800px] mx-auto bg-white p-8 md:p-12 shadow-md print:shadow-none print:p-6 border border-line print:border-none space-y-6 text-sm">
        
        {/* Header */}
        <div className="flex justify-between items-start border-b-2 border-kk-indigo pb-4">
          <div className="space-y-1">
            <Logo />
            <p className="text-xs text-ink-2 max-w-sm mt-1">
              {site.oneLiner}
            </p>
          </div>
          <div className="text-right text-xs text-ink-3 space-y-0.5">
            <span className="font-bold text-ink block">Nagpur, Maharashtra</span>
            <span>WhatsApp / Phone: {site.phoneDisplay}</span>
            <span>https://kool-konsulting.vercel.app</span>
          </div>
        </div>

        {/* Four Core Services */}
        <div className="space-y-2">
          <span className="text-xs font-bold text-kk-indigo block">
            Core Technical Services
          </span>
          <div className="grid grid-cols-2 gap-3 text-xs">
            {Object.values(servicesData).map((svc) => (
              <div key={svc.slug} className="p-2.5 bg-bg rounded border border-line space-y-1">
                <div className="flex justify-between font-bold text-ink">
                  <span>{svc.name}</span>
                  <span className="text-kk-indigo tabular-nums">From {servicePricing[svc.slug]?.startingPriceDisplay}</span>
                </div>
                <p className="text-ink-2 text-[11px] leading-tight">
                  {svc.lead}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Selected Project Proof */}
        <div className="space-y-2">
          <span className="text-xs font-bold text-kk-indigo block">
            Proven Systems Delivered
          </span>
          <div className="grid grid-cols-2 gap-3 text-xs">
            {clientProjects.map((p) => (
              <div key={p.slug} className="p-2.5 border border-line rounded space-y-1">
                <span className="font-bold text-ink block">{p.title}</span>
                <span className="text-[10px] text-ink-3 block">{p.client} ({p.place || "India"})</span>
                <p className="text-ink-2 text-[11px] leading-snug line-clamp-2">
                  {p.problem}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Founder & How We Work */}
        <div className="grid grid-cols-2 gap-4 border-t border-line pt-4 text-xs">
          <div className="space-y-1.5">
            <span className="font-bold text-kk-indigo text-[11px] block">
              Kulvir Sharma, Founder
            </span>
            <ul className="space-y-1 text-ink-2 text-[11px]">
              {site.founder.credentials.slice(0, 3).map((c, i) => (
                <li key={i} className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-kk-indigo flex-shrink-0 mt-0.5" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-1.5">
            <span className="font-bold text-kk-indigo text-[11px] block">
              Engagement Terms
            </span>
            <ul className="space-y-1 text-ink-2 text-[11px]">
              <li>• Fixed written quotes, milestone payments</li>
              <li>• You own 100% of code, data, and accounts</li>
              <li>• {site.freeFixWindowDays}-day free bug fix window post rollout</li>
              <li>• Direct WhatsApp access to the architect</li>
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t-2 border-line pt-3 flex justify-between items-center text-[10px] text-ink-3">
          <span>Kool Konsulting · Founder-led technical development studio · Nagpur</span>
          <span>Contact: {site.phoneDisplay}</span>
        </div>

      </div>
    </div>
  );
}
