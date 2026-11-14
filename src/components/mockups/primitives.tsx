import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import type { ProductTheme } from "@/content/products";
import { cn } from "@/lib/utils";

/**
 * Building blocks for the illustrative product screens.
 * Everything here is decorative (aria-hidden) and uses sample data only.
 * The outer Frame is a container-query root, so layouts adapt to the width of
 * the frame itself rather than the viewport.
 */

export function Frame({
  theme,
  url,
  label,
  children,
  className,
}: {
  theme: ProductTheme;
  url: string;
  label: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      data-product={theme}
      role="img"
      aria-label={label}
      className={cn(
        "@container overflow-hidden rounded-2xl border border-line bg-white text-ink shadow-[0_30px_80px_-30px_rgba(10,18,38,0.35)]",
        className,
      )}
    >
      <div aria-hidden="true">
        <div className="flex items-center gap-1.5 border-b border-line bg-surface px-4 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-300/90" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
          <span className="ml-3 min-w-0 flex-1 truncate rounded-md bg-white px-3 py-1 text-[11px] text-muted ring-1 ring-line">
            {url}
          </span>
        </div>
        {children}
      </div>
    </div>
  );
}

export function MockSidebar({
  brand,
  items,
  activeIndex = 0,
}: {
  brand: string;
  items: { label: string; icon: LucideIcon }[];
  activeIndex?: number;
}) {
  return (
    <div className="hidden w-40 shrink-0 flex-col gap-1 border-r border-line bg-white p-3 @2xl:flex">
      <div className="mb-3 flex items-center gap-2 px-2 py-1.5">
        <span className="h-6 w-6 rounded-md bg-linear-to-br from-accent to-accent-strong" />
        <span className="font-display text-xs font-bold">{brand}</span>
      </div>
      {items.map((item, i) => {
        const Icon = item.icon;
        return (
          <div
            key={item.label}
            className={cn(
              "flex items-center gap-2 rounded-lg px-2.5 py-2 text-[11px] font-medium",
              i === activeIndex ? "bg-accent-soft text-accent-ink" : "text-muted",
            )}
          >
            <Icon className="h-3.5 w-3.5" />
            {item.label}
          </div>
        );
      })}
    </div>
  );
}

export function StatTile({
  label,
  value,
  note,
  icon: Icon,
}: {
  label: string;
  value: string;
  note?: string;
  icon: LucideIcon;
}) {
  return (
    <div className="rounded-xl border border-line bg-white p-3">
      <div className="flex items-center justify-between gap-2">
        <span className="truncate text-[10px] font-medium text-muted">{label}</span>
        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-accent-soft text-accent-ink">
          <Icon className="h-3 w-3" />
        </span>
      </div>
      <div className="mt-2 font-display text-xl font-bold leading-none">{value}</div>
      {note && <div className="mt-1.5 truncate text-[10px] text-muted">{note}</div>}
    </div>
  );
}

export function MockCard({
  title,
  action,
  children,
  className,
}: {
  title: string;
  action?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("rounded-xl border border-line bg-white p-3.5", className)}>
      <div className="mb-3 flex items-center justify-between">
        <h4 className="font-sans text-[11px] font-semibold tracking-normal">{title}</h4>
        {action && <span className="text-[10px] font-medium text-accent-ink">{action}</span>}
      </div>
      {children}
    </div>
  );
}

const pillTones = {
  accent: "bg-accent-soft text-accent-ink",
  green: "bg-emerald-50 text-emerald-700",
  amber: "bg-amber-50 text-amber-700",
  red: "bg-rose-50 text-rose-700",
  slate: "bg-slate-100 text-slate-600",
} as const;

export type PillTone = keyof typeof pillTones;

export function Pill({ tone = "accent", children }: { tone?: PillTone; children: ReactNode }) {
  return (
    <span className={cn("inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-semibold", pillTones[tone])}>
      {children}
    </span>
  );
}

const avatarTones = [
  "bg-indigo-100 text-indigo-700",
  "bg-emerald-100 text-emerald-700",
  "bg-amber-100 text-amber-700",
  "bg-rose-100 text-rose-700",
  "bg-sky-100 text-sky-700",
  "bg-violet-100 text-violet-700",
];

export function Avatar({ name, index = 0, size = "md" }: { name: string; index?: number; size?: "sm" | "md" }) {
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("");
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center justify-center rounded-full font-semibold",
        size === "sm" ? "h-5 w-5 text-[8px]" : "h-7 w-7 text-[10px]",
        avatarTones[index % avatarTones.length],
      )}
    >
      {initials}
    </span>
  );
}

export function BarChart({
  values,
  labels,
  highlightIndex,
  height = "h-28",
}: {
  values: number[];
  labels: string[];
  highlightIndex?: number;
  height?: string;
}) {
  const max = Math.max(...values);
  return (
    <div className={cn("flex items-end gap-2", height)}>
      {values.map((value, i) => (
        <div key={`${labels[i]}-${i}`} className="flex h-full flex-1 flex-col items-center gap-1.5">
          <div className="flex w-full flex-1 items-end">
            <div
              className={cn("w-full rounded-t-md", i === highlightIndex ? "bg-accent" : "bg-accent/25")}
              style={{ height: `${(value / max) * 100}%` }}
            />
          </div>
          <span className="text-[9px] text-muted">{labels[i]}</span>
        </div>
      ))}
    </div>
  );
}

/** Top bar used by every dashboard: page title, search field, avatar. */
export function MockTopbar({ title, subtitle, action }: { title: string; subtitle: string; action?: string }) {
  return (
    <div className="flex items-center justify-between gap-3">
      <div className="min-w-0">
        <div className="truncate font-display text-sm font-bold">{title}</div>
        <div className="truncate text-[10px] text-muted">{subtitle}</div>
      </div>
      <div className="flex items-center gap-2">
        <span className="hidden h-7 w-28 items-center rounded-lg bg-white px-2.5 text-[10px] text-muted ring-1 ring-line @xl:flex">
          Search…
        </span>
        {action && (
          <span className="rounded-lg bg-accent px-2.5 py-1.5 text-[10px] font-semibold text-white">{action}</span>
        )}
      </div>
    </div>
  );
}
