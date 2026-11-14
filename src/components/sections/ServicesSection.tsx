import { Section, SectionHeading } from "@/components/ui/Section";
import { services } from "@/content/services";
import { ServiceCard } from "./ServiceCard";

export function ServicesSection({ heading = true }: { heading?: boolean }) {
  return (
    <Section id="services">
      {heading && (
        <SectionHeading
          eyebrow="Our services"
          title="Engineering and support for everything beyond the product."
          description="From a custom module to a complete platform, and the maintenance that keeps it healthy."
        />
      )}
      <div className={heading ? "mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" : "grid gap-5 sm:grid-cols-2 lg:grid-cols-3"}>
        {services.map((service) => (
          <ServiceCard key={service.slug} service={service} />
        ))}
      </div>
    </Section>
  );
}
