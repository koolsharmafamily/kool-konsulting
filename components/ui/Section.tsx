import React from "react";

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  variant?: "paper" | "surface" | "carbon-050";
}

export function Section({
  id,
  className = "",
  children,
  variant = "paper",
}: SectionProps) {
  const bgStyles = {
    paper: "bg-paper",
    surface: "bg-surface border-y border-line",
    "carbon-050": "bg-carbon-050 border-y border-[#DCD9F5]",
  };

  return (
    <section
      id={id}
      className={`py-16 md:py-28 ${bgStyles[variant]} ${className}`}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}

interface SectionHeadingProps {
  h2: string;
  lead?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeading({
  h2,
  lead,
  centered = false,
  className = "",
}: SectionHeadingProps) {
  return (
    <div
      className={`mb-10 md:mb-14 ${
        centered ? "text-center max-w-2xl mx-auto" : "max-w-3xl"
      } ${className}`}
    >
      <h2 className="text-3xl md:text-5xl font-display font-bold text-ink tracking-tight leading-[1.08] font-stretch-h2">
        {h2}
      </h2>
      {lead && (
        <p className="mt-3 md:mt-4 text-ink-2 text-lg md:text-xl font-normal leading-relaxed">
          {lead}
        </p>
      )}
    </div>
  );
}
