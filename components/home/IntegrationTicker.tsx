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
    <div className="w-full bg-black border-b border-white/15 py-8 overflow-hidden relative">
      <div className="flex w-full overflow-hidden">
        <div className="flex animate-ticker whitespace-nowrap">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex gap-16 px-8 items-center">
              {INTEGRATIONS.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="flex items-center gap-3 text-neutral-600 grayscale">
                    <Icon className="w-5 h-5" />
                    <span className="font-mono font-medium text-sm tracking-tight uppercase">
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
