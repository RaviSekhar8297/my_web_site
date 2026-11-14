import { LeadForm } from "@/components/forms/LeadForm";
import { Section, SectionHeading } from "@/components/ui/Section";
import { ContactInfo } from "./ContactInfo";

/** Compact contact block for the home page. The full tabbed experience lives on /contact. */
export function ContactSection() {
  return (
    <Section id="contact" tone="surface">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <SectionHeading
            eyebrow="Contact"
            title="Talk to our team."
            description="Tell us what you are trying to achieve. We will reply with practical next steps, not a sales script."
          />
          <div className="mt-10">
            <ContactInfo />
          </div>
        </div>
        <div className="rounded-3xl border border-line bg-white p-6 shadow-xl shadow-ink/5 sm:p-8">
          <LeadForm type="contact" />
        </div>
      </div>
    </Section>
  );
}
