import Link from "next/link";
import { serviceFamilies } from "@/data/brand-content";
import "../inner.css";

export const metadata = {
  title: "Expertise",
  description:
    "AI and automation, distinctive websites and focused apps. Connected experiences and operations from Kool Konsulting, Nagpur.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <div className="inner-page">
      <section className="container inner-intro">
        <span className="eyebrow">Expertise / Three ways forward</span>
        <h1>
          Good on the surface.
          <br />
          <em>Great underneath.</em>
        </h1>
        <p>
          Beautiful customer experiences and intelligent operations, designed
          together. Three connected disciplines. One considered approach.
        </p>
      </section>
      <div className="container expertise-index">
        {serviceFamilies.map((service) => (
          <section className="expertise-row" key={service.slug}>
            <span className="inner-number">{service.number}</span>
            <div>
              <p className="eyebrow">{service.name}</p>
              <h2>{service.heading}</h2>
              <p>{service.summary}</p>
              <Link href={"/services/" + service.slug} className="text-link">
                Explore {service.name.toLowerCase()}{" "}
                <span aria-hidden="true">↗</span>
              </Link>
            </div>
            <div
              className={"service-plane service-plane-" + service.slug}
              aria-hidden="true"
            >
              <span className="plane-seam" />
              <span className="plane-index">K/{service.number}</span>
              <span className="plane-label">
                EXPERIENCE
                <br />↳ INTELLIGENCE
              </span>
            </div>
          </section>
        ))}
      </div>
      <section className="inner-dark">
        <div className="container inner-split">
          <div>
            <span className="eyebrow">Made for your next move</span>
            <h2>
              The right scope.
              <br />A clear starting point.
            </h2>
          </div>
          <div>
            <p>
              A focused automation sprint, a new brand experience or your first
              product release. We begin with the opportunity and build a
              proposal around what matters.
            </p>
            <Link href="/pricing" className="text-link">
              Explore indicative investment <span aria-hidden="true">↗</span>
            </Link>
            <Link
              href="/contact?source=expertise"
              className="button button-primary"
            >
              Book a call <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
