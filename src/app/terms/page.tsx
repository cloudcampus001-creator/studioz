import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: `Terms of Use for ${site.name}.`,
};

export default function TermsPage() {
  return (
    <section className="bg-white py-16">
      <Container className="max-w-3xl">
        <h1 className="font-heading text-4xl font-bold text-ink">Terms of Use</h1>
        <p className="mt-2 text-sm text-ink/50">Last updated: {new Date().getFullYear()}</p>

        <div className="mt-10 space-y-8">
          <section>
            <h2 className="font-heading text-xl font-semibold text-ink">1. Acceptance of Terms</h2>
            <p className="mt-3 text-[15px] leading-relaxed text-ink/75">
              By accessing and using this website, you accept and agree to be bound by these Terms of Use.
              If you do not agree to these terms, please do not use this site.
            </p>
          </section>
          <section>
            <h2 className="font-heading text-xl font-semibold text-ink">2. Program Applications</h2>
            <p className="mt-3 text-[15px] leading-relaxed text-ink/75">
              Submitting an application through this site does not guarantee admission to a program.
              Applications are reviewed by our admissions team, and acceptance is subject to eligibility
              criteria, program capacity, and other factors communicated directly to applicants.
            </p>
          </section>
          <section>
            <h2 className="font-heading text-xl font-semibold text-ink">3. Employer Partnerships</h2>
            <p className="mt-3 text-[15px] leading-relaxed text-ink/75">
              Submitting an employer inquiry does not create a binding partnership agreement. Formal terms
              of any apprenticeship placement will be documented separately between {site.name} and the
              partnering organisation.
            </p>
          </section>
          <section>
            <h2 className="font-heading text-xl font-semibold text-ink">4. Intellectual Property</h2>
            <p className="mt-3 text-[15px] leading-relaxed text-ink/75">
              All content on this site, including text, graphics, and logos, is the property of {site.name}
              unless otherwise noted, and may not be reproduced without permission.
            </p>
          </section>
          <section>
            <h2 className="font-heading text-xl font-semibold text-ink">5. Limitation of Liability</h2>
            <p className="mt-3 text-[15px] leading-relaxed text-ink/75">
              {site.name} makes reasonable efforts to keep information on this site accurate and up to date,
              but makes no warranties about the completeness or accuracy of its content.
            </p>
          </section>
          <section>
            <h2 className="font-heading text-xl font-semibold text-ink">6. Changes to These Terms</h2>
            <p className="mt-3 text-[15px] leading-relaxed text-ink/75">
              We may update these Terms of Use from time to time. Continued use of the site after changes
              are posted constitutes acceptance of the revised terms.
            </p>
          </section>
          <section>
            <h2 className="font-heading text-xl font-semibold text-ink">7. Contact</h2>
            <p className="mt-3 text-[15px] leading-relaxed text-ink/75">
              Questions about these terms can be directed to{" "}
              <a href={`mailto:${site.email.general}`} className="text-plum underline underline-offset-2">
                {site.email.general}
              </a>
              .
            </p>
          </section>
        </div>
      </Container>
    </section>
  );
}
