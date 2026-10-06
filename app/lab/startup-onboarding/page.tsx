import type { Metadata } from "next";
import StartupDemo from "@/components/lab/StartupDemo";
import { LabDetail } from "@/components/lab/LabChrome";

export const metadata: Metadata = {
  title: "Startup Onboarding · Kool Lab",
  description:
    "Change a qualification rule and see a fictional startup enquiry route to discovery, an introduction or human review.",
  alternates: { canonical: "/lab/startup-onboarding" },
};
export default function StartupPage() {
  return (
    <LabDetail
      number="01"
      title="A clear path from hello."
      description="An enquiry should arrive with context and a useful next step. Explore a workflow with rules you can change and decisions you can explain."
      explanation={[
        {
          title: "The experience",
          body: "A fictional company shares its team size and intention. The demo needs no real contact details and never creates an account or sends a message.",
        },
        {
          title: "The connected system",
          body: "A configurable threshold routes the enquiry. Unclear goals or a request for a person can trigger human review; missing permission pauses follow-up.",
        },
        {
          title: "For a real business",
          body: "Qualification criteria, CRM fields, team ownership and follow-up permissions would be agreed before automation. Logs and review paths make the workflow accountable.",
        },
      ]}
    >
      <StartupDemo />
    </LabDetail>
  );
}
