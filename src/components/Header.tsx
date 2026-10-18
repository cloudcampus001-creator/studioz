"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { NotchDivider } from "@/components/ui/NotchDivider";
import { site } from "@/lib/content";

const navLinks = [
  { label: "Programs", href: "/programs" },
  { label: "Apprenticeships", href: "/apprenticeships" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      {/* Utility strip — quick contact details, mirrors Warwick's utility bar */}
      <div className="hidden bg-ink text-white/80 sm:block">
        <Container className="flex items-center justify-end gap-6 py-1.5 text-xs">
          <a href={`tel:${site.phone.replace(/\s+/g, "")}`} className="flex items-center gap-1.5 hover:text-white">
            <Phone className="size-3" aria-hidden /> {site.phone}
          </a>
          <a href={`mailto:${site.email.general}`} className="flex items-center gap-1.5 hover:text-white">
            <Mail className="size-3" aria-hidden /> {site.email.general}
          </a>
        </Container>
      </div>

      {/* Masthead */}
      <div className={scrolled ? "bg-white shadow-sm" : "bg-white"}>
        <Container className="flex h-16 items-center justify-between md:h-20">
          <Link href="/" className="flex min-w-0 shrink-0 items-center gap-2.5 focus-ring rounded-sm">
            <span className="flex size-9 items-center justify-center rounded-sm bg-plum font-heading text-base font-bold text-white">
              TC
            </span>
            <span className="font-heading text-[15px] font-bold leading-tight text-ink sm:text-base">
              Learning
              <br className="hidden sm:block" /> Studioz
            </span>
          </Link>

          <nav aria-label="Main navigation" className="hidden items-center gap-8 md:flex">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="focus-ring rounded-sm text-sm font-medium tracking-wide text-ink/80 transition-colors duration-200 hover:text-plum"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/enroll"
              className="focus-ring rounded-sm bg-plum px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-plum-dark hover:shadow-lg hover:shadow-plum/25"
            >
              Enroll Now
            </Link>
          </nav>

          <button
            className="focus-ring rounded-sm p-2 text-ink md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </Container>

        {open && (
          <div className="border-t border-line md:hidden">
            <Container className="flex flex-col gap-1 py-4">
              {navLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="focus-ring rounded-sm px-2 py-2.5 text-base font-medium text-ink/85 hover:text-plum"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </Link>
              ))}
              <Link
                href="/enroll"
                className="focus-ring mt-2 rounded-sm bg-plum px-4 py-3 text-center text-base font-semibold text-white"
                onClick={() => setOpen(false)}
              >
                Enroll Now
              </Link>
            </Container>
          </div>
        )}
      </div>

      <NotchDivider className="bg-white" color="#383838" />
    </header>
  );
}
