import React from "react";

export interface WorkingNodeProps {
  size?: number | string;
  className?: string;
}

/**
 * Site-wide working indicator: the rotating signal node.
 * Replaces generic spinners across forms and loading states.
 */
export function WorkingNode({ size = 16, className = "" }: WorkingNodeProps) {
  return (
    <span
      className={`inline-flex items-center justify-center animate-spin ${className}`}
      style={{ width: size, height: size }}
      role="status"
      aria-label="Processing..."
    >
      <svg
        viewBox="0 0 100 100"
        width={size}
        height={size}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="35"
          y="35"
          width="30"
          height="30"
          transform="rotate(45 50 50)"
          fill="var(--kk-signal, #22C3EE)"
        />
      </svg>
    </span>
  );
}

export default WorkingNode;
