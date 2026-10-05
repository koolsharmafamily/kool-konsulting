"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/brand/WhatsAppIcon";
import { CheckCircle2, AlertCircle } from "lucide-react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [business, setBusiness] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("Not sure yet");
  const [problem, setProblem] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [renderTime, setRenderTime] = useState<number>(0);

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    setRenderTime(Date.now());

    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const svcParam = params.get("service");
      if (svcParam) {
        setService(decodeURIComponent(svcParam));
      }
      const noteParam = params.get("notes") || params.get("size");
      if (noteParam) {
        setProblem(`Scope: ${decodeURIComponent(noteParam)}`);
      }
    }
  }, []);

  const serviceChips = [
    "Website",
    "App",
    "Business software",
    "Automation",
    "Not sure yet",
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage(null);

    const payload = {
      name,
      business,
      phone,
      service,
      problem,
      city,
      email,
      "render-time": renderTime,
    };

    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (res.ok && data.ok) {
        setSuccessMessage(
          data.message || `Thanks, ${name.split(" ")[0]}. Kulvir will reply on WhatsApp within one working day.`
        );
      } else {
        setErrorMessage(data.error || "Could not dispatch enquiry.");
      }
    } catch {
      setErrorMessage(
        "Network connection failed. Please message Kulvir directly on WhatsApp."
      );
    } finally {
      setLoading(false);
    }
  };

  const waFallbackUrl = getWhatsAppUrl(
    `Hi Kulvir, I tried submitting the enquiry form. Here are my details:\nName: ${name}\nBusiness: ${business}\nPhone: ${phone}\nNeed: ${service}\nNotes: ${problem}`
  );

  if (successMessage) {
    return (
      <div className="p-8 md:p-10 bg-surface rounded-stage border border-line shadow-sm space-y-6 animate-in fade-in">
        <div className="w-12 h-12 rounded-full bg-[#E6F4EA] text-leaf flex items-center justify-center">
          <CheckCircle2 className="w-6 h-6" />
        </div>
        <div className="space-y-2">
          <h2 className="text-2xl font-display font-bold text-ink">
            Enquiry Received
          </h2>
          <p className="text-base text-ink-2 leading-relaxed">
            {successMessage}
          </p>
        </div>
        <div className="pt-2">
          <Button
            variant="whatsapp"
            href={getWhatsAppUrl(`Hi Kulvir, I just submitted an enquiry for ${business}.`)}
          >
            Chat with Kulvir on WhatsApp
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form
      action="/api/enquiry"
      method="POST"
      onSubmit={handleSubmit}
      className="p-6 md:p-10 bg-surface rounded-stage border border-line shadow-sm space-y-6"
    >
      <input type="hidden" name="render-time" value={renderTime} />
      {/* Honeypot field for bot suppression */}
      <div className="hidden" aria-hidden="true">
        <input type="text" name="company-website" tabIndex={-1} autoComplete="off" />
      </div>

      {errorMessage && (
        <div className="p-4 rounded-btn bg-[#FDF2F2] border border-ledger-red/30 text-xs md:text-sm text-ledger-red space-y-2 animate-in fade-in">
          <div className="flex items-start gap-2">
            <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
            <span>{errorMessage}</span>
          </div>
          <div>
            <a
              href={waFallbackUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold underline inline-flex items-center gap-1.5"
            >
              <WhatsAppIcon className="w-4 h-4 text-ledger-red" />
              <span>Click here to send this via WhatsApp instead</span>
            </a>
          </div>
        </div>
      )}

      {/* Row 1: Name and Business */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label htmlFor="name" className="block text-xs font-semibold text-ink">
            Your Name <span className="text-ledger-red">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Anand Agrawal"
            className="w-full px-4 py-3 bg-bg border border-line rounded-btn text-ink text-sm focus:border-kk-indigo focus:bg-surface focus:outline-none transition-colors"
          />
        </div>

        <div className="space-y-1.5">
          <label htmlFor="business" className="block text-xs font-semibold text-ink">
            Business Name <span className="text-ledger-red">*</span>
          </label>
          <input
            id="business"
            name="business"
            type="text"
            required
            value={business}
            onChange={(e) => setBusiness(e.target.value)}
            placeholder="e.g. Vidarbha Agro"
            className="w-full px-4 py-3 bg-bg border border-line rounded-btn text-ink text-sm focus:border-kk-indigo focus:bg-surface focus:outline-none transition-colors"
          />
        </div>
      </div>

      {/* Row 2: Phone/WhatsApp */}
      <div className="space-y-1.5">
        <label htmlFor="phone" className="block text-xs font-semibold text-ink">
          Phone or WhatsApp Number <span className="text-ledger-red">*</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="+91 98230 XXXXX"
          className="w-full px-4 py-3 bg-bg border border-line rounded-btn text-ink text-sm focus:border-kk-indigo focus:bg-surface focus:outline-none transition-colors tabular-nums"
        />
        <span className="text-[11px] text-ink-3">
          Kulvir replies personally on this number. No marketing calls.
        </span>
      </div>

      {/* Row 3: What do you need? Chips */}
      <div className="space-y-2">
        <label className="block text-xs font-semibold text-ink">
          What do you need built?
        </label>
        <input type="hidden" name="service" value={service} />
        <div className="flex flex-wrap gap-2">
          {serviceChips.map((chip) => {
            const isSelected = service.toLowerCase() === chip.toLowerCase();
            return (
              <button
                key={chip}
                type="button"
                onClick={() => setService(chip)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium border transition-colors ${
                  isSelected
                    ? "bg-ink text-white border-ink font-semibold"
                    : "bg-bg text-ink-2 border-line hover:border-line-strong hover:text-ink"
                }`}
              >
                {chip}
              </button>
            );
          })}
        </div>
      </div>

      {/* Row 4: Tell us a little (Textarea) */}
      <div className="space-y-1.5">
        <label htmlFor="problem" className="block text-xs font-semibold text-ink">
          Tell us a little about where your team loses time (Optional)
        </label>
        <textarea
          id="problem"
          name="problem"
          rows={3}
          value={problem}
          onChange={(e) => setProblem(e.target.value)}
          placeholder="e.g. We take orders on WhatsApp and lose track of payments, or site attendance is still kept in notebooks."
          className="w-full px-4 py-3 bg-bg border border-line rounded-btn text-ink text-sm focus:border-kk-indigo focus:bg-surface focus:outline-none transition-colors resize-none"
        />
      </div>

      {/* Row 5: City and Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label htmlFor="city" className="block text-xs font-semibold text-ink">
            City (Optional)
          </label>
          <input
            id="city"
            name="city"
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Nagpur"
            className="w-full px-4 py-3 bg-bg border border-line rounded-btn text-ink text-sm focus:border-kk-indigo focus:bg-surface focus:outline-none transition-colors"
          />
        </div>

        <div className="space-y-1.5">
          <label htmlFor="email" className="block text-xs font-semibold text-ink">
            Email Address (Optional)
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="anand@example.com"
            className="w-full px-4 py-3 bg-bg border border-line rounded-btn text-ink text-sm focus:border-kk-indigo focus:bg-surface focus:outline-none transition-colors"
          />
        </div>
      </div>

      {/* Submit Button & Consent Line */}
      <div className="pt-2 space-y-3">
        <Button
          type="submit"
          variant="primary"
          disabled={loading}
          className="w-full py-4 text-base"
        >
          {loading ? "Sending enquiry..." : "Get a free tech check-up"}
        </Button>

        <p className="text-[11px] text-ink-3 text-center leading-relaxed">
          We'll use these details only to reply to your enquiry. We don't share them.{" "}
          <Link href="/privacy" className="text-kk-indigo hover:underline">
            Read our DPDP privacy notice
          </Link>.
        </p>
      </div>
    </form>
  );
}
