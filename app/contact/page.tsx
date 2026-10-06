import Link from "next/link";
import { ArrowDown, ArrowUpRight, MessageCircle, Plus } from "lucide-react";
import ContactForm from "@/components/contact/ContactForm";
import { contact, contactWhatsApp, getBookingSettings } from "@/data/contact";
import { JsonLd } from "@/components/seo/JsonLd";
import { getBreadcrumbSchema } from "@/lib/schema";
import "@/app/contact.css";

export const metadata = {
  title: "Book a call",
  description:
    "Discuss your next website, app or AI workflow with Kulvir Sharma, founder of Kool Konsulting in Nagpur.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage({
  searchParams,
}: {
  searchParams: Record<string, string | string[] | undefined>;
}) {
  const settings = getBookingSettings();
  const param = (key: string) =>
    typeof searchParams[key] === "string"
      ? (searchParams[key] as string).slice(0, 500)
      : "";
  const demoNames: Record<string, string> = {
    hospitality: "Hospitality concierge concept",
    lifestyle: "Lifestyle discovery concept",
    startup: "Startup onboarding concept",
  };
  const demo = param("demo");
  const context = [
    param("context") || param("from") || param("source"),
    demoNames[demo] || demo,
    param("project"),
    param("notes") || param("size"),
  ]
    .filter(Boolean)
    .join(" · ")
    .slice(0, 500);

  return (
    <div className="contact-page">
      <JsonLd
        data={getBreadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Book a call", url: "/contact" },
        ])}
      />
      <section className="container contact-intro">
        <p className="eyebrow">A conversation is a good beginning</p>
        <div className="contact-heading-row">
          <h1>
            What comes
            <br />
            next<span>?</span>
          </h1>
          <div className="contact-intro-note">
            <p>
              A beautiful experience. A smarter way of working. Let’s find the
              right place to start.
            </p>
            <a
              href={settings.bookingUrl ? "#choose-a-time" : "#request-a-call"}
              className="contact-jump"
              aria-label={
                settings.bookingUrl
                  ? "Go to scheduling"
                  : "Go to call request form"
              }
            >
              <ArrowDown size={22} />
            </a>
          </div>
        </div>
      </section>

      <section
        className="container contact-layout"
        aria-label="Arrange a conversation"
      >
        <aside className="contact-aside">
          <div className="contact-founder-block">
            <div className="contact-monogram" aria-hidden="true">
              KS
              <span>
                <Plus size={18} />
              </span>
            </div>
            <p className="contact-founder-name">Kulvir Sharma</p>
            <p className="contact-small">
              Founder, Kool Konsulting · {contact.location}
            </p>
          </div>
          <h2>
            Let’s talk about
            <br />
            your next move.
          </h2>
          <p>
            Tell me what you’re building or what could work better. We’ll
            discuss the opportunity, explore a useful first scope and see if
            we’re a good fit.
          </p>
          <div className="contact-call-agenda">
            <p>
              <span>01</span>Your business and the opportunity
            </p>
            <p>
              <span>02</span>The experience or workflow to improve
            </p>
            <p>
              <span>03</span>A practical next step
            </p>
          </div>
          <p className="contact-small">
            No presentation needed. A rough idea is enough.
          </p>
          <div className="contact-direct">
            <p className="contact-small">Prefer a direct conversation?</p>
            <a
              href={contactWhatsApp(
                context
                  ? `Hi Kulvir, I'd like to discuss ${context}.`
                  : undefined,
              )}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={18} />
              <span>
                WhatsApp Kulvir<small>{contact.phoneDisplay}</small>
              </span>
              <ArrowUpRight size={18} />
            </a>
            {settings.email && (
              <a className="contact-email" href={`mailto:${settings.email}`}>
                {settings.email}
                <ArrowUpRight size={16} />
              </a>
            )}
          </div>
        </aside>

        <div className="contact-main">
          {settings.bookingUrl && (
            <div id="choose-a-time" className="contact-scheduler">
              <p className="eyebrow">Find a time together</p>
              <h2>Book a call.</h2>
              <p>
                View available times in the booking calendar. The studio’s
                timezone is {settings.timezoneLabel} ({settings.timezone});
                check the timezone shown beside your selected slot.
              </p>
              <a
                className="button button-primary"
                href={settings.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Open booking calendar <ArrowUpRight size={18} />
              </a>
              <p className="contact-small">
                Your appointment is booked only when the scheduling provider
                confirms it. Use the provider’s confirmation to reschedule or
                cancel, or contact Kulvir on WhatsApp.
              </p>
            </div>
          )}
          <div id="request-a-call" className="contact-form-heading">
            <p className="eyebrow">
              {settings.bookingUrl
                ? "Or leave a little context"
                : "Start the conversation"}
            </p>
            <h2>Request a call.</h2>
            <p>
              {settings.bookingUrl
                ? "Prefer to introduce the project first? Share a few details below."
                : "Share a few details. Kulvir can follow up using your preferred contact to arrange a time."}{" "}
              This sends a request; it does not reserve a calendar slot.
            </p>
          </div>
          <ContactForm initialService={param("service")} context={context} />
        </div>
      </section>
      <div className="container contact-bottom-note">
        <span>A considered beginning. A useful next step.</span>
        <Link href="/pricing" className="text-link">
          Explore indicative investment <ArrowUpRight size={16} />
        </Link>
      </div>
    </div>
  );
}
