import Link from "next/link";
import { site } from "@/data/site";
import "../inner.css";
export const metadata = {
  title: "Privacy Notice",
  description:
    "How enquiry information and sample demonstration data are handled on the Kool Konsulting website.",
  alternates: { canonical: "/privacy" },
};
export default function PrivacyPage() {
  return (
    <div className="inner-page">
      <article className="container legal-page">
        <header>
          <span className="eyebrow">Privacy / Website notice</span>
          <h1>
            Your information,
            <br />
            handled with care.
          </h1>
          <p>
            Updated 6 October 2026. This notice describes this website’s enquiry
            and demonstration features.
          </p>
        </header>
        <section>
          <h2>Information you choose to share</h2>
          <p>
            The call-request form asks for your name, work email or preferred
            contact, business or website, project interest and a short
            description. Budget and timing can be optional. Please avoid sending
            sensitive personal information or passwords.
          </p>
        </section>
        <section>
          <h2>How an enquiry is used</h2>
          <p>
            Your details are used to respond to your request, understand the
            proposed project and discuss an appropriate next step. Submitting a
            request does not create a calendar appointment or subscribe you to a
            marketing list.
          </p>
        </section>
        <section>
          <h2>Delivery and external services</h2>
          <p>
            The website’s configured enquiry delivery service processes
            submitted details so they can reach the studio. Depending on the
            deployment settings, this uses transactional email through Resend or
            a configured webhook. Hosting infrastructure may process ordinary
            technical request information, including an IP address, for delivery
            and spam protection.
          </p>
          <p>
            If you open WhatsApp or an external scheduling link, you use that
            provider’s service and privacy terms. A scheduling link is shown
            only when configured.
          </p>
        </section>
        <section>
          <h2>Lab demonstrations and analytics</h2>
          <p>
            Kool Lab uses fictional sample data and deterministic simulations in
            your browser. Completing a demo does not create a reservation,
            payment or message. Do not enter real guest or customer information
            into a sample scenario.
          </p>
          <p>
            No general analytics provider is enabled in this build. Any future
            analytics configuration must be reviewed with appropriate consent
            choices and an updated notice. Enquiry text and contact details
            should not be sent to general analytics events.
          </p>
        </section>
        <section>
          <h2>Questions, corrections or deletion requests</h2>
          <p>
            To ask about information you have shared, request a correction or
            ask for deletion, contact {site.founder.name} at{" "}
            <a href={"tel:" + site.phoneE164}>{site.phoneDisplay}</a>. Identify
            the enquiry and the contact details you used so it can be located.
            Any retention or legal requirement relevant to your request will be
            explained.
          </p>
        </section>
        <section>
          <h2>Keeping this notice accurate</h2>
          <p>
            This notice reflects the website implementation. The studio’s final
            retention schedule and production service configuration must be
            confirmed before launch; this page does not claim a legal
            certification.
          </p>
        </section>
        <Link href="/contact" className="text-link">
          Contact the studio <span aria-hidden="true">↗</span>
        </Link>
      </article>
    </div>
  );
}
