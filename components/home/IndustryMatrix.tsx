import React from "react";
import { Section, SectionHeading } from "@/components/ui/Section";

interface IndustryRow {
  industry: string;
  problem: string;
  builds: string[];
}

const industries: IndustryRow[] = [
  {
    industry: "Traders and distributors",
    problem: "Taking orders on WhatsApp, chasing customer balances on phone calls, and stock numbers in Excel never matching the godown.",
    builds: ["WhatsApp order capture", "Payment follow-up automation", "Multi-godown stock app"],
  },
  {
    industry: "Manufacturers",
    problem: "Daily production counts and dispatch schedules tracked on paper registers and shouted over phone calls across the factory floor.",
    builds: ["Production and dispatch tracker", "Dealer ordering portal", "Daily 8 PM owner report on WhatsApp"],
  },
  {
    industry: "Builders and contractors",
    problem: "Workers' daily attendance kept on handwritten notebooks, petty cash receipts lost, and weekly wage arithmetic taking hours.",
    builds: ["Site attendance and wages app", "Petty cash and material log", "Client lead capture funnel"],
  },
  {
    industry: "Cinemas, restaurants and events",
    problem: "Guessing food prep quantities for interval crowds, updating weekly show schedules by hand, and taking ticket requests over phone.",
    builds: ["Intermission demand forecast app", "Social media auto-posting", "Online ticketing and sign-ups"],
  },
  {
    industry: "Clinics and diagnostic centres",
    problem: "Front desk overwhelmed with appointment inquiry phone calls, and patients queueing in person just to collect test results.",
    builds: ["Automated WhatsApp appointment booking", "Automated test report delivery", "Visit reminder alerts"],
  },
  {
    industry: "Schools, coaching and academies",
    problem: "Parents constantly interrupting teachers during classes to ask about batch timings, fees, and trial admissions.",
    builds: ["Admission enquiry website", "Automated fee due reminders", "Student attendance check-in"],
  },
  {
    industry: "Shops and showrooms",
    problem: "High street footfall slowing down because local buyers search Google and find nearby competitors with updated profiles.",
    builds: ["Mobile catalogue website", "Google profile setup", "WhatsApp digital product catalogue"],
  },
];

export default function IndustryMatrix() {
  return (
    <Section variant="bg">
      <SectionHeading
        h2="Built for businesses like yours"
        lead="Whether you manage a factory in Hingna, a mandi shop in Kalamna, or a clinic in Ramdaspeth, we build software around how you already run."
      />

      <div className="border border-line rounded-stage bg-surface divide-y divide-line overflow-hidden shadow-sm">
        {industries.map((ind, idx) => (
          <div
            key={idx}
            className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-center hover:bg-bg/40 transition-colors"
          >
            {/* Col 1: Industry title */}
            <div className="md:col-span-4">
              <span className="font-display font-bold text-xl md:text-2xl text-ink block font-stretch-h3">
                {ind.industry}
              </span>
            </div>

            {/* Col 2: The everyday problem */}
            <div className="md:col-span-4 text-sm text-ink-2 leading-relaxed">
              <span className="text-xs font-medium text-ink-3 block mb-1">
                The problem
              </span>
              <p>{ind.problem}</p>
            </div>

            {/* Col 3: Typical builds */}
            <div className="md:col-span-4 space-y-1.5">
              <span className="text-xs font-medium text-ink-3 block mb-1">
                What we build
              </span>
              <div className="flex flex-wrap gap-1.5">
                {ind.builds.map((b, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded bg-bg border border-line text-xs font-medium text-ink"
                  >
                    {b}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
