"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

interface MagneticCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function MagneticCard({ children, className = "" }: MagneticCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current!.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    
    // Reduced the multiplier for a subtler, more professional effect
    setPosition({ x: middleX * 0.05, y: middleY * 0.05 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.5 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
