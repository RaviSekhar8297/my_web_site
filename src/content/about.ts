import {
  Cloud,
  CodeXml,
  Database,
  type LucideIcon,
  Network,
  ShieldCheck,
  Smartphone,
  Workflow,
} from "lucide-react";

/** EDIT ME: replace with your real company story, mission and vision. */

export const about = {
  overview: [
    "Navira Technology & Software is a premier business technology company delivering high-performance digital infrastructure. Our flagship enterprise platforms streamline workforce management (HRMS), secure visitor operations (VMS), and accelerate support ticketing, backed by bespoke software engineering capabilities.",
    "We believe modern enterprise software must be intuitive, resilient, data-conscious, and scalable. That engineering philosophy guides every product we build and every enterprise partnership we nurture.",
  ],
  mission:
    "To equip modern enterprises with dependable, intelligent software that eliminates administrative burden, enhances operational visibility, and unlocks organizational velocity.",
  vision:
    "To be the global technology and software partner trusted by industry leaders for the mission-critical systems at the heart of their daily operations.",
  values: [
    {
      title: "Engineering Excellence",
      description: "Robust architecture, stringent security standards, and meticulous craft in every line of code.",
    },
    {
      title: "Transparent Collaboration",
      description: "Direct communication, realistic timelines, and accountable partnership throughout every milestone.",
    },
    {
      title: "Data Sovereignty & Trust",
      description: "Enterprise-grade encryption, role-based governance, and absolute respect for client privacy.",
    },
  ],
};

export interface Expertise {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const expertise: Expertise[] = [
  {
    title: "Enterprise web applications",
    description: "Portals, admin consoles and SaaS platforms with role-based access.",
    icon: CodeXml,
  },
  {
    title: "Mobile applications",
    description: "Android and iOS apps connected securely to business systems.",
    icon: Smartphone,
  },
  {
    title: "Workflow & process automation",
    description: "Approvals, notifications and rules that replace manual follow-up.",
    icon: Workflow,
  },
  {
    title: "Integrations & APIs",
    description: "Dependable connections between applications, payments and messaging.",
    icon: Network,
  },
  {
    title: "Data & reporting",
    description: "Structured databases and reports that leadership can rely on.",
    icon: Database,
  },
  {
    title: "Cloud deployment",
    description: "Hosting, monitoring and release practices for production systems.",
    icon: Cloud,
  },
  {
    title: "Security practices",
    description: "Access control, audit logging and secure development habits.",
    icon: ShieldCheck,
  },
];
