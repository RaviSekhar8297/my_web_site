import type { Metadata } from "next";
import { siteConfig } from "@/content/site";

interface MetaInput {
  title: string;
  description: string;
  /** Path starting with "/", used for the canonical URL. */
  path?: string;
  noIndex?: boolean;
}

/** Central helper so every page gets a title, description, canonical URL and social tags. */
export function buildMetadata({ title, description, path = "/", noIndex }: MetaInput): Metadata {
  const fullTitle = `${title} | ${siteConfig.name}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: fullTitle,
      description,
      url: path,
      siteName: siteConfig.name,
      type: "website",
    },
    twitter: { card: "summary_large_image", title: fullTitle, description },
    robots: noIndex ? { index: false, follow: false } : undefined,
  };
}

export function absoluteUrl(path = "/"): string {
  return `${siteConfig.url}${path}`;
}
