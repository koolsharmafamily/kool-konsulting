"use client";

import React from "react";
import { MessageSquare, Phone, MapPin, Search, Bot, Database, BarChart3, LineChart } from "lucide-react";

const INTEGRATIONS = [
  { name: "WhatsApp Business API", icon: MessageSquare },
  { name: "Tally Prime ERP", icon: Database },
  { name: "Google Business Profiles", icon: Search },
  { name: "Make.com Workflows", icon: Bot },
  { name: "Google & Meta Ads", icon: BarChart3 },
  { name: "Financial Forecasting", icon: LineChart },
];

export default function IntegrationTicker() {
  return (
    <div className="w-full bg-obsidian-light border-y border-white/5 py-10 overflow-hidden relative">
      {/* Fade edges */}
      <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-obsidian to-transparent z-10" />
      <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-obsidian to-transparent z-10" />
      
      <div className="flex w-full overflow-hidden">
        <div className="flex animate-ticker whitespace-nowrap">
          {/* We duplicate the array 4 times to ensure seamless infinite scroll */}
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex gap-16 px-8 items-center">
              {INTEGRATIONS.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="flex items-center gap-3 text-slate-500 hover:text-slate-300 transition-colors grayscale hover:grayscale-0">
                    <Icon className="w-6 h-6" />
                    <span className="font-heading font-medium text-lg tracking-tight">
                      {item.name}
                    </span>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
