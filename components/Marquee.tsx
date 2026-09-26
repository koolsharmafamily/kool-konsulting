"use client";

import React from "react";

interface MarqueeProps {
  text: string;
}

export default function Marquee({ text }: MarqueeProps) {
  return (
    <div className="w-full bg-white border-b border-white/15 py-4 overflow-hidden relative text-black">
      <div className="flex w-full overflow-hidden">
        <div className="flex animate-ticker whitespace-nowrap">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex gap-4 px-2 items-center">
              <span className="font-mono font-bold text-sm tracking-tight uppercase">
                {text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
