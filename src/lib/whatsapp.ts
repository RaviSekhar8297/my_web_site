import { siteConfig } from "@/content/site";

/** Builds a click-to-chat link. Works on desktop (WhatsApp Web/app) and mobile. */
export function whatsappLink(message: string = siteConfig.contact.whatsappMessage): string {
  const number = siteConfig.contact.whatsappNumber.replace(/\D/g, "");
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
