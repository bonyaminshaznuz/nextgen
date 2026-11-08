import { createFileRoute } from "@tanstack/react-router";
import { Heading } from "@/components/SiteShell";
import { img, EMAIL, team } from "@/lib/site-data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — HAW NextGen Business Club" },
      { name: "description", content: "A student-run business club at HAW Hamburg, founded in 2026." },
      { property: "og:title", content: "About Us — HAW NextGen Business Club" },
      { property: "og:description", content: "Who we are, our mission and our team." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const about = "As students and young professionals, figuring out what you actually want to do and how to get there isn't always easy. That's why we created HAW NextGen Business Club: a space at HAW Hamburg for orientation, skill-building, and meaningful connections. We organize workshops, company presentations and events that enable meaningful exchange between industry professionals and ambitious students — and we welcome alumni and companies who want to host a workshop, share career insights or collaborate on events.";

const stats = [
  { n: "2026", l: "Founded", s: "Hamburg, Germany" },
  { n: "17", l: "Team members" },
  { n: "5", l: "Teams", s: "Admin · Events · Finance · Marketing · Partnerships" },
  { n: "220+", l: "LinkedIn followers" },
];


function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl space-y-20 px-6 py-16">
      <section className="grid items-center gap-12 md:grid-cols-2">
        <img src={img.backSemester} alt="HAW NextGen team" className="rounded-sm shadow-lg" />
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary">About us</p><h1 className="mt-3 font-display text-4xl font-bold text-brand-deep md:text-5xl">Who we are</h1>
          <p className="mt-6 text-justify leading-8">{about}</p>
          <p className="mt-4 font-semibold">Contact: <a className="text-primary" href={"mailto:" + EMAIL}>{EMAIL}</a></p>
        </div>
      </section>
      <section>
        <Heading>At a glance</Heading>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.l} className="rounded-sm bg-ink p-6 text-center text-ink-foreground">
              <p className="font-display text-4xl font-bold text-gold">{s.n}</p>
              <p className="mt-2 font-semibold">{s.l}</p>
              {s.s && <p className="text-xs opacity-70">{s.s}</p>}
            </div>
          ))}
        </div>
      </section>
      <section>
        <Heading>Our Leads</Heading>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((m) => (
            <div key={m.n} className="overflow-hidden rounded-sm border transition hover:border-primary hover:shadow-lg">
              <img src={m.i} alt={m.n} className="aspect-[4/5] w-full object-cover" />
              <div className="p-5"><h3 className="text-xl font-bold">{m.n}</h3><p className="font-semibold text-primary">{m.r}</p><p className="mt-1 text-sm text-muted-foreground">{m.s}</p></div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
