import React from "react";

interface LedgerPaperProps {
  children: React.ReactNode;
  className?: string;
}

export function LedgerPaper({ children, className = "" }: LedgerPaperProps) {
  return (
    <div
      className={`relative p-6 md:p-8 bg-[#FAF7EF] border border-[#E2DCBD] rounded-card shadow-sm font-handwriting text-[#1C244B] leading-[28px] overflow-hidden select-none ${className}`}
      style={{
        backgroundImage: "linear-gradient(to bottom, transparent 27px, #C8D3EC 27px)",
        backgroundSize: "100% 28px",
      }}
    >
      {/* Red Ledger Margin Lines */}
      <div className="absolute top-0 bottom-0 left-12 w-[1px] bg-bahi/60 pointer-events-none" />
      <div className="absolute top-0 bottom-0 left-14 w-[1px] bg-bahi/60 pointer-events-none" />

      {/* Content */}
      <div className="pl-8 relative z-10 text-base md:text-lg">
        {children}
      </div>
    </div>
  );
}

interface ParchiSlipProps {
  title?: string;
  items: { label: string; qty?: string; rate?: string; amount?: string }[];
  total?: string;
  className?: string;
}

export function ParchiSlip({
  title = "Parchi / Kacchi Receipt",
  items,
  total,
  className = "",
}: ParchiSlipProps) {
  return (
    <div
      className={`relative p-5 bg-[#FFFDF7] border border-[#D9D3BD] rounded-lg shadow-sm font-handwriting text-[#1C244B] max-w-sm mx-auto select-none ${className}`}
      style={{
        backgroundImage: "linear-gradient(to bottom, transparent 25px, #D0DBEE 25px)",
        backgroundSize: "100% 26px",
      }}
    >
      <div className="text-center border-b border-bahi/40 pb-2 mb-2">
        <span className="text-sm font-bold text-bahi font-sans block">
          {title}
        </span>
        <span className="text-xs text-ink-3 font-sans">Sample handwritten register slip</span>
      </div>

      <div className="space-y-1 text-sm md:text-base leading-[26px]">
        {items.map((item, idx) => (
          <div key={idx} className="flex justify-between items-center">
            <span>{item.label} {item.qty ? `(${item.qty})` : ""}</span>
            <span className="font-sans font-medium text-xs">{item.amount}</span>
          </div>
        ))}
      </div>

      {total && (
        <div className="border-t-2 border-ledger-red/50 mt-4 pt-1 flex justify-between font-bold text-base text-ink">
          <span>Kul Jama (Total):</span>
          <span className="font-sans">{total}</span>
        </div>
      )}
    </div>
  );
}
