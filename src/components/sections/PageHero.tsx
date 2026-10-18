import { ReactNode } from "react";
import Image from "next/image";
import clsx from "clsx";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import type { SiteImage } from "@/lib/images";

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
  image,
  className,
}: {
  eyebrow?: string;
  headline: string;
  headlineAccent?: string;
  subheadline?: string;
  tone?: Tone;
  actions?: ReactNode;
  /** Optional photo shown on the right and faded into the background colour. */
  image?: SiteImage;
  className?: string;
}) {
  const isDark = tone !== "paper";
  return (
    <section className={clsx("relative overflow-hidden pb-16 pt-16 md:pb-20 md:pt-24", toneClasses[tone], className)}>
      {image && (
        <>
          {/* Photo: full-bleed and subtle on mobile, a fading right-hand panel on desktop */}
          <div className="pointer-events-none absolute inset-0 md:left-[42%]">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              priority
              sizes="(min-width: 768px) 58vw, 100vw"
              className="object-cover opacity-35 md:opacity-90"
              style={{ objectPosition: image.position }}
            />
          </div>
          {/* Gradients: blend the photo into the colour block on the left and bottom */}
          <div
            className={clsx(
              "pointer-events-none absolute inset-0 bg-gradient-to-r md:from-[42%]",
              tone === "ink" ? "from-ink via-ink/85 to-ink/20" : "from-plum via-plum/85 to-plum/10",
            )}
          />
          <div
            className={clsx(
              "pointer-events-none absolute inset-0 bg-gradient-to-t via-transparent to-transparent",
              tone === "ink" ? "from-ink/60" : "from-plum-dark/60",
            )}
          />
        </>
      )}
      <Container className="relative">
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
