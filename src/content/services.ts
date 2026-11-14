import {
  CodeXml,
  Globe,
  type LucideIcon,
  LifeBuoy,
  Plug,
  Smartphone,
  Wrench,
} from "lucide-react";

/**
 * Service catalogue.
 * EDIT ME: adjust deliverables and technologies to match what you actually offer.
 */

export interface Service {
  slug: string;
  title: string;
  summary: string;
  icon: LucideIcon;
  intro: string;
  deliverables: string[];
  technologies: string[];
  seo: { title: string; description: string };
}

export const services: Service[] = [
  {
    slug: "custom-software-development",
    title: "Custom Software Development",
    summary:
      "Business applications designed around your workflows, built to be maintained for years rather than months.",
    icon: CodeXml,
    intro:
      "When off-the-shelf software forces your team to work around it, we build software that fits the way your organisation actually operates, from internal tools and portals to full line-of-business platforms.",
    deliverables: [
      "Requirement discovery and solution design",
      "Clean architecture and documented code",
      "Role-based access and audit trails",
      "Reports, dashboards and data export",
      "Testing, deployment and handover",
    ],
    technologies: ["TypeScript", "Node.js", "React / Next.js", "PostgreSQL", ".NET", "Java"],
    seo: {
      title: "Custom Software Development Services",
      description:
        "Bespoke business software designed around your workflows, built with maintainable architecture and supported after launch.",
    },
  },
  {
    slug: "web-application-development",
    title: "Web Application Development",
    summary:
      "Fast, secure, responsive web applications and portals that work across every device.",
    icon: Globe,
    intro:
      "From customer portals and admin consoles to SaaS products and corporate websites, we build web applications that load quickly, are accessible, and are structured so new features are easy to add.",
    deliverables: [
      "Responsive, accessible user interfaces",
      "Server-rendered and API-driven architectures",
      "Authentication, roles and permissions",
      "Performance and SEO foundations",
      "Cloud deployment and monitoring setup",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL"],
    seo: {
      title: "Web Application Development Services",
      description:
        "Responsive, secure and fast web applications, portals and SaaS platforms built with modern frameworks.",
    },
  },
  {
    slug: "mobile-application-development",
    title: "Mobile Application Development",
    summary:
      "Mobile apps for Android and iOS that extend your business software to the people on the move.",
    icon: Smartphone,
    intro:
      "Field teams, customers and employees increasingly work from their phones. We design and build mobile apps that connect to your systems securely and stay usable on real-world networks.",
    deliverables: [
      "Android and iOS app development",
      "Mobile-first UX and interface design",
      "Offline-aware data sync where needed",
      "Push notifications and device features",
      "Store submission and release support",
    ],
    technologies: ["React Native", "Flutter", "Kotlin", "Swift", "REST / GraphQL APIs"],
    seo: {
      title: "Mobile App Development – Android & iOS",
      description:
        "Android and iOS mobile applications connected securely to your business systems, from design through store release.",
    },
  },
  {
    slug: "api-integration",
    title: "API Integration",
    summary:
      "Connect your applications, payment, messaging and ERP systems so data flows without manual re-entry.",
    icon: Plug,
    intro:
      "Disconnected systems create duplicate work and inconsistent data. We design and build reliable integrations between your software and the third-party services your business depends on.",
    deliverables: [
      "Integration design and data mapping",
      "REST, webhook and file-based integrations",
      "Retry, logging and error alerting",
      "Secure credential and token handling",
      "API documentation for your team",
    ],
    technologies: ["REST", "GraphQL", "Webhooks", "OAuth 2.0", "Node.js", "PostgreSQL"],
    seo: {
      title: "API Integration Services",
      description:
        "Reliable integrations between your applications, ERP, payment and messaging platforms with proper logging and error handling.",
    },
  },
  {
    slug: "software-maintenance",
    title: "Software Maintenance",
    summary:
      "Keep existing applications secure, current and performing, whether we built them or not.",
    icon: Wrench,
    intro:
      "Software needs continued care: dependency updates, security patches, performance tuning and small enhancements. We take responsibility for keeping your applications healthy so your team can focus on the business.",
    deliverables: [
      "Bug fixing and enhancement requests",
      "Dependency and security updates",
      "Performance review and optimisation",
      "Backup, monitoring and release management",
      "Code review and technical documentation",
    ],
    technologies: ["Application support", "CI/CD", "Monitoring", "Database tuning"],
    seo: {
      title: "Application Maintenance & Support Services",
      description:
        "Ongoing maintenance, security updates and enhancements to keep your business applications reliable.",
    },
  },
  {
    slug: "technical-support",
    title: "Technical Support",
    summary:
      "Responsive help for users and administrators of our products and your custom applications.",
    icon: LifeBuoy,
    intro:
      "When something is not working, you need a clear route to a person who can fix it. Our technical support covers issue triage, resolution and guidance for both end users and administrators.",
    deliverables: [
      "Issue logging and prioritisation",
      "Remote troubleshooting and resolution",
      "User and administrator guidance",
      "Escalation to engineering where needed",
      "Periodic support summaries",
    ],
    technologies: ["Email & phone support", "Remote assistance", "Ticket tracking"],
    seo: {
      title: "Technical Support Services",
      description:
        "Dependable technical support for business software: triage, resolution and guidance for users and administrators.",
    },
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
