import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/content/site";

/**
 * Authentic NAVIRA Technology & Software Brand Emblem
 * Directly rendered from the official high-resolution corporate logo assets.
 */
export function LogoMark({
  invert,
  className,
}: {
  invert?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("relative flex items-center justify-center shrink-0", className)}>
      <Image
        src={invert ? "/images/branding/navira-logo-mark-dark.png" : "/images/branding/navira-logo-mark.png"}
        alt="NAVIRA Emblem"
        width={140}
        height={86}
        priority
        className="h-10 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
      />
    </div>
  );
}

export function Logo({
  invert,
  compact = false,
  className,
}: {
  invert?: boolean;
  compact?: boolean;
  className?: string;
}) {
  return (
    <Link
      href="/"
      className={cn("group inline-flex items-center gap-2.5 transition-opacity hover:opacity-95", className)}
      aria-label={`${siteConfig.name} Technology & Software Home`}
    >
      <LogoMark invert={invert} />
      <div className="flex flex-col">
        <span
          className={cn(
            "font-display text-2xl font-black tracking-wider uppercase leading-none",
            invert ? "text-white" : "text-[#0a1945]"
          )}
        >
          NAVIRA
        </span>
        {!compact && (
          <span
            className={cn(
              "text-[9px] font-bold tracking-[0.22em] uppercase mt-1 leading-none",
              invert ? "text-cyan-300" : "text-slate-500"
            )}
          >
            Technology & Software
          </span>
        )}
      </div>
    </Link>
  );
}
