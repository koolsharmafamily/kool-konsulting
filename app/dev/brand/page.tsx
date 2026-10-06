import Image from "next/image";
import "@/app/inner.css";
export const metadata = {
  title: "Brand system",
  robots: { index: false, follow: false },
};
const colours = [
  ["Porcelain", "#F3F2EE"],
  ["Ink", "#0E1016"],
  ["Electric violet", "#5145E5"],
  ["Ice blue", "#7DDCF2"],
  ["Graphite", "#1A1E29"],
  ["Brushed stone", "#B8B3A9"],
];
export default function BrandPage() {
  return (
    <div className="inner-page">
      <section className="container inner-intro">
        <span className="eyebrow">
          Kool Konsulting / Brand system / Internal preview
        </span>
        <h1>
          Two perspectives.
          <br />
          <em>One connected idea.</em>
        </h1>
        <p>
          The left-facing K comes first. The right-facing K follows. Shared
          central spines connect the customer experience with the systems behind
          it.
        </p>
      </section>
      <section className="container inner-section">
        <img
          src="/brand/kk-logo-horizontal.svg"
          width="730"
          height="88"
          alt="Kool Konsulting outlined custom wordmark"
          style={{ marginBottom: 60 }}
        />
        <div
          style={{
            display: "flex",
            gap: 40,
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          {[16, 24, 32, 64].map((s) => (
            <div key={s}>
              <img
                src="/brand/kk-mark.svg"
                width={s * 1.78}
                height={s}
                alt={`Opposing K symbol at ${s} pixels high`}
              />
              <p style={{ fontSize: 12, marginTop: 15 }}>{s}px high</p>
            </div>
          ))}
        </div>
      </section>
      <section className="container inner-section">
        <h2>Colour with a purpose.</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(150px,1fr))",
            gap: 20,
            marginTop: 35,
          }}
        >
          {colours.map(([label, colour]) => (
            <div key={label}>
              <div
                style={{
                  height: 140,
                  background: colour,
                  border: "1px solid #d8d8d4",
                }}
              />
              <p style={{ fontSize: 14, marginTop: 12 }}>
                {label}
                <br />
                {colour}
              </p>
            </div>
          ))}
        </div>
      </section>
      <section className="container inner-section">
        <p className="eyebrow">Typography / Manrope + IBM Plex Mono</p>
        <h2>
          Beautiful experiences.
          <br />
          Intelligent operations.
        </h2>
        <p style={{ marginTop: 25, maxWidth: 600 }}>
          A considered balance of expressive scale, clear language and precise
          details. The wordmark is custom vector geometry, separate from the
          website typeface.
        </p>
      </section>
      <section className="container inner-section">
        <h2>One identity. Different contexts.</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
            gap: 30,
            marginTop: 35,
          }}
        >
          {[
            "proposal-cover",
            "social-post",
            "business-card",
            "social-sharing",
          ].map((name) => (
            <a key={name} href={`/brand/applications/${name}.svg`}>
              <img
                src={`/brand/applications/${name}.png`}
                alt={name.replaceAll("-", " ") + " template"}
                style={{
                  width: "100%",
                  height: 420,
                  objectFit: "contain",
                  background: "#e8e7e3",
                }}
              />
              <p style={{ fontSize: 14, marginTop: 12 }}>
                {name.replaceAll("-", " ")} · editable SVG
              </p>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
