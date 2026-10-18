import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/sections/PageHero";
import { Accordion } from "@/components/sections/Accordion";
import { ContactForm } from "@/components/forms/ContactForm";
import { contactContent, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with TC-Learning Studioz — for students, employers, or general inquiries.",
};

export default function ContactPage() {
  const { hero, form, faq } = contactContent;

  return (
    <>
      <PageHero eyebrow={hero.eyebrow} headline={hero.headline} subheadline={hero.subheadline} />

      <section className="bg-white py-20">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <h2 className="font-heading text-2xl font-bold text-ink">Contact Details</h2>
            <ul className="mt-6 space-y-5">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-5 shrink-0 text-plum" aria-hidden />
                <span className="text-[15px] text-ink/75">
                  {site.address.line1}, {site.address.line2}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 size-5 shrink-0 text-plum" aria-hidden />
                <a href={`tel:${site.phone.replace(/\s+/g, "")}`} className="focus-ring text-[15px] text-ink/75 hover:text-plum">
                  {site.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 size-5 shrink-0 text-plum" aria-hidden />
                <a href={`mailto:${site.email.general}`} className="focus-ring text-[15px] text-ink/75 hover:text-plum">
                  {site.email.general}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 size-5 shrink-0 text-plum" aria-hidden />
                <div className="text-[15px] text-ink/75">
                  <p>{site.hours.weekdays}</p>
                  <p>{site.hours.saturday}</p>
                  <p>{site.hours.sunday}</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h2 className="font-heading text-2xl font-bold text-ink">{form.heading}</h2>
            <p className="mt-2 mb-7 text-ink/65">{form.subheading}</p>
            <ContactForm />
          </div>
        </Container>
      </section>

      <section className="bg-paper py-20">
        <Container className="max-w-3xl">
          <h2 className="mb-8 text-center font-heading text-3xl font-bold text-ink">{faq.heading}</h2>
          <Accordion items={faq.items} />
        </Container>
      </section>
    </>
  );
}
