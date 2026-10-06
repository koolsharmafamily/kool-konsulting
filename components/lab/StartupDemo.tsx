"use client";

import { useId, useState, type FormEvent } from "react";
import {
  initialOnboarding,
  initialRule,
  qualifyOnboarding,
  type OnboardingInput,
  type QualificationRule,
} from "@/data/lab";
import { DemoFooter, DemoLabel } from "./LabChrome";

type SampleRun = {
  sequence: number;
  company: string;
  teamSize: number;
  goal: string;
  rule: QualificationRule;
  result: ReturnType<typeof qualifyOnboarding>;
};
export default function StartupDemo() {
  const id = useId();
  const [input, setInput] = useState<OnboardingInput>(initialOnboarding);
  const [rule, setRule] = useState<QualificationRule>(initialRule);
  const [history, setHistory] = useState<SampleRun[]>([]);
  const [current, setCurrent] = useState<SampleRun | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [announcement, setAnnouncement] = useState("");
  const [sequence, setSequence] = useState(0);
  function update<K extends keyof OnboardingInput>(
    key: K,
    value: OnboardingInput[K],
  ) {
    setInput((previous) => ({ ...previous, [key]: value }));
    setCurrent(null);
    setError(null);
  }
  function changeRule<K extends keyof QualificationRule>(
    key: K,
    value: QualificationRule[K],
  ) {
    setRule((previous) => ({ ...previous, [key]: value }));
    setCurrent(null);
    setAnnouncement(
      "Qualification rule changed. Run the workflow to see the new route.",
    );
  }
  function run(event: FormEvent) {
    event.preventDefault();
    const result = qualifyOnboarding(input, rule);
    if (result.route === "error") {
      setError(result.reason);
      setAnnouncement(result.reason);
      return;
    }
    const nextSequence = sequence + 1;
    const next = {
      sequence: nextSequence,
      company: input.company.trim(),
      teamSize: input.teamSize,
      goal: input.goal,
      rule: { ...rule },
      result,
    };
    setSequence(nextSequence);
    setCurrent(next);
    setError(null);
    setHistory((previous) => [next, ...previous].slice(0, 5));
    setAnnouncement(
      `${result.title}. ${result.reason} Demo complete. No account was created and nothing was sent.`,
    );
  }
  function reset() {
    setInput(initialOnboarding);
    setRule(initialRule);
    setHistory([]);
    setCurrent(null);
    setError(null);
    setSequence(0);
    setAnnouncement(
      "Demo reset. The sample enquiry and default rules have been restored. Activity history is empty.",
    );
  }
  return (
    <div className="lab-demo startup-demo">
      <div className="lab-toolbar">
        <DemoLabel />
        <button className="lab-reset" type="button" onClick={reset}>
          <span aria-hidden="true">↺</span> Reset demo
        </button>
      </div>
      <div className="lab-startup-header">
        <div>
          <span className="lab-micro">A fictional product team</span>
          <h3>
            Good beginnings.
            <br />
            Clear next steps.
          </h3>
        </div>
        <span className="lab-startup-symbol" aria-hidden="true">
          ↳
        </span>
      </div>
      <form onSubmit={run}>
        <div className="lab-startup-grid">
          <div className="lab-startup-input">
            <div className="lab-step-heading">
              <span>01</span>
              <h4>The enquiry</h4>
            </div>
            <div className="lab-field">
              <label htmlFor={`${id}-company`}>Sample company name</label>
              <input
                id={`${id}-company`}
                value={input.company}
                maxLength={60}
                onChange={(event) => update("company", event.target.value)}
                placeholder="Give your fictional company a name"
              />
            </div>
            <div className="lab-field">
              <label htmlFor={`${id}-team`}>People on the team</label>
              <select
                id={`${id}-team`}
                value={input.teamSize}
                onChange={(event) =>
                  update("teamSize", Number(event.target.value))
                }
              >
                {[1, 3, 5, 8, 15, 30, 60, 100].map((size) => (
                  <option value={size} key={size}>
                    {size} {size === 1 ? "person" : "people"}
                  </option>
                ))}
              </select>
            </div>
            <div className="lab-field">
              <label htmlFor={`${id}-goal`}>What brings you here?</label>
              <select
                id={`${id}-goal`}
                value={input.goal}
                onChange={(event) =>
                  update("goal", event.target.value as OnboardingInput["goal"])
                }
              >
                <option>Connect an existing workflow</option>
                <option>Explore a new product</option>
                <option>Not sure yet</option>
              </select>
            </div>
            <label className="lab-checkbox">
              <input
                type="checkbox"
                checked={input.consent}
                onChange={(event) => update("consent", event.target.checked)}
              />
              <span>Sample permission to follow up</span>
            </label>
            <label className="lab-checkbox">
              <input
                type="checkbox"
                checked={input.needsReview}
                onChange={(event) =>
                  update("needsReview", event.target.checked)
                }
              />
              <span>I would like a person to review this</span>
            </label>
          </div>
          <div className="lab-startup-rules">
            <div className="lab-step-heading">
              <span>02</span>
              <h4>The rule you control</h4>
            </div>
            <p>A clear threshold. An explicit exception. No opaque score.</p>
            <div className="lab-field">
              <label htmlFor={`${id}-threshold`}>
                Discovery queue: minimum team
              </label>
              <select
                id={`${id}-threshold`}
                value={rule.minimumTeam}
                onChange={(event) =>
                  changeRule("minimumTeam", Number(event.target.value))
                }
              >
                {[3, 5, 10, 20].map((size) => (
                  <option value={size} key={size}>
                    {size} people
                  </option>
                ))}
              </select>
            </div>
            <label className="lab-checkbox">
              <input
                type="checkbox"
                checked={rule.requireClearGoal}
                onChange={(event) =>
                  changeRule("requireClearGoal", event.target.checked)
                }
              />
              <span>Require a clear project goal</span>
            </label>
            <div className="lab-rule-language">
              <span className="lab-micro">In plain English</span>
              <p>
                Permission off <span>→</span> pause.
              </p>
              <p>
                Person requested
                {rule.requireClearGoal ? " or goal unclear" : ""} <span>→</span>{" "}
                human review.
              </p>
              <p>
                Team of {rule.minimumTeam}+ <span>→</span> discovery.
              </p>
              <p>
                Smaller team <span>→</span> guided introduction.
              </p>
            </div>
            <p className="lab-muted-note">
              Try changing the minimum to 10. The same eight-person team will
              take a different route.
            </p>
          </div>
          <div className="lab-startup-output">
            <div className="lab-step-heading">
              <span>03</span>
              <h4>The team view</h4>
            </div>
            {current ? (
              <>
                <div
                  className={`lab-route-result route-${current.result.route}`}
                >
                  <span className="lab-route-arrow" aria-hidden="true">
                    ↳
                  </span>
                  <span className="lab-micro">Sample routing result</span>
                  <h5>{current.result.title}</h5>
                  <p>{current.result.reason}</p>
                </div>
                <dl>
                  <div>
                    <dt>Company</dt>
                    <dd>{current.company}</dd>
                  </div>
                  <div>
                    <dt>Team / threshold</dt>
                    <dd>
                      {current.teamSize} / {current.rule.minimumTeam} people
                    </dd>
                  </div>
                  <div>
                    <dt>Goal</dt>
                    <dd>{current.goal}</dd>
                  </div>
                  <div>
                    <dt>Owner</dt>
                    <dd>
                      {current.result.route === "paused"
                        ? "Unassigned"
                        : current.result.route === "human"
                          ? "A team member"
                          : "Sample customer team"}
                    </dd>
                  </div>
                </dl>
                <p className="lab-startup-complete">
                  Demo complete. No account created; nothing sent.
                </p>
              </>
            ) : (
              <div className="lab-empty">
                <span aria-hidden="true">↳</span>
                <h5>A place for the next step.</h5>
                <p>
                  Run the sample workflow to see the enquiry, routing reason and
                  team ownership here.
                </p>
              </div>
            )}
          </div>
        </div>
        <div className="lab-run-bar">
          <div>
            {error && (
              <p className="lab-error" role="alert">
                {error}
              </p>
            )}
            <p>Deterministic rules. Local data. Every decision has a reason.</p>
          </div>
          <button className="lab-action" type="submit">
            {current ? "Run again" : "Run sample workflow"}{" "}
            <span aria-hidden="true">↗</span>
          </button>
        </div>
      </form>
      <div className="lab-activity">
        <div className="lab-record-heading">
          <h4>Your simulated activity</h4>
          <span className="lab-micro">
            {history.length
              ? `Latest ${history.length} ${history.length === 1 ? "action" : "actions"}`
              : "This session only"}
          </span>
        </div>
        {history.length ? (
          <ol>
            {history.map((item) => (
              <li key={item.sequence}>
                <span className="lab-activity-index">
                  {String(item.sequence).padStart(2, "0")}
                </span>
                <span>
                  <strong>{item.company}</strong>
                  <small>
                    {item.teamSize} people · threshold {item.rule.minimumTeam} ·{" "}
                    {item.rule.requireClearGoal
                      ? "clear goal required"
                      : "goal optional"}
                  </small>
                </span>
                <span className="lab-activity-route">{item.result.title}</span>
              </li>
            ))}
          </ol>
        ) : (
          <p className="lab-muted-note">
            No actions yet. Your own sample runs will appear here.
          </p>
        )}
      </div>
      <p
        className="lab-sr-only"
        role="status"
        aria-live="polite"
        aria-atomic="true"
      >
        {announcement}
      </p>
      <DemoFooter context="Startup onboarding and workflow concept" />
    </div>
  );
}
