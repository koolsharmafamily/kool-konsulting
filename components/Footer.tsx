import Link from "next/link";
import { site } from "@/data/site";
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <Link href="/" aria-label="Kool Konsulting home">
            <img
              src="/brand/kk-logo-horizontal-dark.svg"
              alt="Kool Konsulting"
              width="290"
              height="44"
            />
          </Link>
          <p>
            Beautiful experiences.
            <br />
            Intelligent operations.
          </p>
          <div>
            <span className="eyebrow">Start a conversation</span>
            <a href={`tel:${site.phoneE164}`}>{site.phoneDisplay}</a>
            <a
              href={`https://wa.me/${site.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} Kool Konsulting · Nagpur, India
          </span>
          <nav aria-label="Footer navigation">
            <Link href="/pricing">Investment</Link>
            <Link href="/work">Project archive</Link>
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
          </nav>
          <a href="#main-content" className="back-top">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
