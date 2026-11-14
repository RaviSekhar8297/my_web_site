import {
  CalendarDays,
  CalendarClock,
  ChartColumn,
  Gauge,
  UserPlus,
  UserCheck,
  Users,
  Wallet,
  Briefcase,
} from "lucide-react";
import { Avatar, BarChart, Frame, MockCard, MockSidebar, MockTopbar, Pill, StatTile } from "./primitives";

const nav = [
  { label: "Dashboard", icon: Gauge },
  { label: "Employees", icon: Users },
  { label: "Attendance", icon: CalendarClock },
  { label: "Leave", icon: CalendarDays },
  { label: "Payroll", icon: Wallet },
  { label: "Recruitment", icon: UserPlus },
  { label: "Reports", icon: ChartColumn },
];

const departments = [
  { name: "Engineering", pct: 38, color: "var(--accent)" },
  { name: "Operations", pct: 24, color: "#818cf8" },
  { name: "Sales", pct: 20, color: "#a5b4fc" },
  { name: "Support & HR", pct: 18, color: "#c7d2fe" },
];

function donutGradient() {
  let start = 0;
  const stops = departments.map((d) => {
    const stop = `${d.color} ${start}% ${start + d.pct}%`;
    start += d.pct;
    return stop;
  });
  return `conic-gradient(${stops.join(", ")})`;
}

const approvals = [
  { name: "Priya Nair", detail: "Casual leave · 2 days", status: "Pending" },
  { name: "Daniel Rao", detail: "Regularisation · 12 Nov", status: "Pending" },
  { name: "Meera Kulkarni", detail: "Work from home · 3 days", status: "Approved" },
];

