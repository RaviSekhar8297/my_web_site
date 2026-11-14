"use client";

import { CircleAlert, CircleCheck, LoaderCircle, MessageCircle } from "lucide-react";
import { useId } from "react";
import { Button, buttonStyles } from "@/components/ui/Button";
import { productOptions, teamSizeOptions } from "@/content/forms";
import type { LeadType } from "@/lib/validation";
import { whatsappLink } from "@/lib/whatsapp";
import { SelectField, TextAreaField, TextField } from "./fields";
import { useLeadForm } from "./useLeadForm";

const copy: Record<LeadType, { submit: string; successTitle: string; successBody: string }> = {
  contact: {
    submit: "Send message",
    successTitle: "Message sent",
    successBody: "Thank you for getting in touch. Our team will reply to you shortly.",
  },
  demo: {
    submit: "Request a demo",
    successTitle: "Demo request received",
    successBody: "Thank you. Our team will contact you to confirm a time for your demonstration.",
  },
  enquiry: {
    submit: "Send enquiry",
    successTitle: "Enquiry received",
    successBody: "Thank you. Our sales team will respond with the information you asked for.",
  },
};

/**
 * One form component for all three enquiry types. The visible fields change with `type`,
 * validation is shared with the server through src/lib/validation.ts.
 */
export function LeadForm({
  type,
  defaultProduct,
  className,
}: {
  type: LeadType;
  /** Preselects the product dropdown (demo and enquiry forms). */
  defaultProduct?: string;
  className?: string;
}) {
  const uid = useId();
  const { status, errors, serverMessage, onSubmit, reset } = useLeadForm(type);
  const id = (name: string) => `${uid}-${name}`;
  const text = copy[type];

  if (status === "success") {
    return (
      <div className={className} role="status" aria-live="polite">
        <div className="flex flex-col items-start gap-4 rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
          <CircleCheck className="h-8 w-8 text-emerald-600" aria-hidden="true" />
          <div>
            <h3 className="text-lg font-bold text-emerald-900">{text.successTitle}</h3>
            <p className="mt-1 text-sm leading-6 text-emerald-800">{text.successBody}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={whatsappLink("Hello, I just submitted a request on your website.")}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonStyles("secondary")}
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Continue on WhatsApp
            </a>
            <Button type="button" variant="secondary" onClick={reset}>
              Send another
            </Button>
          </div>
        </div>
      </div>
    );
  }

  const showProduct = type === "demo" || type === "enquiry";

  return (
    <form onSubmit={onSubmit} noValidate className={className} aria-describedby={serverMessage ? id("form-error") : undefined}>
      <div className="grid gap-5 sm:grid-cols-2">
        <TextField id={id("name")} name="name" label="Full name" required autoComplete="name" error={errors.name} />
        <TextField
          id={id("email")}
          name="email"
          type="email"
          label={type === "demo" ? "Work email" : "Email"}
          required
          autoComplete="email"
          inputMode="email"
          error={errors.email}
        />
        <TextField
          id={id("phone")}
          name="phone"
          type="tel"
          label="Phone / WhatsApp"
          required={type === "demo"}
          autoComplete="tel"
          inputMode="tel"
          error={errors.phone}
        />
        <TextField
          id={id("company")}
          name="company"
          label="Company"
          required={type === "demo"}
          autoComplete="organization"
          error={errors.company}
        />

        {showProduct && (
          <SelectField
            id={id("product")}
            name="product"
            label="Product of interest"
            required
            defaultValue={defaultProduct ?? ""}
            options={productOptions}
            error={errors.product}
            className={type === "demo" ? undefined : "sm:col-span-2"}
          />
        )}

        {type === "demo" && (
          <>
            <SelectField
              id={id("teamSize")}
              name="teamSize"
              label="Team size"
              options={teamSizeOptions}
              error={errors.teamSize}
            />
            <TextField
              id={id("preferredDate")}
              name="preferredDate"
              type="date"
              label="Preferred demo date"
              error={errors.preferredDate}
              className="sm:col-span-2"
            />
          </>
        )}

        <TextAreaField
          id={id("message")}
          name="message"
          label={type === "demo" ? "Anything we should prepare?" : "How can we help?"}
          required={type !== "demo"}
          rows={type === "demo" ? 3 : 5}
          error={errors.message}
          className="sm:col-span-2"
        />

        {/* Honeypot: hidden from people and assistive tech; bots tend to fill it. */}
        <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
          <label>
            Website
            <input type="text" name="website" tabIndex={-1} autoComplete="off" defaultValue="" />
          </label>
        </div>
      </div>

      {serverMessage && (
        <div
          id={id("form-error")}
          role="alert"
          className="mt-5 flex items-start gap-3 rounded-xl border border-rose-200 bg-rose-50 p-4 text-sm text-rose-800"
        >
          <CircleAlert className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
          <p>{serverMessage}</p>
        </div>
      )}

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs leading-5 text-muted">
          By submitting, you agree to be contacted about your request. We never share your details.
        </p>
        <Button type="submit" size="lg" disabled={status === "submitting"} className="shrink-0">
          {status === "submitting" ? (
            <>
              <LoaderCircle className="h-4 w-4 animate-spin" aria-hidden="true" />
              Sending…
            </>
          ) : (
            text.submit
          )}
        </Button>
      </div>
    </form>
  );
}
