import Link from "next/link";
import { caseStudies } from "@/data/caseStudies";
import { projects } from "@/data/work";
import { workReadiness } from "@/data/brand-content";
import "../inner.css";
export const metadata = {
  title: "Project Records",
  description:
    "Explore Kool Konsulting project records, with client work, earlier-role experience, prototypes and concept designs kept distinct.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  const existing = projects.filter(
    (p) => !p.hidden && !caseStudies.some((c) => c.slug === p.slug),
  );
  return (
    <div className="inner-page">
      <section className="container inner-intro">
        <span className="eyebrow">Work / An evolving body of practice</span>
        <h1>
          Ideas in context.
          <br />
          <em>Systems in detail.</em>
        </h1>
        <p>
          Project records, earlier-role experience and explorations. Each story
          states what it is, the role involved and the scope of the work.
        </p>
        <Link href="/lab" className="text-link">
          For interactive concept demos, visit the Lab{" "}
          <span aria-hidden="true">↗</span>
        </Link>
      </section>
      <section
        className="container work-archive"
        aria-label="Project and exploration records"
      >
        {caseStudies.map((study, i) => (
          <Link
            className="work-record"
            href={"/work/" + study.slug}
            key={study.slug}
            data-content-type={workReadiness(study.status).contentType}
          >
            <div
              className={"work-record-visual work-visual-" + (i % 3)}
              aria-hidden="true"
            >
              <span className="work-visual-line" />
              <span className="work-visual-number">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="work-visual-label">{study.industry}</span>
            </div>
            <div>
              <div className="work-record-meta">
                <span className="work-status">{study.status}</span>
                <span>{study.industry}</span>
              </div>
              <h2>
                {study.title}
                <span aria-hidden="true">↗</span>
              </h2>
              <p>{study.subtitle}</p>
              <span className="text-link">
                Read the project record <span aria-hidden="true">↗</span>
              </span>
            </div>
          </Link>
        ))}
      </section>
      {existing.length > 0 && (
        <section className="container inner-section">
          <span className="eyebrow">From the project archive</span>
          <h2 className="inner-large-heading">More work. More context.</h2>
          <div className="archive-list">
            {existing.map((project) => (
              <Link
                href={"/work/" + project.slug}
                key={project.slug}
                className="archive-row"
              >
                <div>
                  <span className="eyebrow">
                    {project.status ||
                      (project.group === "client"
                        ? "Client-project record"
                        : "Earlier work")}
                  </span>
                  <h3>{project.title}</h3>
                  <p>{project.client}</p>
                </div>
                <span aria-hidden="true">↗</span>
              </Link>
            ))}
          </div>
        </section>
      )}
      <section className="inner-close">
        <div className="container">
          <span className="eyebrow">Your context comes first.</span>
          <h2>
            What would you
            <br />
            like to make possible?
          </h2>
          <Link href="/contact?source=work" className="button button-primary">
            Book a call <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
