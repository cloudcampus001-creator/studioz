import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center bg-white py-20">
      <Container className="text-center">
        <p className="font-heading text-sm font-semibold uppercase tracking-widest text-plum">404 Error</p>
        <h1 className="mt-3 font-heading text-4xl font-bold text-ink sm:text-5xl">Page Not Found</h1>
        <p className="mx-auto mt-4 max-w-md text-ink/65">
          The page you&apos;re looking for doesn&apos;t exist or may have moved.
        </p>
        <div className="mt-8 flex justify-center">
          <Button href="/">Back to Home</Button>
        </div>
      </Container>
    </section>
  );
}
