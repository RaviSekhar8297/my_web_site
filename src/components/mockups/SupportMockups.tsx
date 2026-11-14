import {
  BookOpen,
  ChartColumn,
  Clock,
  Gauge,
  Headset,
  Inbox,
  Ticket,
  Users,
  CircleCheck,
} from "lucide-react";
import { Avatar, BarChart, Frame, MockCard, MockSidebar, MockTopbar, Pill, type PillTone, StatTile } from "./primitives";

const nav = [
  { label: "Overview", icon: Gauge },
  { label: "Inbox", icon: Inbox },
  { label: "Tickets", icon: Ticket },
  { label: "Customers", icon: Users },
  { label: "Knowledge base", icon: BookOpen },
  { label: "Reports", icon: ChartColumn },
];

const tickets: {
  id: string;
  subject: string;
  requester: string;
  priority: string;
  priorityTone: PillTone;
  sla: string;
  slaTone: PillTone;
  agent: string;
}[] = [
  { id: "#1042", subject: "Unable to sign in to the portal", requester: "Northwind Supply", priority: "High", priorityTone: "red", sla: "1h 20m left", slaTone: "amber", agent: "Ravi K" },
  { id: "#1041", subject: "Invoice export is missing columns", requester: "Brightline Audit", priority: "Medium", priorityTone: "amber", sla: "5h 05m left", slaTone: "green", agent: "Asha M" },
  { id: "#1039", subject: "Request: add a new user role", requester: "Contoso Retail", priority: "Low", priorityTone: "slate", sla: "1d 2h left", slaTone: "green", agent: "Ravi K" },
  { id: "#1037", subject: "Printer not connecting at branch", requester: "Internal · Facilities", priority: "High", priorityTone: "red", sla: "Breached", slaTone: "red", agent: "Sam D" },
];

/** Main Support Management dashboard. Sample data only. */
export function SupportDashboard({ compact = false }: { compact?: boolean }) {
  return (
    <Frame theme="support" url="app.example.com/support/overview" label="Illustrative preview of the Support Management dashboard">
      <div className="flex bg-surface/70">
        <MockSidebar brand="Support" items={nav} activeIndex={0} />
        <div className="min-w-0 flex-1 space-y-3 p-3.5 @xl:p-4">
          <MockTopbar title="Support overview" subtitle="All queues · Today" action="+ New ticket" />

          <div className="grid grid-cols-2 gap-2.5 @xl:grid-cols-4">
            <StatTile label="Open tickets" value="42" note="12 unassigned" icon={Ticket} />
            <StatTile label="Due today" value="9" note="2 at risk" icon={Clock} />
            <StatTile label="Resolved today" value="17" note="Since 9:00 AM" icon={CircleCheck} />
            <StatTile label="Agents online" value="6" note="of 8 on shift" icon={Headset} />
          </div>

          <div className="grid gap-2.5 @xl:grid-cols-5">
            <MockCard title="Priority queue" action="Open queue" className="@xl:col-span-3">
              <ul className="divide-y divide-line">
                {tickets.slice(0, compact ? 3 : 4).map((t, i) => (
                  <li key={t.id} className="flex items-center gap-2.5 py-2 first:pt-0 last:pb-0">
                    <span className="w-9 shrink-0 text-[10px] font-semibold text-muted">{t.id}</span>
                    <div className="min-w-0 flex-1">
                      <div className="truncate text-[11px] font-semibold">{t.subject}</div>
                      <div className="truncate text-[10px] text-muted">{t.requester}</div>
                    </div>
                    <span className="hidden @lg:block">
                      <Pill tone={t.priorityTone}>{t.priority}</Pill>
                    </span>
                    <Pill tone={t.slaTone}>{t.sla}</Pill>
                    <span className="hidden @xl:block">
                      <Avatar name={t.agent} index={i} size="sm" />
                    </span>
                  </li>
                ))}
              </ul>
            </MockCard>
            <MockCard title="Tickets by channel" className="@xl:col-span-2">
              <BarChart values={[22, 14, 9, 6]} labels={["Email", "Portal", "Phone", "Chat"]} highlightIndex={0} />
            </MockCard>
          </div>
        </div>
      </div>
    </Frame>
  );
}

