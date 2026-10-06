"use client";
import Link from "next/link";
import { useState } from "react";
import {
  ArrowUpRight,
  Check,
  ArrowRight,
  SlidersHorizontal,
} from "lucide-react";
const worlds = [
  {
    name: "Startups",
    label: "From first hello to first value.",
    description:
      "A sharper product experience, from the first enquiry to an organised onboarding flow. Give your team a clear next step.",
    slug: "startup-onboarding",
    brand: "ORBIT / WORKSPACE",
    title: "Welcome to your next chapter.",
    prompt: "Set up your workspace",
    details: ["Your team", "Product goals", "A useful first step"],
    tag: "Customer success",
    result: "Ready for a personal introduction",
    sub: "Your rule connects an enquiry to the right person.",
  },
  {
    name: "Luxury brands",
    label: "Every detail. A little more personal.",
    description:
      "Distinctive discovery on the surface. Thoughtful clienteling underneath. Connect a beautiful collection to a conversation that remembers the details.",
    slug: "lifestyle-discovery",
    brand: "FORME / SAMPLE COLLECTION",
    title: "Objects for considered living.",
    prompt: "Discover your everyday piece",
    details: ["Occasion", "Material preference", "Personal appointment"],
    tag: "Clienteling",
    result: "An interest, thoughtfully followed up",
    sub: "Preferences travel with the enquiry.",
  },
  {
    name: "Smart SMEs",
    label: "Less chasing. More moving forward.",
    description:
      "Bring enquiries, approvals and everyday operations into a connected workflow. Your team gets useful context and a clear next step.",
    slug: "startup-onboarding",
    brand: "NORTH / SAMPLE OPERATIONS",
    title: "Everything in the right hands.",
    prompt: "Your next enquiry, organised",
    details: ["Customer requirement", "Qualification rule", "Assigned team"],
    tag: "Team operations",
    result: "A clear owner. A useful next step.",
    sub: "Every enquiry keeps its context as it moves.",
  },
];
export default function Worlds() {
  const [selected, setSelected] = useState(0);
  const item = worlds[selected];
  return (
    <section className="worlds-section" id="worlds">
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">01 / Designed for your world</p>
            <h2>
              Different ambitions.
              <br />
              The same attention to detail.
            </h2>
          </div>
          <p>
            What your customers experience.
            <br />
            What makes it all work.
            <br />
            We think about both.
          </p>
        </div>
        <div className="world-layout">
          <div className="world-selector">
            <div className="world-tabs" aria-label="Application examples">
              {worlds.map((w, i) => (
                <button
                  key={w.name}
                  aria-pressed={i === selected}
                  onClick={() => setSelected(i)}
                >
                  <span>0{i + 1}</span>
                  {w.name}
                  <ArrowUpRight size={22} />
                </button>
              ))}
            </div>
            <div className="world-story" aria-live="polite">
              <h3>{item.label}</h3>
              <p>{item.description}</p>
              <Link href={`/lab/${item.slug}`} className="text-link">
                Explore this concept <ArrowUpRight size={17} />
              </Link>
            </div>
          </div>
          <div
            className={`world-composition world-${item.name.toLowerCase().replaceAll(" ", "-")}`}
          >
            <div className="world-label">
              <span>Concept demo · Sample data</span>
              <span>0{selected + 1}</span>
            </div>
            <div className="experience-window">
              <div className="window-bar">
                <span>{item.brand}</span>
                <span>↗</span>
              </div>
              <div className="window-body">
                <span className="mini-eyebrow">A LITTLE MORE CONSIDERED</span>
                <h3>{item.title}</h3>
                <div className="sample-form">
                  <p>{item.prompt}</p>
                  {item.details.map((d, i) => (
                    <div key={d}>
                      <span>{d}</span>
                      <span>
                        {i === 2 ? <Check size={15} /> : "0" + (i + 1)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="connection-path">
              <span />
              <ArrowRight size={17} />
              <span />
            </div>
            <div className="operations-window">
              <span className="ops-icon">
                <SlidersHorizontal size={18} />
              </span>
              <div>
                <small>{item.tag}</small>
                <h4>{item.result}</h4>
                <p>{item.sub}</p>
              </div>
              <Check size={19} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
