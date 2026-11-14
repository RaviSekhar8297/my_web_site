import Image from "next/image";
import { IconBadge } from "@/components/ui/IconBadge";
import { Section, SectionHeading } from "@/components/ui/Section";
import { introduction } from "@/content/home";

export function Introduction() {
  return (
    <Section id="about-company">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
        <div>
          <SectionHeading eyebrow={introduction.eyebrow} title={introduction.title} />
          <div className="mt-6 space-y-4 text-base leading-7 text-muted">
            {introduction.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          <ul className="mt-8 space-y-3.5">
            {introduction.pillars.map((pillar) => (
              <li
                key={pillar.title}
                className="flex items-start gap-4 rounded-2xl border border-line bg-surface/60 p-4.5 transition-colors hover:bg-surface"
              >
                <IconBadge icon={pillar.icon} />
                <div>
                  <h3 className="text-base font-bold text-slate-900">{pillar.title}</h3>
                  <p className="mt-0.5 text-sm leading-6 text-muted">{pillar.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Corporate Brand Presence Showcase */}
        <div className="relative">
          <div className="group relative overflow-hidden rounded-3xl border border-line bg-slate-950 shadow-xl transition-all duration-300 hover:shadow-2xl hover:border-cyan-500/30">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/images/branding/navira-office-wall.jpg"
                alt="NAVIRA Technology & Software Headquarters and Brand"
                width={800}
                height={600}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
              <div className="absolute inset-x-6 bottom-6 text-white">
                <span className="inline-block rounded-full bg-cyan-500/25 px-3 py-1 text-xs font-semibold text-cyan-300 ring-1 ring-cyan-400/30 backdrop-blur-md">
                  NAVIRA Technology & Software
                </span>
                <h3 className="mt-2 text-2xl font-bold tracking-tight">Enterprise Infrastructure</h3>
                <p className="mt-1 text-sm text-slate-300">
                  Reliable software architecture designed for modern workforce, security, and service operations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
