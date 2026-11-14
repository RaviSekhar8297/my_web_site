import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Page not found",
  description: "The page you are looking for does not exist.",
  noIndex: true,
});

export default function NotFound() {
  return (
    <section className="bg-surface py-28">
      <Container className="text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-brand">Error 404</p>
        <h1 className="mt-3 text-4xl font-bold">We could not find that page.</h1>
        <p className="mx-auto mt-4 max-w-md text-muted">
          The link may be out of date or the page may have moved. Try one of these instead.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <ButtonLink href="/" size="lg">
            Go to home
          </ButtonLink>
          <ButtonLink href="/products" variant="secondary" size="lg">
            View products
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
