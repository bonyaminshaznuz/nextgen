import { createFileRoute, Link } from "@tanstack/react-router";
import { Heading, Newsletter } from "@/components/SiteShell";
import { useEffect, useRef, useState } from "react";
import { img, events, partners } from "@/lib/site-data";
import { ArrowRight, ChevronLeft, ChevronRight, Calendar, MapPin, Compass, GraduationCap, Users, Briefcase, TrendingUp } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "HAW NextGen Business Club — Direction. Skills. Network." },
      { name: "description", content: "Student-led career development initiative at HAW Hamburg: workshops, company presentations and networking events." },
      { property: "og:title", content: "HAW NextGen Business Club" },
      { property: "og:description", content: "Connecting HAW Hamburg students with the business world." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const slides = [img.backSemester, img.workshopLive, img.connectPhoto];
const services = [
  { I: Compass, t: "Direction", p: "Explore industries and career paths with insights from professionals and fellow students." },
  { I: GraduationCap, t: "Skills", p: "Practical workshops like 'Apply as a Person, Not a Pattern' build what matters for your first job." },
  { I: Users, t: "Network", p: "Students Connect and Company Crawls bring you face to face with companies like Maersk and 1KOMMA5°." },
  { I: Briefcase, t: "Leadership", p: "Join Admin, Events, Finance, Marketing or Partnerships and run a real student organisation." },
];
const stats = [{ n: 2026, l: "Founded", plain: true }, { n: 17, l: "Team members" }, { n: 5, l: "Teams" }, { n: 220, l: "LinkedIn followers", suf: "+" }];
const words = ["careers.", "leaders.", "networks.", "business."];
const bars = [28, 42, 38, 58, 70, 86, 100];

function Typer() {
  const [w, setW] = useState(0);
  const [len, setLen] = useState(0);
  const [del, setDel] = useState(false);
  useEffect(() => {
    const word = words[w] ?? "";
    const t = setTimeout(() => {
      if (!del && len < word.length) setLen(len + 1);
      else if (!del) setDel(true);
      else if (len > 0) setLen(len - 1);
      else { setDel(false); setW((w + 1) % words.length); }
    }, !del && len === word.length ? 1600 : del ? 50 : 100);
    return () => clearTimeout(t);
  }, [w, len, del]);
  return <span className="text-primary italic">{(words[w] ?? "").slice(0, len)}<span className="animate-blink ml-0.5 inline-block w-[3px] bg-gold">&nbsp;</span></span>;
}

function Counter({ to, suf = "", plain }: { to: number; suf?: string | undefined; plain?: boolean | undefined }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [v, setV] = useState(plain ? to : 0);
  useEffect(() => {
    if (plain || !ref.current) return;
    const io = new IntersectionObserver(([e]) => {
      if (!e?.isIntersecting) return;
      io.disconnect();
      const start = performance.now();
      const step = (t: number) => { const k = Math.min(1, (t - start) / 1400); setV(Math.round(to * (1 - Math.pow(1 - k, 3)))); if (k < 1) requestAnimationFrame(step); };
      requestAnimationFrame(step);
    });
    io.observe(ref.current);
    return () => io.disconnect();
  }, [to, plain]);
  return <span ref={ref}>{v}{suf}</span>;
}

function Index() {
  const [s, setS] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setS((v) => (v + 1) % slides.length), 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <div>
      <section className="bg-grid relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-2 lg:gap-14 lg:py-20">
          <div className="animate-rise min-w-0">
            <p className="inline-flex max-w-full items-center gap-2 rounded-full border border-primary/30 bg-background px-3 py-1.5 text-xs font-bold uppercase text-primary sm:tracking-[0.2em]"><TrendingUp className="h-3.5 w-3.5 shrink-0" /> Student initiative · HAW Hamburg</p>
            <h1 className="mt-6 font-display text-4xl font-bold leading-[1.1] text-brand-deep sm:text-5xl xl:text-6xl">
              Growing the next generation of<br /><Typer />
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Direction. Skills. Network. We connect ambitious HAW students with companies and professionals — through workshops, company visits and events that turn potential into growth.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/join-us" className="group inline-flex items-center gap-2 rounded-sm bg-primary px-7 py-3.5 font-bold text-primary-foreground shadow-lg transition hover:bg-brand-deep">Become a member <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></Link>
              <Link to="/events" className="inline-flex items-center rounded-sm border-2 border-brand-deep bg-background px-7 py-3 font-bold text-brand-deep transition hover:bg-brand-deep hover:text-primary-foreground">View events</Link>
            </div>
          </div>
          <div className="relative animate-rise min-w-0 pb-8 [animation-delay:200ms]">
            <div className="relative aspect-square overflow-hidden rounded-sm shadow-2xl sm:aspect-[4/3] lg:aspect-square">
              {slides.map((src, i) => (
                <img key={src} src={src} alt={`Club photo ${i + 1}`} className={`absolute inset-0 h-full w-full object-cover transition-all duration-1000 ${i === s ? "scale-100 opacity-100" : "scale-105 opacity-0"}`} />
              ))}
              <div className="absolute bottom-4 right-4 flex gap-2">
                <button aria-label="Previous" onClick={() => setS((s + slides.length - 1) % slides.length)} className="grid h-10 w-10 place-items-center rounded-sm bg-ink text-ink-foreground"><ChevronLeft className="h-5 w-5" /></button>
                <button aria-label="Next" onClick={() => setS((s + 1) % slides.length)} className="grid h-10 w-10 place-items-center rounded-sm bg-ink text-ink-foreground"><ChevronRight className="h-5 w-5" /></button>
              </div>
            </div>
            <div className="absolute bottom-0 left-3 w-56 max-w-[calc(100%-1.5rem)] rounded-sm border bg-card p-5 shadow-2xl lg:-left-6">
              <div className="flex items-center justify-between">
                <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Club growth</p>
                <span className="flex items-center gap-1 text-xs font-bold text-primary"><TrendingUp className="h-3.5 w-3.5" />2026</span>
              </div>
              <div className="mt-4 flex h-20 items-end gap-1.5">
                {bars.map((h, i) => (
                  <span key={i} className={`animate-grow flex-1 rounded-t-sm ${i === bars.length - 1 ? "bg-gold" : "bg-primary/70"}`} style={{ height: `${h}%`, animationDelay: `${400 + i * 120}ms` }} />
                ))}
              </div>
              <p className="mt-3 font-display text-2xl font-bold text-brand-deep">17 <span className="text-sm font-sans font-semibold text-muted-foreground">members · 5 teams</span></p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-8 bg-ink text-ink-foreground">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-12 md:grid-cols-4">
          {stats.map((x) => (
            <div key={x.l} className="border-l-2 border-gold pl-5">
              <p className="font-display text-4xl font-bold"><Counter to={x.n} suf={x.suf} plain={x.plain} /></p>
              <p className="mt-1 text-sm uppercase tracking-wider opacity-70">{x.l}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="overflow-hidden border-b bg-secondary py-5">
        <div className="animate-marquee flex w-max gap-12 text-sm font-bold uppercase tracking-[0.2em] text-brand-deep">
          {[0, 1].flatMap((k) => ["Direction", "Skills", "Network", "Growth", "Leadership", "Careers"].map((t) => <span key={k + t} className="flex items-center gap-12">{t}<TrendingUp className="h-4 w-4 text-gold" /></span>))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <Heading eyebrow="What we offer">What do we do?</Heading>
        <div className="grid gap-px overflow-hidden rounded-sm border bg-border md:grid-cols-2 lg:grid-cols-4">
          {services.map(({ I, t, p }) => (
            <div key={t} className="group bg-card p-8 transition hover:bg-brand-deep hover:text-primary-foreground">
              <span className="grid h-14 w-14 place-items-center rounded-sm bg-secondary transition group-hover:bg-gold"><I className="h-7 w-7 text-primary group-hover:text-ink" /></span>
              <h3 className="mt-6 font-display text-xl font-bold text-brand-deep group-hover:text-primary-foreground">{t}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground group-hover:text-primary-foreground/80">{p}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <Heading eyebrow="Calendar">Our Events</Heading>
            <Link to="/events" className="mb-12 inline-flex items-center gap-2 font-bold text-primary">All events <ArrowRight className="h-4 w-4" /></Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {events.map((e) => (
              <article key={e.t} className="group overflow-hidden rounded-sm border bg-card transition hover:-translate-y-1 hover:shadow-xl">
                <div className="aspect-[4/5] overflow-hidden"><img src={e.i} alt={e.t} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" /></div>
                <div className="space-y-2 p-5">
                  <h3 className="line-clamp-2 font-bold text-brand-deep">{e.t}</h3>
                  <p className="flex items-center gap-2 text-xs text-muted-foreground"><Calendar className="h-3.5 w-3.5 text-primary" />{e.d}</p>
                  <p className="flex items-center gap-2 text-xs text-muted-foreground"><MapPin className="h-3.5 w-3.5 text-primary" />{e.l}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <Heading eyebrow="Partners">Companies we visited & worked with</Heading>
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-sm border bg-border md:grid-cols-5">
          {partners.map((b) => (
            <div key={b} className="grid h-28 place-items-center bg-card px-4 text-center font-display text-lg font-bold text-brand-deep">{b}</div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-8 rounded-sm bg-brand-deep p-5 text-primary-foreground sm:p-10 lg:grid-cols-2 lg:p-14 [&>div]:min-w-0">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-gold">Newsletter</p>
            <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">Never miss a NextGen event.</h2>
            <p className="mt-3 opacity-80">Workshop invites, company visits and career insights — once in a while, straight to your inbox.</p>
          </div>
          <Newsletter dark />
        </div>
      </section>
    </div>
  );
}
