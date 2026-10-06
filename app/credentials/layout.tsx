import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Studio Information",
  description:
    "Contact Kool Konsulting for background relevant to your project.",
  robots: { index: false, follow: false },
};
export default function CredentialsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
