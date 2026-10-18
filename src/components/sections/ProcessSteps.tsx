export function ProcessSteps({
  steps,
}: {
  steps: { number: string; title: string; description: string }[];
}) {
  return (
    <ol className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
      {steps.map((step) => (
        <li key={step.number} className="relative border-t-2 border-plum pt-5">
          <span className="font-heading text-3xl font-bold text-plum/25">{step.number}</span>
          <h3 className="mt-2 font-heading text-lg font-semibold text-ink">{step.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-ink/65">{step.description}</p>
        </li>
      ))}
    </ol>
  );
}