/** Main HRMS dashboard. Sample data only. */
export function HrmsDashboard({ compact = false }: { compact?: boolean }) {
  return (
    <Frame theme="hrms" url="app.example.com/hrms/dashboard" label="Illustrative preview of the HRMS dashboard">
      <div className="flex bg-surface/70">
        <MockSidebar brand="HRMS" items={nav} activeIndex={0} />
        <div className="min-w-0 flex-1 space-y-3 p-3.5 @xl:p-4">
          <MockTopbar title="Good morning, Anita" subtitle="Friday, 13 November" action="+ Add employee" />

          <div className="grid grid-cols-2 gap-2.5 @xl:grid-cols-4">
            <StatTile label="Headcount" value="128" note="Across 4 locations" icon={Users} />
            <StatTile label="Present today" value="112" note="87.5% attendance" icon={UserCheck} />
            <StatTile label="On leave" value="9" note="3 pending approvals" icon={CalendarDays} />
            <StatTile label="Open positions" value="6" note="14 candidates" icon={Briefcase} />
          </div>

          <div className="grid gap-2.5 @xl:grid-cols-5">
            <MockCard title="Attendance this week" action="View report" className="@xl:col-span-3">
              <BarChart values={[78, 92, 88, 95, 84, 40, 12]} labels={["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]} highlightIndex={4} />
            </MockCard>
            <MockCard title="By department" className="@xl:col-span-2">
              <div className="flex items-center gap-4">
                <div className="relative h-20 w-20 shrink-0 rounded-full" style={{ background: donutGradient() }}>
                  <div className="absolute inset-[14px] flex items-center justify-center rounded-full bg-white text-[10px] font-bold">
                    128
                  </div>
                </div>
                <ul className="min-w-0 space-y-1.5">
                  {departments.map((d) => (
                    <li key={d.name} className="flex items-center gap-2 text-[10px] text-muted">
                      <span className="h-2 w-2 shrink-0 rounded-full" style={{ background: d.color }} />
                      <span className="truncate">{d.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </MockCard>
          </div>

          {!compact && (
            <MockCard title="Pending approvals" action="See all">
              <ul className="divide-y divide-line">
                {approvals.map((a, i) => (
                  <li key={a.name} className="flex items-center gap-3 py-2 first:pt-0 last:pb-0">
                    <Avatar name={a.name} index={i} />
                    <div className="min-w-0 flex-1">
                      <div className="truncate text-[11px] font-semibold">{a.name}</div>
                      <div className="truncate text-[10px] text-muted">{a.detail}</div>
                    </div>
                    <Pill tone={a.status === "Approved" ? "green" : "amber"}>{a.status}</Pill>
                  </li>
                ))}
              </ul>
            </MockCard>
          )}
        </div>
      </div>
    </Frame>
  );
}

const month = Array.from({ length: 30 }, (_, i) => i + 1);
const leaveDays: Record<number, "leave" | "holiday" | "today"> = {
  3: "leave",
  4: "leave",
  11: "holiday",
  13: "today",
  18: "leave",
  19: "leave",
  20: "leave",
  26: "holiday",
};

/** Secondary HRMS screen: leave calendar and balances. */
export function HrmsLeaveScreen() {
  return (
    <Frame theme="hrms" url="app.example.com/hrms/leave" label="Illustrative preview of the HRMS leave management screen">
      <div className="flex bg-surface/70">
        <MockSidebar brand="HRMS" items={nav} activeIndex={3} />
        <div className="min-w-0 flex-1 space-y-3 p-3.5 @xl:p-4">
          <MockTopbar title="Leave management" subtitle="Team calendar · November" action="Apply for leave" />

          <div className="grid gap-2.5 @xl:grid-cols-5">
            <MockCard title="November" className="@xl:col-span-3">
              <div className="grid grid-cols-7 gap-1 text-center text-[9px] text-muted">
                {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
                  <div key={i} className="pb-1 font-semibold">
                    {d}
                  </div>
                ))}
                {month.map((day) => {
                  const kind = leaveDays[day];
                  return (
                    <div
                      key={day}
                      className={
                        "rounded-md py-1.5 " +
                        (kind === "today"
                          ? "bg-accent font-bold text-white"
                          : kind === "leave"
                            ? "bg-accent-soft font-semibold text-accent-ink"
                            : kind === "holiday"
                              ? "bg-amber-50 font-semibold text-amber-700"
                              : "text-ink")
                      }
                    >
                      {day}
                    </div>
                  );
                })}
              </div>
              <div className="mt-3 flex flex-wrap gap-3 text-[9px] text-muted">
                <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-sm bg-accent-soft ring-1 ring-accent/40" />Team leave</span>
                <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-sm bg-amber-100" />Holiday</span>
                <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-sm bg-accent" />Today</span>
              </div>
            </MockCard>

            <div className="space-y-2.5 @xl:col-span-2">
              <MockCard title="Your balances">
                {[
                  { label: "Casual leave", used: 3, total: 12 },
                  { label: "Sick leave", used: 1, total: 8 },
                  { label: "Earned leave", used: 6, total: 18 },
                ].map((b) => (
                  <div key={b.label} className="mb-2.5 last:mb-0">
                    <div className="mb-1 flex justify-between text-[10px]">
                      <span className="font-medium">{b.label}</span>
                      <span className="text-muted">
                        {b.total - b.used} of {b.total} left
                      </span>
                    </div>
                    <div className="h-1.5 rounded-full bg-accent-soft">
                      <div className="h-full rounded-full bg-accent" style={{ width: `${(b.used / b.total) * 100}%` }} />
                    </div>
                  </div>
                ))}
              </MockCard>
              <MockCard title="Awaiting your approval">
                {approvals.slice(0, 2).map((a, i) => (
                  <div key={a.name} className="flex items-center gap-2.5 py-1.5">
                    <Avatar name={a.name} index={i} size="sm" />
                    <div className="min-w-0 flex-1 truncate text-[10px] font-medium">{a.name}</div>
                    <span className="rounded-md bg-accent px-2 py-1 text-[9px] font-semibold text-white">Review</span>
                  </div>
                ))}
              </MockCard>
            </div>
          </div>
        </div>
      </div>
    </Frame>
  );
}
