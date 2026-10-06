import type { Metadata } from "next";
import Link from "next/link";
import { labDemos, collection } from "@/data/lab";
import { DemoLabel } from "@/components/lab/LabChrome";
import ProductIllustration from "@/components/lab/ProductIllustration";
import "@/app/lab.css";

export const metadata: Metadata = {
  title: "Kool Lab",
  description:
    "Explore three interactive concept demonstrations connecting thoughtful customer experiences with useful business workflows.",
  alternates: { canonical: "/lab" },
};
export default function LabPage() {
  return (
    <>
      <section className="container page-intro lab-page-intro">
        <span className="eyebrow">Kool Lab / Ideas you can try</span>
        <h1>
          Experience the front.
          <br />
          <span className="lab-title-accent">Explore what follows.</span>
        </h1>
        <p>
          Three little windows into what is possible. Change a detail, follow a
          decision, see the system behind the experience.
        </p>
        <p className="lab-intro-disclosure">
          Fictional scenarios. Sample data. Real interactions.
        </p>
      </section>
      <section
        className="container lab-index"
        aria-label="Concept demonstrations"
      >
        {[...labDemos]
          .sort((a, b) => a.number.localeCompare(b.number))
          .map((demo, index) => (
            <article
              className={`lab-index-item lab-index-${index}`}
              key={demo.slug}
            >
              <Link
                className="lab-index-visual"
                href={`/lab/${demo.slug}`}
                aria-label={`Explore ${demo.name}`}
              >
                {demo.slug === "hospitality-concierge" ? (
                  <div className="lab-dining-preview">
                    <div className="lab-dining-arch" />
                    <span className="lab-preview-wordmark">a.</span>
                    <span className="lab-preview-message">
                      An evening,
                      <br />
                      beautifully arranged.
                    </span>
                    <div className="lab-preview-booking">
                      <span>Saturday, 14 November</span>
                      <span>
                        2 guests <b>→</b> A thoughtful handoff
                      </span>
                    </div>
                  </div>
                ) : demo.slug === "lifestyle-discovery" ? (
                  <div className="lab-lifestyle-preview">
                    <span className="lab-preview-form">FORM.</span>
                    <ProductIllustration product={collection[0]} />
                    <span className="lab-preview-corner">
                      Objects for the everyday.
                    </span>
                  </div>
                ) : (
                  <div className="lab-startup-preview">
                    <span className="lab-micro">
                      A next step, with intention.
                    </span>
                    <div className="lab-preview-route">
                      <span>Enquiry</span>
                      <span aria-hidden="true">↳</span>
                      <span>Your rules</span>
                      <span aria-hidden="true">↳</span>
                      <span className="is-route">
                        The right person <span aria-hidden="true">↗</span>
                      </span>
                    </div>
                    <span className="lab-preview-corner">
                      Clear rules. Human control.
                    </span>
                  </div>
                )}
                <span className="lab-preview-open" aria-hidden="true">
                  ↗
                </span>
              </Link>
              <div className="lab-index-copy">
                <div className="lab-index-meta">
                  <span className="eyebrow">
                    {demo.number} / {demo.audience}
                  </span>
                  <DemoLabel />
                </div>
                <h2>
                  <Link href={`/lab/${demo.slug}`}>{demo.title}</Link>
                </h2>
                <p>{demo.description}</p>
                <Link href={`/lab/${demo.slug}`} className="text-link">
                  Explore {demo.name.toLowerCase()}{" "}
                  <span aria-hidden="true">↗</span>
                </Link>
              </div>
            </article>
          ))}
      </section>
      <section className="container lab-method-note">
        <span className="eyebrow">A useful kind of play</span>
        <h2>
          Small experiments.
          <br />
          Serious possibilities.
        </h2>
        <div>
          <p>
            These demonstrations use fixed sample data and explicit rules. They
            show how a customer interaction can become something useful for the
            people behind a business.
          </p>
          <p>
            A real project adds your brand, approved knowledge, connected
            systems and the right safeguards. We define those together.
          </p>
          <Link
            href="/contact?context=Kool%20Lab"
            className="button button-primary"
          >
            Book a call <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
    </>
  );
}
