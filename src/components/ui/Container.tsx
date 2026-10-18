import { ReactNode } from "react";
import clsx from "clsx";

export function Container({
  children,
  className,
  as: As = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
}) {
  return <As className={clsx("mx-auto w-full max-w-7xl px-5 sm:px-8", className)}>{children}</As>;
}
