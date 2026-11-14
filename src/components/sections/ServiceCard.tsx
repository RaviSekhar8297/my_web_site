import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { IconBadge } from "@/components/ui/IconBadge";
import type { Service } from "@/content/services";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group flex h-full flex-col rounded-2xl border border-line bg-white p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-brand/30 hover:shadow-lg hover:shadow-ink/5"
    >
      <div className="flex items-start justify-between">
        <IconBadge icon={service.icon} />
        <ArrowUpRight
          className="h-5 w-5 text-muted transition-colors group-hover:text-brand"
          aria-hidden="true"
        />
      </div>
      <h3 className="mt-5 text-lg font-bold">{service.title}</h3>
      <p className="mt-2 text-sm leading-6 text-muted">{service.summary}</p>
    </Link>
  );
}
