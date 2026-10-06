import type { Metadata } from "next";
import LifestyleDemo from "@/components/lab/LifestyleDemo";
import { LabDetail } from "@/components/lab/LabChrome";

export const metadata: Metadata = {
  title: "Lifestyle Discovery · Kool Lab",
  description:
    "Discover a fictional collection, change your preferences and follow a product enquiry into a sample client record.",
  alternates: { canonical: "/lab/lifestyle-discovery" },
};
export default function LifestylePage() {
  return (
    <LabDetail
      number="02"
      title="Discovery, made personal."
      description="A considered recommendation is only the beginning. See how preferences, product details and an enquiry become a useful conversation."
      explanation={[
        {
          title: "The experience",
          body: "Choose an occasion and palette to explore an original fictional collection. Recommendations explain their reasoning and change with your preferences.",
        },
        {
          title: "The connected system",
          body: "Product availability, selected quantity and the recommendation are kept separate. The sample client record carries the exact enquiry into a human conversation.",
        },
        {
          title: "For a real business",
          body: "Approved product photography, live inventory and your client relationship system would replace the sample data. Privacy choices would shape what the record keeps.",
        },
      ]}
    >
      <LifestyleDemo />
    </LabDetail>
  );
}
