import type { Metadata } from "next";
import { Suspense } from "react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/sections/PageHero";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { EnrollFormSection } from "@/components/forms/EnrollFormSection";
import { enrollContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "Enroll Now",
  description: "Apply to a TC-Learning Studioz vocational training program today.",
};

export default function EnrollPage() {
  const { hero, steps, eligibility, form } = enrollContent;

  return (
    <>
      <PageHero eyebrow={hero.eyebrow} headline={hero.headline} headlineAccent={hero.headlineAccent} subheadline={hero.subheadline} />

      <section className="bg-white py-20">
        <Container>
          <h2 className="mb-12 text-center font-heading text-3xl font-bold text-ink sm:text-4xl">
            {steps.heading}
          </h2>
          <ProcessSteps steps={steps.items} />
        </Container>
      </section>

      <section className="bg-paper py-16">
        <Container className="max-w-3xl">
          <h2 className="font-heading text-2xl font-bold text-ink sm:text-3xl">{eligibility.heading}</h2>
          <ul className="mt-6 space-y-3">
            {eligibility.items.map((item) => (
              <li key={item} className="flex items-start gap-3 rounded-sm border border-line bg-white p-4 text-sm text-ink/75">
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container className="max-w-2xl">
          <h2 className="font-heading text-2xl font-bold text-ink sm:text-3xl">{form.heading}</h2>
          <p className="mt-3 mb-8 text-ink/65">{form.subheading}</p>
          <Suspense fallback={<div className="h-96 animate-pulse rounded-sm bg-paper" />}>
            <EnrollFormSection />
          </Suspense>
        </Container>
      </section>
    </>
  );
}
