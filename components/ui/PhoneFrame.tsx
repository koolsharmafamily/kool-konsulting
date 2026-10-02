"use client";

import React, { useRef, useState } from "react";

interface PhoneFrameProps {
  children: React.ReactNode;
  className?: string;
  enableTilt?: boolean;
}

export function PhoneFrame({
  children,
  className = "",
  enableTilt = true,
}: PhoneFrameProps) {
  const frameRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!enableTilt || !frameRef.current) return;
    const rect = frameRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const rotX = -(y / (rect.height / 2)) * 4;
    const rotY = (x / (rect.width / 2)) * 4;
    setTilt({ x: rotX, y: rotY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div
      ref={frameRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative mx-auto transition-transform duration-200 ease-out select-none ${className}`}
      style={{
        perspective: "1000px",
        transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
      }}
    >
      {/* Phone Body */}
      <div className="relative w-full max-w-[320px] aspect-[9/19.5] rounded-[40px] bg-ink p-[8px] shadow-floating border border-line-strong">
        {/* Inner Screen */}
        <div className="w-full h-full rounded-[32px] bg-surface overflow-hidden flex flex-col relative text-ink">
          {/* Subtle Speaker Bar */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-1 rounded-full bg-ink/20 z-20 pointer-events-none" />
          {/* Content Area */}
          <div className="flex-1 overflow-y-auto overflow-x-hidden pt-4 pb-3 px-3 text-sm">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
