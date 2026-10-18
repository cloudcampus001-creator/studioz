import { Container } from "@/components/ui/Container";
import { StatCounter } from "@/components/ui/StatCounter";

export function StatBar({ stats }: { stats: { id?: string; label: string; value: string }[] }) {
  return (
    <section className="border-y border-line bg-white py-12">
      <Container>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((s) => (
            <StatCounter key={s.id ?? s.label} value={s.value} label={s.label} />
          ))}
        </div>
      </Container>
    </section>
  );
}
