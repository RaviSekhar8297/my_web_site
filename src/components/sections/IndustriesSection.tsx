import { Section, SectionHeading } from "@/components/ui/Section";
import { industries } from "@/content/home";
import { FeatureGrid } from "./FeatureGrid";

export function IndustriesSection() {
  return (
    <Section id="industries" tone="surface">
      <SectionHeading
        eyebrow="Industries we serve"
        title="Built for organisations of different shapes and sizes."
        description="The same core needs (people, access and support) show up in every sector."
      />
      <div className="mt-12">
        <FeatureGrid items={industries} columns={4} />
      </div>
    </Section>
  );
}
