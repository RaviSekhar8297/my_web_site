import { z } from "zod";

/**
 * Shared by the browser (instant feedback) and the API route (authoritative check).
 */

export const leadTypes = ["contact", "demo", "enquiry"] as const;
export type LeadType = (typeof leadTypes)[number];

export const productValues = ["hrms", "vms", "support", "custom"] as const;

const phonePattern = /^[+()\-.\s\d]{7,20}$/;

/** Treats an empty string as "not provided". */
const emptyToUndefined = (value: unknown) =>
  typeof value === "string" && value.trim() === "" ? undefined : value;

const optionalText = (max = 120) =>
  z.preprocess(emptyToUndefined, z.string().trim().max(max, "That is too long").optional());

const optionalPhone = z.preprocess(
  emptyToUndefined,
  z.string().trim().regex(phonePattern, "Enter a valid phone number").optional(),
);

const requiredPhone = z
  .string()
  .trim()
  .regex(phonePattern, "Enter a valid phone number");

const shared = {
  name: z.string().trim().min(2, "Please enter your name").max(100, "That is too long"),
  email: z
    .string()
    .trim()
    .toLowerCase()
    .email("Enter a valid email address")
    .max(160, "That is too long"),
  /** Honeypot: real visitors never see or fill this. */
  website: z.string().optional(),
};

const product = z.enum(productValues, { message: "Please select a product" });

export const contactSchema = z.object({
  type: z.literal("contact"),
  ...shared,
  phone: optionalPhone,
  company: optionalText(),
  message: z
    .string()
    .trim()
    .min(10, "Please tell us a little more (at least 10 characters)")
    .max(3000, "Please keep your message under 3,000 characters"),
});

export const demoSchema = z.object({
  type: z.literal("demo"),
  ...shared,
  phone: requiredPhone,
  company: z.string().trim().min(2, "Please enter your company name").max(120, "That is too long"),
  product,
  teamSize: optionalText(40),
  preferredDate: optionalText(20),
  message: optionalText(3000),
});

export const enquirySchema = z.object({
  type: z.literal("enquiry"),
  ...shared,
  phone: optionalPhone,
  company: optionalText(),
  product,
  message: z
    .string()
    .trim()
    .min(10, "Please tell us a little more (at least 10 characters)")
    .max(3000, "Please keep your message under 3,000 characters"),
});

export const leadSchema = z.discriminatedUnion("type", [contactSchema, demoSchema, enquirySchema]);

export type Lead = z.infer<typeof leadSchema>;

export type FieldErrors = Record<string, string>;

/** Collapses zod issues into { fieldName: firstMessage }. */
export function toFieldErrors(issues: ReadonlyArray<{ path: PropertyKey[]; message: string }>): FieldErrors {
  const errors: FieldErrors = {};
  for (const issue of issues) {
    const key = String(issue.path[0] ?? "form");
    if (!errors[key]) errors[key] = issue.message;
  }
  return errors;
}
