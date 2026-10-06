import Link from "next/link";
import {
  commercialStatus,
  investmentRanges,
  serviceFamilies,
} from "@/data/brand-content";
import "../inner.css";
export const metadata = {
  title: "Investment",
  description:
    "Indicative, scoped project ranges for automation, websites and apps, with clear boundaries around ongoing care and third-party costs.",
  alternates: { canonical: "/pricing" },
};
export default function InvestmentPage() {
  return (
    <div className="inner-page">
      <section className="container inner-intro">
        <span className="eyebrow">
          Investment / A considered starting point
        </span>
        <h1>
          Big on possibility.
          <br />
          <em>Clear on scope.</em>
        </h1>
        <p>
          Every good project starts with shared expectations. These indicative
          ranges help us find a useful first scope together.
        </p>
        <p className="inner-note">{commercialStatus.notice}</p>
      </section>
      <section
        className="container price-groups"
        aria-label="Indicative project investment"
      >
        {serviceFamilies.map((family) => (
          <div className="price-group" key={family.slug}>
            <div>
              <span className="inner-number">{family.number}</span>
              <h2>{family.name}</h2>
              <Link href={"/services/" + family.slug} className="text-link">
                Explore the expertise <span aria-hidden="true">↗</span>
              </Link>
            </div>
            <div>
              {investmentRanges
                .filter((p) => p.family === family.slug)
                .map((p) => (
                  <article className="investment-row" key={p.id}>
                    <h3>{p.name}</h3>
                    <strong>{p.range}</strong>
                    <p>{p.scope}</p>
                  </article>
                ))}
            </div>
          </div>
        ))}
      </section>
      <section className="inner-dark">
        <div className="container">
          <div className="inner-split">
            <div>
              <span className="eyebrow">
                After launch / Optional ongoing care
              </span>
              <h2>
                Keep things
                <br />
                working beautifully.
              </h2>
            </div>
            <div>
              <p>
                A care plan is a separate engagement with defined hours,
                responsibilities and response arrangements. The right level
                depends on the system and the team using it.
              </p>
            </div>
          </div>
          <div className="care-grid">
            {investmentRanges
              .filter((p) => p.family === "care")
              .map((p) => (
                <article key={p.id}>
                  <h3>{p.name}</h3>
                  <strong>{p.range}</strong>
                  <p>{p.scope}</p>
                </article>
              ))}
          </div>
        </div>
      </section>
      <section className="container inner-section inner-split">
        <div>
          <span className="eyebrow">The details matter</span>
          <h2>
            A proposal with
            <br />
            everything in view.
          </h2>
        </div>
        <div className="detail-list">
          <article>
            <h3>One clear build scope</h3>
            <p>
              Deliverables, milestones, review rounds, responsibilities and
              acceptance criteria are agreed in writing. These are alternative
              engagement sizes; the higher tiers are not compulsory add-ons.
            </p>
          </article>
          <article>
            <h3>Separate external costs</h3>
            <p>
              Third-party subscriptions and usage, hosting, content production,
              optional support and any applicable taxes are identified
              separately in your proposal. Tax treatment is confirmed for the
              engagement.
            </p>
          </article>
          <article>
            <h3>Specialist work, specifically scoped</h3>
            <p>
              Original 3D production, photography, video, brand identity,
              content migration and bespoke integrations need their own agreed
              scope. Complex platforms and substantial native apps require a
              tailored proposal.
            </p>
          </article>
          <article>
            <h3>Timelines and handover</h3>
            <p>
              Delivery dates, payments, ownership, third-party licences and
              post-launch responsibilities are agreed before work starts.
            </p>
          </article>
        </div>
      </section>
      <section className="inner-close">
        <div className="container">
          <span className="eyebrow">Let’s find a useful first scope.</span>
          <h2>
            What would move
            <br />
            your business forward?
          </h2>
          <Link
            href="/contact?source=investment"
            className="button button-primary"
          >
            Book a call <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
