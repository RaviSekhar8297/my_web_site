import type { ComponentType } from "react";
import type { ProductTheme } from "@/content/products";
import { HrmsDashboard, HrmsLeaveScreen } from "./HrmsMockups";
import { SupportDashboard, SupportTicketScreen } from "./SupportMockups";
import { VmsDashboard, VmsKioskScreen } from "./VmsMockups";

export { HrmsDashboard, VmsDashboard, SupportDashboard };
export { VmsPassMini } from "./VmsMockups";
export { SupportSlaMini } from "./SupportMockups";

/** Looks up the two preview screens for a product theme. */
export const productMockups: Record<
  ProductTheme,
  {
    primary: ComponentType<{ compact?: boolean }>;
    secondary: ComponentType;
    primaryCaption: string;
    secondaryCaption: string;
  }
> = {
  hrms: {
    primary: HrmsDashboard,
    secondary: HrmsLeaveScreen,
    primaryCaption: "HR dashboard: headcount, attendance and approvals at a glance.",
    secondaryCaption: "Leave management: team calendar, balances and approval queue.",
  },
  vms: {
    primary: VmsDashboard,
    secondary: VmsKioskScreen,
    primaryCaption: "Front-desk dashboard: live visitor log, arrivals and alerts.",
    secondaryCaption: "Kiosk check-in and the visitor pass issued on arrival.",
  },
  support: {
    primary: SupportDashboard,
    secondary: SupportTicketScreen,
    primaryCaption: "Support overview: priority queue, SLA timers and channel mix.",
    secondaryCaption: "Ticket view: conversation, properties and SLA progress.",
  },
};
