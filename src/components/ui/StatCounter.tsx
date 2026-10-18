"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Displays a stat value. If the value is purely numeric (e.g. "500" or
 * "100") it counts up from zero once the element scrolls into view.
 * Mixed values (e.g. "16–25", "5+") are shown as-is — counting up doesn't
 * make sense for a range or a value with a suffix that isn't a plain digit
 * run, so we only animate what can be animated honestly.
 */
export function StatCounter({ value, label }: { value: string; label: string }) {
  const match = value.match(/^(\d+)(.*)$/);
  const numeric = match ? parseInt(match[1], 10) : null;
  const suffix = match ? match[2] : "";

  const ref = useRef<HTMLDivElement>(null);
  const [display, setDisplay] = useState(numeric === null ? value : "0");
  const started = useRef(false);

  useEffect(() => {
    if (numeric === null || !ref.current) return;
    const el = ref.current;
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1000;
          const start = performance.now();
          const tick = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            setDisplay(Math.floor(progress * numeric).toString());
            if (progress < 1) requestAnimationFrame(tick);
            else setDisplay(numeric.toString());
          };
          requestAnimationFrame(tick);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [numeric]);

  return (
    <div ref={ref} className="text-center">
      <div className="mb-1 font-heading text-4xl font-bold leading-none text-plum md:text-5xl">
        {display}
        {suffix}
      </div>
      <div className="text-sm font-medium uppercase tracking-wider text-ink/60">{label}</div>
    </div>
  );
}
