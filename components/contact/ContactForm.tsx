"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Check, Send } from "lucide-react";
import { contactWhatsApp } from "@/data/contact";
import {
  budgetOptions,
  Enquiry,
  EnquiryErrors,
  enquiryWhatsAppText,
  normaliseInterest,
  projectInterests,
  timingOptions,
  validateEnquiry,
} from "./enquiry";

export default function ContactForm({
  initialService = "",
  context = "",
}: {
  initialService?: string;
  context?: string;
}) {
  const [values, setValues] = useState<Enquiry>({
    name: "",
    contact: "",
    business: "",
    service: normaliseInterest(initialService),
    description: "",
    budget: "Not sure yet",
    timing: "Not sure yet",
    context,
  });
  const [renderTime, setRenderTime] = useState(0);
  const [sending, setSending] = useState(false);
  const [received, setReceived] = useState(false);
  const [errors, setErrors] = useState<EnquiryErrors>({});
  const [deliveryError, setDeliveryError] = useState("");
  const formRef = useRef<HTMLFormElement>(null);
  const resultRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setRenderTime(Date.now());
  }, []);
  useEffect(() => {
    if (received || deliveryError) resultRef.current?.focus();
  }, [received, deliveryError]);

  function update(field: keyof Enquiry, value: string) {
    setValues((previous) => ({ ...previous, [field]: value }));
    if (errors[field])
      setErrors((previous) => ({ ...previous, [field]: undefined }));
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (sending) return;
    setDeliveryError("");
    const checked = validateEnquiry(values);
    setErrors(checked.errors);
    const firstError = Object.keys(checked.errors)[0];
    if (firstError) {
      formRef.current
        ?.querySelector<HTMLElement>(`[name="${firstError}"]`)
        ?.focus();
      return;
    }
    setSending(true);
    const formData = new FormData(event.currentTarget);
    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...checked.values,
          "render-time": renderTime,
          "company-website": formData.get("company-website"),
        }),
        signal: AbortSignal.timeout(25000),
      });
      const data = await response.json();
      if (response.ok && data.ok && data.status === "received") {
        setReceived(true);
      } else {
        if (data.errors) setErrors(data.errors);
        setDeliveryError(
          data.error ||
            "Your request could not be delivered. Please try again or continue on WhatsApp.",
        );
      }
    } catch {
      setDeliveryError(
        "We could not confirm delivery. Your details are still here. Please try again or continue on WhatsApp.",
      );
    } finally {
      setSending(false);
    }
  }

  const fieldProps = (field: keyof Enquiry) => ({
    id: `enquiry-${field}`,
    name: field,
    value: values[field],
    onChange: (
      event: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >,
    ) => update(field, event.target.value),
    "aria-invalid": Boolean(errors[field]),
    "aria-describedby": errors[field] ? `error-${field}` : undefined,
  });
  const error = (field: keyof Enquiry) =>
    errors[field] && (
      <span className="contact-field-error" id={`error-${field}`} role="alert">
        {errors[field]}
      </span>
    );

  if (received)
    return (
      <div
        className="contact-received"
        ref={resultRef}
        tabIndex={-1}
        role="status"
      >
        <span className="contact-received-icon">
          <Check size={26} />
        </span>
        <p className="eyebrow">Call request received</p>
        <h3>A good place to start.</h3>
        <p>
          Thank you, {values.name.split(" ")[0]}. Your request has been received
          for Kulvir to review. He can follow up at{" "}
          <strong>{values.contact}</strong> to discuss the next step.
        </p>
        <p className="contact-received-note">
          No appointment has been booked yet. A time still needs to be agreed
          with you.
        </p>
        <Link className="button button-secondary" href="/lab">
          Explore the Lab <ArrowUpRight size={18} />
        </Link>
      </div>
    );

  return (
    <form
      ref={formRef}
      className="contact-form"
      action="/api/enquiry"
      method="POST"
      onSubmit={submit}
      noValidate
      aria-busy={sending}
    >
      <input type="hidden" name="render-time" value={renderTime} />
      <input type="hidden" name="context" value={context} />
      <div className="contact-honeypot" aria-hidden="true">
        <label htmlFor="company-website">Leave this field empty</label>
        <input
          id="company-website"
          name="company-website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>
      {context && (
        <p className="contact-context">
          <span>Coming from</span>
          {context}
        </p>
      )}
      {deliveryError && (
        <div
          className="contact-delivery-error"
          role="alert"
          tabIndex={-1}
          ref={resultRef}
        >
          <strong>Request not confirmed</strong>
          <p>{deliveryError}</p>
          <a
            href={contactWhatsApp(enquiryWhatsAppText(values))}
            target="_blank"
            rel="noopener noreferrer"
          >
            Continue with these details on WhatsApp <ArrowUpRight size={16} />
          </a>
          <small>You’ll review and send the message yourself.</small>
        </div>
      )}
      <div className="contact-fields-row">
        <div className="contact-field">
          <label htmlFor="enquiry-name">
            Your name <span aria-hidden="true">*</span>
          </label>
          <input
            {...fieldProps("name")}
            required
            autoComplete="name"
            maxLength={100}
            placeholder="First and last name"
          />
          {error("name")}
        </div>
        <div className="contact-field">
          <label htmlFor="enquiry-contact">
            Email or phone <span aria-hidden="true">*</span>
          </label>
          <input
            {...fieldProps("contact")}
            required
            autoComplete="email"
            maxLength={254}
            placeholder="How should Kulvir reach you?"
          />
          {error("contact")}
        </div>
      </div>
      <div className="contact-field">
        <label htmlFor="enquiry-business">
          Business or website <span aria-hidden="true">*</span>
        </label>
        <input
          {...fieldProps("business")}
          required
          autoComplete="organization"
          maxLength={200}
          placeholder="Your brand, company or next idea"
        />
        {error("business")}
      </div>
      <fieldset className="contact-interest">
        <legend>What do you have in mind?</legend>
        <div className="contact-interest-options">
          {projectInterests.map((interest) => (
            <label key={interest}>
              <input
                type="radio"
                name="service"
                value={interest}
                checked={values.service === interest}
                onChange={() => update("service", interest)}
              />
              <span>{interest}</span>
            </label>
          ))}
        </div>
        {error("service")}
      </fieldset>
      <div className="contact-field">
        <label htmlFor="enquiry-description">
          A little about the project <span aria-hidden="true">*</span>
        </label>
        <textarea
          {...fieldProps("description")}
          rows={4}
          required
          minLength={10}
          maxLength={3000}
          placeholder="What would you like to build, improve or make possible?"
        />
        {error("description")}
      </div>
      <div className="contact-fields-row">
        <div className="contact-field">
          <label htmlFor="enquiry-budget">
            Budget <span>(optional)</span>
          </label>
          <select {...fieldProps("budget")}>
            {budgetOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
          {error("budget")}
        </div>
        <div className="contact-field">
          <label htmlFor="enquiry-timing">
            Timing <span>(optional)</span>
          </label>
          <select {...fieldProps("timing")}>
            {timingOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
          {error("timing")}
        </div>
      </div>
      <p className="contact-form-privacy">
        We use your details to respond and discuss your project. Please avoid
        sending passwords or sensitive information.{" "}
        <Link href="/privacy">Privacy notice</Link>.
      </p>
      <button
        type="submit"
        className="button button-primary contact-submit"
        disabled={sending}
      >
        {sending ? "Sending your request…" : "Send call request"}
        <Send size={17} aria-hidden="true" />
      </button>
      <p className="contact-form-footnote">
        <span aria-hidden="true">*</span> Required fields. A request starts a
        conversation; it does not book a slot.
      </p>
      <noscript>
        <p className="contact-small">
          This form also works without JavaScript. You will leave this page to
          see the delivery result.
        </p>
      </noscript>
    </form>
  );
}
