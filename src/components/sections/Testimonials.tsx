import { Section, SectionHeading } from "@/components/ui/Section";
import { testimonials } from "@/content/home";

/**
 * Renders nothing until real testimonials are added to src/content/home.ts.
 * This is intentional: the site ships without placeholder or invented quotes.
 */
export function Testimonials() {
  if (testimonials.length === 0) return null;

  return (
    <Section id="testimonials" tone="surface">
      <SectionHeading eyebrow="Customer voices" title="What our customers say." />
      <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t) => (
          <li key={`${t.name}-${t.company}`}>
            <figure className="flex h-full flex-col rounded-2xl border border-line bg-white p-6">
              <blockquote className="flex-1 text-[15px] leading-7 text-ink">“{t.quote}”</blockquote>
              <figcaption className="mt-6 border-t border-line pt-4">
                <div className="text-sm font-semibold">{t.name}</div>
                <div className="text-xs text-muted">
                  {t.role}, {t.company}
                </div>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </Section>
  );
}
