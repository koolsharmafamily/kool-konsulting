import React from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { MessageSquare } from "lucide-react";

export default function NotFound() {
  const waUrl = getWhatsAppUrl("Hi Kulvir, I hit a missing link on your website.");

  return (
    <div className="min-h-[70vh] bg-paper flex items-center justify-center px-4 py-20 text-center">
      <div className="max-w-md mx-auto space-y-6">
        <span className="text-xs font-semibold uppercase tracking-wider text-ledger-red bg-[#FDF2F2] px-3 py-1 rounded-full border border-ledger-red/30">
          404 Not Found
        </span>
        <h1 className="text-3xl md:text-5xl font-display font-bold text-ink tracking-tight font-stretch-h1">
          This page isn't here.
        </h1>
        <p className="text-ink-2 text-base leading-relaxed">
          It may have moved when we rebuilt the site. Here are the core sections:
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto px-5 py-3 rounded-btn bg-ink text-paper font-semibold text-sm hover:bg-[#2B2934] transition-colors"
          >
            Home
          </Link>
          <Link
            href="/services"
            className="w-full sm:w-auto px-5 py-3 rounded-btn bg-surface border border-line text-ink font-semibold text-sm hover:border-line-strong transition-colors"
          >
            Services
          </Link>
          <Link
            href="/work"
            className="w-full sm:w-auto px-5 py-3 rounded-btn bg-surface border border-line text-ink font-semibold text-sm hover:border-line-strong transition-colors"
          >
            Work
          </Link>
        </div>

        <div className="pt-6 border-t border-line">
          <Button
            variant="whatsapp"
            href={waUrl}
            icon={<MessageSquare className="w-4 h-4" />}
            className="text-xs"
          >
            Message Kulvir on WhatsApp
          </Button>
        </div>
      </div>
    </div>
  );
}
