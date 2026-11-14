import { Section, SectionHeading } from "@/components/ui/Section";
import { keyBenefits, workProcess } from "@/content/home";
import { FeatureGrid } from "./FeatureGrid";

export function BenefitsSection() {
  return (
    <Section id="benefits">
      <SectionHeading
        eyebrow="Key benefits"
        title="Designed to be adopted, trusted and grown with."
      />
      <div className="mt-12">
        <FeatureGrid items={keyBenefits} />
      </div>

      <div className="mt-20">
        <h3 className="text-xl font-bold">How we work</h3>
        <ol className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {workProcess.map((step, i) => (
            <li key={step.title} className="relative border-t-2 border-brand/20 pt-5">
              <span className="absolute -top-px left-0 h-0.5 w-10 bg-brand" aria-hidden="true" />
              <div className="text-xs font-bold tracking-widest text-brand">0{i + 1}</div>
              <h4 className="mt-2 text-base font-bold">{step.title}</h4>
              <p className="mt-1.5 text-sm leading-6 text-muted">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
