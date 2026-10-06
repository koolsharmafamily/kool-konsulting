"use client";

import { useId, useState, type FormEvent } from "react";
import {
  recommendProduct,
  validateProductEnquiry,
  type Finish,
  type Occasion,
} from "@/data/lab";
import { DemoFooter, DemoLabel } from "./LabChrome";
import ProductIllustration from "./ProductIllustration";

const occasions: Occasion[] = ["Everyday", "Evening", "A weekend away"];
const finishes: Finish[] = ["Warm neutrals", "Deep tones"];
export default function LifestyleDemo() {
  const id = useId();
  const [occasion, setOccasion] = useState<Occasion>("Everyday");
  const [finish, setFinish] = useState<Finish>("Warm neutrals");
  const [quantity, setQuantity] = useState(1);
  const [appointment, setAppointment] = useState("A studio visit");
  const [completed, setCompleted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [announcement, setAnnouncement] = useState("");
  const product = recommendProduct(occasion, finish);
  const unavailable = validateProductEnquiry(product, quantity);
  function changePreference(nextOccasion: Occasion, nextFinish: Finish) {
    setOccasion(nextOccasion);
    setFinish(nextFinish);
    setCompleted(false);
    setError(null);
    const next = recommendProduct(nextOccasion, nextFinish);
    setAnnouncement(
      `Recommended ${next.name}. ${next.stock} in sample inventory. Selected quantity remains ${quantity}.`,
    );
  }
  function submit(event: FormEvent) {
    event.preventDefault();
    setError(unavailable);
    if (unavailable) {
      setAnnouncement(unavailable);
      return;
    }
    setCompleted(true);
    setAnnouncement(
      "Demo complete — no appointment or purchase has been made. Your selected product, quantity and preferences appear in the sample client record.",
    );
  }
  function reset() {
    setOccasion("Everyday");
    setFinish("Warm neutrals");
    setQuantity(1);
    setAppointment("A studio visit");
    setCompleted(false);
    setError(null);
    setAnnouncement("Demo reset. Fold tote in Sand recommended, quantity 1.");
  }
  return (
    <div className="lab-demo lifestyle-demo">
      <div className="lab-toolbar">
        <DemoLabel />
        <button type="button" className="lab-reset" onClick={reset}>
          <span aria-hidden="true">↺</span> Reset demo
        </button>
      </div>
      <div className="lab-lifestyle-top">
        <div>
          <span className="lab-micro">FORM / A fictional collection</span>
          <h3>
            Find your everyday
            <br />
            <em>extraordinary.</em>
          </h3>
        </div>
        <p>
          A few considered objects.
          <br />A more personal way to discover them.
        </p>
      </div>
      <div className="lab-discovery">
        <div className="lab-discovery-controls">
          <fieldset className="lab-choice-field">
            <legend>What is the occasion?</legend>
            <div className="lab-choice-row lab-choice-stack">
              {occasions.map((option) => (
                <label
                  className={`lab-choice${occasion === option ? " is-selected" : ""}`}
                  key={option}
                >
                  <input
                    type="radio"
                    name={`${id}-occasion`}
                    checked={occasion === option}
                    onChange={() => changePreference(option, finish)}
                  />
                  <span>{option}</span>
                  <span aria-hidden="true">↗</span>
                </label>
              ))}
            </div>
          </fieldset>
          <fieldset className="lab-choice-field">
            <legend>Your palette</legend>
            <div className="lab-choice-row lab-choice-stack">
              {finishes.map((option) => (
                <label
                  className={`lab-choice${finish === option ? " is-selected" : ""}`}
                  key={option}
                >
                  <input
                    type="radio"
                    name={`${id}-finish`}
                    checked={finish === option}
                    onChange={() => changePreference(occasion, option)}
                  />
                  <span
                    className={`lab-colour-dot ${option === "Deep tones" ? "is-ink" : ""}`}
                    aria-hidden="true"
                  />
                  <span>{option}</span>
                </label>
              ))}
            </div>
          </fieldset>
          <p className="lab-muted-note">
            Your preferences guide the recommendation. Quantity and inventory
            remain separate.
          </p>
        </div>
        <div className="lab-product-visual">
          <span className="lab-product-edition">Object {product.id}</span>
          <ProductIllustration product={product} />
          <span className="lab-product-caption">
            Original concept illustration
          </span>
        </div>
        <div className="lab-product-detail">
          <span className="lab-micro">Chosen for your preferences</span>
          <h4>{product.name}</h4>
          <p className="lab-product-material">{product.material}</p>
          <p>{product.description}</p>
          <div className="lab-recommendation">
            <span aria-hidden="true">↳</span>
            <p>
              {product.shape === "tote"
                ? "Room for everyday essentials"
                : product.shape === "cuff"
                  ? "A sculptural accent for an evening"
                  : "A practical companion for short escapes"}
              , in the {finish.toLowerCase()} you selected.
            </p>
          </div>
          <div
            className={`lab-inventory${product.stock === 0 ? " is-unavailable" : ""}`}
          >
            <span aria-hidden="true">●</span>
            {product.stock
              ? `${product.stock} in sample inventory`
              : "Unavailable in sample inventory"}
          </div>
          {product.stock === 0 && (
            <button
              className="lab-inline-button"
              type="button"
              onClick={() =>
                changePreference(
                  occasion,
                  finish === "Deep tones" ? "Warm neutrals" : "Deep tones",
                )
              }
            >
              Explore the alternative finish →
            </button>
          )}
        </div>
      </div>
      <div className="lab-clienteling">
        <form onSubmit={submit} className="lab-enquiry-form">
          <span className="lab-micro">The next part of the conversation</span>
          <h4>Make an enquiry.</h4>
          <div className="lab-form-row">
            <div className="lab-field">
              <label htmlFor={`${id}-quantity`}>Selected quantity</label>
              <select
                id={`${id}-quantity`}
                value={quantity}
                onChange={(event) => {
                  setQuantity(Number(event.target.value));
                  setCompleted(false);
                  setError(null);
                }}
              >
                {[1, 2, 3, 4, 5, 6].map((value) => (
                  <option key={value} value={value}>
                    {value}
                  </option>
                ))}
              </select>
            </div>
            <div className="lab-field">
              <label htmlFor={`${id}-appointment`}>Preferred next step</label>
              <select
                id={`${id}-appointment`}
                value={appointment}
                onChange={(event) => {
                  setAppointment(event.target.value);
                  setCompleted(false);
                }}
              >
                <option>A studio visit</option>
                <option>An online conversation</option>
              </select>
            </div>
          </div>
          {error && (
            <p className="lab-error" role="alert">
              {error}
            </p>
          )}
          <button type="submit" className="lab-action">
            Create sample enquiry <span aria-hidden="true">↗</span>
          </button>
          <p className="lab-muted-note">
            Uses a fictional client. No personal information needed.
          </p>
        </form>
        <div className="lab-client-record">
          <div className="lab-record-heading">
            <span className="lab-micro">Sample client record</span>
            <span className="lab-record-tag">
              {completed ? "Ready for a person" : "Preview"}
            </span>
          </div>
          <h4>
            <span className="lab-client-avatar" aria-hidden="true">
              A
            </span>
            Alex <span>Fictional profile</span>
          </h4>
          <dl>
            <div>
              <dt>Interested in</dt>
              <dd>{product.name}</dd>
            </div>
            <div>
              <dt>Quantity / stock</dt>
              <dd>
                {quantity} selected / {product.stock} in sample stock
              </dd>
            </div>
            <div>
              <dt>Preferences</dt>
              <dd>
                {occasion} · {finish}
              </dd>
            </div>
            <div>
              <dt>Next step</dt>
              <dd>{completed ? appointment : "Awaiting sample enquiry"}</dd>
            </div>
          </dl>
          {completed && (
            <div className="lab-complete">
              <span aria-hidden="true">✓</span>
              <p>
                <strong>
                  Demo complete — no appointment or purchase has been made.
                </strong>
                Sample inventory is unchanged. A person would confirm the next
                step.
              </p>
            </div>
          )}
        </div>
      </div>
      <p
        className="lab-sr-only"
        role="status"
        aria-live="polite"
        aria-atomic="true"
      >
        {announcement}
      </p>
      <DemoFooter context="Lifestyle discovery and clienteling concept" />
    </div>
  );
}
