"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import clsx from "clsx";

export function Accordion({ items }: { items: { question: string; answer: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-line rounded-sm border border-line bg-white">
      {items.map((item, i) => {
        const open = openIndex === i;
        return (
          <div key={item.question}>
            <h3>
              <button
                type="button"
                className="focus-ring flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                aria-expanded={open}
                aria-controls={`faq-panel-${i}`}
                onClick={() => setOpenIndex(open ? null : i)}
              >
                <span className="font-medium text-ink">{item.question}</span>
                <ChevronDown
                  className={clsx("size-5 shrink-0 text-plum transition-transform duration-200", open && "rotate-180")}
                  aria-hidden
                />
              </button>
            </h3>
            <div
              id={`faq-panel-${i}`}
              role="region"
              className={clsx("grid overflow-hidden transition-all duration-200", open ? "grid-rows-[1fr] pb-4" : "grid-rows-[0fr]")}
            >
              <div className="min-h-0 px-5 text-sm leading-relaxed text-ink/70">{item.answer}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
