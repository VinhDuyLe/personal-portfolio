export function ArchitectureFlow({ steps }: { steps: string[] }) {
  return (
    <div className="architecture" aria-label={`Architecture flow: ${steps.join(" to ")}`}>
      {steps.map((step, index) => (
        <div className="architecture-step" key={step}>
          <span>{String(index + 1).padStart(2, "0")}</span>
          <strong>{step}</strong>
          {index < steps.length - 1 && <i aria-hidden="true">→</i>}
        </div>
      ))}
    </div>
  );
}
