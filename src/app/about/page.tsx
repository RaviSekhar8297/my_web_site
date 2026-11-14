import Image from "next/image";
import { Compass, Target } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { DemoCta } from "@/components/sections/DemoCta";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { IconBadge } from "@/components/ui/IconBadge";
import { Section, SectionHeading } from "@/components/ui/Section";
import { about, expertise } from "@/content/about";
import { demoCta } from "@/content/home";
import { siteConfig } from "@/content/site";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: `About Us | ${siteConfig.name} Technology & Software`,
  description:
    "Learn about NAVIRA Technology & Software, our enterprise solutions, engineering philosophy, and commitment to operational excellence.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About NAVIRA"
        title="Enterprise technology focused on practical operational impact."
        description="We engineer business platforms and custom software that empower organizations to manage people, secure facilities, and resolve service workflows with unprecedented speed."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
      />

      {/* Brand & Corporate Presence Showcase */}
      <Section tone="surface" className="overflow-hidden">
        <SectionHeading
          eyebrow="Brand & Identity"
          title="NAVIRA Technology & Software in Action"
          description="A design philosophy that balances sophisticated aesthetics with resilient enterprise engineering."
        />
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* User's Office Wall Logo Image */}
          <div className="group relative overflow-hidden rounded-3xl border border-line bg-slate-950 shadow-md transition-all duration-300 hover:shadow-xl">
            <div className="relative aspect-[16/10] w-full">
              <Image
                src="/images/branding/navira-office-wall.jpg"
                alt="NAVIRA Technology & Software 3D office branding"
                width={800}
                height={500}
                priority
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-slate-950/85 via-slate-950/20 to-transparent" />
              <div className="absolute inset-x-6 bottom-6 text-white">
                <span className="inline-block rounded-full bg-cyan-500/25 px-3 py-1 text-xs font-semibold text-cyan-300 ring-1 ring-cyan-400/40 backdrop-blur-md">
                  Corporate Emblem
                </span>
                <h3 className="mt-2 text-xl font-bold tracking-tight">NAVIRA Technology & Software</h3>
                <p className="mt-1 text-xs text-slate-300">Headquarters & Enterprise Solutions Group</p>
              </div>
            </div>
          </div>

          {/* User's Office Logo Mockup Image */}
          <div className="group relative overflow-hidden rounded-3xl border border-line bg-slate-900 shadow-md transition-all duration-300 hover:shadow-xl">
            <div className="relative aspect-[16/10] w-full">
              <Image
                src="/images/branding/navira-logo-mockup.png"
                alt="NAVIRA Tech & Software corporate identity"
                width={800}
                height={500}
                priority
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-slate-950/85 via-slate-950/20 to-transparent" />
              <div className="absolute inset-x-6 bottom-6 text-white">
                <span className="inline-block rounded-full bg-blue-500/25 px-3 py-1 text-xs font-semibold text-blue-300 ring-1 ring-blue-400/40 backdrop-blur-md">
                  Modern Enterprise Design
                </span>
                <h3 className="mt-2 text-xl font-bold tracking-tight">Fluid, Intuitive Systems</h3>
                <p className="mt-1 text-xs text-slate-300">Engineered for human productivity and seamless operations</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading eyebrow="Company overview" title="Who we are and what we do." />
            <div className="mt-6 space-y-4 text-base leading-7 text-muted">
              {about.overview.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
          <ul className="space-y-4">
            {about.values.map((value) => (
              <li key={value.title} className="rounded-2xl border border-line bg-surface/60 p-5">
                <h3 className="text-base font-bold">{value.title}</h3>
                <p className="mt-1 text-sm leading-6 text-muted">{value.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section tone="surface">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-line bg-white p-8">
            <IconBadge icon={Target} />
            <h2 className="mt-5 text-2xl font-bold">Our mission</h2>
            <p className="mt-3 text-base leading-7 text-muted">{about.mission}</p>
          </div>
          <div className="rounded-3xl border border-line bg-white p-8">
            <IconBadge icon={Compass} />
            <h2 className="mt-5 text-2xl font-bold">Our vision</h2>
            <p className="mt-3 text-base leading-7 text-muted">{about.vision}</p>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Our expertise"
          title="What our engineering team is good at."
        />
        <div className="mt-12">
          <FeatureGrid items={expertise} />
        </div>
      </Section>

      <WhyChooseUs />
      <DemoCta title={demoCta.title} description={demoCta.description} />
    </>
  );
}
