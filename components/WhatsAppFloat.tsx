"use client";

import React, { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function WhatsAppFloat() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Show after scrolling down slightly
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.8 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-3"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                className="hidden sm:block bg-obsidian-light text-slate-300 text-xs px-3 py-2 rounded-lg border border-white/10 shadow-lg whitespace-nowrap"
              >
                Chat directly with Kulvir
              </motion.div>
            )}
          </AnimatePresence>

          <a
            href="https://wa.me/918888821351?text=Hi%20Kulvir,%20I'm%20looking%20to%20optimize%20my%20business%20operations."
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center w-14 h-14 bg-emerald-500 text-white rounded-full shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] transition-all hover:scale-105"
            aria-label="Chat on WhatsApp"
          >
            {/* Ping effect behind the button */}
            <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-30 animate-ping group-hover:hidden" />
            <MessageCircle className="w-6 h-6 fill-current relative z-10" />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
