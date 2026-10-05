import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Credentials | Kool Konsulting",
  robots: {
    index: false,
    follow: false,
  },
};

export default function CredentialsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
