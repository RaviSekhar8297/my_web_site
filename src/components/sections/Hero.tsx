"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CircleCheck, Sparkles, Users, DoorOpen, Headset, Layers } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { hero } from "@/content/home";
import { demoHref } from "@/content/site";

const showcaseTabs = [
  {
    id: "hrms",
    label: "HRMS Suite",
    icon: Users,
    tagline: "Workforce & Payroll",
    image: "/images/products/hrms-dashboard.jpg",
    url: "/products/hrms",
    urlBar: "navira.cloud/hrms/dashboard",
    badge: "99.8% Attendance Accuracy",
  },
  {
    id: "vms",
    label: "Visitor VMS",
    icon: DoorOpen,
    tagline: "Smart Reception & Passes",
    image: "/images/products/vms-dashboard.jpg",
    url: "/products/visitor-management-system",
    urlBar: "navira.cloud/vms/reception",
    badge: "<15s Fast Check-In",
  },
  {
    id: "support",
    label: "Support Desk",
    icon: Headset,
    tagline: "Helpdesk & SLAs",
    image: "/images/products/support-dashboard.jpg",
    url: "/products/support-management-system",
    urlBar: "navira.cloud/support/tickets",
    badge: "<4m First Response Time",
  },
  {
    id: "suite",
    label: "NAVIRA 3D Suite",
    icon: Layers,
    tagline: "Unified Architecture",
    image: "/images/branding/navira-suite-showcase.jpg",
    url: "/products",
    urlBar: "navira.cloud/enterprise-platform",
    badge: "Enterprise Ready",
  },
];

export function Hero() {
  const [activeTab, setActiveTab] = useState(0);
  const current = showcaseTabs[activeTab];

  return (
    <section className="relative overflow-hidden bg-white">
      {/* Background patterns */}
      <div className="bg-grid mask-fade-bottom absolute inset-0" aria-hidden="true" />
      <div className="absolute -left-32 top-0 h-[28rem] w-[28rem] rounded-full bg-cyan-400/10 blur-3xl" aria-hidden="true" />
      <div className="absolute right-0 top-24 h-[24rem] w-[24rem] rounded-full bg-blue-600/10 blur-3xl" aria-hidden="true" />

      <Container className="relative grid items-center gap-12 pb-20 pt-12 sm:pt-16 lg:grid-cols-[1fr_1.15fr] lg:gap-12 lg:pb-28 lg:pt-20">
        {/* Left Column: Value Proposition & CTAs */}
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-50 px-3.5 py-1.5 text-xs font-semibold text-cyan-900 shadow-xs">
            <Sparkles className="h-3.5 w-3.5 text-cyan-600" aria-hidden="true" />
            <span>{hero.eyebrow}</span>
          </div>

          <h1 className="mt-5 text-balance text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.25rem]">
            {hero.title}
          </h1>

          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted">
            {hero.description}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={demoHref} size="lg" className="shadow-md shadow-brand/20">
              Request a live demo
            </ButtonLink>
            <ButtonLink href="/products" variant="secondary" size="lg">
              Explore products
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </ButtonLink>
          </div>

          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
            {hero.points.map((point) => (
              <li key={point} className="flex items-center gap-2 text-sm font-semibold text-slate-800">
                <CircleCheck className="h-4.5 w-4.5 text-cyan-600" aria-hidden="true" />
                {point}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Column: Interactive Multi-Product Live Screen Showcase */}
        <div className="animate-fade-up animate-delay-2 relative">
          {/* Product Switcher Tabs */}
          <div className="mb-3 flex items-center gap-1.5 overflow-x-auto rounded-2xl border border-line bg-surface/90 p-1.5 shadow-xs scrollbar-none">
            {showcaseTabs.map((tab, idx) => {
              const Icon = tab.icon;
              const isActive = activeTab === idx;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(idx)}
                  className={`flex flex-1 items-center justify-center gap-1.5 rounded-xl px-3 py-2 text-xs font-bold transition-all duration-200 whitespace-nowrap cursor-pointer ${
                    isActive
                      ? "bg-white text-slate-900 shadow-md shadow-slate-900/5 ring-1 ring-slate-900/5"
                      : "text-muted hover:text-slate-900 hover:bg-white/50"
                  }`}
                >
                  <Icon className={`h-3.5 w-3.5 ${isActive ? "text-cyan-600" : "text-muted"}`} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Interactive Screen Container */}
          <div className="group relative overflow-hidden rounded-2xl border border-line bg-slate-950 shadow-2xl shadow-slate-900/15 ring-1 ring-white/10">
            {/* Window Topbar */}
            <div className="flex items-center justify-between border-b border-white/10 bg-slate-900/95 px-4 py-3 backdrop-blur-md">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
              </div>

              <div className="flex items-center gap-1.5 rounded-md bg-white/10 px-3 py-0.5 text-xs font-mono text-slate-300">
                <span className="text-cyan-400">https://</span>
                {current.urlBar}
              </div>

              <span className="hidden sm:inline-flex items-center rounded-full bg-cyan-500/20 px-2.5 py-0.5 text-[10px] font-semibold text-cyan-300 ring-1 ring-cyan-400/30">
                {current.badge}
              </span>
            </div>

            {/* Main Showcase Image Display */}
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950">
              <Image
                key={current.id}
                src={current.image}
                alt={current.label}
                width={1200}
                height={750}
                priority
                className="h-full w-full object-cover object-top transition-all duration-500 ease-out group-hover:scale-102"
              />
              <div className="absolute inset-0 bg-linear-to-t from-slate-950/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              
              {/* Bottom Quick Action Overlay on Hover */}
              <div className="absolute inset-x-4 bottom-4 flex items-center justify-between opacity-90 transition-all duration-300">
                <div className="rounded-xl bg-slate-950/80 px-3 py-1.5 text-white backdrop-blur-md ring-1 ring-white/10">
                  <div className="text-xs font-bold">{current.label}</div>
                  <div className="text-[11px] text-cyan-300">{current.tagline}</div>
                </div>
                <Link
                  href={current.url}
                  className="inline-flex items-center gap-1.5 rounded-xl bg-white px-3.5 py-1.5 text-xs font-bold text-slate-900 shadow-lg backdrop-blur-md transition-transform hover:scale-105"
                >
                  View Details
                  <ArrowRight className="h-3.5 w-3.5 text-cyan-600" />
                </Link>
              </div>
            </div>
          </div>

          {/* Subtitle helper */}
          <p className="mt-3 text-center text-xs text-muted">
            Click tabs above to preview HRMS, Visitor Management, and Support Desk dashboards.
          </p>
        </div>
      </Container>
    </section>
  );
}
