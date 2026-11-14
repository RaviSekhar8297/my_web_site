import {
  Building2,
  Factory,
  GraduationCap,
  Handshake,
  HeartPulse,
  Landmark,
  Laptop,
  Layers,
  Lock,
  type LucideIcon,
  Plug,
  Rocket,
  Settings,
  Store,
  Truck,
  Wrench,
  Headset,
  Workflow,
  Eye,
  Users,
  Gauge,
} from "lucide-react";

/**
 * Home page and shared marketing copy.
 * EDIT ME. Nothing here is a statistic or a client claim; keep it that way
 * unless you can back the claim up.
 */

export interface IconItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const hero = {
  eyebrow: "NAVIRA Technology & Software Suite",
  title: "Enterprise software your teams will actually love using.",
  description:
    "Production-ready HRMS, Visitor Management, and Support Management systems, paired with bespoke software engineering and dedicated 24/7 technical support from Navira.",
  points: ["Production-Ready SaaS", "Custom Engineering", "24/7 Dedicated Support"],
};

export const introduction = {
  eyebrow: "About NAVIRA",
  title: "A technology partner for organisations that demand operational excellence.",
  paragraphs: [
    "At Navira Technology & Software, we design, build, and support the software that powers core enterprise operations: how people are managed, how visitors and facilities are secured, and how critical support requests are resolved.",
    "Our ready-to-deploy platforms give you an accelerated head start, while our engineering team can customize, integrate, or build entirely bespoke digital solutions tailored to your unique workflows.",
  ],
  pillars: [
    {
      title: "Enterprise Products",
      description: "HRMS, VMS and Support Management platforms engineered for immediate operational impact.",
      icon: Layers,
    },
    {
      title: "Bespoke Development",
      description: "Custom cloud, web, mobile, and API integration architectures built around your exact requirements.",
      icon: Workflow,
    },
    {
      title: "24/7 Dedicated Support",
      description: "Long-term SLAs, security monitoring, and proactive maintenance from our in-house engineering team.",
      icon: Headset,
    },
  ] satisfies IconItem[],
};

export const whyChooseUs: IconItem[] = [
  {
    title: "Products and projects under one roof",
    description:
      "Start with a product, extend it with custom work, and deal with one team throughout.",
    icon: Layers,
  },
  {
    title: "Built around your workflow",
    description:
      "We configure and adapt software to your process instead of asking you to adapt to ours.",
    icon: Settings,
  },
  {
    title: "Security-minded engineering",
    description:
      "Role-based access, audit trails and careful data handling are part of the design, not an add-on.",
    icon: Lock,
  },
  {
    title: "Transparent delivery",
    description:
      "Clear scope, regular demos and honest communication about progress and trade-offs.",
    icon: Eye,
  },
  {
    title: "Long-term maintenance",
    description:
      "We stay available after go-live for fixes, enhancements and technical support.",
    icon: Wrench,
  },
  {
    title: "A partner, not a vendor",
    description:
      "We aim to understand your business well enough to suggest what you did not ask for.",
    icon: Handshake,
  },
];

export const industries: IconItem[] = [
  {
    title: "Manufacturing",
    description: "Shift attendance, contractor access control and plant-floor support requests.",
    icon: Factory,
  },
  {
    title: "Healthcare",
    description: "Staff management, visitor control and structured service requests.",
    icon: HeartPulse,
  },
  {
    title: "Education",
    description: "Faculty and staff HR, campus visitor records and helpdesk workflows.",
    icon: GraduationCap,
  },
  {
    title: "IT & Software",
    description: "People operations, secure office access and customer or internal support desks.",
    icon: Laptop,
  },
  {
    title: "Retail & Distribution",
    description: "Multi-branch workforce management and vendor and delivery visitor tracking.",
    icon: Store,
  },
  {
    title: "Logistics & Warehousing",
    description: "Driver and vendor check-in, shift workforces and operations support tracking.",
    icon: Truck,
  },
  {
    title: "Financial Services",
    description: "Audit-ready visitor logs, controlled access and SLA-driven service desks.",
    icon: Landmark,
  },
  {
    title: "Corporate & Public Offices",
    description: "Front-desk modernisation, employee self-service and internal service requests.",
    icon: Building2,
  },
];

export const keyBenefits: IconItem[] = [
  {
    title: "Fast to adopt",
    description: "Clear, uncluttered interfaces that people can use with minimal training.",
    icon: Rocket,
  },
  {
    title: "Configurable",
    description: "Policies, workflows, fields and branding adapted to your organisation.",
    icon: Settings,
  },
  {
    title: "Secure by design",
    description: "Role-based permissions and audit trails across every module.",
    icon: Lock,
  },
  {
    title: "Connected",
    description: "APIs and integrations so data moves between your systems automatically.",
    icon: Plug,
  },
  {
    title: "Built to scale",
    description: "Architecture that supports more users, locations and data as you grow.",
    icon: Gauge,
  },
  {
    title: "Backed by people",
    description: "Real technical support from the team that builds the software.",
    icon: Users,
  },
];

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
}

/**
 * Add REAL, permission-approved testimonials here.
 * While this array is empty the testimonials section is not rendered at all.
 */
export const testimonials: Testimonial[] = [];

export const workProcess = [
  {
    title: "Discover",
    description: "We learn your workflows, users and constraints, and agree the scope.",
  },
  {
    title: "Design",
    description: "Wireframes and architecture are reviewed with you before development starts.",
  },
  {
    title: "Build",
    description: "Iterative delivery with regular demos so you see progress, not promises.",
  },
  {
    title: "Launch",
    description: "Testing, data migration, training and a supported go-live.",
  },
  {
    title: "Support",
    description: "Ongoing maintenance, enhancements and technical support.",
  },
];

export const demoCta = {
  title: "See the software working on your own processes.",
  description:
    "Book a guided walkthrough of HRMS, VMS or Support Management with our team. Bring your questions and we will show you how it would fit your organisation.",
};
