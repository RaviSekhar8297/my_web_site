import { ContactTabs } from "@/components/forms/ContactTabs";
import { PageHero } from "@/components/layout/PageHero";
import { ContactInfo } from "@/components/sections/ContactInfo";
import { ButtonLink } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { siteConfig } from "@/content/site";
import { buildMetadata } from "@/lib/seo";
import { whatsappLink } from "@/lib/whatsapp";
import { MessageCircle } from "lucide-react";
import { productOptions } from "@/content/forms";
import type { LeadType } from "@/lib/validation";

export const metadata = buildMetadata({
  title: "Contact Us: Enquiries, Demos & Support",
  description:
    "Contact our team, request a product demo or send a product enquiry. Reach us by form, email, phone or WhatsApp.",
  path: "/contact",
});

type SearchParams = Promise<{ type?: string | string[]; product?: string | string[] }>;

const first = (value?: string | string[]) => (Array.isArray(value) ? value[0] : value);

export default async function ContactPage({ searchParams }: { searchParams: SearchParams }) {
  const params = await searchParams;
  const requestedType = first(params.type);
  const requestedProduct = first(params.product);

  const initialType: LeadType =
    requestedType === "demo" || requestedType === "enquiry" ? requestedType : "contact";
  const defaultProduct = productOptions.some((p) => p.value === requestedProduct) ? requestedProduct : undefined;

  const mapSrc = siteConfig.contact.mapsEmbedUrl;

  return (
    <>
      <PageHero
        eyebrow="Contact us"
        title="Let us talk about what you need."
        description="Send a message, request a product demo or ask about a product. We reply to every enquiry."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      >
        <ButtonLink href={whatsappLink()} variant="light" size="lg" external>
          <MessageCircle className="h-4 w-4" aria-hidden="true" />
          Chat on WhatsApp
        </ButtonLink>
      </PageHero>

      <Section tone="surface">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
          <div>
            <h2 className="text-2xl font-bold">Contact information</h2>
            <p className="mt-3 text-base leading-7 text-muted">
              Prefer to talk it through? Reach us directly using any of the options below.
            </p>
            <div className="mt-8">
              <ContactInfo />
            </div>
          </div>
          <ContactTabs initialType={initialType} defaultProduct={defaultProduct} />
        </div>
      </Section>

      {mapSrc && (
        <Section>
          <h2 className="text-2xl font-bold">Find us</h2>
          <div className="mt-6 overflow-hidden rounded-3xl border border-line">
            <iframe
              title={`Map showing the ${siteConfig.name} office location`}
              src={mapSrc}
              className="h-[24rem] w-full border-0 sm:h-[28rem]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </Section>
      )}
    </>
  );
}
