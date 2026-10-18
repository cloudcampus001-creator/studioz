import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Clock, Layers, GraduationCap, CheckCircle2, BookOpen } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { programs } from "@/lib/content";
import { programIcons } from "@/lib/programIcons";
import { programImageMap } from "@/lib/images";

export function generateStaticParams() {
  return programs.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const program = programs.find((p) => p.slug === slug);
  if (!program) return {};
  return {
    title: program.name,
    description: program.description,
  };
}

export default async function ProgramDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const program = programs.find((p) => p.slug === slug);
  if (!program) notFound();

  const Icon = programIcons[program.id];
  const image = programImageMap[program.id];
  const otherPrograms = programs.filter((p) => p.id !== program.id);

  return (
    <>
      <section className="relative overflow-hidden text-white" style={{ backgroundColor: program.color }}>
        {image && (
          <>
            <Image
              src={image.src}
              alt={image.alt}
              fill
              priority
              sizes="100vw"
              className="object-cover opacity-60"
              style={{ objectPosition: image.position }}
            />
            {/* Program-colour gradient: solid on the text side, clearing to the photo */}
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                backgroundImage: `linear-gradient(90deg, ${program.color} 0%, ${program.color}E6 38%, ${program.color}55 100%)`,
              }}
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-transparent" />
          </>
        )}
        <Container className="relative py-16 md:py-24">
          <div className="flex items-center gap-3">
            {Icon && (
              <span className="flex size-12 items-center justify-center rounded-sm bg-white/15">
                <Icon className="size-6" aria-hidden />
              </span>
            )}
            <Eyebrow className="mb-0 text-white/85">{program.tag}</Eyebrow>
          </div>
          <h1 className="mt-5 font-heading text-4xl font-bold leading-tight sm:text-5xl">{program.name}</h1>
          <p className="mt-4 max-w-2xl text-lg text-white/85">{program.tagline}</p>
        </Container>
      </section>

      <section className="bg-white py-16">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <p className="text-lg leading-relaxed text-ink/75">{program.description}</p>

            <h2 className="mt-10 font-heading text-2xl font-bold text-ink">Program Modules</h2>
            <ul className="mt-5 space-y-3">
              {program.modules.map((m) => (
                <li key={m} className="flex items-start gap-3 rounded-sm border border-line bg-paper p-4">
                  <BookOpen className="mt-0.5 size-5 shrink-0" style={{ color: program.color }} aria-hidden />
                  <span className="text-[15px] text-ink/80">{m}</span>
                </li>
              ))}
            </ul>

            <h2 className="mt-10 font-heading text-2xl font-bold text-ink">What You&apos;ll Gain</h2>
            <ul className="mt-5 space-y-3">
              {program.outcomes.map((o) => (
                <li key={o} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-plum" aria-hidden />
                  <span className="text-[15px] text-ink/80">{o}</span>
                </li>
              ))}
            </ul>
          </div>

          <aside className="lg:col-span-1">
            <div className="sticky top-28 rounded-sm border border-line bg-paper p-6">
              <h3 className="font-heading text-lg font-semibold text-ink">Program Details</h3>
              <dl className="mt-5 space-y-4">
                <div className="flex items-start gap-3">
                  <Clock className="mt-0.5 size-5 shrink-0 text-plum" aria-hidden />
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wide text-ink/50">Duration</dt>
                    <dd className="text-sm font-medium text-ink">{program.duration}</dd>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Layers className="mt-0.5 size-5 shrink-0 text-plum" aria-hidden />
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wide text-ink/50">Format</dt>
                    <dd className="text-sm font-medium text-ink">{program.format}</dd>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <GraduationCap className="mt-0.5 size-5 shrink-0 text-plum" aria-hidden />
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wide text-ink/50">Level</dt>
                    <dd className="text-sm font-medium text-ink">{program.level}</dd>
                  </div>
                </div>
              </dl>
              <Button href={`/enroll?program=${encodeURIComponent(program.name)}`} className="mt-7 w-full">
                Apply to This Program
              </Button>
            </div>
          </aside>
        </Container>
      </section>

      <section className="border-t border-line bg-paper py-16">
        <Container>
          <h2 className="mb-8 font-heading text-2xl font-bold text-ink">Explore Other Programs</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {otherPrograms.map((p) => {
              const thumb = programImageMap[p.id];
              return (
                <Link
                  key={p.id}
                  href={`/programs/${p.slug}`}
                  className="focus-ring group overflow-hidden rounded-sm border border-line bg-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
                >
                  {thumb && (
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={thumb.src}
                        alt={thumb.alt}
                        fill
                        sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                        style={{ objectPosition: thumb.position }}
                      />
                      <div
                        className="pointer-events-none absolute inset-x-0 bottom-0 h-1"
                        style={{ backgroundColor: p.color }}
                      />
                    </div>
                  )}
                  <div className="p-4">
                    <span className="text-xs font-semibold uppercase tracking-wide" style={{ color: p.color }}>
                      {p.tag}
                    </span>
                    <p className="mt-1 font-heading text-sm font-semibold text-ink">{p.name}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>
    </>
  );
}



