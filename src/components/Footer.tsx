import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import { FaFacebookF, FaInstagram, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { Container } from "@/components/ui/Container";
import { site, programs } from "@/lib/content";

const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "Apprenticeships", href: "/apprenticeships" },
  { label: "Enroll Now", href: "/enroll" },
  { label: "Contact", href: "/contact" },
];

const socials = [
  { label: "Facebook", href: site.social.facebook, Icon: FaFacebookF },
  { label: "Instagram", href: site.social.instagram, Icon: FaInstagram },
  { label: "Twitter", href: site.social.twitter, Icon: FaXTwitter },
  { label: "YouTube", href: site.social.youtube, Icon: FaYoutube },
];

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t border-line bg-ink text-white">
      <Container className="grid grid-cols-1 gap-10 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <Link href="/" className="mb-5 inline-flex items-center gap-2.5">
            <span className="flex size-9 items-center justify-center rounded-sm bg-plum font-heading text-base font-bold text-white">
              TC
            </span>
            <span className="font-heading text-base font-bold leading-tight text-white">
              Learning Studioz
            </span>
          </Link>
          <p className="mb-6 text-sm leading-relaxed text-white/60">
            Transforming young talent into skilled professionals through hands-on vocational
            training.
          </p>
          <div className="flex items-center gap-3">
            {socials.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="focus-ring flex size-9 items-center justify-center rounded-sm bg-white/10 text-white/70 transition-all duration-200 hover:bg-plum hover:text-white"
              >
                <Icon className="size-4" aria-hidden />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-5 text-sm font-semibold uppercase tracking-widest text-white/50">
            Programs
          </h3>
          <ul className="space-y-3">
            {programs.map((p) => (
              <li key={p.id}>
                <Link
                  href={`/programs/${p.slug}`}
                  className="focus-ring text-sm text-white/70 transition-colors duration-200 hover:text-white"
                >
                  {p.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-5 text-sm font-semibold uppercase tracking-widest text-white/50">
            Quick Links
          </h3>
          <ul className="space-y-3">
            {quickLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="focus-ring text-sm text-white/70 transition-colors duration-200 hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-5 text-sm font-semibold uppercase tracking-widest text-white/50">
            Contact
          </h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-lavender" aria-hidden />
              <span className="text-sm text-white/70">
                {site.address.line1}, {site.address.line2}
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="size-4 shrink-0 text-lavender" aria-hidden />
              <a href={`tel:${site.phone.replace(/\s+/g, "")}`} className="focus-ring text-sm text-white/70 hover:text-white">
                {site.phone}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="size-4 shrink-0 text-lavender" aria-hidden />
              <a href={`mailto:${site.email.general}`} className="focus-ring text-sm text-white/70 hover:text-white">
                {site.email.general}
              </a>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-3 py-5 text-xs text-white/50 sm:flex-row">
          <p>
            © {currentYear} {site.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link href="/privacy" className="focus-ring hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="focus-ring hover:text-white">
              Terms of Use
            </Link>
          </div>
        </Container>
      </div>
    </footer>
  );
}
