"use client";

import { useId, useState, type FormEvent } from "react";
import {
  checkDiningAvailability,
  diningDateLabel,
  diningDates,
  diningTimes,
  initialDining,
  lookupDiningKnowledge,
  type DiningRequest,
} from "@/data/lab";
import { DemoFooter, DemoLabel } from "./LabChrome";

const exampleQuestions = [
  "Are vegetarian options available?",
  "Is parking available?",
  "Can you accommodate an allergy?",
];
export default function HospitalityDemo({
  compact = false,
}: {
  compact?: boolean;
}) {
  const id = useId();
  const [request, setRequest] = useState<DiningRequest>(initialDining);
  const [checked, setChecked] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [question, setQuestion] = useState("");
  const [askedQuestion, setAskedQuestion] = useState("");
  const [knowledge, setKnowledge] = useState<ReturnType<
    typeof lookupDiningKnowledge
  > | null>(null);
  const [announcement, setAnnouncement] = useState("");
  const availability = checkDiningAvailability(request);
  function update<K extends keyof DiningRequest>(
    key: K,
    value: DiningRequest[K],
  ) {
    setRequest((current) => ({ ...current, [key]: value }));
    setChecked(false);
    setCompleted(false);
    setAnnouncement("Details changed. Check the sample availability again.");
  }
  function check(event: FormEvent) {
    event.preventDefault();
    setChecked(true);
    setCompleted(false);
    setAnnouncement(availability.message);
  }
  function useAlternative() {
    if (!availability.alternative) return;
    const next = { ...request, time: availability.alternative };
    setRequest(next);
    setChecked(true);
    setCompleted(false);
    setAnnouncement(
      `Changed your selected time to ${next.time}. ${checkDiningAvailability(next).message}`,
    );
  }
  function ask(value = question) {
    const result = lookupDiningKnowledge(value);
    setKnowledge(result);
    setAskedQuestion(value.trim());
    setCompleted(false);
    setAnnouncement(result.answer);
  }
  function reset() {
    setRequest(initialDining);
    setChecked(false);
    setCompleted(false);
    setQuestion("");
    setAskedQuestion("");
    setKnowledge(null);
    setAnnouncement(
      "Demo reset. Saturday, 14 November at 19:30 for 2 guests selected.",
    );
  }
  function handoff() {
    if (!checked || availability.status === "error") return;
    setCompleted(true);
    setAnnouncement(
      "Demo complete — no reservation has been made. The sample staff view now includes your request.",
    );
  }
  const needsHuman =
    knowledge?.kind === "human" || availability.status === "unavailable";

  return (
    <div
      className={`lab-demo hospitality-demo${compact ? " lab-demo-compact" : ""}`}
    >
      <div className="lab-toolbar">
        <DemoLabel />
        <button className="lab-reset" onClick={reset} type="button">
          <span aria-hidden="true">↺</span> Reset demo
        </button>
      </div>
      <div className="lab-split">
        <div className="lab-guest lab-dining-guest">
          <div className="lab-venue">
            <span className="lab-venue-mark" aria-hidden="true">
              a.
            </span>
            <div>
              <span className="lab-micro">A fictional dining room</span>
              <h3>
                A quiet table.
                <br />A considered evening.
              </h3>
            </div>
            <span className="lab-venue-line" aria-hidden="true" />
          </div>
          <form className="lab-form" onSubmit={check}>
            <div className="lab-form-row">
              <div className="lab-field">
                <label htmlFor={`${id}-date`}>
                  Sample date <span>2026</span>
                </label>
                <select
                  id={`${id}-date`}
                  value={request.date}
                  onChange={(e) => update("date", e.target.value)}
                >
                  {diningDates.map((date) => (
                    <option value={date.value} key={date.value}>
                      {date.label}
                    </option>
                  ))}
                </select>
              </div>
              <div className="lab-field">
                <label htmlFor={`${id}-party`}>Guests</label>
                <select
                  id={`${id}-party`}
                  value={request.party}
                  onChange={(e) => update("party", Number(e.target.value))}
                >
                  {Array.from({ length: 8 }, (_, index) => index + 1).map(
                    (party) => (
                      <option value={party} key={party}>
                        {party} {party === 1 ? "guest" : "guests"}
                      </option>
                    ),
                  )}
                </select>
              </div>
            </div>
            <fieldset className="lab-choice-field">
              <legend>
                Preferred time <span>Venue local time</span>
              </legend>
              <div className="lab-choice-row">
                {diningTimes.map((time) => (
                  <label
                    className={`lab-choice${request.time === time ? " is-selected" : ""}`}
                    key={time}
                  >
                    <input
                      type="radio"
                      name={`${id}-time`}
                      value={time}
                      checked={request.time === time}
                      onChange={() => update("time", time)}
                    />
                    <span>{time}</span>
                  </label>
                ))}
              </div>
            </fieldset>
            <div className="lab-field">
              <label htmlFor={`${id}-preference`}>
                A preference for the host
              </label>
              <select
                id={`${id}-preference`}
                value={request.preference}
                onChange={(e) =>
                  update(
                    "preference",
                    e.target.value as DiningRequest["preference"],
                  )
                }
              >
                <option>No preference</option>
                <option>Vegetarian</option>
                <option>Quiet table</option>
              </select>
            </div>
            <button type="submit" className="lab-action">
              Check sample availability <span aria-hidden="true">↗</span>
            </button>
          </form>
          {checked && (
            <div className={`lab-result lab-result-${availability.status}`}>
              <strong>
                {availability.status === "available"
                  ? "A possibility for your evening."
                  : availability.status === "error"
                    ? "Check your details."
                    : "A different moment, perhaps."}
              </strong>
              <p>{availability.message}</p>
              {availability.alternative && (
                <button
                  type="button"
                  className="lab-inline-button"
                  onClick={useAlternative}
                >
                  Select {availability.alternative} instead{" "}
                  <span aria-hidden="true">→</span>
                </button>
              )}
            </div>
          )}
          {!compact && (
            <div className="lab-knowledge">
              <form
                onSubmit={(event) => {
                  event.preventDefault();
                  ask();
                }}
              >
                <label htmlFor={`${id}-question`}>
                  Something you would like to know?
                </label>
                <div className="lab-input-action">
                  <input
                    id={`${id}-question`}
                    value={question}
                    maxLength={240}
                    onChange={(event) => {
                      setQuestion(event.target.value);
                      setKnowledge(null);
                      setCompleted(false);
                    }}
                    placeholder="Ask about the sample venue"
                  />
                  <button type="submit" aria-label="Ask the sample venue guide">
                    ↗
                  </button>
                </div>
              </form>
              <div className="lab-suggestions">
                {exampleQuestions.map((example) => (
                  <button
                    key={example}
                    type="button"
                    onClick={() => {
                      setQuestion(example);
                      ask(example);
                    }}
                  >
                    {example}
                  </button>
                ))}
              </div>
              {knowledge && (
                <p
                  className={`lab-knowledge-answer${knowledge.kind === "error" ? " lab-error" : ""}`}
                  role={knowledge.kind === "error" ? "alert" : undefined}
                >
                  <strong>
                    {knowledge.kind === "human"
                      ? "A person takes it from here. "
                      : knowledge.kind === "answer"
                        ? "From the sample venue guide. "
                        : ""}
                  </strong>
                  {knowledge.answer}
                </p>
              )}
            </div>
          )}
        </div>
        <div className="lab-team">
          <div className="lab-panel-top">
            <span className="lab-micro">Behind the experience</span>
            <span className="lab-status-dot">Local simulation</span>
          </div>
          <div className="lab-team-heading">
            <span className="lab-flow-icon" aria-hidden="true">
              ↳
            </span>
            <h3>
              Every detail.
              <br />
              In the right hands.
            </h3>
          </div>
          <ol className="lab-flow">
            <li className="is-active">
              <span>01</span>
              <div>
                <strong>Guest request</strong>
                <p>Preferences stay connected to the enquiry.</p>
              </div>
              <span aria-hidden="true">✓</span>
            </li>
            <li className={checked ? "is-active" : ""}>
              <span>02</span>
              <div>
                <strong>Availability & knowledge</strong>
                <p>
                  {checked
                    ? availability.status === "available"
                      ? "Sample slot available; preferences noted."
                      : "Human follow-up or a useful alternative."
                    : "Ready to check the sample schedule."}
                </p>
              </div>
              <span aria-hidden="true">{checked ? "✓" : "·"}</span>
            </li>
            <li className={completed ? "is-active" : ""}>
              <span>03</span>
              <div>
                <strong>Host handoff</strong>
                <p>
                  {completed
                    ? "Sample request assembled for a host."
                    : "A person confirms the actual arrangement."}
                </p>
              </div>
              <span aria-hidden="true">{completed ? "✓" : "·"}</span>
            </li>
          </ol>
          <div className="lab-staff-record">
            <div className="lab-record-heading">
              <span className="lab-micro">
                {completed ? "Sample host request" : "Request preview"}
              </span>
              <span className="lab-record-tag">
                {completed
                  ? needsHuman
                    ? "Needs a person"
                    : "For host review"
                  : "Draft"}
              </span>
            </div>
            <dl>
              <div>
                <dt>Date</dt>
                <dd>{diningDateLabel(request.date)}, 2026</dd>
              </div>
              <div>
                <dt>Time / guests</dt>
                <dd>
                  {request.time} · {request.party}{" "}
                  {request.party === 1 ? "guest" : "guests"}
                </dd>
              </div>
              <div>
                <dt>Preference</dt>
                <dd>{request.preference}</dd>
              </div>
              {knowledge?.kind === "human" && askedQuestion && (
                <div>
                  <dt>For the host</dt>
                  <dd>{askedQuestion}</dd>
                </div>
              )}
              <div>
                <dt>Reservation</dt>
                <dd>Not made</dd>
              </div>
            </dl>
          </div>
          {checked && !completed && availability.status !== "error" && (
            <button
              className="lab-action lab-action-light"
              type="button"
              onClick={handoff}
            >
              {needsHuman
                ? "Create sample host handoff"
                : "Send to sample host view"}{" "}
              <span aria-hidden="true">→</span>
            </button>
          )}
          {completed && (
            <div className="lab-complete">
              <span aria-hidden="true">✓</span>
              <p>
                <strong>Demo complete — no reservation has been made.</strong>
                Your choices are shown in the sample host view. Nothing has been
                sent.
              </p>
            </div>
          )}
          {!checked && (
            <p className="lab-team-note">
              Try Saturday at 19:30 to explore an unavailable time and a useful
              alternative.
            </p>
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
      <DemoFooter context="Hospitality concierge concept" />
    </div>
  );
}
