"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Sparkles, CheckCircle2, MessageSquare, ArrowRight } from "lucide-react";

export default function ContactForm() {
  const searchParams = useSearchParams();
  const prefilledBottleneck = searchParams.get("bottleneck") || "";
  const prefilledService = searchParams.get("service") || "";
  const prefilledCaseStudy = searchParams.get("caseStudy") || "";

  const [name, setName] = useState("");
  const [serviceNeeded, setServiceNeeded] = useState("AI & Workflow Automation");
  const [businessType, setBusinessType] = useState("Manufacturing / MIDC Industrial");
  const [bottleneck, setBottleneck] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (prefilledBottleneck) {
      setBottleneck(prefilledBottleneck);
    } else if (prefilledService) {
      setServiceNeeded(prefilledService);
      setBottleneck(`Inquiry regarding: ${prefilledService}`);
    } else if (prefilledCaseStudy) {
      setBottleneck(`Referencing case study: ${prefilledCaseStudy}`);
    }
  }, [prefilledBottleneck, prefilledService, prefilledCaseStudy]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 500);
  };

  const serviceOptions = [
    "AI & Workflow Automation (WhatsApp bots, Tally sync)",
    "Digital Marketing & Google Maps 3-Pack Ranking",
    "Business Plans & Financial Modelling (Bank/Investor)",
    "Custom Software & Multi-Godown Portals",
    "General Consultation / Multiple Needs",
  ];

  const businessTypes = [
    "Manufacturing / MIDC Industrial (Hingna / Butibori)",
    "FMCG / Wholesale Trading (Wardhaman Nagar / Sitabuldi)",
    "Real Estate / Civil Construction & Infrastructure",
    "Healthcare / Diagnostic Clinic / Hospital",
    "Retail Showroom / Hospitality / Restaurant",
    "Professional Services / Other",
  ];

  if (submitted) {
    return (
      <div className="rounded-3xl bg-[#141416] border border-purple-500/40 p-8 sm:p-10 shadow-2xl text-center space-y-6">
        <div className="w-14 h-14 rounded-2xl bg-purple-950/60 border border-purple-500/30 flex items-center justify-center text-purple-400 mx-auto">
          <CheckCircle2 className="w-7 h-7" />
        </div>

        <div className="space-y-2">
          <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white">
            Thank you, {name || "Friend"}!
          </h3>
          <p className="text-sm text-zinc-300 max-w-md mx-auto leading-relaxed">
            Kulvir Sharma has received your details. He will review your operational requirements and message you directly on WhatsApp at <strong className="text-white font-mono">{phone}</strong> within 2 hours.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={`https://wa.me/918888821351?text=Hi%20Kulvir,%20I%20just%20submitted%20the%20form%20for%20${encodeURIComponent(
              name || "my business"
            )}%20(${encodeURIComponent(serviceNeeded)}).%20Notes:%20${encodeURIComponent(
              bottleneck || "Free consultation"
            )}.`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-heading font-bold text-sm text-white bg-emerald-600 hover:bg-emerald-500 transition-colors flex items-center justify-center gap-2"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Chat with Kulvir on WhatsApp Now</span>
          </a>

          <button
            onClick={() => setSubmitted(false)}
            className="w-full sm:w-auto px-5 py-3.5 rounded-xl font-mono text-xs text-zinc-400 hover:text-white bg-zinc-900 border border-zinc-800"
          >
            Submit Another Inquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl bg-[#141416] border border-zinc-800 p-6 sm:p-8 shadow-2xl space-y-5"
    >
      <div className="border-b border-zinc-800 pb-4">
        <h2 className="font-heading font-bold text-xl text-white">
          Direct Project Inquiry
        </h2>
        <p className="text-xs text-zinc-400 mt-1">
          Simple 4-question intake. Zero marketing spam.
        </p>
      </div>

      {/* Field 1: Name */}
      <div className="space-y-1.5">
        <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-zinc-300">
          1. Your Name & Business Name <span className="text-purple-400">*</span>
        </label>
        <input
          id="name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="e.g. Anand Agrawal, Vidarbha Agro"
          className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-700/80 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 text-white text-sm placeholder:text-zinc-600 outline-none transition-all"
        />
      </div>

      {/* Field 2: Service Needed */}
      <div className="space-y-1.5">
        <label htmlFor="serviceNeeded" className="block text-xs font-mono uppercase tracking-wider text-zinc-300">
          2. What Service Are You Most Interested In? <span className="text-purple-400">*</span>
        </label>
        <select
          id="serviceNeeded"
          value={serviceNeeded}
          onChange={(e) => setServiceNeeded(e.target.value)}
          className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-700/80 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 text-white text-sm outline-none transition-all cursor-pointer"
        >
          {serviceOptions.map((opt, idx) => (
            <option key={idx} value={opt} className="bg-zinc-900 text-white">
              {opt}
            </option>
          ))}
        </select>
      </div>

      {/* Field 3: Business Sector */}
      <div className="space-y-1.5">
        <label htmlFor="businessType" className="block text-xs font-mono uppercase tracking-wider text-zinc-300">
          3. Your Industry / Business Type <span className="text-purple-400">*</span>
        </label>
        <select
          id="businessType"
          value={businessType}
          onChange={(e) => setBusinessType(e.target.value)}
          className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-700/80 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 text-white text-sm outline-none transition-all cursor-pointer"
        >
          {businessTypes.map((type, idx) => (
            <option key={idx} value={type} className="bg-zinc-900 text-white">
              {type}
            </option>
          ))}
        </select>
      </div>

      {/* Field 4: Biggest Bottleneck */}
      <div className="space-y-1.5">
        <label htmlFor="bottleneck" className="block text-xs font-mono uppercase tracking-wider text-zinc-300">
          4. What Is Slowing Down Your Operations or Growth? <span className="text-purple-400">*</span>
        </label>
        <textarea
          id="bottleneck"
          required
          rows={3}
          value={bottleneck}
          onChange={(e) => setBottleneck(e.target.value)}
          placeholder="e.g. Retyping WhatsApp orders into Tally takes 3 hours a day, or we need more local customer calls from Google Maps."
          className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-700/80 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 text-white text-sm placeholder:text-zinc-600 outline-none transition-all resize-none"
        />
      </div>

      {/* Field 5: Phone */}
      <div className="space-y-1.5">
        <label htmlFor="phone" className="block text-xs font-mono uppercase tracking-wider text-zinc-300">
          5. WhatsApp Number <span className="text-purple-400">*</span>
        </label>
        <input
          id="phone"
          type="tel"
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="e.g. +91 98230 XXXXX"
          className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-700/80 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 text-white text-sm placeholder:text-zinc-600 outline-none transition-all font-mono"
        />
      </div>

      {/* Submit Button */}
      <div className="pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-4 rounded-xl font-heading font-bold text-sm text-white bg-purple-600 hover:bg-purple-500 transition-colors shadow-lg shadow-purple-950/40 flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
        >
          <Sparkles className="w-4 h-4 text-purple-200" />
          <span>{isSubmitting ? "Submitting..." : "Get Free Action Plan & Quote"}</span>
          <ArrowRight className="w-4 h-4 text-purple-200" />
        </button>
      </div>

      <div className="text-center">
        <p className="text-[11px] font-mono text-zinc-500">
          Direct response guaranteed from Kulvir Sharma within 2 hours.
        </p>
      </div>
    </form>
  );
}
