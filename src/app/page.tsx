import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { DemoCta } from "@/components/sections/DemoCta";
import { Hero } from "@/components/sections/Hero";
import { IndustriesSection } from "@/components/sections/IndustriesSection";
import { Introduction } from "@/components/sections/Introduction";
import { ProductsSection } from "@/components/sections/ProductsSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { Testimonials } from "@/components/sections/Testimonials";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { demoCta } from "@/content/home";
import { siteConfig } from "@/content/site";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: `${siteConfig.name}: ${siteConfig.tagline}`,
  description: siteConfig.description,
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <Introduction />
      <ProductsSection />
      <ServicesSection />
      <WhyChooseUs />
      <IndustriesSection />
      <BenefitsSection />
      <Testimonials />
      <DemoCta title={demoCta.title} description={demoCta.description} />
      <ContactSection />
    </>
  );
}
