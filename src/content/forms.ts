/** Option lists used by the enquiry / demo forms (plain data, safe for client components). */

export const productOptions = [
  { value: "hrms", label: "HRMS – Human Resource Management System" },
  { value: "vms", label: "VMS – Visitor Management System" },
  { value: "support", label: "Support Management System" },
  { value: "custom", label: "Custom software / web / mobile development" },
] as const;

export const teamSizeOptions = [
  "1–50 people",
  "51–200 people",
  "201–1,000 people",
  "1,000+ people",
] as const;

/** Maps product page slugs to the form value used in the select. */
export const productSlugToValue: Record<string, string> = {
  hrms: "hrms",
  "visitor-management-system": "vms",
  "support-management-system": "support",
};
