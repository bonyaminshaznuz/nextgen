import { Link } from "@tanstack/react-router";
import { Linkedin, Instagram, Mail, MapPin, ArrowRight, X, Sparkles, Menu } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { EMAIL, LINKEDIN, INSTAGRAM, img } from "@/lib/site-data";
import { Button } from "@/components/ui/button";

const nav = [
  { to: "/", n: "Home" },
  { to: "/events", n: "Events" },
  { to: "/achievements", n: "Achievements" },
  { to: "/blog", n: "Blog" },
  { to: "/about", n: "About Us" },
] as const;

const socials = [[Linkedin, LINKEDIN, "LinkedIn"], [Instagram, INSTAGRAM, "Instagram"], [Mail, "mailto:" + EMAIL, "Email"]] as const;

export function Heading({ children, eyebrow }: { children: string; eyebrow?: string }) {
  return (
    <div className="mb-12">
      {eyebrow && <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-primary">{eyebrow}</p>}
      <h2 className="font-display text-3xl font-bold text-brand-deep md:text-4xl">{children}</h2>
      <span className="mt-4 block h-1 w-16 bg-gold" />
    </div>
  );
}

export function PageTitle({ title, sub }: { title: string; sub: string }) {
  return (
    <div className="mb-10 bg-ink text-ink-foreground sm:mb-16">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-20">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-gold">HAW NextGen Business Club</p>
        <h1 className="mt-4 max-w-3xl break-words font-display text-3xl font-bold sm:text-4xl lg:text-6xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-lg opacity-80">{sub}</p>
      </div>
    </div>
  );
}

export function Newsletter({ dark = false }: { dark?: boolean }) {
  const [done, setDone] = useState(false);
  return done ? (
    <p className={`font-semibold ${dark ? "text-gold" : "text-primary"}`}>Thanks for subscribing! You'll hear from us about upcoming events.</p>
  ) : (
    <form onSubmit={(e) => { e.preventDefault(); setDone(true); }} className="grid w-full min-w-0 max-w-md grid-cols-1 gap-3 xl:grid-cols-[minmax(0,1fr)_auto]">
      <input type="email" required placeholder="Your email address" aria-label="Email address" className={`min-w-0 w-full rounded-sm border px-4 py-3 outline-none focus:border-gold ${dark ? "border-ink-foreground/30 bg-ink-foreground/10 text-ink-foreground placeholder:text-ink-foreground/60" : "bg-background"}`} />
      <Button className="h-auto rounded-sm bg-gold px-6 py-3 font-bold text-ink hover:bg-gold/90">Subscribe <ArrowRight className="h-4 w-4" /></Button>
    </form>
  );
}

function DemoPopup() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!sessionStorage.getItem("demo-seen")) setOpen(true);
  }, []);
  const close = () => { sessionStorage.setItem("demo-seen", "1"); setOpen(false); };
  if (!open) return null;
  return (
    <div role="dialog" aria-modal="true" aria-labelledby="demo-title" className="fixed inset-0 z-50 grid place-items-center bg-ink/70 p-4 backdrop-blur-sm" onClick={close}>
      <div onClick={(e) => e.stopPropagation()} className="animate-rise relative max-h-[calc(100dvh-2rem)] w-full max-w-2xl overflow-y-auto rounded-sm bg-card shadow-2xl">
        <div className="h-2 bg-gold" />
        <button onClick={close} aria-label="Close" className="absolute right-4 top-6 grid h-10 w-10 place-items-center rounded-sm text-muted-foreground hover:bg-secondary"><X className="h-5 w-5" /></button>
        <div className="p-5 sm:p-8 md:p-12">
          <img src={img.logo} alt="HAW NextGen" className="h-12 w-auto" />
          <p className="mt-8 inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-primary"><Sparkles className="h-3.5 w-3.5" />Demo preview</p>
          <h2 id="demo-title" className="mt-5 font-display text-3xl font-bold leading-tight text-brand-deep md:text-5xl">This is a fully demo website.</h2>
          <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            This site was created as a <strong className="text-foreground">contribution preview</strong> for the HAW NextGen Business Club — to show what a professional club website could look like. It is not the club's official website, and forms here don't send or save anything.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <button onClick={close} className="inline-flex items-center gap-2 rounded-sm bg-primary px-7 py-3.5 font-bold text-primary-foreground transition hover:bg-brand-deep">Explore the preview <ArrowRight className="h-4 w-4" /></button>
            <a href={LINKEDIN} target="_blank" rel="noreferrer" className="inline-flex items-center rounded-sm border-2 border-brand-deep px-7 py-3 font-bold text-brand-deep transition hover:bg-brand-deep hover:text-primary-foreground">Visit the official club</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export function SiteShell({ children }: { children: ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="min-h-screen bg-background">
      <DemoPopup />
      <div className="hidden bg-ink text-ink-foreground md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-xs">
          <span className="flex items-center gap-2 opacity-80"><MapPin className="h-3.5 w-3.5" />HAW Hamburg · Berliner Tor 5</span>
          <div className="flex items-center gap-4">
            <a href={"mailto:" + EMAIL} className="opacity-80 hover:opacity-100">{EMAIL}</a>
            {socials.map(([I, h, l]) => <a key={l} href={h} target="_blank" rel="noreferrer" aria-label={l} className="opacity-80 hover:text-gold hover:opacity-100"><I className="h-4 w-4" /></a>)}
          </div>
        </div>
      </div>
      <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur">
        <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-4 lg:flex lg:justify-between lg:px-6">
          <Link to="/"><img src={img.logo} alt="HAW NextGen Business Club" className="h-11 w-auto" /></Link>
          <Button variant="ghost" size="icon" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} aria-controls="site-navigation" onClick={() => setMenuOpen(!menuOpen)} className="h-11 w-11 shrink-0 lg:hidden">{menuOpen ? <X /> : <Menu />}</Button>
          <nav id="site-navigation" aria-label="Main navigation" className={`${menuOpen ? "grid" : "hidden"} col-span-2 min-w-0 grid-cols-2 items-center gap-2 border-t pt-4 lg:flex lg:border-0 lg:pt-0 lg:gap-x-7`}>
            {nav.map((x) => (
              <Link key={x.to} to={x.to} onClick={() => setMenuOpen(false)} activeOptions={{ exact: true }} className="py-2 text-sm font-semibold text-foreground/80 transition hover:text-primary" activeProps={{ className: "!text-primary" }}>{x.n}</Link>
            ))}
            <Link to="/join-us" onClick={() => setMenuOpen(false)} className="rounded-sm bg-primary px-5 py-2.5 text-center text-sm font-bold text-primary-foreground transition hover:bg-brand-deep">Join Us</Link>
          </nav>
        </div>
      </header>
      <main className="min-h-[60vh]">{children}</main>
      <footer className="mt-24 bg-ink text-ink-foreground">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 sm:py-16 md:grid-cols-2 lg:grid-cols-3 [&>div]:min-w-0">
          <div>
            <img src={img.logo} alt="HAW NextGen" className="h-12 w-auto rounded-sm bg-background p-1.5" />
            <p className="mt-5 text-sm leading-7 opacity-75">A student-led career development initiative at HAW Hamburg. Direction. Skills. Network.</p>
          </div>
          <div>
            <h3 className="font-display text-lg font-bold">Explore</h3>
            <ul className="mt-4 grid grid-cols-2 gap-2 text-sm opacity-80">
              {nav.map((x) => <li key={x.to}><Link to={x.to} className="hover:text-gold">{x.n}</Link></li>)}
              <li><Link to="/join-us" className="hover:text-gold">Join Us</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-display text-lg font-bold">Newsletter</h3>
            <p className="mb-4 mt-2 text-sm opacity-75">Event invites and career insights, straight to your inbox.</p>
            <Newsletter dark />
          </div>
        </div>
        <div className="border-t border-ink-foreground/15">
          <div className="mx-auto flex max-w-7xl flex-wrap justify-between gap-2 px-6 py-5 text-xs opacity-60">
            <span>HAW NextGen Business Club · Hamburg, Germany</span>
            <span>{EMAIL}</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
