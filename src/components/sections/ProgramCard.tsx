import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Program } from "@/lib/content";
import { programIcons } from "@/lib/programIcons";

export function ProgramCard({ program }: { program: Program }) {
  const Icon = programIcons[program.id];
  return (
    <Link
      href={`/programs/${program.slug}`}
      className="focus-ring group flex flex-col justify-between rounded-sm border border-line bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
      style={{ borderLeftWidth: 4, borderLeftColor: program.color }}
    >
      <div>
        <div className="mb-4 flex items-center gap-3">
          <div
            className="flex size-9 shrink-0 items-center justify-center rounded-sm"
            style={{ backgroundColor: `${program.color}1f` }}
          >
            {Icon && <Icon className="size-[18px]" style={{ color: program.color }} aria-hidden />}
          </div>
          <span
            className="rounded-sm px-2.5 py-1 text-xs font-semibold"
            style={{ color: program.color, border: `1px solid ${program.color}44` }}
          >
            {program.tag}
          </span>
        </div>
        <h3 className="font-heading text-xl font-semibold leading-tight text-ink">{program.name}</h3>
        <p className="mb-5 mt-2 text-sm leading-relaxed text-ink/65">{program.tagline}</p>
      </div>
      <span
        className="inline-flex items-center gap-1.5 text-sm font-semibold"
        style={{ color: program.color }}
      >
        Learn more <ChevronRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden />
      </span>
    </Link>
  );
}
