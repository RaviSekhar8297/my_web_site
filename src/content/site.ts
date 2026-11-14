/**
 * Global company settings.
 * EDIT ME: replace every placeholder below (name, address, hours) with real details.
 * Contact values can also be set through environment variables (see .env.example).
 */
export const siteConfig = {
  name: "Navira",
  legalName: "Navira Technology & Software Pvt. Ltd.",
  tagline: "Enterprise Software & Intelligent Digital Solutions",
  description:
    "Navira Technology & Software delivers robust HRMS, Visitor Management, and Support Management systems, alongside bespoke software development, web & mobile applications, and 24/7 dedicated support.",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, ""),

  contact: {
    email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "contact@naviratech.com",
    phone: process.env.NEXT_PUBLIC_CONTACT_PHONE ?? "+91 98765 43210",
    whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "919876543210",
    whatsappMessage: "Hello Navira team, I'd like to know more about your software products and solutions.",
    hours: "Monday – Saturday, 9:30 AM – 6:30 PM IST",
    address: ["Tech Park, HITEC City", "Hyderabad, Telangana 500081", "India"],
    mapsEmbedUrl: process.env.NEXT_PUBLIC_MAPS_EMBED_URL ?? "",
  },

  /** Add social profiles here, e.g. { label: "LinkedIn", href: "https://..." } */
  social: [
    { label: "LinkedIn", href: "https://www.linkedin.com" },
    { label: "Twitter", href: "https://twitter.com" },
  ] as { label: string; href: string }[],
};

export const demoHref = "/contact?type=demo#contact-form";
