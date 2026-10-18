import clsx from "clsx";

/**
 * A single angled notch used as a seam between the header and the page
 * content. Adapted from the University of Warwick's id7 template, which
 * uses this exact shape (a long flat run, then a sharp double-peak) as a
 * quiet brand signature under its masthead.
 */
export function NotchDivider({ className, color = "currentColor" }: { className?: string; color?: string }) {
  return (
    <svg
      className={clsx("notch-divider", className)}
      viewBox="0 0 1130 41"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M 0,20.5 1030.48,20.5 1053.28,40.5 1070.24,9.1 1087.2,40.5 1110,0.5 1130,0.5"
        stroke={color}
        strokeWidth="1.5"
        fill="none"
      />
    </svg>
  );
}
