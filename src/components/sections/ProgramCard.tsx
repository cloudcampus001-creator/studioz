import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import { ChevronRight } from "lucide-react";
import { Program } from "@/lib/content";
import { programIcons } from "@/lib/programIcons";
import { programImageMap } from "@/lib/images";

export function ProgramCard({ program, wide = false }: { program: Program; wide?: boolean }) {
  const Icon = programIcons[program.id];
  const image = programImageMap[program.id];

  return (
    <Link
      href={`/programs/${program.slug}`}
      className={clsx(
        "focus-ring group relative flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-sm shadow-sm transition-shadow duration-300 hover:shadow-xl",
        wide ? "lg:col-span-3 lg:aspect-[7/5]" : "lg:col-span-2",
      )}
    >
      {image && (
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes={wide ? "(min-width: 1024px) 50vw, 100vw" : "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"}
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
          style={{ objectPosition: image.position }}
        />
      )}

      {/* Gradient overlay: dark at bottom for text legibility, program color wash on hover */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/35 to-transparent" />
      <div
        className="pointer-events-none absolute inset-0 opacity-0 mix-blend-multiply transition-opacity duration-300 group-hover:opacity-40"
        style={{ backgroundColor: program.color }}
      />

      {/* Top-left tag + icon */}
      <div className="absolute left-5 top-5 flex items-center gap-2.5">
        <span className="flex size-9 items-center justify-center rounded-sm bg-white/15 backdrop-blur-sm">
          {Icon && <Icon className="size-[18px] text-white" aria-hidden />}
        </span>
        <span className="rounded-sm bg-white/15 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur-sm">
          {program.tag}
        </span>
      </div>

      {/* Bottom content */}
      <div className="relative p-6 text-white">
        <h3 className="font-heading text-xl font-semibold leading-tight">{program.name}</h3>
        <p className="mb-4 mt-2 text-sm leading-relaxed text-white/85">{program.tagline}</p>
        <span className="inline-flex items-center gap-1.5 text-sm font-semibold">
          Learn more
          <ChevronRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden />
        </span>
      </div>
    </Link>
  );
}
