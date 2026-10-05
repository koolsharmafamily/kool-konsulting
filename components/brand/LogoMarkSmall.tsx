import React from "react";

export interface LogoMarkSmallProps {
  size?: number | string;
  tone?: "indigo" | "light" | "mono";
  className?: string;
}

/**
 * Small-size variant (for 16 and 32 px sizes / favicons)
 * Stroke width 15, wider stems at x=17 & 83, no node to prevent blurring at small scale.
 */
export function LogoMarkSmall({
  size = 16,
  tone = "indigo",
  className = "",
}: LogoMarkSmallProps) {
  const strokeClass =
    tone === "indigo"
      ? "text-kk-indigo"
      : tone === "light"
      ? "text-[#F6F7FB]"
      : "text-current";

  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Kool Konsulting"
      className={`shrink-0 ${strokeClass} ${className}`}
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth="15"
        strokeLinejoin="miter"
        strokeMiterlimit="10"
      >
        <path d="M17 12V88M83 12V88" strokeLinecap="butt" />
        <path d="M22 50L50 22L78 50L50 78Z" strokeLinecap="butt" />
      </g>
    </svg>
  );
}

export default LogoMarkSmall;
