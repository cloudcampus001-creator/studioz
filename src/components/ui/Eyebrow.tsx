import clsx from "clsx";

export function Eyebrow({ children, className }: { children: string; className?: string }) {
  return (
    <p className={clsx("mb-3 text-sm font-semibold tracking-wide text-plum", className)}>
      {children}
    </p>
  );
}
