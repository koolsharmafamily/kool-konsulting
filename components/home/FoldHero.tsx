"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowDown, Minus, Plus } from "lucide-react";
const stories = {
  "Smart SMEs": [
    "A clear customer enquiry",
    "A workflow connects the right tools",
    "Your team has the context to act",
  ],
  "Luxury brands": [
    "A collection worth discovering",
    "An interest becomes a client record",
    "A more personal next conversation",
  ],
  Startups: [
    "A clear first product experience",
    "An enquiry meets your routing rules",
    "Your team knows the next step",
  ],
};
export default function FoldHero() {
  const [world, setWorld] = useState<keyof typeof stories>("Startups");
  const [unfolded, setUnfolded] = useState(false);
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="tiny-fold" /> Independent technology studio
          </p>
          <h1>
            Beautiful
            <br />
            experiences.
            <br />
            <span>
              Intelligent
              <br />
              operations.
            </span>
          </h1>
          <p className="hero-description">
            We design websites, build apps and connect AI workflows for
            ambitious startups, luxury brands and smart SMEs.
          </p>
          <div className="hero-actions">
            <Link
              href="/contact?context=Homepage"
              className="button button-primary"
            >
              Book a call <ArrowUpRight size={18} />
            </Link>
            <Link href="#lab" className="text-link">
              Explore the demos <ArrowDown size={16} />
            </Link>
          </div>
        </div>
        <div className={`hero-scene ${unfolded ? "is-unfolded" : ""}`}>
          <div className="scene-topline">
            <span className="eyebrow">The Kool Fold</span>
            <span className="mono">EXPERIENCE ↔ INTELLIGENCE</span>
          </div>
          <div className="fold-art">
            <Image
              src="/art/kool-fold.webp"
              alt="A left-facing K and a right-facing K, joined back to back in sculpted porcelain and metal."
              width={1400}
              height={933}
              priority
              sizes="(max-width: 799px) 100vw, 58vw"
            />
            <span className="fold-wing fold-wing-left" aria-hidden="true" />
            <span className="fold-wing fold-wing-right" aria-hidden="true" />
            <div className="fold-crosshair crosshair-one">+</div>
            <div className="fold-crosshair crosshair-two">+</div>
            {unfolded && (
              <div className="unfold-layers" aria-live="polite">
                {stories[world].map((story, i) => (
                  <div className="unfold-layer" key={story}>
                    <span>
                      0{i + 1} / {["EXPERIENCE", "CONNECTION", "OUTCOME"][i]}
                    </span>
                    <strong>{story}</strong>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="scene-caption">
            <span>
              <span className="signal-square" /> Two sides. One connected idea.
            </span>
            <button
              aria-expanded={unfolded}
              onClick={() => setUnfolded(!unfolded)}
            >
              {unfolded ? "Close the fold" : "Unfold the thinking"}{" "}
              {unfolded ? <Minus size={16} /> : <Plus size={16} />}
            </button>
          </div>
          <div className="hero-worlds" aria-label="Choose an application">
            {(["Startups", "Luxury brands", "Smart SMEs"] as const).map(
              (name) => (
                <button
                  key={name}
                  aria-pressed={name === world}
                  onClick={() => {
                    setWorld(name as keyof typeof stories);
                    setUnfolded(true);
                  }}
                >
                  {name}
                </button>
              ),
            )}
          </div>
        </div>
      </div>
      <div className="container hero-bottom">
        <span>Based in Nagpur. Built around your business.</span>
        <span className="mono">DESIGN WITH INTENT. CONNECT WITH CARE.</span>
        <a href="#worlds" aria-label="Explore the studio's approach">
          <ArrowDown size={19} />
        </a>
      </div>
    </section>
  );
}
