import { Section, SectionHeading } from "@/components/ui/Section";
import { whyChooseUs } from "@/content/home";
import { FeatureGrid } from "./FeatureGrid";

export function WhyChooseUs({ withBackground = true }: { withBackground?: boolean }) {
  return (
    <Section id="why-us" tone={withBackground ? "dark" : "white"} className="overflow-hidden">
      {withBackground && <div className="bg-grid-light absolute inset-0 opacity-50" aria-hidden="true" />}
      <div className="relative">
        <SectionHeading
          eyebrow="Why choose us"
          title="Software is a long relationship. We build for it."
          description="What you can expect when you work with us, whether you start with a product or a blank page."
          invert={withBackground}
        />
        <div className="mt-12">
          <FeatureGrid items={whyChooseUs} invert={withBackground} />
        </div>
      </div>
    </Section>
  );
}
