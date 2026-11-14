import {
  Bell,
  CalendarClock,
  ChartColumn,
  ClipboardList,
  DoorOpen,
  Gauge,
  ShieldCheck,
  UserCheck,
  Users,
} from "lucide-react";
import { Avatar, BarChart, Frame, MockCard, MockSidebar, MockTopbar, Pill, type PillTone, StatTile } from "./primitives";

const nav = [
  { label: "Dashboard", icon: Gauge },
  { label: "Visitors", icon: Users },
  { label: "Pre-registrations", icon: ClipboardList },
  { label: "Hosts", icon: UserCheck },
  { label: "Watchlist", icon: ShieldCheck },
  { label: "Reports", icon: ChartColumn },
];

const visitors: { name: string; company: string; host: string; time: string; status: string; tone: PillTone }[] = [
  { name: "Arjun Malhotra", company: "Northwind Supply", host: "Kavya R.", time: "09:42", status: "Checked in", tone: "green" },
  { name: "Sofia Hernandez", company: "Brightline Audit", host: "Imran S.", time: "10:15", status: "Expected", tone: "accent" },
  { name: "Tom Becker", company: "Contractor · AC service", host: "Facilities", time: "10:30", status: "Expected", tone: "accent" },
  { name: "Neha Joshi", company: "Interview · Design", host: "Rohan P.", time: "08:55", status: "Checked out", tone: "slate" },
  { name: "Luis Ortega", company: "Delivery partner", host: "Reception", time: "07:40", status: "Overstay", tone: "red" },
];

/** Deterministic pseudo-QR so the decorative pass looks right without a QR library. */
function PseudoQr({ size = 11 }: { size?: number }) {
  const cells = Array.from({ length: size * size }, (_, i) => {
    const x = i % size;
    const y = Math.floor(i / size);
    const finder = (x < 3 && y < 3) || (x >= size - 3 && y < 3) || (x < 3 && y >= size - 3);
    if (finder) return true;
    return (x * 7 + y * 5 + ((x * y) % 4)) % 3 !== 0;
  });
  return (
    <div className="grid gap-px" style={{ gridTemplateColumns: `repeat(${size}, minmax(0, 1fr))` }}>
      {cells.map((on, i) => (
        <span key={i} className={on ? "aspect-square bg-ink" : "aspect-square bg-white"} />
      ))}
    </div>
  );
}

/** Main VMS dashboard. Sample data only. */
export function VmsDashboard({ compact = false }: { compact?: boolean }) {
  return (
    <Frame theme="vms" url="app.example.com/vms/dashboard" label="Illustrative preview of the Visitor Management dashboard">
      <div className="flex bg-surface/70">
        <MockSidebar brand="VMS" items={nav} activeIndex={0} />
        <div className="min-w-0 flex-1 space-y-3 p-3.5 @xl:p-4">
          <MockTopbar title="Front desk overview" subtitle="Main building · Live" action="+ New visitor" />

          <div className="grid grid-cols-2 gap-2.5 @xl:grid-cols-4">
            <StatTile label="Visitors today" value="34" note="8 pre-registered" icon={Users} />
            <StatTile label="On site now" value="11" note="Across 3 floors" icon={DoorOpen} />
            <StatTile label="Expected next" value="5" note="Within 2 hours" icon={CalendarClock} />
            <StatTile label="Alerts" value="1" note="Overstay flagged" icon={Bell} />
          </div>

          <div className="grid gap-2.5 @xl:grid-cols-5">
            <MockCard title="Visitor log" action="View all" className="@xl:col-span-3">
              <ul className="divide-y divide-line">
                {visitors.slice(0, compact ? 4 : 5).map((v, i) => (
                  <li key={v.name} className="flex items-center gap-2.5 py-2 first:pt-0 last:pb-0">
                    <Avatar name={v.name} index={i + 1} />
                    <div className="min-w-0 flex-1">
                      <div className="truncate text-[11px] font-semibold">{v.name}</div>
                      <div className="truncate text-[10px] text-muted">
                        {v.company} · Host {v.host}
                      </div>
                    </div>
                    <span className="hidden text-[10px] text-muted @lg:block">{v.time}</span>
                    <Pill tone={v.tone}>{v.status}</Pill>
                  </li>
                ))}
              </ul>
            </MockCard>
            <MockCard title="Footfall by hour" className="@xl:col-span-2">
              <BarChart values={[4, 9, 14, 11, 7, 10, 6]} labels={["8", "9", "10", "11", "12", "1", "2"]} highlightIndex={2} />
            </MockCard>
          </div>
        </div>
      </div>
    </Frame>
  );
}

