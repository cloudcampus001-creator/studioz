import { ReactNode } from "react";
import clsx from "clsx";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

type Tone = "plum" | "ink" | "paper";

const toneClasses: Record<Tone, string> = {
  plum: "bg-plum text-white",
  ink: "bg-ink text-white",
  paper: "bg-paper text-ink",
};

export function PageHero({
  eyebrow,
  headline,
  headlineAccent,
  subheadline,
  tone = "plum",
  actions,
  className,
}: {
  eyebrow?: string;
  headline: string;
  headlineAccent?: string;
  subheadline?: string;
  tone?: Tone;
  actions?: ReactNode;
  className?: string;
}) {
  const isDark = tone !== "paper";
  return (
    <section className={clsx("pb-16 pt-16 md:pb-20 md:pt-24", toneClasses[tone], className)}>
      <Container>
        <div className="max-w-3xl">
          {eyebrow && (
            <Eyebrow className={isDark ? "text-coral" : undefined}>{eyebrow}</Eyebrow>
          )}
          <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            {headline} {headlineAccent && <span className={isDark ? "text-lavender" : "text-plum"}>{headlineAccent}</span>}
          </h1>
          {subheadline && (
            <p className={clsx("mt-6 max-w-2xl text-lg leading-relaxed", isDark ? "text-white/80" : "text-ink/70")}>
              {subheadline}
            </p>
          )}
          {actions && <div className="mt-8 flex flex-wrap gap-4">{actions}</div>}
        </div>
      </Container>
    </section>
  );
}
