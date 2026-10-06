import Link from "next/link";
import "../inner.css";
export default function CredentialsPage() {
  return (
    <div className="inner-page">
      <section className="container inner-intro">
        <span className="eyebrow">Studio information</span>
        <h1>A direct introduction.</h1>
        <p>
          Kulvir Sharma is the founder of Kool Konsulting, an independent
          technology studio based in Nagpur, India.
        </p>
        <p>
          For background relevant to your project, start a conversation.
          Additional biographical material is not published here until its
          wording is approved.
        </p>
        <div className="inner-actions">
          <Link
            className="button button-primary"
            href="/contact?source=credentials"
          >
            Book a call <span aria-hidden="true">↗</span>
          </Link>
          <Link className="text-link" href="/about">
            Meet the studio <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