/** Secondary VMS screen: kiosk check-in with generated visitor pass. */
export function VmsKioskScreen() {
  return (
    <Frame theme="vms" url="kiosk.example.com/check-in" label="Illustrative preview of the visitor kiosk check-in and visitor pass">
      <div className="grid gap-4 bg-surface/70 p-4 @xl:grid-cols-2 @xl:p-6">
        <div className="rounded-2xl border border-line bg-white p-5">
          <div className="mb-4 flex items-center gap-1.5">
            {["Details", "Photo", "Host", "Badge"].map((step, i) => (
              <div key={step} className="flex flex-1 flex-col gap-1.5">
                <span className={"h-1 rounded-full " + (i < 3 ? "bg-accent" : "bg-accent-soft")} />
                <span className={"text-[9px] font-medium " + (i < 3 ? "text-accent-ink" : "text-muted")}>{step}</span>
              </div>
            ))}
          </div>
          <div className="font-display text-base font-bold">Who are you here to meet?</div>
          <div className="mt-1 text-[11px] text-muted">Select your host and we will let them know you have arrived.</div>
          <div className="mt-4 space-y-2">
            {["Kavya Reddy · Finance", "Imran Shah · Operations", "Rohan Patel · Design"].map((h, i) => (
              <div
                key={h}
                className={
                  "flex items-center gap-2.5 rounded-xl border px-3 py-2.5 text-[11px] font-medium " +
                  (i === 0 ? "border-accent bg-accent-soft text-accent-ink" : "border-line bg-white")
                }
              >
                <Avatar name={h} index={i} size="sm" />
                {h}
              </div>
            ))}
          </div>
          <div className="mt-4 rounded-xl bg-accent py-2.5 text-center text-[11px] font-semibold text-white">Continue</div>
        </div>

        <div className="flex items-center justify-center">
          <div className="w-full max-w-[15rem] overflow-hidden rounded-2xl border border-line bg-white shadow-lg">
            <div className="bg-linear-to-br from-accent to-accent-strong px-4 py-3 text-white">
              <div className="text-[9px] font-semibold uppercase tracking-widest text-white/70">Visitor pass</div>
              <div className="font-display text-sm font-bold">Your Company</div>
            </div>
            <div className="space-y-3 p-4">
              <div className="flex items-center gap-3">
                <Avatar name="Arjun Malhotra" index={1} />
                <div>
                  <div className="text-[12px] font-bold">Arjun Malhotra</div>
                  <div className="text-[10px] text-muted">Northwind Supply</div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 text-[10px]">
                <div>
                  <div className="text-muted">Host</div>
                  <div className="font-semibold">Kavya Reddy</div>
                </div>
                <div>
                  <div className="text-muted">Valid until</div>
                  <div className="font-semibold">17:30 today</div>
                </div>
              </div>
              <div className="mx-auto w-24">
                <PseudoQr />
              </div>
              <Pill tone="green">Checked in · 09:42</Pill>
            </div>
          </div>
        </div>
      </div>
    </Frame>
  );
}

/** Small floating card used on the home hero. */
export function VmsPassMini() {
  return (
    <div data-product="vms" role="img" aria-label="Illustrative visitor pass" className="w-44 overflow-hidden rounded-2xl border border-line bg-white shadow-xl">
      <div aria-hidden="true">
        <div className="flex items-center justify-between bg-linear-to-br from-accent to-accent-strong px-3 py-2 text-white">
          <span className="text-[9px] font-semibold uppercase tracking-widest">Visitor</span>
          <span className="text-[9px] text-white/80">09:42</span>
        </div>
        <div className="flex items-center gap-3 p-3">
          <div className="w-14 shrink-0">
            <PseudoQr size={9} />
          </div>
          <div className="min-w-0">
            <div className="truncate text-[11px] font-bold">Arjun M.</div>
            <div className="truncate text-[10px] text-muted">Host: Kavya R.</div>
            <div className="mt-1">
              <Pill tone="green">Checked in</Pill>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
