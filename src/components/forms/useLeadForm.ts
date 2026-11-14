"use client";

import { type FormEvent, useState } from "react";
import { type FieldErrors, type LeadType, leadSchema, toFieldErrors } from "@/lib/validation";

type Status = "idle" | "submitting" | "success" | "error";

/**
 * Handles client-side validation, submission to /api/contact and result state
 * for all three forms (contact, demo, enquiry).
 */
export function useLeadForm(type: LeadType) {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [serverMessage, setServerMessage] = useState<string | null>(null);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "submitting") return;

    const form = event.currentTarget;
    const values: Record<string, string> = { type };
    new FormData(form).forEach((value, key) => {
      if (typeof value === "string") values[key] = value;
    });

    const parsed = leadSchema.safeParse(values);
    if (!parsed.success) {
      const fieldErrors = toFieldErrors(parsed.error.issues);
      setErrors(fieldErrors);
      setStatus("idle");
      setServerMessage(null);
      // Move focus to the first invalid field so keyboard and screen-reader users land on it.
      const firstKey = Object.keys(fieldErrors)[0];
      form.querySelector<HTMLElement>(`[name="${firstKey}"]`)?.focus();
      return;
    }

    setErrors({});
    setServerMessage(null);
    setStatus("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const result = (await response.json().catch(() => null)) as {
        ok?: boolean;
        error?: string;
        fieldErrors?: Record<string, string[]>;
      } | null;

      if (response.ok && result?.ok) {
        form.reset();
        setStatus("success");
        return;
      }

      if (response.status === 422 && result?.fieldErrors) {
        const mapped: FieldErrors = {};
        for (const [key, messages] of Object.entries(result.fieldErrors)) {
          if (messages?.[0]) mapped[key] = messages[0];
        }
        setErrors(mapped);
      }
      setServerMessage(result?.error ?? "Something went wrong. Please try again or contact us on WhatsApp.");
      setStatus("error");
    } catch {
      setServerMessage("We could not reach the server. Check your connection and try again.");
      setStatus("error");
    }
  }

  function reset() {
    setStatus("idle");
    setErrors({});
    setServerMessage(null);
  }

  return { status, errors, serverMessage, onSubmit, reset };
}
