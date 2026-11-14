import { MessageCircle } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { demoHref } from "@/content/site";
import { whatsappLink } from "@/lib/whatsapp";

/** Full-width "request a demo" banner. Inherits the page's product accent when inside a data-product wrapper. */
export function DemoCta({
  title,
  description,
  demoLink = demoHref,
  demoLabel = "Request a demo",
}: {
  title: string;
  description: string;
  demoLink?: string;
  demoLabel?: string;
}) {
  return (
    <section className="bg-white py-20 sm:py-24">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-ink px-6 py-14 text-white sm:px-12 sm:py-16">
          <div className="bg-grid-light absolute inset-0 opacity-60" aria-hidden="true" />
          <div className="absolute -left-20 -top-24 h-80 w-80 rounded-full bg-accent/50 blur-3xl" aria-hidden="true" />
          <div className="absolute -bottom-32 right-0 h-80 w-80 rounded-full bg-accent-strong/80 blur-3xl" aria-hidden="true" />
          <div className="relative mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-3xl font-bold leading-tight sm:text-4xl">{title}</h2>
            <p className="mt-4 text-pretty text-base leading-7 text-white/75 sm:text-lg">{description}</p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <ButtonLink href={demoLink} variant="light" size="lg">
                {demoLabel}
              </ButtonLink>
              <ButtonLink href={whatsappLink()} variant="outlineLight" size="lg" external>
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                Chat on WhatsApp
              </ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
