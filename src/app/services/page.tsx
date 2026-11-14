import { PageHero } from "@/components/layout/PageHero";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { DemoCta } from "@/components/sections/DemoCta";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Software Development & Support Services",
  description:
    "Custom software, web and mobile application development, API integration, software maintenance and technical support.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Engineering and support, from first idea to long-term maintenance."
        description="Custom software, web and mobile applications, integrations and ongoing support, delivered by the team that also builds our products."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
      />
      <ServicesSection heading={false} />
      <BenefitsSection />
      <DemoCta
        title="Have a project in mind?"
        description="Describe what you need and we will come back with an approach, a plan and honest advice on scope."
        demoLink="/contact?type=contact#contact-form"
        demoLabel="Discuss your project"
      />
    </>
  );
}
