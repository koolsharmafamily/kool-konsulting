import React from "react";
import Link from "next/link";
import { site } from "@/data/site";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export const metadata = {
  title: "Enquiry Received | Kool Konsulting",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ThanksPage() {
  const waUrl = getWhatsAppUrl("Hi Kulvir, I just submitted an enquiry on your website.");

  return (
    <div className="min-h-screen bg-paper text-ink flex items-center justify-center px-4 py-16">
      <div className="max-w-xl w-full bg-surface border border-line rounded-[28px] p-8 md:p-12 shadow-sm space-y-8">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-carbon-050 text-carbon text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-leaf"></span>
            Enquiry Received
          </div>
          <h1 className="text-3xl md:text-4xl font-display font-bold text-ink leading-tight">
            Thank you. We have your details.
          </h1>
          <p className="text-ink-2 text-base md:text-lg">
            Kulvir Sharma will review your requirements and reply personally on WhatsApp or by email within one working day.
          </p>
        </div>

        <div className="border-t border-line pt-6 space-y-4">
          <h2 className="text-sm font-semibold text-ink uppercase tracking-wider">
            What happens next
          </h2>
          <ol className="space-y-4 text-sm text-ink-2">
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-carbon-050 text-carbon flex items-center justify-center font-bold text-xs">
                1
              </span>
              <span>
                <strong className="text-ink font-medium">Review:</strong> Kulvir looks at how your business currently operates and maps out what to fix first.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-carbon-050 text-carbon flex items-center justify-center font-bold text-xs">
                2
              </span>
              <span>
                <strong className="text-ink font-medium">Free check-up call:</strong> A 30-minute discussion by phone or Google Meet to verify the scope and answer questions.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-carbon-050 text-carbon flex items-center justify-center font-bold text-xs">
                3
              </span>
              <span>
                <strong className="text-ink font-medium">Fixed quote:</strong> You get a clear, written proposal with fixed milestone pricing.
              </span>
            </li>
          </ol>
        </div>

        <div className="border-t border-line pt-6 flex flex-col sm:flex-row items-center gap-4">
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-whatsapp text-ink font-semibold rounded-xl text-sm hover:opacity-95 transition-opacity"
          >
            <span>Message Kulvir on WhatsApp</span>
          </a>
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 border border-line text-ink-2 font-medium rounded-xl text-sm hover:text-ink hover:border-line-strong transition-colors"
          >
            Return to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
