import Link from "next/link";
import { cookies } from "next/headers";
import { ArrowUpRight, Check } from "lucide-react";
import { contactWhatsApp } from "@/data/contact";
import "@/app/contact.css";

export const metadata = {
  title: "Your call request",
  robots: { index: false, follow: false },
};

export default function ThanksPage() {
  const receipt = cookies().get("kk-call-request")?.value || "";
  const received =
    /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(
      receipt,
    );
  return (
    <div className="contact-page">
      <section className="contact-thanks">
        {received && (
          <span className="contact-received-icon" aria-hidden="true">
            <Check size={26} />
          </span>
        )}
        <p className="eyebrow">
          {received ? "Call request received" : "Let’s start a conversation"}
        </p>
        <h1>
          {received ? "A good place to start." : "Your next move starts here."}
        </h1>
        <p>
          {received
            ? "Thank you. Your recent call request has been received for Kulvir to review. He can follow up using the contact details you provided to discuss the project and arrange a time."
            : "To discuss a website, an app or a more useful business workflow, tell Kulvir a little about your project."}
        </p>
        <p className="contact-thanks-note">
          {received
            ? "No appointment has been booked yet. A time still needs to be agreed with you."
            : "This page does not confirm a submission or a calendar appointment."}
        </p>
        <div className="contact-thanks-actions">
          <Link
            href={received ? "/lab" : "/contact"}
            className="button button-primary"
          >
            {received ? "Explore the Lab" : "Book a call"}
            <ArrowUpRight size={18} />
          </Link>
          <a
            href={contactWhatsApp(
              received
                ? "Hi Kulvir, I recently sent a call request through your website."
                : undefined,
            )}
            className="button button-secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp Kulvir <ArrowUpRight size={18} />
          </a>
        </div>
      </section>
    </div>
  );
}
