"use client";

import { type KeyboardEvent, useState } from "react";
import type { LeadType } from "@/lib/validation";
import { cn } from "@/lib/utils";
import { LeadForm } from "./LeadForm";

const tabs: { type: LeadType; label: string; description: string }[] = [
  { type: "contact", label: "Contact us", description: "General questions and project discussions." },
  { type: "demo", label: "Request a demo", description: "A guided walkthrough with our team." },
  { type: "enquiry", label: "Product enquiry", description: "Pricing, features and deployment questions." },
];

/** Accessible tabbed wrapper (arrow keys move between tabs) around the three lead forms. */
export function ContactTabs({
  initialType = "contact",
  defaultProduct,
}: {
  initialType?: LeadType;
  defaultProduct?: string;
}) {
  const [active, setActive] = useState<LeadType>(initialType);

  function onKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next = index;
    if (event.key === "ArrowRight") next = (index + 1) % tabs.length;
    else if (event.key === "ArrowLeft") next = (index - 1 + tabs.length) % tabs.length;
    else return;
    event.preventDefault();
    setActive(tabs[next].type);
    document.getElementById(`tab-${tabs[next].type}`)?.focus();
  }

  const current = tabs.find((t) => t.type === active) ?? tabs[0];

  return (
    <div id="contact-form" className="scroll-mt-24 rounded-3xl border border-line bg-white p-5 shadow-xl shadow-ink/5 sm:p-8">
      <div role="tablist" aria-label="Enquiry type" className="grid grid-cols-3 gap-1 rounded-xl bg-surface p-1">
        {tabs.map((tab, index) => {
          const selected = tab.type === active;
          return (
            <button
              key={tab.type}
              id={`tab-${tab.type}`}
              role="tab"
              type="button"
              aria-selected={selected}
              aria-controls={`panel-${tab.type}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(tab.type)}
              onKeyDown={(e) => onKeyDown(e, index)}
              className={cn(
                "rounded-lg px-2 py-2.5 text-xs font-semibold transition-colors sm:text-sm",
                selected ? "bg-white text-ink shadow-sm" : "text-muted hover:text-ink",
              )}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      <div id={`panel-${active}`} role="tabpanel" aria-labelledby={`tab-${active}`} className="mt-6">
        <p className="mb-6 text-sm text-muted">{current.description}</p>
        <LeadForm key={active} type={active} defaultProduct={defaultProduct} />
      </div>
    </div>
  );
}
