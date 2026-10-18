import clsx from "clsx";

export function Eyebrow({ children, className }: { children: string; className?: string }) {
  // Only apply the default plum colour when the caller hasn't passed its own
  // text colour — otherwise both classes are present and plum can win.
  const hasOwnColor = /(^|\s)text-(?!sm\b|xs\b|base\b|lg\b|xl\b)/.test(className ?? "");
  return (
    <p className={clsx("mb-3 text-sm font-semibold tracking-wide", !hasOwnColor && "text-plum", className)}>
      {children}
    </p>
  );
}
