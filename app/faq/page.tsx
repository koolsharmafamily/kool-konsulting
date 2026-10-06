import Link from "next/link";
import { brandFaqs } from "@/data/brand-content";
import "../inner.css";
export const metadata = {
  title: "Questions & Answers",
  description:
    "Practical answers about scope, timing, ownership, integrations and support at Kool Konsulting.",
  alternates: { canonical: "/faq" },
};
export default function FaqPage() {
  return (
    <div className="inner-page">
      <section className="container inner-intro">
        <span className="eyebrow">A few useful answers</span>
        <h1>
          Good questions.
          <br />
          <em>Clear beginnings.</em>
        </h1>
        <p>What to expect when we work together.</p>
      </section>
      <section className="container inner-section faq-list">
        {brandFaqs.map((f) => (
          <details key={f.q}>
            <summary>
              {f.q}
              <span aria-hidden="true">+</span>
            </summary>
            <p>{f.a}</p>
          </details>
        ))}
      </section>
      <section className="inner-close">
        <div className="container">
          <h2>
            Let’s talk about
            <br />
            your particular question.
          </h2>
          <Link href="/contact?source=faq" className="button button-primary">
            Book a call <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
