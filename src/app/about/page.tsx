import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { aboutContent } from "@/lib/content";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about TC-Learning Studioz's mission, story, and the team building vocational training pathways for young adults.",
};

export default function AboutPage() {
  const { hero, story, mission, team, cta } = aboutContent;

  return (
    <>
      <section className="relative overflow-hidden bg-plum text-white">
        <Image
          src={images.aboutHero.src}
          alt={images.aboutHero.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-50"
          style={{ objectPosition: images.aboutHero.position }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-plum via-plum/85 to-plum/20" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-plum-dark/60 via-transparent to-transparent" />
        <Container className="relative py-16 md:py-20">
          <div className="max-w-3xl">
            <Eyebrow className="text-coral">{hero.eyebrow}</Eyebrow>
            <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
              {hero.headline}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/85">{hero.subheadline}</p>
          </div>
        </Container>
      </section>

      {/* Story */}
      <section className="bg-white py-20">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="font-heading text-3xl font-bold text-ink">{story.heading}</h2>
            <div className="mt-6 space-y-5">
              {story.paragraphs.map((p, i) => (
                <p key={i} className="text-[15px] leading-relaxed text-ink/75">
                  {p}
                </p>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 self-start rounded-sm bg-plum-tint p-6">
            <div className="relative -mx-6 -mt-6 mb-2 aspect-[16/10] overflow-hidden rounded-t-sm">
              <Image
                src={images.workshop.src}
                alt={images.workshop.alt}
                fill
                sizes="(min-width: 1024px) 33vw, 100vw"
                className="object-cover"
                style={{ objectPosition: images.workshop.position }}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-plum/50 to-transparent" />
            </div>
            {story.stats.map((s) => (
              <div key={s.label} className="border-b border-plum/15 pb-4 last:border-0 last:pb-0">
                <div className="font-heading text-3xl font-bold text-plum">{s.value}</div>
                <div className="text-sm text-ink/60">{s.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Mission / Vision / Values */}
      <section className="bg-paper py-20">
        <Container>
          <h2 className="mb-10 text-center font-heading text-3xl font-bold text-ink sm:text-4xl">
            {mission.heading}
          </h2>
          <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="rounded-sm bg-ink p-8 text-white">
              <Eyebrow className="text-coral">{mission.mission.label}</Eyebrow>
              <p className="text-[15px] leading-relaxed text-white/85">{mission.mission.text}</p>
            </div>
            <div className="rounded-sm bg-plum p-8 text-white">
              <Eyebrow className="text-lavender">{mission.vision.label}</Eyebrow>
              <p className="text-[15px] leading-relaxed text-white/85">{mission.vision.text}</p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {mission.values.map((v) => (
              <div key={v.title} className="rounded-sm border border-line bg-white p-6">
                <h3 className="font-heading text-lg font-semibold text-ink">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/65">{v.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Team */}
      <section className="bg-white py-20">
        <Container>
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="font-heading text-3xl font-bold text-ink sm:text-4xl">{team.heading}</h2>
            <p className="mt-3 text-ink/65">{team.subheading}</p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.members.map((m) => (
              <div key={m.name} className="rounded-sm border border-line bg-paper p-6 text-center">
                <div className="mx-auto mb-4 flex size-20 items-center justify-center rounded-full bg-plum-tint font-heading text-xl font-bold text-plum">
                  {m.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <h3 className="font-heading text-base font-semibold text-ink">{m.name}</h3>
                <p className="mb-3 text-sm font-medium text-plum">{m.role}</p>
                <p className="text-sm leading-relaxed text-ink/60">{m.bio}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-plum py-16 text-center text-white">
        <Container className="max-w-2xl">
          <h2 className="font-heading text-3xl font-bold sm:text-4xl">{cta.heading}</h2>
          <p className="mt-3 text-white/80">{cta.subheading}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href="/enroll" variant="inverse">
              {cta.ctaEnroll}
            </Button>
            <Button href="/apprenticeships" variant="outline-light">
              {cta.ctaPartner}
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
