import Link from "next/link";
import { notFound } from "next/navigation";
import { serviceFamilies, investmentRanges } from "@/data/brand-content";
import "../../inner.css";

function findService(slug: string) {
  return serviceFamilies.find(
    (s) => s.slug === (slug === "software" ? "apps" : slug),
  );
}
export function generateStaticParams() {
  return [
    ...serviceFamilies.map((s) => ({ slug: s.slug })),
    { slug: "software" },
  ];
}
export function generateMetadata({ params }: { params: { slug: string } }) {
  const service = findService(params.slug);
  return service
    ? {
        title: service.name,
        description: service.summary,
        alternates: { canonical: "/services/" + service.slug },
      }
    : { title: "Service not found" };
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = findService(params.slug);
  if (!service) notFound();
  const prices = investmentRanges.filter((p) => p.family === service.slug);
  return (
    <div className="inner-page">
      <section className="container inner-intro service-intro">
        <Link href="/services" className="eyebrow">
          Expertise <span aria-hidden="true">/</span> {service.name}
        </Link>
        <h1>{service.heading}</h1>
        <p>{service.intro}</p>
        <div className="inner-actions">
          <Link
            className="button button-primary"
            href={
              "/contact?service=" +
              service.slug +
              "&source=service-" +
              service.slug
            }
          >
            Book a call <span aria-hidden="true">↗</span>
          </Link>
          <Link className="text-link" href={"/lab/" + service.demoSlug}>
            Explore the demo <span aria-hidden="true">↗</span>
          </Link>
        </div>
        {params.slug === "software" && (
          <p className="inner-note">
            Custom business software is part of our Apps & Digital Products
            practice, connecting internal workflows with the people who use
            them.
          </p>
        )}
      </section>
      <section className="service-system">
        <div className="container">
          <span className="eyebrow">
            A potential application / The connection that matters
          </span>
          <ol className="service-flow">
            {service.flow.map((step, i) => (
              <li key={step}>
                <span className="inner-number">0{i + 1}</span>
                <h2>{step}</h2>
                {i < 2 && (
                  <span className="flow-arrow" aria-hidden="true">
                    ↗
                  </span>
                )}
              </li>
            ))}
          </ol>
          <p>
            Illustrative workflow. The details are shaped around your business.
          </p>
        </div>
      </section>
      <section className="container inner-section inner-split">
        <div>
          <span className="eyebrow">What we shape</span>
          <h2>
            Considered at
            <br />
            every layer.
          </h2>
        </div>
        <div className="detail-list">
          {service.deliverables.map((d) => (
            <article key={d.title}>
              <h3>{d.title}</h3>
              <p>{d.body}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="inner-dark">
        <div className="container inner-split">
          <div>
            <span className="eyebrow">Designed for real work</span>
            <h2>
              Imagine what
              <br />
              this could unlock.
            </h2>
          </div>
          <div className="example-lines">
            {service.examples.map((e) => (
              <p key={e}>
                <span aria-hidden="true">↳</span>
                {e}
              </p>
            ))}
            <Link href={"/lab/" + service.demoSlug} className="text-link">
              Try a concept demonstration <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>
      <section className="container inner-section">
        <div className="inner-split">
          <div>
            <span className="eyebrow">Investment / Indicative ranges</span>
            <h2>
              Make room for
              <br />
              the right scope.
            </h2>
            <p className="inner-muted">
              Final fees follow discovery and a written scope.
            </p>
          </div>
          <div>
            {prices.map((p) => (
              <article className="service-price" key={p.id}>
                <h3>{p.name}</h3>
                <strong>{p.range}</strong>
                <p>{p.scope}</p>
              </article>
            ))}
            <Link href="/pricing" className="text-link">
              All investment details <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
        <div className="scope-notes">
          <h3>Agreed before we build</h3>
          <ul>
            {service.boundaries.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </div>
      </section>
      <section className="inner-close">
        <div className="container">
          <span className="eyebrow">A conversation is a good start.</span>
          <h2>
            Let’s make your next move
            <br />
            work beautifully.
          </h2>
          <Link
            className="button button-primary"
            href={"/contact?service=" + service.slug + "&source=service-close"}
          >
            Book a call <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
