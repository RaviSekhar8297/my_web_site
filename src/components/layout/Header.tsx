import { ChevronDown } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { navigation } from "@/content/navigation";
import { demoHref } from "@/content/site";
import Link from "next/link";
import { Logo } from "./Logo";
import { MobileNav } from "./MobileNav";
import { NavLink } from "./NavLink";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-white/85 backdrop-blur-xl">
      <Container className="flex h-16 items-center justify-between gap-6 lg:h-[72px]">
        <Logo />

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {navigation.map((item) =>
            item.children ? (
              <div key={item.href} className="group relative">
                <NavLink href={item.href}>
                  {item.label}
                  <ChevronDown
                    className="h-3.5 w-3.5 transition-transform group-hover:rotate-180 group-focus-within:rotate-180"
                    aria-hidden="true"
                  />
                </NavLink>
                <div className="invisible absolute left-1/2 top-full w-[24rem] -translate-x-1/2 pt-3 opacity-0 transition duration-150 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                  <ul className="rounded-2xl border border-line bg-white p-2 shadow-xl shadow-ink/10">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link href={child.href} className="block rounded-xl px-3.5 py-3 hover:bg-surface">
                          <span className="block text-sm font-semibold text-ink">{child.label}</span>
                          <span className="mt-0.5 line-clamp-1 block text-xs text-muted">{child.description}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <NavLink key={item.href} href={item.href}>
                {item.label}
              </NavLink>
            ),
          )}
        </nav>

        <div className="flex items-center gap-3">
          <ButtonLink href={demoHref} className="hidden sm:inline-flex">
            Request a demo
          </ButtonLink>
          <MobileNav items={navigation} ctaHref={demoHref} ctaLabel="Request a demo" />
        </div>
      </Container>
    </header>
  );
}
