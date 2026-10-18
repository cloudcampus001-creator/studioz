import Link from "next/link";
import clsx from "clsx";
import { ArrowRight } from "lucide-react";
import { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "inverse" | "outline" | "outline-light" | "ghost";

const base =
  "focus-ring inline-flex items-center justify-center gap-2 rounded-sm px-6 py-3.5 text-[15px] font-semibold transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-60";

const variants: Record<Variant, string> = {
  primary:
    "bg-plum text-white hover:bg-plum-dark hover:-translate-y-0.5 hover:shadow-lg hover:shadow-plum/25",
  inverse:
    "bg-white text-plum hover:bg-white/90 hover:-translate-y-0.5 hover:shadow-lg",
  outline:
    "border-2 border-ink/25 text-ink hover:border-plum hover:text-plum hover:-translate-y-0.5",
  "outline-light":
    "border-2 border-white/50 text-white hover:border-white hover:-translate-y-0.5",
  ghost: "text-plum hover:text-plum-dark",
};

type CommonProps = {
  children: ReactNode;
  variant?: Variant;
  className?: string;
  withArrow?: boolean;
};

export function Button({
  children,
  variant = "primary",
  className,
  withArrow = true,
  href,
  ...rest
}: CommonProps &
  ({ href: string } & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "className">)) {
  return (
    <Link href={href} className={clsx(base, variants[variant], className)} {...rest}>
      {children}
      {withArrow && <ArrowRight className="size-4" aria-hidden />}
    </Link>
  );
}

export function ButtonAction({
  children,
  variant = "primary",
  className,
  withArrow = false,
  ...rest
}: CommonProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={clsx(base, variants[variant], className)} {...rest}>
      {children}
      {withArrow && <ArrowRight className="size-4" aria-hidden />}
    </button>
  );
}
