import Link from "next/link";
import "./inner.css";
export default function NotFound() {
  return (
    <div className="inner-page">
      <section className="container inner-intro not-found">
        <span className="eyebrow">404 / A small detour</span>
        <h1>
          This fold leads
          <br />
          <em>somewhere else.</em>
        </h1>
        <p>
          The page may have moved, or the address may be incomplete. There is
          still plenty to explore.
        </p>
        <div className="inner-actions">
          <Link href="/" className="button button-primary">
            Back to the beginning <span aria-hidden="true">↗</span>
          </Link>
          <Link href="/services" className="text-link">
            Explore our expertise <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
