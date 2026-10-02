import React from "react";

export type ProjectStatus = "Live" | "In daily use" | "Pilot" | "Prototype" | "Earlier role";

interface StatusBadgeProps {
  status?: ProjectStatus;
  className?: string;
}

export function StatusBadge({ status, className = "" }: StatusBadgeProps) {
  if (!status) return null;

  const styles: Record<ProjectStatus, string> = {
    Live: "bg-[#E6F4EA] text-leaf border-[#CEEAD6]",
    "In daily use": "bg-[#E6F4EA] text-leaf border-[#CEEAD6]",
    Pilot: "bg-carbon-050 text-carbon border-[#DCD9F5]",
    Prototype: "bg-[#FEF7E0] text-[#B06000] border-[#FEEFC3]",
    "Earlier role": "bg-[#F1F3F4] text-ink-2 border-line",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium border ${
        styles[status] || styles["Earlier role"]
      } ${className}`}
    >
      <span
        className={`w-1.5 h-1.5 rounded-full ${
          status === "Live" || status === "In daily use"
            ? "bg-leaf"
            : status === "Pilot"
            ? "bg-carbon"
            : status === "Prototype"
            ? "bg-[#B06000]"
            : "bg-ink-3"
        }`}
      />
      <span>{status}</span>
    </span>
  );
}

interface ChipProps {
  children: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
  className?: string;
}

export function Chip({
  children,
  active = false,
  onClick,
  className = "",
}: ChipProps) {
  const Component = onClick ? "button" : "span";

  return (
    <Component
      onClick={onClick}
      className={`inline-flex items-center px-3.5 py-1.5 rounded-full text-sm font-medium transition-colors ${
        active
          ? "bg-carbon text-paper border border-carbon"
          : "bg-surface text-ink-2 border border-line hover:border-line-strong hover:text-ink"
      } ${onClick ? "cursor-pointer" : ""} ${className}`}
    >
      {children}
    </Component>
  );
}
