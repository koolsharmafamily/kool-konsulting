import React from "react";
import { Section, SectionHeading } from "@/components/ui/Section";

const comparisonRows = [
  {
    criterion: "Who you deal with",
    kool: "Kulvir, from first call to after launch",
    agency: "A sales contact, then a project team",
    freelance: "One person; availability varies",
    offTheShelf: "A customer support desk",
  },
  {
    criterion: "Built around your process",
    kool: "Yes, mapped with your team first",
    agency: "Varies, often an existing template",
    freelance: "Varies depending on experience",
    offTheShelf: "No, you adjust your business to the software",
  },
  {
    criterion: "Price transparency",
    kool: "Fixed written quote, paid in milestones",
    agency: "Quote plus ongoing change requests",
    freelance: "Low upfront, but scope can drift",
    offTheShelf: "Lowest upfront, but monthly per-seat rent forever",
  },
  {
    criterion: "Who owns code, data and accounts",
    kool: "You do, 100% in your name",
    agency: "Check contract (often vendor locked)",
    freelance: "Check handover documentation",
    offTheShelf: "Locked to the vendor's platform",
  },
  {
    criterion: "After launch support",
    kool: "Care plan or clean handover",
    agency: "Expensive annual maintenance contract",
    freelance: "Depends on their next freelance gig",
    offTheShelf: "Subject to vendor's product roadmap",
  },
  {
    criterion: "Understands your numbers",
    kool: "Finance background; starts from margins and cash flow",
    agency: "Rarely the focus",
    freelance: "Not usually the focus",
    offTheShelf: "Built for a generic national average",
  },
];

export default function ComparisonSection() {
  return (
    <Section id="why" variant="bg">
      <SectionHeading
        h2="Why owners choose Kool Konsulting"
        lead="How our founder-led approach compares to typical alternatives in India."
      />

      {/* Responsive Table Container */}
      <div className="border border-line rounded-stage bg-surface overflow-x-auto shadow-sm">
        <table className="w-full text-left border-collapse min-w-[720px] text-sm">
          <thead>
            <tr className="border-b border-line bg-bg/60">
              <th scope="col" className="p-4 md:p-5 sticky left-0 bg-surface z-10 w-1/4">
                <span className="sr-only">Evaluation Criteria</span>
              </th>
              <th scope="col" className="p-4 md:p-5 font-display font-bold text-kk-indigo text-base md:text-lg bg-kk-indigo-050/40 w-1/4">
                Kool Konsulting
              </th>
              <th scope="col" className="p-4 md:p-5 font-medium text-ink-2 text-xs md:text-sm w-1/6">
                Typical IT Agency
              </th>
              <th scope="col" className="p-4 md:p-5 font-medium text-ink-2 text-xs md:text-sm w-1/6">
                Freelancer
              </th>
              <th scope="col" className="p-4 md:p-5 font-medium text-ink-2 text-xs md:text-sm w-1/6">
                Ready-made SaaS
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-line">
            {comparisonRows.map((row, idx) => (
              <tr key={idx} className="hover:bg-bg/40 transition-colors">
                <th scope="row" className="p-4 md:p-5 font-semibold text-ink sticky left-0 bg-surface z-10 border-r border-line text-xs md:text-sm text-left font-sans">
                  {row.criterion}
                </th>
                <td className="p-4 md:p-5 font-semibold text-ink bg-kk-indigo-050/20 border-r border-line text-xs md:text-sm">
                  {row.kool}
                </td>
                <td className="p-4 md:p-5 text-ink-2 text-xs md:text-sm">
                  {row.agency}
                </td>
                <td className="p-4 md:p-5 text-ink-2 text-xs md:text-sm">
                  {row.freelance}
                </td>
                <td className="p-4 md:p-5 text-ink-2 text-xs md:text-sm">
                  {row.offTheShelf}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-4 text-xs text-ink-3 text-center">
        Ready-made software is the right answer for many standard needs. We'll tell you when it is.
      </p>
    </Section>
  );
}
