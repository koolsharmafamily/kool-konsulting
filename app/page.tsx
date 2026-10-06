import Link from "next/link";
import {
  ArrowUpRight,
  Workflow,
  PanelsTopLeft,
  AppWindow,
  ArrowRight,
} from "lucide-react";
import FoldHero from "@/components/home/FoldHero";
import Worlds from "@/components/home/Worlds";
import FoldMark from "@/components/brand/FoldMark";
import { serviceFamilies, processSteps, brandFaqs } from "@/data/brand-content";
import { site } from "@/data/site";
import { JsonLd } from "@/components/seo/JsonLd";
import { getWebSiteSchema } from "@/lib/schema";
export const metadata = {
  title: {
    absolute:
      "Kool Konsulting — Beautiful experiences. Intelligent operations.",
  },
  description: site.oneLiner,
  alternates: { canonical: "/" },
};
export default function HomePage() {
  return (
    <>
      <JsonLd data={getWebSiteSchema()} />
      <FoldHero />
      <Worlds />
      <section className="expertise-section" id="expertise">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">02 / Expertise, connected</p>
              <h2>
                Looks considered.
                <br />
                Works beautifully.
              </h2>
            </div>
            <Link href="/services" className="text-link">
              Explore our expertise <ArrowUpRight size={18} />
            </Link>
          </div>
          <div className="expertise-list">
            {serviceFamilies.map((service, i) => {
              const Icon = [Workflow, PanelsTopLeft, AppWindow][i];
              return (
                <Link
                  href={`/services/${service.slug}`}
                  key={service.slug}
                  className="expertise-row"
                >
                  <span className="mono expertise-number">0{i + 1}</span>
                  <div className="expertise-title">
                    <h3>{service.name}</h3>
                    <p>{service.summary}</p>
                  </div>
                  <div className="expertise-visual" aria-hidden="true">
                    <Icon size={28} strokeWidth={1.2} />
                    <span />
                    <div>{service.flow[2]}</div>
                  </div>
                  <span className="round-arrow">
                    <ArrowUpRight size={24} />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
      <section className="home-lab" id="lab">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">03 / Kool Lab</p>
              <h2>
                A little less theory.
                <br />A little more <em>try it.</em>
              </h2>
            </div>
            <p>
              Small, working demonstrations of the
              <br />
              experiences and systems we can connect.
            </p>
          </div>
          <div className="lab-feature">
            <div className="lab-feature-visual">
              <div className="lab-sample-heading">
                <span>ORBIT</span>
                <span>A BETTER FIRST STEP.</span>
              </div>
              <div className="workflow-art" aria-hidden="true">
                <div>
                  <span>01</span>
                  <div>
                    <small>AN ENQUIRY ARRIVES</small>
                    <strong>Orbit Studio · 8 people</strong>
                  </div>
                </div>
                <div>
                  <span>02</span>
                  <div>
                    <small>YOUR RULE, YOUR CONTROL</small>
                    <strong>A clear goal + team of 5 or more</strong>
                  </div>
                </div>
                <div>
                  <span>03</span>
                  <div>
                    <small>A CONSIDERED NEXT STEP</small>
                    <strong>Ready for discovery ↗</strong>
                  </div>
                </div>
              </div>
              <div className="reservation-slip">
                <span className="mono">CONNECTED, FROM THE START</span>
                <strong>
                  One enquiry.
                  <br />
                  The right next conversation.
                </strong>
                <div>
                  <span>Customer context</span>
                  <ArrowRight size={18} />
                  <span>Your team</span>
                </div>
              </div>
            </div>
            <div className="lab-feature-copy">
              <span className="concept-label">Concept demo · Sample data</span>
              <span className="lab-index mono">
                LAB 01 / STARTUPS & SMART SMEs
              </span>
              <h3>
                A better start.
                <br />A smarter follow-through.
              </h3>
              <p>
                Change a qualification rule, route a sample enquiry and see
                exactly why it reaches the right person.
              </p>
              <Link
                href="/lab/startup-onboarding"
                className="button button-light"
              >
                Try the workflow <ArrowUpRight size={18} />
              </Link>
              <span className="lab-fine">
                An interactive sample. Nothing is sent.
              </span>
            </div>
          </div>
          <div className="lab-more">
            <Link href="/lab/lifestyle-discovery">
              <span className="mono">LAB 02 / LUXURY BRANDS</span>
              <h3>A more personal discovery.</h3>
              <p>From a considered collection to a useful client record.</p>
              <span className="concept-label">Concept demo · Sample data</span>
              <ArrowUpRight size={27} />
            </Link>
            <Link href="/lab/hospitality-concierge">
              <span className="mono">LAB 03 / HOSPITALITY EXAMPLE</span>
              <h3>A thoughtful first welcome.</h3>
              <p>From guest preferences to an organised team handoff.</p>
              <span className="concept-label">Concept demo · Sample data</span>
              <ArrowUpRight size={27} />
            </Link>
          </div>
        </div>
      </section>
      <section className="studio-section">
        <div className="container studio-grid">
          <div className="studio-intro">
            <p className="eyebrow">04 / Personal by design</p>
            <h2>
              One clear vision.
              <br />A direct line
              <br />
              to the maker.
            </h2>
            <p>
              You work directly with Kulvir Sharma, founder of Kool Konsulting.
              From the first question to the final detail, the business and the
              build stay connected.
            </p>
            <Link href="/about" className="text-link">
              Meet the studio <ArrowUpRight size={17} />
            </Link>
            <div className="founder-signature">
              <span className="signature-symbol">
                <FoldMark size={32} />
              </span>
              <div>
                <strong>Kulvir Sharma</strong>
                <span>Founder · Nagpur, India</span>
              </div>
            </div>
          </div>
          <div className="process-list">
            {processSteps.map((step, i) => (
              <div key={step.title}>
                <span className="mono">0{i + 1}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="investment-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">05 / A considered investment</p>
              <h2>Start with the right scope.</h2>
            </div>
            <Link href="/pricing" className="text-link">
              Investment & details <ArrowUpRight size={17} />
            </Link>
          </div>
          <div className="investment-preview">
            {serviceFamilies.map((s) => (
              <Link href={`/contact?service=${s.slug}`} key={s.slug}>
                <span>
                  {s.slug === "automation"
                    ? "Focused automation"
                    : s.slug === "websites"
                      ? "Brand websites"
                      : "Focused web apps"}
                </span>
                <strong>{s.startingAt}</strong>
                <p>{s.startingScope}</p>
                <ArrowUpRight size={21} />
              </Link>
            ))}
          </div>
          <p className="investment-note">
            Indicative project ranges. Final fees follow discovery and a written
            scope. Third-party costs, content production, support and applicable
            taxes are scoped separately.
          </p>
          <div className="home-faq">
            {brandFaqs.slice(0, 4).map((f) => (
              <details key={f.q}>
                <summary>
                  {f.q}
                  <span>+</span>
                </summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <section className="closing-section">
        <div className="container closing-grid">
          <div>
            <p className="eyebrow">
              The next chapter starts with a conversation
            </p>
            <h2>
              Let’s make your
              <br />
              next move work
              <br />
              <em>beautifully.</em>
            </h2>
            <div className="closing-action">
              <Link
                href="/contact?context=Homepage%20closing"
                className="button button-light"
              >
                Book a call <ArrowUpRight size={18} />
              </Link>
              <p>
                Explore the opportunity.
                <br />
                Find the first scope. See if we fit.
              </p>
            </div>
          </div>
          <div className="closing-mark" aria-hidden="true">
            <FoldMark size={280} />
          </div>
        </div>
      </section>
    </>
  );
}
