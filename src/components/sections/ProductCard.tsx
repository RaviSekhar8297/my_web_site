import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import type { Product } from "@/content/products";

/**
 * High-definition Product Card with photorealistic UI preview,
 * key operational metrics, and interactive hover states.
 */
export function ProductCard({ product }: { product: Product }) {
  const Icon = product.icon;

  return (
    <article
      data-product={product.theme}
      className="group relative flex flex-col overflow-hidden rounded-3xl border border-line bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-2xl hover:shadow-accent/10"
    >
      {/* Visual Product Showcase Header */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950">
        <Image
          src={product.image}
          alt={`${product.name} dashboard preview`}
          width={800}
          height={500}
          className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        
        {/* Subtle vignette gradients */}
        <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-transparent to-slate-950/40" />

        {/* Top Badges */}
        <div className="absolute inset-x-4 top-4 flex items-center justify-between gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-900 shadow-sm backdrop-blur-md">
            <Sparkles className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
            {product.badge}
          </span>
          <span className="inline-flex items-center rounded-full bg-slate-900/80 px-2.5 py-1 text-[11px] font-medium tracking-wide text-white/90 backdrop-blur-md ring-1 ring-white/20">
            Enterprise Ready
          </span>
        </div>

        {/* Bottom Floating Title on Image */}
        <div className="absolute inset-x-4 bottom-4 flex items-end justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-accent text-white shadow-md ring-2 ring-white/20">
                <Icon className="h-4.5 w-4.5" aria-hidden="true" />
              </span>
              <h3 className="text-xl font-bold tracking-tight text-white drop-shadow-sm">
                {product.shortName}
              </h3>
            </div>
            <p className="mt-1 text-xs font-medium text-white/80 line-clamp-1 drop-shadow-sm">
              {product.name}
            </p>
          </div>
        </div>
      </div>

      {/* Impact Stats Banner */}
      {product.stats && product.stats.length > 0 && (
        <div className="grid grid-cols-3 divide-x divide-line border-b border-line bg-surface/75 py-2.5 text-center">
          {product.stats.map((stat) => (
            <div key={stat.label} className="px-2">
              <div className="text-sm font-extrabold tracking-tight text-accent-strong">
                {stat.value}
              </div>
              <div className="text-[10px] font-medium uppercase tracking-wider text-muted line-clamp-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Card Content Body */}
      <div className="flex flex-1 flex-col p-6">
        <p className="text-[14.5px] leading-relaxed text-muted">{product.summary}</p>

        {/* Highlights List */}
        <div className="mt-5 space-y-2.5">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Key Capabilities
          </p>
          <ul className="space-y-2">
            {product.highlights.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm font-medium text-ink">
                <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent-strong">
                  <Check className="h-3 w-3 stroke-[2.5]" aria-hidden="true" />
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Card CTA Actions */}
        <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-6 border-t border-line/70">
          <ButtonLink href={`/products/${product.slug}`} variant="primary" className="shadow-sm">
            Explore {product.shortName}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </ButtonLink>
          <Link
            href={`/contact?type=demo&product=${product.theme}#contact-form`}
            className="text-sm font-semibold text-accent-ink hover:underline"
          >
            Request demo →
          </Link>
        </div>
      </div>
    </article>
  );
}
