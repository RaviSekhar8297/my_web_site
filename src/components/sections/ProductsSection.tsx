import { Section, SectionHeading } from "@/components/ui/Section";
import { products } from "@/content/products";
import { ProductCard } from "./ProductCard";

export function ProductsSection({ heading = true }: { heading?: boolean }) {
  return (
    <Section id="products" tone="surface" className="py-20 lg:py-28">
      {heading && (
        <SectionHeading
          eyebrow="NAVIRA Product Suite"
          title="Enterprise software built for precision, speed, and scale."
          description="Deploy battle-tested, high-performance platforms across workforce management, visitor operations, and customer support. Ready out of the box or customizable for your enterprise."
        />
      )}
      <div className={heading ? "mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3" : "grid gap-8 md:grid-cols-2 lg:grid-cols-3"}>
        {products.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </Section>
  );
}
