import type { Diagram, FlowStep } from "@/data/types";

function Steps({ steps }: { steps: FlowStep[] }) {
  return (
    <ol className="case-diagram-steps">
      {steps.map((step, index) => (
        <li key={step.label}>
          <span className="inner-number">
            {String(index + 1).padStart(2, "0")}
          </span>
          <strong>{step.label}</strong>
          {step.detail && <small>{step.detail}</small>}
        </li>
      ))}
    </ol>
  );
}

export default function CaseDiagram({ diagram }: { diagram: Diagram }) {
  return (
    <figure className="case-diagram">
      <figcaption>
        <span className="eyebrow">System view</span>
        <h3>{diagram.title}</h3>
        <p>{diagram.summary}</p>
      </figcaption>
      {diagram.kind === "flow" && <Steps steps={diagram.steps} />}
      {diagram.kind === "beforeAfter" && (
        <div className="case-before-after">
          <div>
            <h4>{diagram.before.label}</h4>
            <Steps steps={diagram.before.steps} />
          </div>
          <div>
            <h4>{diagram.after.label}</h4>
            <Steps steps={diagram.after.steps} />
          </div>
        </div>
      )}
      {diagram.kind === "stack" && (
        <div className="case-stack">
          {diagram.layers.map((layer, index) => (
            <div key={layer.name}>
              <span className="inner-number">
                {String(index + 1).padStart(2, "0")}
              </span>
              <strong>{layer.name}</strong>
              <p>{layer.body}</p>
            </div>
          ))}
        </div>
      )}
      {diagram.kind === "hub" && (
        <div className="case-hub">
          <ul>
            {diagram.inputs.map((input) => (
              <li key={input}>{input}</li>
            ))}
          </ul>
          <div>
            <strong>{diagram.hub.label}</strong>
            {diagram.hub.detail && <p>{diagram.hub.detail}</p>}
          </div>
          <ul>
            {diagram.outputs.map((output) => (
              <li key={output}>{output}</li>
            ))}
          </ul>
        </div>
      )}
      {diagram.caption && <p className="inner-note">{diagram.caption}</p>}
    </figure>
  );
}
