import Link from "next/link";
import type { ReactNode } from "react";
import "@/app/lab.css";

export function DemoLabel() {
  return (
    <span className="lab-label">
      <span aria-hidden="true" />
      Concept demo · Sample data
    </span>
  );
}
export function DemoFooter({ context }: { context: string }) {
  return (
    <div className="lab-demo-footer">
      <p>A local simulation. No messages, transactions or external AI calls.</p>
      <Link
        href={`/contact?context=${encodeURIComponent(context)}`}
        className="text-link"
      >
        Discuss a similar project <span aria-hidden="true">↗</span>
      </Link>
    </div>
  );
}
export function DemoHeading({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="lab-demo-heading">
      <div>
        <span className="eyebrow">Experiment {number}</span>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <DemoLabel />
    </div>
  );
}
export function LabDetail({
  number,
  title,
  description,
  children,
  explanation,
}: {
  number: string;
  title: string;
  description: string;
  children: ReactNode;
  explanation: { title: string; body: string }[];
}) {
  return (
    <>
      <section className="container page-intro lab-page-intro">
        <Link href="/lab" className="lab-back">
          ← All experiments
        </Link>
        <div className="lab-intro-meta">
          <span className="eyebrow">Kool Lab / {number}</span>
          <DemoLabel />
        </div>
        <h1>{title}</h1>
        <p>{description}</p>
      </section>
      <section
        className="container lab-detail-demo"
        aria-label="Interactive concept demonstration"
      >
        {children}
      </section>
      <section
        className="container lab-explanation"
        aria-label="About this experiment"
      >
        {explanation.map((item, i) => (
          <div key={item.title}>
            <span className="eyebrow">0{i + 1}</span>
            <h2>{item.title}</h2>
            <p>{item.body}</p>
          </div>
        ))}
      </section>
      <section className="container lab-closing">
        <p className="eyebrow">From concept to your business</p>
        <h2>
          What could work
          <br />
          better for you?
        </h2>
        <Link
          className="button button-primary"
          href={`/contact?context=${encodeURIComponent(title)}`}
        >
          Book a call <span aria-hidden="true">↗</span>
        </Link>
      </section>
    </>
  );
}
