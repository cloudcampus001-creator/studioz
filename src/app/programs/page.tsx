import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/sections/PageHero";
import { ProgramCard } from "@/components/sections/ProgramCard";
import { programs } from "@/lib/content";

export const metadata: Metadata = {
  title: "Programs",
  description: "Explore our five hands-on vocational training programs, from Agrientrepreneurship to Technical Trades.",
};

export default function ProgramsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Programs"
        headline="Five Disciplines."
        headlineAccent="One Path to a Skilled Career."
        subheadline="Every program pairs structured, expert-led training with a real apprenticeship placement — so you graduate with a portfolio, not just a certificate."
      />
      <section className="bg-white py-16">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-6">
            {programs.map((p, i) => (
              <ProgramCard key={p.id} program={p} wide={i >= 3} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}



