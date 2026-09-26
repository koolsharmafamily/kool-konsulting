"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    // Simulate API call
    setTimeout(() => {
      setStatus("success");
    }, 1500);
  };

  if (status === "success") {
    return (
      <div className="bg-emerald-950/20 border border-emerald-500/30 rounded-xl p-8 text-center space-y-4">
        <div className="mx-auto w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center">
          <CheckCircle2 className="w-8 h-8 text-emerald-400" />
        </div>
        <h3 className="text-xl font-heading font-bold text-white">Inquiry Received</h3>
        <p className="text-slate-400 text-sm max-w-md mx-auto">
          Thanks for reaching out. Kulvir will review your details and get back to you within 24 hours to schedule the diagnostic call.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-4 px-6 py-2 rounded-lg text-sm font-semibold text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/10 transition-colors"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="block text-sm font-medium text-slate-300">
            Full Name <span className="text-amber-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            required
            className="w-full bg-obsidian border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors placeholder:text-slate-600"
            placeholder="John Doe"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="company" className="block text-sm font-medium text-slate-300">
            Company Name
          </label>
          <input
            type="text"
            id="company"
            className="w-full bg-obsidian border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors placeholder:text-slate-600"
            placeholder="Acme Corp Ltd."
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-medium text-slate-300">
            Email Address <span className="text-amber-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            required
            className="w-full bg-obsidian border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors placeholder:text-slate-600"
            placeholder="john@example.com"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="phone" className="block text-sm font-medium text-slate-300">
            WhatsApp / Phone
          </label>
          <input
            type="tel"
            id="phone"
            className="w-full bg-obsidian border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors placeholder:text-slate-600"
            placeholder="+91 98765 43210"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="interest" className="block text-sm font-medium text-slate-300">
          Primary Interest
        </label>
        <select
          id="interest"
          className="w-full bg-obsidian border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors appearance-none"
          style={{ backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%2364748b' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`, backgroundPosition: 'right 0.5rem center', backgroundRepeat: 'no-repeat', backgroundSize: '1.5em 1.5em' }}
        >
          <option value="automation">AI & Workflow Automation</option>
          <option value="marketing">Local SEO & Marketing</option>
          <option value="strategy">Financial & Business Plans</option>
          <option value="software">Custom Software Development</option>
          <option value="other">General Inquiry / Other</option>
        </select>
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="block text-sm font-medium text-slate-300">
          Briefly describe your current bottleneck <span className="text-amber-500">*</span>
        </label>
        <textarea
          id="message"
          required
          rows={4}
          className="w-full bg-obsidian border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors placeholder:text-slate-600 resize-none"
          placeholder="E.g. We spend 3 hours a day manually copying WhatsApp orders into Tally..."
        />
      </div>

      {status === "error" && (
        <div className="p-4 rounded-lg bg-rose-950/30 border border-rose-500/20 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
          <p className="text-sm text-rose-200">
            Something went wrong submitting the form. Please try again or contact us directly on WhatsApp.
          </p>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full py-4 rounded-lg font-heading font-bold text-obsidian bg-amber-500 hover:bg-amber-400 disabled:opacity-70 disabled:cursor-not-allowed transition-all shadow-[0_0_20px_rgba(245,158,11,0.2)] flex items-center justify-center gap-2"
      >
        {status === "submitting" ? (
          <span className="flex items-center gap-2">
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-obsidian" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Submitting...
          </span>
        ) : (
          <>
            <span>Submit Request</span>
            <Send className="w-4 h-4" />
          </>
        )}
      </button>
    </form>
  );
}
