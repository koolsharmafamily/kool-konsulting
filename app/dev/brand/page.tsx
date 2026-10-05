import React from "react";
import type { Metadata } from "next";
import BrandAuditView from "./BrandAuditView";

export const metadata: Metadata = {
  title: "Brand Asset Audit (Checkpoint L) | Kool Konsulting",
  robots: {
    index: false,
    follow: false,
  },
};

export default function BrandDevPage() {
  return <BrandAuditView />;
}
