import type { MetadataRoute } from "next";
import { products } from "@/content/products";
import { services } from "@/content/services";
import { absoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const entry = (path: string, priority: number): MetadataRoute.Sitemap[number] => ({
    url: absoluteUrl(path),
    lastModified,
    changeFrequency: "monthly",
    priority,
  });

  return [
    entry("/", 1),
    entry("/products", 0.9),
    ...products.map((p) => entry(`/products/${p.slug}`, 0.9)),
    entry("/services", 0.8),
    ...services.map((s) => entry(`/services/${s.slug}`, 0.7)),
    entry("/about", 0.6),
    entry("/contact", 0.8),
  ];
}
