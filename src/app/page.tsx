import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, GraduationCap, Building2, Quote } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { StatBar } from "@/components/sections/StatBar";
import { ProgramCard } from "@/components/sections/ProgramCard";
import { home, programs, site } from "@/lib/content";

export const metadata: Metadata = {
  title: `${site.tagline}`,
  description: site.description,
};

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-plum text-white">
        <Container className="grid grid-cols-1 items-center gap-12 py-20 md:grid-cols-2 md:py-28">
          <div>
            <Eyebrow className="text-coral">{site.tagline}</Eyebrow>
            <h1 className="font-heading text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl">
              {home.hero.headline} <span className="text-lavender">{home.hero.headlineAccent}</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/80">
              {home.hero.subheadline}
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Button href="/programs" variant="inverse">
                {home.hero.ctaPrimary}
              </Button>
              <Button href="/apprenticeships" variant="outline-light">
                {home.hero.ctaSecondary}
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {programs.slice(0, 4).map((p) => (
                <div
                  key={p.id}
                  className="flex aspect-square flex-col justify-end rounded-sm p-4"
                  style={{ backgroundColor: `${p.color}33` }}
                >
                  <span className="text-xs font-semibold uppercase tracking-wide text-white/70">
                    {p.tag}
                  </span>
                  <span className="font-heading text-sm font-bold text-white">{p.name}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <StatBar stats={home.stats} />

      {/* Quick links */}
      <section className="bg-paper py-16">
        <Container>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {home.quickLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="focus-ring group flex items-center justify-between rounded-sm border border-line bg-white p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-plum hover:shadow-md"
              >
                <span className="font-heading text-base font-semibold text-ink">{link.label}</span>
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-plum-tint text-plum transition-colors duration-200 group-hover:bg-plum group-hover:text-white">
                  <ArrowRight className="size-4" aria-hidden />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Programs */}
      <section className="bg-white py-20">
        <Container>
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <Eyebrow className="justify-self-center">Our Programs</Eyebrow>
            <h2 className="font-heading text-3xl font-bold text-ink sm:text-4xl">
              Five Paths to a Skilled Career
            </h2>
            <p className="mt-4 text-ink/65">
              Every program blends structured learning with real, hands-on apprenticeship experience.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {programs.map((p) => (
              <ProgramCard key={p.id} program={p} />
            ))}
          </div>
        </Container>
      </section>

      {/* Dual CTA: students / employers */}
      <section className="bg-paper py-20">
        <Container>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="rounded-sm bg-ink p-10 text-white">
              <GraduationCap className="size-9 text-coral" aria-hidden />
              <Eyebrow className="mt-6 text-coral">{home.dualCta.students.eyebrow}</Eyebrow>
              <h3 className="font-heading text-2xl font-bold">{home.dualCta.students.headline}</h3>
              <p className="mt-3 text-white/70">{home.dualCta.students.description}</p>
              <Button href="/enroll" variant="inverse" className="mt-7">
                {home.dualCta.students.cta}
              </Button>
            </div>
            <div className="rounded-sm bg-plum p-10 text-white">
              <Building2 className="size-9 text-lavender" aria-hidden />
              <Eyebrow className="mt-6 text-lavender">{home.dualCta.employers.eyebrow}</Eyebrow>
              <h3 className="font-heading text-2xl font-bold">{home.dualCta.employers.headline}</h3>
              <p className="mt-3 text-white/80">{home.dualCta.employers.description}</p>
              <Button href="/apprenticeships" variant="inverse" className="mt-7">
                {home.dualCta.employers.cta}
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-20">
        <Container>
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <Eyebrow className="justify-self-center">Success Stories</Eyebrow>
            <h2 className="font-heading text-3xl font-bold text-ink sm:text-4xl">Hear From Our Graduates</h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {home.testimonials.map((t) => (
              <figure key={t.id} className="flex flex-col rounded-sm border border-line bg-paper p-7">
                <Quote className="size-7 text-plum/30" aria-hidden />
                <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-ink/80">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-5 border-t border-line pt-4">
                  <span className="block font-semibold text-ink">{t.name}</span>
                  <span className="text-sm text-ink/55">{t.program} Graduate</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
