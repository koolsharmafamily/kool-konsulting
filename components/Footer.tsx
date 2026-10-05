import React from "react";
import Link from "next/link";
import Logo from "@/components/ui/Logo";
import { site } from "@/data/site";
import { servicesData } from "@/data/services";
import { getWhatsAppUrl, getPhoneUrl } from "@/lib/whatsapp";

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-line pt-16 pb-24 md:pb-16 text-ink">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-line">
          {/* Col 1: Brand & One-liner */}
          <div className="md:col-span-4 space-y-4">
            <Logo />
            <p className="text-ink-2 text-base leading-relaxed max-w-sm">
              {site.oneLiner}
            </p>
            <div className="pt-2">
              <span className="inline-block text-xs text-ink-3">
                Founder-led practice. Kulvir Sharma takes every first call.
              </span>
            </div>
          </div>

          {/* Col 2: Services */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-semibold text-ink block">
              Services
            </span>
            <ul className="space-y-2.5 text-sm text-ink-2">
              {Object.values(servicesData).map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="hover:text-kk-indigo transition-colors"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
              <li className="pt-1">
                <Link
                  href="/services"
                  className="text-kk-indigo hover:underline text-xs font-medium"
                >
                  All services overview
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Company */}
          <div className="md:col-span-2 space-y-3">
            <span className="text-xs font-semibold text-ink block">
              Company
            </span>
            <ul className="space-y-2.5 text-sm text-ink-2">
              <li>
                <Link href="/work" className="hover:text-kk-indigo transition-colors">
                  Work & Proof
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-kk-indigo transition-colors">
                  Pricing & Care
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-kk-indigo transition-colors">
                  About Kulvir
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-kk-indigo transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/credentials" className="hover:text-kk-indigo transition-colors">
                  Credentials Sheet
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Hours */}
          <div className="md:col-span-3 space-y-3 text-sm text-ink-2">
            <span className="text-xs font-semibold text-ink block">
              Contact & Hours
            </span>
            <div className="space-y-2">
              <p>
                <strong className="text-ink font-medium">WhatsApp:</strong>{" "}
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-kk-indigo hover:underline"
                >
                  {site.phoneDisplay}
                </a>
              </p>
              <p>
                <strong className="text-ink font-medium">Phone:</strong>{" "}
                <a href={getPhoneUrl()} className="hover:text-kk-indigo">
                  {site.phoneDisplay}
                </a>
              </p>
              {site.emailLive && (
                <p>
                  <strong className="text-ink font-medium">Email:</strong>{" "}
                  <a href={`mailto:${site.email}`} className="text-kk-indigo hover:underline">
                    {site.email}
                  </a>
                </p>
              )}
              <p>
                <strong className="text-ink font-medium">Hours:</strong> {site.hours}
              </p>
              <p className="text-xs text-ink-3">
                Based in Nagpur, working with businesses across India.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ink-3">
          <p>© 2026 Kool Konsulting. Designed and built in Nagpur.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-ink transition-colors">
              Privacy Notice (DPDP)
            </Link>
            <Link href="/terms" className="hover:text-ink transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
