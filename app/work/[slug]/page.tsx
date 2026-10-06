import Link from "next/link";
import { notFound } from "next/navigation";
import { caseStudies, getCaseStudy } from "@/data/caseStudies";
import { projects, getProjectBySlug } from "@/data/work";
import { workReadiness } from "@/data/brand-content";
import CaseDiagram from "../CaseDiagram";
import "../../inner.css";

export function generateStaticParams() {
  return Array.from(
    new Set([
      ...caseStudies.map((c) => c.slug),
      ...projects.filter((p) => !p.hidden).map((p) => p.slug),
    ]),
  ).map((slug) => ({ slug }));
}
export function generateMetadata({ params }: { params: { slug: string } }) {
  const study = getCaseStudy(params.slug);
  const project = getProjectBySlug(params.slug);
  if (!study && (!project || project.hidden))
    return { title: "Project not found" };
  return {
    title: study?.title || project?.title,
    description: study?.subtitle || project?.problem,
    alternates: { canonical: "/work/" + params.slug },
  };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const study = getCaseStudy(params.slug);
  const project = getProjectBySlug(params.slug);
  if (!study && (!project || project.hidden)) notFound();
  const state = workReadiness(study?.status || project?.status, project?.group);
  const status = study?.status || project?.status || "Client-project record";
  const title = study?.title || project!.title;
  const tools = study?.tools || project?.tools || [];
  return (
    <div
      className="inner-page"
      data-content-type={state.contentType}
      data-readiness={state.readiness}
    >
      <section className="container inner-intro case-intro">
        <Link href="/work" className="eyebrow">
          Work / Project record
        </Link>
        <div className="case-status">
          <span className="work-status">{status}</span>
          <span>{study?.industry || project!.industry}</span>
        </div>
        <h1>{title}</h1>
        <p>{study?.subtitle || project!.problem}</p>
        {state.contentType === "earlier-role" && (
          <p className="inner-note">
            Work undertaken in an earlier role. This is not presented as a Kool
            Konsulting client engagement.
          </p>
        )}
        {state.contentType === "prototype" && (
          <p className="inner-note">
            Built prototype. This record describes an exploration; it does not
            imply a production deployment or measured business result.
          </p>
        )}
        {state.contentType === "concept" && (
          <p className="inner-note">
            Concept design. This is a proposed system, not a delivered client
            implementation.
          </p>
        )}
        <dl className="project-facts">
          <div>
            <dt>Role / Context</dt>
            <dd>{study?.role || project!.client}</dd>
          </div>
          <div>
            <dt>Scope</dt>
            <dd>
              {study
                ? study.tags.join(" · ")
                : project!.services
                    .map((s) =>
                      s === "software"
                        ? "Business workflows"
                        : s.charAt(0).toUpperCase() + s.slice(1),
                    )
                    .join(" · ")}
            </dd>
          </div>
        </dl>
      </section>
      {study ? (
        <>
          <section className="container inner-section inner-split">
            <div>
              <span className="eyebrow">01 / Context</span>
              <h2>
                The work
                <br />
                behind the work.
              </h2>
            </div>
            <div className="case-copy">
              {study.context.map((text) => (
                <p key={text}>{text}</p>
              ))}
              <h3>The problem to solve</h3>
              <p>{study.cardProblem}</p>
            </div>
          </section>
          <section className="inner-dark">
            <div className="container">
              <span className="eyebrow">02 / Implementation</span>
              <h2 className="inner-large-heading">
                {study.framingQuestion || "Connecting the pieces."}
              </h2>
              <p className="case-solution">{study.solution.intro}</p>
              <CaseDiagram diagram={study.solution.diagram} />
            </div>
          </section>
          {study.solution.highlights && (
            <section className="container inner-section inner-split">
              <div>
                <span className="eyebrow">03 / Design decisions</span>
                <h2>
                  What makes
                  <br />
                  the system useful.
                </h2>
              </div>
              <div className="example-lines">
                {study.solution.highlights.map((text) => (
                  <p key={text}>
                    <span aria-hidden="true">↳</span>
                    {text}
                  </p>
                ))}
              </div>
            </section>
          )}
          {(study.limitations?.length || study.risks.length > 0) && (
            <section className="container inner-section case-considerations">
              <span className="eyebrow">Boundaries & considerations</span>
              <div className="detail-grid">
                {study.limitations?.map((text) => (
                  <p key={text}>{text}</p>
                ))}
                {study.risks.slice(0, 3).map((risk) => (
                  <article key={risk.title}>
                    <h3>{risk.title}</h3>
                    <p>{risk.body}</p>
                  </article>
                ))}
              </div>
            </section>
          )}
        </>
      ) : (
        <section className="container inner-section inner-split">
          <div>
            <span className="eyebrow">Recorded scope</span>
            <h2>
              What the
              <br />
              project covered.
            </h2>
          </div>
          <div className="case-copy">
            <ul className="case-build-list">
              {project!.built.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            {project!.howItWorks && (
              <>
                <h3>The workflow</h3>
                <ol className="case-build-list">
                  {project!.howItWorks.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ol>
              </>
            )}
            {project!.liveUrl && (
              <a
                className="text-link"
                href={project!.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit the recorded project link{" "}
                <span aria-hidden="true">↗</span>
              </a>
            )}
          </div>
        </section>
      )}
      {tools.length > 0 && (
        <section className="container project-tools">
          <span className="eyebrow">Tools in the project record</span>
          <p>{tools.join(" / ")}</p>
        </section>
      )}
      <section className="inner-close">
        <div className="container">
          <span className="eyebrow">From this context to yours.</span>
          <h2>
            Have a related
            <br />
            challenge in mind?
          </h2>
          <div className="inner-actions">
            <Link
              href={
                "/contact?source=work&project=" +
                encodeURIComponent(params.slug)
              }
              className="button button-primary"
            >
              Book a call <span aria-hidden="true">↗</span>
            </Link>
            <Link href="/work" className="text-link">
              All project records <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
