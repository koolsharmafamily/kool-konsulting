import Link from "next/link";
import { processSteps } from "@/data/brand-content";
import { site } from "@/data/site";
import "../inner.css";
export const metadata = {
  title: "Studio",
  description:
    "Meet Kulvir Sharma, founder of Kool Konsulting, an independent technology studio based in Nagpur, India.",
  alternates: { canonical: "/about" },
};
export default function StudioPage() {
  return (
    <div className="inner-page">
      <section className="container inner-intro">
        <span className="eyebrow">The studio / Nagpur, India</span>
        <h1>
          Thoughtfully small.
          <br />
          <em>Ambitiously useful.</em>
        </h1>
        <p>
          Kool Konsulting is a founder-led technology studio. We create
          beautiful digital experiences and intelligent operations for startups,
          luxury brands and smart SMEs.
        </p>
      </section>
      <section className="container founder-spread">
        <div
          className="founder-type"
          aria-label="Kulvir Sharma, Founder, Kool Konsulting"
        >
          <span className="eyebrow">An independent point of view.</span>
          <div className="founder-initials" aria-hidden="true">
            KS<span>↗</span>
          </div>
          <div className="founder-caption">
            <strong>{site.founder.name}</strong>
            <span>Founder / Nagpur</span>
          </div>
        </div>
        <div className="founder-copy">
          <span className="eyebrow">The person behind the work</span>
          <h2>
            One conversation.
            <br />A connected view.
          </h2>
          <p>
            I’m Kulvir, founder of Kool Konsulting. The studio brings experience
            design and operational thinking into the same conversation.
          </p>
          <p>
            A website is part of a customer’s journey. An app is part of
            someone’s working day. An automation needs to fit the people relying
            on it. The interesting work is making those connections feel
            natural.
          </p>
          <p>
            You work directly with me to shape the opportunity, make decisions
            and understand what we are building.
          </p>
          <Link href="/contact?source=studio" className="text-link">
            Let’s talk about your next move <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
      <section className="inner-dark">
        <div className="container">
          <span className="eyebrow">How we work</span>
          <h2 className="inner-large-heading">
            From a good question
            <br />
            to something that works.
          </h2>
          <div className="process-grid">
            {processSteps.map((step) => (
              <article key={step.number}>
                <span className="inner-number">{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="container inner-section inner-split">
        <div>
          <span className="eyebrow">What matters here</span>
          <h2>
            Care is in
            <br />
            the decisions.
          </h2>
        </div>
        <div className="detail-list">
          <article>
            <h3>Understand before adding</h3>
            <p>
              A smaller, well-defined first release can be more useful than a
              long list of features. We work towards the change that matters to
              your business.
            </p>
          </article>
          <article>
            <h3>Make the work visible</h3>
            <p>
              Regular demonstrations make progress tangible. You can see the
              experience, test the workflow and contribute before decisions
              become expensive to change.
            </p>
          </article>
          <article>
            <h3>Leave a clear handover</h3>
            <p>
              Documentation, responsibilities and access are part of the
              conversation from the start. Support is shaped around what the
              system actually needs.
            </p>
          </article>
        </div>
      </section>
      <section className="inner-close">
        <div className="container">
          <span className="eyebrow">Take a closer look.</span>
          <h2>Curiosity, made practical.</h2>
          <div className="inner-actions">
            <Link href="/lab" className="button button-primary">
              Explore the demos <span aria-hidden="true">↗</span>
            </Link>
            <Link href="/work" className="text-link">
              Browse project records <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
