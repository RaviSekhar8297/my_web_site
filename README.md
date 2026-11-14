# IT Solutions & Software Products Website

Next.js (App Router) · TypeScript · Tailwind CSS v4 · Lucide icons · Nodemailer (SMTP) · Zod

## Run it

```bash
npm install
cp .env.example .env.local     # then fill in your values
npm run dev                    # http://localhost:3000
npm run build && npm start     # production
```

Requires Node 20.9+.

## Before you go live (all placeholders are marked "EDIT ME")

1. **`src/content/site.ts`**: company name, legal name, address, hours.
2. **`.env.local`**: site URL, email, phone, WhatsApp number (digits only, with country code), SMTP credentials, lead recipient, optional Google Maps embed URL.
3. **`src/components/layout/Logo.tsx`** and **`src/app/icon.svg`**: replace the placeholder mark with your logo.
4. **`src/content/*.ts`**: review product/service/about copy so it matches what your software really does.
5. **`src/content/home.ts` → `testimonials`**: add real, approved testimonials. While the list is empty the section is not rendered. No fake logos, quotes or statistics are included anywhere.

## Where things live

```
src/
  app/                    Routes (pages, API route, sitemap, robots, 404)
    products/[slug]/      One template -> HRMS, VMS, Support pages
    services/[slug]/      One template -> six service pages
    api/contact/route.ts  Validates, rate-limits, sends email
  components/
    layout/               Header, Footer, MobileNav, WhatsApp button, PageHero
    sections/             Home/page sections (Hero, ProductCard, DemoCta, ...)
    mockups/              Dashboard mockups per product (pure React/Tailwind)
    forms/                LeadForm (contact/demo/enquiry), ContactTabs, fields
    ui/                   Button, Section, Container, IconBadge, JsonLd
  content/                ALL editable copy and data (no copy inside components)
  lib/                    seo, validation (shared client+server), email, rate-limit, whatsapp
```

## Product visual identities

Each product has its own accent set in `src/app/globals.css` (`[data-product="hrms" | "vms" | "support"]`): indigo, teal, orange. Wrapping any markup in `data-product="..."` re-themes every component inside it.

## Adding a product or service

Add an entry to `src/content/products.ts` or `services.ts`. Navigation, footer, sitemap, static params and cards update automatically. A new product also needs a theme in `globals.css`, a mockup pair in `components/mockups`, and an entry in `productOptions` (`content/forms.ts`) and the `productValues` list in `lib/validation.ts`.

## Forms & email

- All three forms (contact, demo, enquiry) share `LeadForm` and the schemas in `lib/validation.ts`; the same rules run in the browser and on the server.
- `/api/contact` includes a honeypot field and a basic in-memory rate limit (per instance). For multi-instance hosting, replace `lib/rate-limit.ts` with a shared store.
- With no `SMTP_HOST` set, leads are logged to the console in development, and the API returns an error in production so enquiries are never silently lost.
- Leads are emailed, not stored. If you want a CRM/lead database, PostgreSQL can be added behind `sendLeadEmail` (the requirements only called for it where needed, so none is included).

## Notes

- Dashboard previews are illustrative, built with sample data, and labelled as such on the page.
- Metadata, canonical URLs, Open Graph tags, JSON-LD, `sitemap.xml` and `robots.txt` are generated from the content files and `NEXT_PUBLIC_SITE_URL`.
- Fonts (Inter, Manrope) load via `next/font`, self-hosted at build time.
- Only the hero uses an entrance animation; it is disabled for users who prefer reduced motion.
