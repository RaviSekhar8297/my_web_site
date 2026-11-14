import "server-only";
import nodemailer from "nodemailer";
import { siteConfig } from "@/content/site";
import type { Lead } from "@/lib/validation";

const typeLabels: Record<Lead["type"], string> = {
  contact: "Contact message",
  demo: "Demo request",
  enquiry: "Product enquiry",
};

const fieldLabels: Record<string, string> = {
  name: "Name",
  email: "Email",
  phone: "Phone",
  company: "Company",
  product: "Product",
  teamSize: "Team size",
  preferredDate: "Preferred demo date",
  message: "Message",
};

const productLabels: Record<string, string> = {
  hrms: "HRMS",
  vms: "Visitor Management System",
  support: "Support Management System",
  custom: "Custom software / web / mobile development",
};

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function getTransport() {
  const host = process.env.SMTP_HOST;
  if (!host) return null;
  return nodemailer.createTransport({
    host,
    port: Number(process.env.SMTP_PORT ?? 587),
    secure: process.env.SMTP_SECURE === "true",
    auth: process.env.SMTP_USER
      ? { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS ?? "" }
      : undefined,
  });
}

function leadRows(lead: Lead): Array<[string, string]> {
  const rows: Array<[string, string]> = [];
  for (const key of Object.keys(fieldLabels)) {
    const raw = (lead as Record<string, unknown>)[key];
    if (typeof raw === "string" && raw.trim()) {
      rows.push([fieldLabels[key], key === "product" ? (productLabels[raw] ?? raw) : raw]);
    }
  }
  return rows;
}

export class EmailNotConfiguredError extends Error {
  constructor() {
    super("SMTP is not configured");
    this.name = "EmailNotConfiguredError";
  }
}

/**
 * Sends the sales notification (and optionally a confirmation to the visitor).
 * In development with no SMTP configured, the lead is logged to the console instead.
 */
export async function sendLeadEmail(lead: Lead): Promise<void> {
  const transport = getTransport();
  const rows = leadRows(lead);
  const label = typeLabels[lead.type];

  if (!transport) {
    if (process.env.NODE_ENV === "production") throw new EmailNotConfiguredError();
    console.info(`[lead:${lead.type}] SMTP not configured, logging instead:\n`, rows);
    return;
  }

  const to = process.env.LEAD_TO_EMAIL ?? siteConfig.contact.email;
  const from = process.env.LEAD_FROM_EMAIL ?? siteConfig.contact.email;

  const html = `
    <div style="font-family:Arial,Helvetica,sans-serif;color:#0a1226;max-width:560px">
      <h2 style="margin:0 0 12px">${escapeHtml(label)} from the website</h2>
      <table style="border-collapse:collapse;width:100%">
        ${rows
          .map(
            ([k, v]) => `<tr>
              <td style="padding:8px 12px 8px 0;color:#566075;vertical-align:top;white-space:nowrap">${escapeHtml(k)}</td>
              <td style="padding:8px 0;white-space:pre-wrap">${escapeHtml(v)}</td>
            </tr>`,
          )
          .join("")}
      </table>
    </div>`;

  const text = rows.map(([k, v]) => `${k}: ${v}`).join("\n");

  await transport.sendMail({
    from,
    to,
    replyTo: lead.email,
    subject: `[Website] ${label}: ${lead.name}`,
    text,
    html,
  });

  if (process.env.SEND_CONFIRMATION_EMAIL === "true") {
    const first = escapeHtml(lead.name.split(" ")[0] ?? lead.name);
    try {
      await transport.sendMail({
        from,
        to: lead.email,
        subject: `We received your ${label.toLowerCase()}, ${siteConfig.name}`,
        text: `Hi ${lead.name.split(" ")[0]},\n\nThank you for contacting ${siteConfig.name}. Our team will get back to you shortly.\n\n${siteConfig.name}`,
        html: `<p>Hi ${first},</p><p>Thank you for contacting ${escapeHtml(siteConfig.name)}. Our team will get back to you shortly.</p><p>${escapeHtml(siteConfig.name)}</p>`,
      });
    } catch (error) {
      // The sales notification already went out; do not fail the request over the courtesy email.
      console.error("Confirmation email failed", error);
    }
  }
}
