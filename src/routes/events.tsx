import { createFileRoute } from "@tanstack/react-router";
import { Calendar, MapPin } from "lucide-react";
import { PageTitle } from "@/components/SiteShell";
import { events } from "@/lib/site-data";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events — HAW NextGen Business Club" },
      { name: "description", content: "Workshops, company presentations and networking by HAW NextGen Business Club." },
      { property: "og:title", content: "Events — HAW NextGen Business Club" },
      { property: "og:description", content: "Join us for workshops, company presentations and networking events." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: EventsPage,
});

function EventsPage() {
  return (
    <>
      <PageTitle title="Our Events" sub="Join us for workshops, company presentations and networking events." />
      <div className="mx-auto grid max-w-7xl gap-8 px-6 sm:grid-cols-2 lg:grid-cols-3">
        {events.map((e) => (
          <article key={e.t} className="group overflow-hidden rounded-sm border bg-card shadow-md transition hover:border-primary hover:shadow-xl">
            <div className="relative aspect-[4/5] overflow-hidden">
              <img src={e.i} alt={e.t} className="h-full w-full object-cover transition group-hover:scale-105" />
              <span className={`absolute right-3 top-3 rounded-full px-3 py-1 text-xs font-bold ${e.s === "Upcoming" ? "bg-primary text-primary-foreground" : "bg-ink text-ink-foreground"}`}>{e.s}</span>
            </div>
            <div className="space-y-2 p-5">
              <h3 className="text-lg font-bold text-brand-deep">{e.t}</h3>
              <p className="flex items-center gap-2 text-sm text-muted-foreground"><Calendar className="h-4 w-4 text-primary" />{e.d}</p>
              <p className="flex items-center gap-2 text-sm text-muted-foreground"><MapPin className="h-4 w-4 text-primary" />{e.l}</p>
              <p className="pt-2 text-sm">{e.p}</p>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
