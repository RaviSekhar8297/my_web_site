import { IconBadge } from "@/components/ui/IconBadge";
import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

interface Item {
  title: string;
  description: string;
  icon: LucideIcon;
}

/** Reusable icon + title + description grid (features, benefits, expertise, industries...). */
export function FeatureGrid({
  items,
  columns = 3,
  invert,
  card = true,
}: {
  items: Item[];
  columns?: 2 | 3 | 4;
  invert?: boolean;
  card?: boolean;
}) {
  const cols = {
    2: "sm:grid-cols-2",
    3: "sm:grid-cols-2 lg:grid-cols-3",
    4: "sm:grid-cols-2 lg:grid-cols-4",
  }[columns];

  return (
    <ul className={cn("grid gap-5", cols)}>
      {items.map((item) => (
        <li
          key={item.title}
          className={cn(
            "rounded-2xl p-6",
            card && !invert && "border border-line bg-white",
            card && invert && "border border-white/10 bg-white/[0.04]",
          )}
        >
          <IconBadge icon={item.icon} invert={invert} />
          <h3 className={cn("mt-4 text-base font-bold", invert && "text-white")}>{item.title}</h3>
          <p className={cn("mt-2 text-sm leading-6", invert ? "text-white/70" : "text-muted")}>{item.description}</p>
        </li>
      ))}
    </ul>
  );
}