/** Secondary Support screen: a ticket conversation with properties. */
export function SupportTicketScreen() {
  return (
    <Frame theme="support" url="app.example.com/support/tickets/1042" label="Illustrative preview of a support ticket conversation">
      <div className="flex bg-surface/70">
        <MockSidebar brand="Support" items={nav} activeIndex={2} />
        <div className="min-w-0 flex-1 p-3.5 @xl:p-4">
          <div className="grid gap-2.5 @xl:grid-cols-5">
            <div className="space-y-2.5 @xl:col-span-3">
              <div className="rounded-xl border border-line bg-white p-3.5">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[10px] font-semibold text-muted">#1042</span>
                  <Pill tone="red">High</Pill>
                  <Pill tone="accent">In progress</Pill>
                </div>
                <div className="mt-2 font-display text-sm font-bold">Unable to sign in to the portal</div>
              </div>

              {[
                { who: "Northwind Supply", text: "Several of our users see an error after entering their password. This started this morning.", mine: false },
                { who: "Ravi K (Support)", text: "Thanks for reporting this. We have reproduced the issue and are applying a fix now. Update within the hour.", mine: true },
              ].map((m, i) => (
                <div key={m.who} className={"flex gap-2.5 " + (m.mine ? "flex-row-reverse" : "")}>
                  <Avatar name={m.who} index={i + 2} />
                  <div
                    className={
                      "max-w-[85%] rounded-xl px-3 py-2 text-[11px] leading-snug " +
                      (m.mine ? "bg-accent-soft text-accent-ink" : "border border-line bg-white")
                    }
                  >
                    <div className="mb-0.5 text-[9px] font-semibold opacity-70">{m.who}</div>
                    {m.text}
                  </div>
                </div>
              ))}

              <div className="rounded-xl border border-line bg-white p-3 text-[11px] text-muted">
                Write a reply, or insert a canned response…
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-[10px]">Attach · Templates</span>
                  <span className="rounded-md bg-accent px-3 py-1.5 text-[10px] font-semibold text-white">Send reply</span>
                </div>
              </div>
            </div>

            <div className="space-y-2.5 @xl:col-span-2">
              <MockCard title="Properties">
                <dl className="space-y-2 text-[10px]">
                  {[
                    ["Status", "In progress"],
                    ["Assignee", "Ravi K"],
                    ["Category", "Access & login"],
                    ["Channel", "Email"],
                  ].map(([k, v]) => (
                    <div key={k} className="flex justify-between gap-2">
                      <dt className="text-muted">{k}</dt>
                      <dd className="font-semibold">{v}</dd>
                    </div>
                  ))}
                </dl>
              </MockCard>
              <MockCard title="SLA">
                <div className="space-y-2.5">
                  <div>
                    <div className="mb-1 flex justify-between text-[10px]">
                      <span className="font-medium">First response</span>
                      <Pill tone="green">Met</Pill>
                    </div>
                    <div className="h-1.5 rounded-full bg-accent-soft">
                      <div className="h-full w-[35%] rounded-full bg-emerald-500" />
                    </div>
                  </div>
                  <div>
                    <div className="mb-1 flex justify-between text-[10px]">
                      <span className="font-medium">Resolution</span>
                      <Pill tone="amber">1h 20m left</Pill>
                    </div>
                    <div className="h-1.5 rounded-full bg-accent-soft">
                      <div className="h-full w-[78%] rounded-full bg-accent" />
                    </div>
                  </div>
                </div>
              </MockCard>
            </div>
          </div>
        </div>
      </div>
    </Frame>
  );
}

/** Small floating card used on the home hero. */
export function SupportSlaMini() {
  return (
    <div data-product="support" role="img" aria-label="Illustrative support ticket with SLA timer" className="w-52 rounded-2xl border border-line bg-white p-3 shadow-xl">
      <div aria-hidden="true">
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-semibold text-muted">#1042</span>
          <Pill tone="red">High</Pill>
        </div>
        <div className="mt-1.5 text-[11px] font-bold leading-snug">Unable to sign in to the portal</div>
        <div className="mt-3 flex justify-between text-[10px]">
          <span className="text-muted">Resolution SLA</span>
          <span className="font-semibold text-amber-700">1h 20m left</span>
        </div>
        <div className="mt-1 h-1.5 rounded-full bg-accent-soft">
          <div className="h-full w-[78%] rounded-full bg-accent" />
        </div>
      </div>
    </div>
  );
}
