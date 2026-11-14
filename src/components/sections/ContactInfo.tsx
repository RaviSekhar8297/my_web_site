import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { IconBadge } from "@/components/ui/IconBadge";
import { siteConfig } from "@/content/site";
import { whatsappLink } from "@/lib/whatsapp";

/** Contact details list, shared by the home page contact section and /contact. */
export function ContactInfo() {
  const { contact } = siteConfig;
  const rows = [
    {
      icon: Mail,
      label: "Email",
      value: contact.email,
      href: `mailto:${contact.email}`,
    },
    {
      icon: Phone,
      label: "Phone",
      value: contact.phone,
      href: `tel:${contact.phone.replace(/[^+\d]/g, "")}`,
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "Chat with our team",
      href: whatsappLink(),
      external: true,
    },
    {
      icon: Clock,
      label: "Business hours",
      value: contact.hours,
    },
    {
      icon: MapPin,
      label: "Office",
      value: contact.address.join(", "),
    },
  ];

  return (
    <ul className="space-y-5">
      {rows.map((row) => (
        <li key={row.label} className="flex items-start gap-4">
          <IconBadge icon={row.icon} />
          <div className="min-w-0">
            <div className="text-xs font-semibold uppercase tracking-wider text-muted">{row.label}</div>
            {row.href ? (
              <a
                href={row.href}
                {...(row.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="mt-0.5 block break-words text-base font-medium text-ink hover:text-brand"
              >
                {row.value}
              </a>
            ) : (
              <p className="mt-0.5 text-base font-medium text-ink">{row.value}</p>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}
