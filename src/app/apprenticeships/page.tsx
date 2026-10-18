import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/sections/PageHero";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { ApprenticeshipForm } from "@/components/forms/ApprenticeshipForm";
import { apprenticeshipsContent } from "@/lib/content";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Apprenticeships for Employers",
  description: "Partner with TC-Learning Studioz to host apprentices and build your talent pipeline.",
};

export default function ApprenticeshipsPage() {
  const { hero, whyPartner, howItWorks, partners, form } = apprenticeshipsContent;

  return (
    <>
      <PageHero eyebrow={hero.eyebrow} headline={hero.headline} headlineAccent={hero.headlineAccent} subheadline={hero.subheadline} image={images.employers} />

      {/* Why partner */}
      <section className="bg-white py-20">
        <Container>
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="font-heading text-3xl font-bold text-ink sm:text-4xl">{whyPartner.heading}</h2>
            <p className="mt-3 text-ink/65">{whyPartner.subheading}</p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyPartner.benefits.map((b) => (
              <div key={b.title} className="rounded-sm border border-line bg-paper p-6">
                <h3 className="font-heading text-lg font-semibold text-ink">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/65">{b.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* How it works */}
      <section className="bg-paper py-20">
        <Container>
          <h2 className="mb-12 text-center font-heading text-3xl font-bold text-ink sm:text-4xl">
            {howItWorks.heading}
          </h2>
          <ProcessSteps steps={howItWorks.steps} />
        </Container>
      </section>

      {/* Partner sectors */}
      <section className="bg-ink py-16 text-white">
        <Container>
          <div className="mx-auto mb-8 max-w-2xl text-center">
            <Eyebrow className="justify-self-center text-coral">Partner Network</Eyebrow>
            <h2 className="font-heading text-2xl font-bold sm:text-3xl">{partners.heading}</h2>
            <p className="mt-3 text-white/70">{partners.subheading}</p>
          </div>
          <div className="mx-auto flex max-w-3xl flex-wrap justify-center gap-3">
            {partners.sectors.map((s) => (
              <span key={s} className="rounded-full border border-white/20 px-4 py-2 text-sm text-white/85">
                {s}
              </span>
            ))}
          </div>
        </Container>
      </section>

      {/* Form */}
      <section className="bg-white py-20">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <h2 className="font-heading text-2xl font-bold text-ink sm:text-3xl">{form.heading}</h2>
            <p className="mt-3 text-ink/65">{form.subheading}</p>
            <ul className="mt-6 space-y-3">
              {form.reassurance.map((r) => (
                <li key={r} className="flex items-center gap-2.5 text-sm text-ink/70">
                  <CheckCircle2 className="size-4 shrink-0 text-plum" aria-hidden /> {r}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-3">
            <ApprenticeshipForm />
          </div>
        </Container>
      </section>
    </>
  );
}



