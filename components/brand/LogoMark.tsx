import React from "react";

export interface LogoMarkProps {
  size?: number | string;
  tone?: "indigo" | "light" | "mono";
  animated?: boolean;
  className?: string;
}

/**
 * Locked Kool Konsulting Logo Mark ("Facing K's with a signal node")
 * Exact SVG geometry per v3.1 specification.
 */
export function LogoMark({
  size = 24,
  tone = "indigo",
  animated = false,
  className = "",
}: LogoMarkProps) {
  const strokeClass =
    tone === "indigo"
      ? "text-kk-indigo"
      : tone === "light"
      ? "text-[#F6F7FB]"
      : "text-current";

  const nodeFill =
    tone === "mono" ? "currentColor" : "var(--kk-signal, #22C3EE)";

  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Kool Konsulting"
      className={`shrink-0 overflow-visible ${strokeClass} ${
        animated ? "kk-animate" : ""
      } ${className}`}
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth="11"
        strokeLinejoin="miter"
        strokeMiterlimit="10"
      >
        {/* The two K stems: butt caps, spanning x: 13.5-24.5 and 75.5-86.5 */}
        <path
          className="kk-stem"
          d="M19 12V88M81 12V88"
          strokeLinecap="butt"
        />
        {/* The shared arms forming the diamond: mitred tips at x=24 & x=76 stay inside stems */}
        <path
          className="kk-diamond"
          d="M24 50L50 24L76 50L50 76Z"
          strokeLinecap="butt"
        />
      </g>
      {/* Centred square signal node rotated 45 deg */}
      <rect
        className="kk-node"
        x="43"
        y="43"
        width="14"
        height="14"
        transform="rotate(45 50 50)"
        fill={nodeFill}
      />
    </svg>
  );
}

export default LogoMark;
