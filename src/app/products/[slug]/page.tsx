import { ArrowRight, Check } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { productMockups } from "@/components/mockups";
import { ProductCard } from "@/components/sections/ProductCard";
import { DemoCta } from "@/components/sections/DemoCta";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { IconBadge } from "@/components/ui/IconBadge";
import { JsonLd } from "@/components/ui/JsonLd";
import { Section, SectionHeading } from "@/components/ui/Section";
import { getProduct, products } from "@/content/products";
import { siteConfig } from "@/content/site";
import { absoluteUrl, buildMetadata } from "@/lib/seo";

type Params = { slug: string };

export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return buildMetadata({
    title: product.seo.title,
    description: product.seo.description,
    path: `/products/${product.slug}`,
  });
}

export default async function ProductPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const mock = productMockups[product.theme];
  const Primary = mock.primary;
  const Secondary = mock.secondary;
  const Icon = product.icon;
  const demoLink = `/contact?type=demo&product=${product.theme}#contact-form`;
  const enquiryLink = `/contact?type=enquiry&product=${product.theme}#contact-form`;
  const others = products.filter((p) => p.slug !== product.slug);

  return (
    <div data-product={product.theme}>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: product.name,
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web",
          description: product.summary,
          url: absoluteUrl(`/products/${product.slug}`),
          publisher: { "@type": "Organization", name: siteConfig.name },
        }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-accent-soft">
        <div className="bg-grid mask-fade-bottom absolute inset-0" aria-hidden="true" />
        <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-accent/20 blur-3xl" aria-hidden="true" />
        <Container className="relative grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-[0.9fr_1.1fr] lg:py-24">
          <div className="animate-fade-up">
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center gap-2 text-sm text-muted">
                <li>
                  <Link href="/products" className="hover:text-ink">
                    Products
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li aria-current="page" className="font-medium text-ink">
                  {product.shortName}
                </li>
              </ol>
            </nav>
            <IconBadge icon={Icon} className="h-12 w-12 bg-accent text-white" />
            <h1 className="mt-5 text-balance text-4xl font-extrabold leading-[1.1] sm:text-5xl">{product.name}</h1>
            <p className="mt-4 text-xl font-medium text-accent-ink">{product.tagline}</p>
            <p className="mt-5 max-w-xl text-pretty text-lg leading-8 text-muted">{product.summary}</p>
            
            {/* Quick Impact Stats */}
            {product.stats && product.stats.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-4 pt-2">
                {product.stats.map((s) => (
                  <div key={s.label} className="rounded-xl border border-line bg-white/80 px-4 py-2 backdrop-blur-sm">
                    <div className="text-lg font-black text-accent-strong">{s.value}</div>
                    <div className="text-xs font-semibold text-muted">{s.label}</div>
                  </div>
                ))}
              </div>
            )}

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={demoLink} size="lg">
                Request a demo
              </ButtonLink>
              <ButtonLink href={enquiryLink} variant="secondary" size="lg">
                Product enquiry
              </ButtonLink>
            </div>
          </div>

          <div className="animate-fade-up animate-delay-2 relative">
            <div className="overflow-hidden rounded-2xl border border-line/80 bg-slate-900 shadow-2xl shadow-accent/20 ring-1 ring-white/10">
              <div className="flex items-center justify-between border-b border-white/10 bg-slate-950 px-4 py-3">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
                </div>
                <div className="flex items-center gap-1.5 rounded-md bg-white/10 px-3 py-0.5 text-xs font-mono text-slate-300">
                  <span className="text-cyan-400">https://</span>app.navira.io/{product.slug}
                </div>
                <span className="inline-flex items-center rounded-full bg-accent/20 px-2.5 py-0.5 text-[10px] font-semibold text-accent-soft uppercase tracking-wider">
                  Live Preview
                </span>
              </div>
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src={product.image}
                  alt={`${product.name} dashboard interface`}
                  width={1200}
                  height={750}
                  priority
                  className="h-full w-full object-cover object-top"
                />
              </div>
            </div>
            <p className="mt-3 text-center text-xs text-muted">High-resolution platform preview &middot; {product.shortName} by NAVIRA</p>
          </div>
        </Container>
      </section>

      {/* Introduction */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
          <div>
            <SectionHeading eyebrow="Overview" title={`What ${product.shortName} does`} />
            <div className="mt-6 space-y-4 text-base leading-7 text-muted">
              {product.intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
          <div className="self-start rounded-2xl border border-line bg-accent-soft/60 p-6">
            <h3 className="text-base font-bold">Who it is for</h3>
            <ul className="mt-4 space-y-3">
              {product.audience.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-ink">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Key features */}
      <Section tone="surface">
        <SectionHeading
          eyebrow="Key features"
          title={`Everything ${product.shortName} gives your team.`}
        />
        <div className="mt-12">
          <FeatureGrid items={product.features} columns={4} />
        </div>
      </Section>

      {/* Dashboard interactive previews */}
      <Section>
        <SectionHeading
          eyebrow="Interactive Interface Modules"
          title="Designed for daily operational clarity."
          description={mock.primaryCaption}
        />
        <div className="mt-12 space-y-8">
          <div className="rounded-2xl border border-line bg-white p-4 shadow-sm">
            <Primary />
            <p className="mt-3 text-center text-xs text-muted">{mock.primaryCaption}</p>
          </div>
          <div className="rounded-2xl border border-line bg-white p-4 shadow-sm">
            <Secondary />
            <p className="mt-3 text-center text-xs text-muted">{mock.secondaryCaption}</p>
          </div>
        </div>
      </Section>

      {/* Benefits */}
      <Section tone="accent" className="overflow-hidden">
        <div className="bg-grid-light absolute inset-0 opacity-50" aria-hidden="true" />
        <div className="relative">
          <SectionHeading eyebrow="Benefits" title="What changes once it is in place." invert />
          <ul className="mt-12 grid gap-5 sm:grid-cols-2">
            {product.benefits.map((benefit) => (
              <li key={benefit.title} className="flex gap-4 rounded-2xl border border-white/15 bg-white/[0.07] p-6">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-accent-strong">
                  <Check className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-base font-bold text-white">{benefit.title}</h3>
                  <p className="mt-1.5 text-sm leading-6 text-white/75">{benefit.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Use cases */}
      <Section>
        <SectionHeading eyebrow="Use cases" title="Where it fits best." />
        <div className="mt-12">
          <FeatureGrid items={product.useCases} columns={4} />
        </div>
      </Section>

      <DemoCta
        title={`See ${product.shortName} in action.`}
        description="Book a guided demonstration with our team and bring your own scenarios and questions."
        demoLink={demoLink}
        demoLabel={`Request ${product.shortName} demo`}
      />

      {/* Other products */}
      <Section tone="surface">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading eyebrow="More products" title="Explore the rest of the suite." />
          <Link href="/products" className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:underline">
            All products
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {others.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </Section>
    </div>
  );
}
