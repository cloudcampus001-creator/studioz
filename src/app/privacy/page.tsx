import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${site.name}.`,
};

export default function PrivacyPage() {
  return (
    <section className="bg-white py-16">
      <Container className="max-w-3xl">
        <h1 className="font-heading text-4xl font-bold text-ink">Privacy Policy</h1>
        <p className="mt-2 text-sm text-ink/50">Last updated: {new Date().getFullYear()}</p>

        <div className="prose-content mt-10 space-y-8">
          <section>
            <h2 className="font-heading text-xl font-semibold text-ink">1. Information We Collect</h2>
            <p className="mt-3 text-[15px] leading-relaxed text-ink/75">
              When you submit an application, contact form, or employer inquiry on this site, we collect the
              information you provide directly — such as your name, email address, phone number, date of
              birth (for student applications), and any message content. We do not collect information from
              you through any other means unless you provide it to us directly.
            </p>
          </section>
          <section>
            <h2 className="font-heading text-xl font-semibold text-ink">2. How We Use Your Information</h2>
            <p className="mt-3 text-[15px] leading-relaxed text-ink/75">
              We use the information you submit to respond to your inquiry, process your application,
              evaluate employer partnership requests, and communicate with you about our programs. We do not
              sell or rent your personal information to third parties.
            </p>
          </section>
          <section>
            <h2 className="font-heading text-xl font-semibold text-ink">3. Data Storage & Retention</h2>
            <p className="mt-3 text-[15px] leading-relaxed text-ink/75">
              Form submissions are stored securely and retained only as long as necessary to process your
              request or as required by law. You may request deletion of your information at any time by
              contacting us at{" "}
              <a href={`mailto:${site.email.general}`} className="text-plum underline underline-offset-2">
                {site.email.general}
              </a>
              .
            </p>
          </section>
          <section>
            <h2 className="font-heading text-xl font-semibold text-ink">4. Cookies</h2>
            <p className="mt-3 text-[15px] leading-relaxed text-ink/75">
              This site uses a small number of cookies to remember your cookie consent choice. It does not
              use third-party advertising or tracking cookies.
            </p>
          </section>
          <section>
            <h2 className="font-heading text-xl font-semibold text-ink">5. Your Rights</h2>
            <p className="mt-3 text-[15px] leading-relaxed text-ink/75">
              You have the right to access, correct, or request deletion of the personal information we hold
              about you. To exercise these rights, contact us at{" "}
              <a href={`mailto:${site.email.general}`} className="text-plum underline underline-offset-2">
                {site.email.general}
              </a>
              .
            </p>
          </section>
          <section>
            <h2 className="font-heading text-xl font-semibold text-ink">6. Contact Us</h2>
            <p className="mt-3 text-[15px] leading-relaxed text-ink/75">
              Questions about this policy can be directed to {site.address.line1}, {site.address.line2}, or
              by phone at {site.phone}.
            </p>
          </section>
        </div>
      </Container>
    </section>
  );
}
