"use client";

import React from "react";
import { motion } from "framer-motion";

interface MagneticCardProps {
  children: React.ReactNode;
  className?: string;
  glowOnHover?: boolean;
}

export default function MagneticCard({
  children,
  className = "",
  glowOnHover = true,
}: MagneticCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -6,
        transition: { duration: 0.25, ease: "easeOut" },
      }}
      className={`group relative rounded-2xl bg-[#18181B] border border-white/[0.08] transition-colors duration-300 ${
        glowOnHover
          ? "hover:border-cyber-purple/60 hover:shadow-[0_0_30px_-5px_rgba(157,0,255,0.35)]"
          : ""
      } ${className}`}
    >
      {/* Subtle top inner highlight */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-t-2xl pointer-events-none" />
      {children}
    </motion.div>
  );
}
