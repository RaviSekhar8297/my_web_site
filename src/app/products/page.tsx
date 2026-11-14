import { PageHero } from "@/components/layout/PageHero";
import { DemoCta } from "@/components/sections/DemoCta";
import { ProductsSection } from "@/components/sections/ProductsSection";
import { demoCta } from "@/content/home";
import { siteConfig } from "@/content/site";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: `Software Products: HRMS, Visitor Management & Support Desk | ${siteConfig.name}`,
  description:
    "Explore NAVIRA's enterprise software suite: Human Resource Management (HRMS), Visitor Management System (VMS), and Support Desk ticketing software. Request a live demo.",
  path: "/products",
});

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="NAVIRA Product Suite"
        title="Enterprise software engineered for speed, security, and precision."
        description="Three focused, production-ready platforms for workforce management, facility security, and customer support operations. Deploy standalone or seamlessly integrate into your technology stack."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Products" }]}
      />
      <ProductsSection heading={false} />
      <DemoCta title={demoCta.title} description={demoCta.description} />
    </>
  );
}
