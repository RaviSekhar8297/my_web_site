import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { products } from "@/content/products";
import { services } from "@/content/services";
import { siteConfig } from "@/content/site";
import { Logo } from "./Logo";

const company = [
  { label: "About us", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Request a demo", href: "/contact?type=demo#contact-form" },
  { label: "Product enquiry", href: "/contact?type=enquiry#contact-form" },
];

function FooterColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h2 className="font-sans text-sm font-semibold text-white">{title}</h2>
      <ul className="mt-4 space-y-2.5">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="text-sm text-white/65 transition-colors hover:text-white">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  const { contact } = siteConfig;
  return (
    <footer className="bg-ink text-white">
      <Container className="py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo invert />
            <p className="mt-4 max-w-sm text-sm leading-6 text-white/65">{siteConfig.description}</p>
            <ul className="mt-6 space-y-3 text-sm text-white/75">
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                <a href={`mailto:${contact.email}`} className="hover:text-white">
                  {contact.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                <a href={`tel:${contact.phone.replace(/[^+\d]/g, "")}`} className="hover:text-white">
                  {contact.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                <address className="not-italic">{contact.address.join(", ")}</address>
              </li>
            </ul>
          </div>

          <FooterColumn
            title="Products"
            links={products.map((p) => ({ label: p.name, href: `/products/${p.slug}` }))}
          />
          <FooterColumn
            title="Services"
            links={services.map((s) => ({ label: s.title, href: `/services/${s.slug}` }))}
          />
          <FooterColumn title="Company" links={company} />
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved.
          </p>
          {siteConfig.social.length > 0 && (
            <ul className="flex gap-4">
              {siteConfig.social.map((s) => (
                <li key={s.href}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </Container>
    </footer>
  );
}
