import {
  Award,
  Bell,
  BookOpen,
  Briefcase,
  CalendarClock,
  CalendarDays,
  ChartColumn,
  ClipboardList,
  Clock,
  FileText,
  Globe,
  Headset,
  type LucideIcon,
  Printer,
  QrCode,
  ShieldCheck,
  Ticket,
  UserCheck,
  UserPlus,
  Users,
  Wallet,
  Workflow,
  DoorOpen,
} from "lucide-react";

/**
 * Product catalogue.
 * EDIT ME: this copy describes typical capabilities of each product category.
 * Replace or trim anything that does not match what your software actually does.
 */

export type ProductTheme = "hrms" | "vms" | "support";

export interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Product {
  slug: string;
  theme: ProductTheme;
  name: string;
  shortName: string;
  tagline: string;
  summary: string;
  image: string;
  badge: string;
  stats: { label: string; value: string }[];
  intro: string[];
  audience: string[];
  icon: LucideIcon;
  highlights: string[];
  features: Feature[];
  benefits: { title: string; description: string }[];
  useCases: { title: string; description: string; icon: LucideIcon }[];
  seo: { title: string; description: string };
}

export const products: Product[] = [
  {
    slug: "hrms",
    theme: "hrms",
    name: "Human Resource Management System",
    shortName: "HRMS",
    tagline: "One system for the entire employee lifecycle.",
    summary:
      "Manage employee records, attendance, leave, payroll preparation and recruitment from a single, role-based platform.",
    image: "/images/products/hrms-dashboard.jpg",
    badge: "Core HR & Workforce",
    stats: [
      { label: "Time Saved", value: "65%" },
      { label: "Attendance Precision", value: "99.8%" },
      { label: "Payroll Processing", value: "Instant" },
    ],
    icon: Users,
    highlights: [
      "Attendance, shifts and leave in one place",
      "Employee self-service and approvals",
      "Payroll preparation and HR reports",
    ],
    intro: [
      "Our HRMS brings people data, attendance, leave, payroll preparation and recruitment together so HR teams stop reconciling spreadsheets and start running the process.",
      "Employees get a self-service portal, managers get clear approval queues, and HR gets a reliable record they can report from, all governed by role-based access.",
    ],
    audience: [
      "HR and people-operations teams",
      "Organisations with multiple locations or shifts",
      "Growing companies moving off spreadsheets",
    ],
    features: [
      {
        title: "Employee records",
        description:
          "A central profile for every employee with documents, job history and organisation structure.",
        icon: Users,
      },
      {
        title: "Attendance & shifts",
        description:
          "Capture attendance, plan shifts and handle regularisations with configurable rules.",
        icon: CalendarClock,
      },
      {
        title: "Leave management",
        description:
          "Define leave types and policies, route requests for approval and keep balances accurate.",
        icon: CalendarDays,
      },
      {
        title: "Payroll preparation",
        description:
          "Compile attendance and leave into payroll inputs and generate payslips in your format.",
        icon: Wallet,
      },
      {
        title: "Recruitment & onboarding",
        description:
          "Track openings and candidates, then move new hires through a structured onboarding checklist.",
        icon: UserPlus,
      },
      {
        title: "Performance reviews",
        description:
          "Run goal-setting and review cycles with clear ownership for employees and managers.",
        icon: Award,
      },
      {
        title: "Employee self-service",
        description:
          "Let employees apply for leave, view payslips and update details without raising an HR request.",
        icon: UserCheck,
      },
      {
        title: "Reports & analytics",
        description:
          "Headcount, attendance, leave and attrition views that HR and leadership can act on.",
        icon: ChartColumn,
      },
    ],
    benefits: [
      {
        title: "Less manual HR administration",
        description: "Replace repetitive data entry and follow-ups with workflows that run themselves.",
      },
      {
        title: "A single source of truth",
        description: "One current record per employee instead of versions spread across files and inboxes.",
      },
      {
        title: "Clear, auditable approvals",
        description: "Every leave, regularisation and change request has an owner and a history.",
      },
      {
        title: "Decisions backed by data",
        description: "Reliable reports on people, time and cost without a month-end scramble.",
      },
    ],
    useCases: [
      {
        title: "Multi-location teams",
        description: "Apply different policies and holiday calendars per location from one console.",
        icon: Globe,
      },
      {
        title: "Shift-based workforces",
        description: "Roster shifts, track attendance and feed accurate hours into payroll.",
        icon: CalendarClock,
      },
      {
        title: "Growing companies",
        description: "Move from spreadsheets to a structured HR process before headcount outgrows it.",
        icon: Users,
      },
      {
        title: "Hiring to onboarding",
        description: "Carry a candidate's details straight into the employee record on joining.",
        icon: UserPlus,
      },
    ],
    seo: {
      title: "HRMS Software – Human Resource Management System",
      description:
        "Employee records, attendance, leave, payroll preparation and recruitment in one role-based HRMS. Request a demo.",
    },
  },
  {
    slug: "visitor-management-system",
    theme: "vms",
    name: "Visitor Management System",
    shortName: "VMS",
    tagline: "A secure, professional first impression for every visitor.",
    summary:
      "Pre-register guests, check them in with a QR pass, notify hosts instantly and keep a complete, searchable visitor record.",
    image: "/images/products/vms-dashboard.jpg",
    badge: "Digital Reception & Security",
    stats: [
      { label: "Check-in Speed", value: "<15s" },
      { label: "Audit Readiness", value: "100%" },
      { label: "Host Alert Delay", value: "0 sec" },
    ],
    icon: DoorOpen,
    highlights: [
      "Pre-registration and QR self check-in",
      "Instant host notifications",
      "Badges, watchlists and audit trail",
    ],
    intro: [
      "Our Visitor Management System replaces paper registers with a fast, branded check-in experience that your front desk, security team and hosts all work from.",
      "Visitors arrive to an invitation or a kiosk, hosts are notified immediately, and every entry and exit is recorded for security and compliance.",
    ],
    audience: [
      "Facility, security and front-desk teams",
      "Offices, campuses and industrial sites",
      "Organisations that must prove who was on site, and when",
    ],
    features: [
      {
        title: "Visitor pre-registration",
        description:
          "Hosts invite guests ahead of time so arrival is a scan, not a form.",
        icon: ClipboardList,
      },
      {
        title: "QR and self check-in",
        description:
          "Guests check in at a kiosk or reception tablet using a QR code or quick details form.",
        icon: QrCode,
      },
      {
        title: "Instant host alerts",
        description:
          "Hosts are notified the moment a visitor arrives, so nobody waits in the lobby.",
        icon: Bell,
      },
      {
        title: "Badge and pass printing",
        description:
          "Issue visitor badges with name, photo, host and validity, in your branding.",
        icon: Printer,
      },
      {
        title: "Watchlist & access rules",
        description:
          "Flag restricted visitors and require approvals for sensitive areas or visitor types.",
        icon: ShieldCheck,
      },
      {
        title: "Contractors & vendors",
        description:
          "Handle recurring visitors, documents and validity periods separately from one-off guests.",
        icon: Briefcase,
      },
      {
        title: "Visitor log & audit trail",
        description:
          "A searchable record of every check-in and check-out with who they met and when.",
        icon: FileText,
      },
      {
        title: "Reports & insights",
        description:
          "Footfall by day, host and purpose, plus overstay and exception reports for security.",
        icon: ChartColumn,
      },
    ],
    benefits: [
      {
        title: "Stronger site security",
        description: "Know who is on site right now, who they are visiting and who has not checked out.",
      },
      {
        title: "A professional arrival experience",
        description: "Fast, branded check-in that reflects well on your organisation from the front door.",
      },
      {
        title: "Less reception workload",
        description: "Pre-registration and self check-in take routine data entry off the front desk.",
      },
      {
        title: "Records ready for audits",
        description: "Complete, time-stamped visitor history you can search and export when needed.",
      },
    ],
    useCases: [
      {
        title: "Corporate offices",
        description: "Streamline guest, interview and vendor visits across floors and buildings.",
        icon: Briefcase,
      },
      {
        title: "Plants and warehouses",
        description: "Control contractor and driver access with validity checks and approvals.",
        icon: ShieldCheck,
      },
      {
        title: "Hospitals and institutions",
        description: "Manage visiting rules and keep an accurate record of entries and exits.",
        icon: ClipboardList,
      },
      {
        title: "Managed buildings",
        description: "Give property teams one visitor record across multiple tenants.",
        icon: DoorOpen,
      },
    ],
    seo: {
      title: "Visitor Management System (VMS) Software",
      description:
        "Pre-register visitors, check in with QR passes, notify hosts instantly and keep a complete audit trail. Request a VMS demo.",
    },
  },
  {
    slug: "support-management-system",
    theme: "support",
    name: "Support Management System",
    shortName: "Support Management",
    tagline: "Every request tracked, prioritised and resolved on time.",
    summary:
      "Turn emails, calls and portal requests into tracked tickets with SLAs, routing, a knowledge base and clear reporting.",
    image: "/images/products/support-dashboard.jpg",
    badge: "Enterprise SLAs & Helpdesk",
    stats: [
      { label: "First Response", value: "<4m" },
      { label: "Resolution Rate", value: "98.2%" },
      { label: "Satisfaction", value: "4.9/5" },
    ],
    icon: Headset,
    highlights: [
      "Tickets from email, portal and phone",
      "SLA timers, routing and escalations",
      "Knowledge base and self-service portal",
    ],
    intro: [
      "Our Support Management System gives support and service teams one queue for every request, with ownership, priorities and deadlines that are visible to the whole team.",
      "SLA tracking, automatic routing and a built-in knowledge base help agents respond faster, while managers see where work is piling up before customers do.",
    ],
    audience: [
      "IT helpdesks and internal service desks",
      "Customer support and technical support teams",
      "Software vendors managing support contracts",
    ],
    features: [
      {
        title: "Multi-channel ticketing",
        description:
          "Convert emails, portal submissions and phone requests into tickets with full history.",
        icon: Ticket,
      },
      {
        title: "SLA tracking & escalations",
        description:
          "Set response and resolution targets per priority and escalate automatically before they breach.",
        icon: Clock,
      },
      {
        title: "Routing & assignment",
        description:
          "Route tickets by category, customer or skill, with round-robin or manual assignment.",
        icon: Workflow,
      },
      {
        title: "Knowledge base",
        description:
          "Publish articles for agents and customers to resolve common issues without a ticket.",
        icon: BookOpen,
      },
      {
        title: "Customer self-service portal",
        description:
          "Customers raise requests, follow progress and find answers without calling in.",
        icon: Globe,
      },
      {
        title: "Canned responses",
        description:
          "Reusable reply templates keep answers consistent and agents fast.",
        icon: FileText,
      },
      {
        title: "Agent workload view",
        description:
          "See who is handling what so work is balanced and nothing is left unowned.",
        icon: Users,
      },
      {
        title: "Reports & satisfaction",
        description:
          "Volume, resolution time, SLA compliance and customer feedback in one place.",
        icon: ChartColumn,
      },
    ],
    benefits: [
      {
        title: "Nothing falls through the cracks",
        description: "Every request has an owner, a priority and a deadline from the moment it arrives.",
      },
      {
        title: "Faster, more consistent responses",
        description: "Routing, templates and a knowledge base reduce time spent on repeat questions.",
      },
      {
        title: "Visibility for managers",
        description: "Spot backlogs and at-risk tickets early with live queue and SLA views.",
      },
      {
        title: "A better customer experience",
        description: "Customers see progress and get answers without chasing for updates.",
      },
    ],
    useCases: [
      {
        title: "IT helpdesk",
        description: "Handle incident and service requests for employees with clear priorities.",
        icon: Headset,
      },
      {
        title: "Customer support",
        description: "Manage customer queries across email and portal with shared inbox clarity.",
        icon: Ticket,
      },
      {
        title: "Internal service desks",
        description: "Run HR, facilities or admin requests through the same tracked workflow.",
        icon: ClipboardList,
      },
      {
        title: "Contract-based support",
        description: "Track requests against support contracts and SLAs for each customer.",
        icon: ShieldCheck,
      },
    ],
    seo: {
      title: "Support Management System – Helpdesk & Ticketing Software",
      description:
        "Ticketing, SLA tracking, routing, knowledge base and reports in one support management system. Request a demo.",
    },
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
