import { Check } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/layout/PageHero";
import { DemoCta } from "@/components/sections/DemoCta";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { ButtonLink } from "@/components/ui/Button";
import { JsonLd } from "@/components/ui/JsonLd";
import { Section, SectionHeading } from "@/components/ui/Section";
import { workProcess } from "@/content/home";
import { getService, services } from "@/content/services";
import { siteConfig } from "@/content/site";
import { absoluteUrl, buildMetadata } from "@/lib/seo";

type Params = { slug: string };

export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return buildMetadata({
    title: service.seo.title,
    description: service.seo.description,
    path: `/services/${service.slug}`,
  });
}

export default async function ServicePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const others = services.filter((s) => s.slug !== service.slug).slice(0, 3);
  const contactLink = "/contact?type=contact#contact-form";

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: service.title,
          description: service.summary,
          url: absoluteUrl(`/services/${service.slug}`),
          provider: { "@type": "Organization", name: siteConfig.name },
        }}
      />
      <PageHero
        eyebrow="Service"
        title={service.title}
        description={service.summary}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.title },
        ]}
      >
        <ButtonLink href={contactLink} variant="light" size="lg">
          Discuss your requirements
        </ButtonLink>
      </PageHero>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
          <div>
            <SectionHeading eyebrow="Overview" title="How we can help" />
            <p className="mt-6 text-base leading-7 text-muted">{service.intro}</p>

            <h3 className="mt-10 text-lg font-bold">What you get</h3>
            <ul className="mt-5 space-y-3">
              {service.deliverables.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[15px] text-ink">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-soft text-brand">
                    <Check className="h-3 w-3" aria-hidden="true" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <aside className="self-start rounded-2xl border border-line bg-surface p-6">
            <h3 className="text-base font-bold">Typical technologies</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {service.technologies.map((tech) => (
                <li key={tech} className="rounded-lg bg-white px-3 py-1.5 text-sm font-medium text-ink ring-1 ring-line">
                  {tech}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-xs leading-5 text-muted">
              We choose the stack that suits your project and your team, not the other way round.
            </p>
          </aside>
        </div>
      </Section>

      <Section tone="surface">
        <SectionHeading eyebrow="Our process" title="A clear path from requirement to release." />
        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {workProcess.map((step, i) => (
            <li key={step.title} className="relative border-t-2 border-brand/20 pt-5">
              <span className="absolute -top-px left-0 h-0.5 w-10 bg-brand" aria-hidden="true" />
              <div className="text-xs font-bold tracking-widest text-brand">0{i + 1}</div>
              <h3 className="mt-2 text-base font-bold">{step.title}</h3>
              <p className="mt-1.5 text-sm leading-6 text-muted">{step.description}</p>
            </li>
          ))}
        </ol>
      </Section>

      <DemoCta
        title={`Talk to us about ${service.title.toLowerCase()}.`}
        description="Share your requirements and we will respond with an approach, a realistic plan and the questions we would want answered first."
        demoLink={contactLink}
        demoLabel="Contact our team"
      />

      <Section tone="surface">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading eyebrow="More services" title="Related services" />
          <Link href="/services" className="text-sm font-semibold text-brand hover:underline">
            All services
          </Link>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {others.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
      </Section>
    </>
  );
}
