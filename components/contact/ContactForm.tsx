"use client";

import React, { useState, useEffect } from "react";
import { MessageSquare, ArrowRight } from "lucide-react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [serviceNeeded, setServiceNeeded] = useState(
    "AI & Workflow Automation (WhatsApp bots, Tally sync)"
  );
  const [businessType, setBusinessType] = useState(
    "Manufacturing / MIDC Industrial (Hingna / Butibori)"
  );
  const [bottleneck, setBottleneck] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search);
      const prefilledService = urlParams.get("service");
      if (prefilledService) {
        setServiceNeeded(decodeURIComponent(prefilledService));
      }
      const prefilledBottleneck = urlParams.get("bottleneck");
      if (prefilledBottleneck) {
        setBottleneck(decodeURIComponent(prefilledBottleneck));
      }
    }
  }, []);

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
      <div className="border border-white/15 bg-[#050505] p-8 md:p-12 space-y-8 font-mono">
        <div className="flex items-center gap-3 text-terminal-green">
          <div className="w-2 h-2 bg-terminal-green animate-blink"></div>
          <span className="uppercase tracking-widest text-xs font-bold">STATUS: RECEIVED</span>
        </div>

        <div className="space-y-4">
          <h3 className="text-2xl font-sans font-bold text-white">
            Thank you, {name || "Friend"}.
          </h3>
          <p className="text-sm text-neutral-400 leading-relaxed max-w-md">
            Kulvir Sharma has received your details. He will review your operational requirements and message you directly on WhatsApp at <strong className="text-white">{phone}</strong> within 2 hours.
          </p>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center gap-4">
          <a
            href={`https://wa.me/918888821351?text=Hi%20Kulvir,%20I%20just%20submitted%20the%20form%20for%20${encodeURIComponent(
              name || "my business"
            )}%20(${encodeURIComponent(serviceNeeded)}).%20Notes:%20${encodeURIComponent(
              bottleneck || "Free consultation"
            )}.`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-4 bg-terminal-green text-black uppercase tracking-widest text-xs font-bold hover:bg-white transition-colors flex items-center justify-center gap-2"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Chat on WhatsApp Now</span>
          </a>

          <button
            onClick={() => setSubmitted(false)}
            className="w-full sm:w-auto px-6 py-4 border border-white/15 text-neutral-400 uppercase tracking-widest text-xs hover:text-white transition-colors"
          >
            Reset Form
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-8 font-mono"
    >
      <div className="border-b border-white/15 pb-6">
        <h2 className="font-sans font-bold text-2xl text-white">
          Direct Project Inquiry
        </h2>
        <p className="text-xs text-neutral-500 mt-2 uppercase tracking-widest">
          Simple 4-question intake. Zero marketing spam.
        </p>
      </div>

      <div className="space-y-2">
        <label htmlFor="name" className="block text-xs uppercase tracking-widest text-neutral-400">
          1. Your Name & Business Name <span className="text-terminal-green">*</span>
        </label>
        <input
          id="name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="e.g. Anand Agrawal, Vidarbha Agro"
          className="w-full px-4 py-3 bg-[#050505] border border-white/15 focus:border-white focus:outline-none text-white text-sm placeholder:text-neutral-700 transition-colors"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="serviceNeeded" className="block text-xs uppercase tracking-widest text-neutral-400">
          2. What Service Are You Most Interested In? <span className="text-terminal-green">*</span>
        </label>
        <select
          id="serviceNeeded"
          value={serviceNeeded}
          onChange={(e) => setServiceNeeded(e.target.value)}
          className="w-full px-4 py-3 bg-[#050505] border border-white/15 focus:border-white focus:outline-none text-white text-sm transition-colors cursor-pointer appearance-none"
        >
          {serviceOptions.map((opt, idx) => (
            <option key={idx} value={opt} className="bg-black text-white">
              {opt}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-2">
        <label htmlFor="businessType" className="block text-xs uppercase tracking-widest text-neutral-400">
          3. Your Industry / Business Type <span className="text-terminal-green">*</span>
        </label>
        <select
          id="businessType"
          value={businessType}
          onChange={(e) => setBusinessType(e.target.value)}
          className="w-full px-4 py-3 bg-[#050505] border border-white/15 focus:border-white focus:outline-none text-white text-sm transition-colors cursor-pointer appearance-none"
        >
          {businessTypes.map((type, idx) => (
            <option key={idx} value={type} className="bg-black text-white">
              {type}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-2">
        <label htmlFor="bottleneck" className="block text-xs uppercase tracking-widest text-neutral-400">
          4. What Is Slowing Down Your Operations? <span className="text-terminal-green">*</span>
        </label>
        <textarea
          id="bottleneck"
          required
          rows={4}
          value={bottleneck}
          onChange={(e) => setBottleneck(e.target.value)}
          placeholder="e.g. Retyping WhatsApp orders into Tally takes 3 hours a day..."
          className="w-full px-4 py-3 bg-[#050505] border border-white/15 focus:border-white focus:outline-none text-white text-sm placeholder:text-neutral-700 transition-colors resize-none"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="phone" className="block text-xs uppercase tracking-widest text-neutral-400">
          5. WhatsApp Number <span className="text-terminal-green">*</span>
        </label>
        <input
          id="phone"
          type="tel"
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="e.g. +91 98230 XXXXX"
          className="w-full px-4 py-3 bg-[#050505] border border-white/15 focus:border-white focus:outline-none text-white text-sm placeholder:text-neutral-700 transition-colors"
        />
      </div>

      <div className="pt-4 border-t border-white/15">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-4 bg-white text-black hover:bg-neutral-300 font-mono uppercase tracking-widest text-sm font-bold transition-colors flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
        >
          <span>{isSubmitting ? "TRANSMITTING..." : "SUBMIT INQUIRY"}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      <div className="text-center pt-2">
        <p className="text-[10px] font-mono uppercase tracking-widest text-neutral-600">
          Direct response guaranteed from Kulvir Sharma within 2 hours.
        </p>
      </div>
    </form>
  );
}
