import React from "react";

interface MarqueeProps {
  text?: string;
  className?: string;
}

export default function Marquee({
  text = "WE BUILD IT. WE DEPLOY IT. YOU KEEP THE CODE. • NO CORPORATE BS. JUST WORKING SYSTEMS. • AUTOMATE MIDC. • AUTOMATE WARDHAMAN NAGAR. • ",
  className = "",
}: MarqueeProps) {
  // Repeating items to create an uninterrupted infinite loop
  const items = Array(6).fill(text);

  return (
    <div
      className={`relative w-full overflow-hidden bg-[#18181B] border-y border-white/[0.08] py-4 select-none ${className}`}
    >
      {/* Side gradient fade masks */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#09090B] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#09090B] to-transparent z-10 pointer-events-none" />

      {/* Scrolling container: left-to-right animation */}
      <div className="flex w-max animate-marquee-left">
        {items.map((str, idx) => (
          <span
            key={idx}
            className="font-heading font-extrabold text-sm sm:text-base tracking-widest text-zinc-300 uppercase flex items-center pr-6"
          >
            <span className="text-cyber-purple font-mono mr-2">⚡</span>
            <span>{str}</span>
          </span>
        ))}
        {/* Duplicate set for seamless continuous scroll */}
        {items.map((str, idx) => (
          <span
            key={`dup-${idx}`}
            aria-hidden="true"
            className="font-heading font-extrabold text-sm sm:text-base tracking-widest text-zinc-300 uppercase flex items-center pr-6"
          >
            <span className="text-cyber-purple font-mono mr-2">⚡</span>
            <span>{str}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
