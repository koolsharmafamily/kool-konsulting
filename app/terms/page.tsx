import Link from "next/link";
import "../inner.css";
export const metadata = {
  title: "Terms of Engagement",
  description:
    "An outline of project scoping, indicative investment, third-party costs and handover, subject to a written project agreement.",
  alternates: { canonical: "/terms" },
};
export default function TermsPage() {
  return (
    <div className="inner-page">
      <article className="container legal-page">
        <header>
          <span className="eyebrow">Working together / Engagement outline</span>
          <h1>
            Clear expectations.
            <br />
            From the beginning.
          </h1>
          <p>
            Updated 6 October 2026. This is a provisional outline for discussing
            an engagement. The signed project agreement sets the actual terms.
          </p>
        </header>
        <section>
          <h2>Scope and proposals</h2>
          <p>
            Website ranges and introductory conversations are indicative. A
            project begins under an agreed written scope covering deliverables,
            responsibilities, milestones, acceptance criteria and fees. Changes
            to that scope need a corresponding agreement on cost and timing.
          </p>
        </section>
        <section>
          <h2>Fees and external costs</h2>
          <p>
            Payment milestones and any applicable tax treatment are confirmed in
            the proposal. Hosting, subscriptions, usage-based services, content
            production and ongoing support are identified separately. A
            published starting range is not an offer to include every capability
            listed on a service page.
          </p>
        </section>
        <section>
          <h2>Ownership and licences</h2>
          <p>
            The agreement specifies ownership of custom work, source-code and
            account handover, payment conditions and any retained or third-party
            materials. Open-source software, fonts, imagery and external
            platforms retain their respective licence terms.
          </p>
        </section>
        <section>
          <h2>Reviews and delivery</h2>
          <p>
            Timelines rely on agreed access, content, decisions and reviews.
            Revision rounds, launch criteria and responsibilities are set out in
            scope. Third-party approvals, app-store decisions and platform
            availability remain outside the studio’s direct control.
          </p>
        </section>
        <section>
          <h2>After launch</h2>
          <p>
            Any defect-resolution period, support hours, monitoring and response
            arrangements are agreed in writing. Ongoing care is a separate,
            defined engagement. No unlimited maintenance or round-the-clock
            availability is implied.
          </p>
        </section>
        <section>
          <h2>Demonstrations and bookings</h2>
          <p>
            Kool Lab is illustrative and uses sample data. Demo completions are
            not real transactions. A call request is an enquiry; an appointment
            exists only when confirmed through the actual scheduling process.
          </p>
        </section>
        <section>
          <h2>Before a commitment</h2>
          <p>
            Final commercial terms and any legal provisions are reviewed for the
            actual engagement. Discuss anything important to your project before
            accepting a proposal.
          </p>
        </section>
        <Link href="/contact?source=terms" className="text-link">
          Discuss a project <span aria-hidden="true">↗</span>
        </Link>
      </article>
    </div>
  );
}
