import { products } from "./products";
import { services } from "./services";

export interface NavChild {
  label: string;
  href: string;
  description: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavChild[];
}

/** Plain data (no React components) so it can be passed to client components. */
export const navigation: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Products",
    href: "/products",
    children: products.map((p) => ({
      label: p.shortName === "VMS" ? "Visitor Management" : p.shortName,
      href: `/products/${p.slug}`,
      description: p.tagline,
    })),
  },
  {
    label: "Services",
    href: "/services",
    children: services.map((s) => ({
      label: s.title,
      href: `/services/${s.slug}`,
      description: s.summary,
    })),
  },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];
