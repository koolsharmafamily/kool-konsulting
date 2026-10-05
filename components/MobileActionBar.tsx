"use client";

import React, { useState, useEffect } from "react";
import { site } from "@/data/site";
import { getWhatsAppUrl, getPhoneUrl } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/brand/WhatsAppIcon";
import { Phone } from "lucide-react";

export default function MobileActionBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Appear after 500px of scrolling (hero scrolled off screen)
      const scrolledPastHero = window.scrollY > 450;
      // Hide near the bottom where the footer CTA is
      const nearBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 300;
      setVisible(scrolledPastHero && !nearBottom);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 p-3 bg-surface/90 backdrop-blur-md border-t border-line md:hidden pb-[max(0.75rem,env(safe-area-inset-bottom))] transition-all duration-200">
      <div className="grid grid-cols-2 gap-3 max-w-md mx-auto">
        <a
          href={getWhatsAppUrl("Hi Kulvir, I'm reaching out from your website.")}
          target="_blank"
          rel="noopener noreferrer"
          className="h-14 rounded-btn bg-whatsapp text-ink font-semibold flex items-center justify-center gap-2 text-base shadow-sm active:opacity-90 active:translate-y-[1px]"
        >
          <WhatsAppIcon className="w-5 h-5 flex-shrink-0 text-ink" />
          <span>WhatsApp</span>
        </a>

        <a
          href={getPhoneUrl()}
          className="h-14 rounded-btn bg-surface border border-line text-ink font-semibold flex items-center justify-center gap-2 text-base shadow-sm active:bg-bg active:translate-y-[1px]"
        >
          <Phone className="w-5 h-5 flex-shrink-0 text-ink" />
          <span>Call</span>
        </a>
      </div>
    </div>
  );
}
