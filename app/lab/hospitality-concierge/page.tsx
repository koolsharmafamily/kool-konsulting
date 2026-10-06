import type { Metadata } from "next";
import HospitalityDemo from "@/components/lab/HospitalityDemo";
import { LabDetail } from "@/components/lab/LabChrome";

export const metadata: Metadata = {
  title: "Hospitality Concierge · Kool Lab",
  description:
    "Try a fictional dining concierge. Choose a date, find an alternative and see how a guest request becomes a thoughtful staff handoff.",
  alternates: { canonical: "/lab/hospitality-concierge" },
};
export default function HospitalityPage() {
  return (
    <LabDetail
      number="03"
      title="Hospitality, with a little more care."
      description="A dinner enquiry is the beginning of a guest experience. Explore how thoughtful details can reach the people who make it happen."
      explanation={[
        {
          title: "The experience",
          body: "A guest selects a date, party size, time and preference. An unavailable slot leads to a clear alternative, chosen explicitly by the guest.",
        },
        {
          title: "The connected system",
          body: "A bounded venue guide answers known questions. Everything outside its knowledge goes to a person, alongside the original request.",
        },
        {
          title: "For a real business",
          body: "Your reservation provider, approved venue information, staff permissions and confirmation policy would define the integration. Availability would come from a real source.",
        },
      ]}
    >
      <HospitalityDemo />
    </LabDetail>
  );
}
