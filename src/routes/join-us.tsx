import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageTitle } from "@/components/SiteShell";
import { img } from "@/lib/site-data";

export const Route = createFileRoute("/join-us")({
  head: () => ({
    meta: [
      { title: "Join Us — HAW NextGen Business Club" },
      { name: "description", content: "Become a member of the HAW NextGen Business Club." },
      { property: "og:title", content: "Join Us — HAW NextGen Business Club" },
      { property: "og:description", content: "Become a member of the HAW NextGen Business Club." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: JoinPage,
});

const fields = ["Full name", "Study program", "Semester", "Email"];
const teams = ["Community member", "Admin", "Events", "Finance", "Marketing", "Partnerships"];

function JoinPage() {
  const [done, setDone] = useState(false);
  return (
    <>
      <PageTitle title="Want to be part of NextGen?" sub="Gain hands-on experience, build your network, and shape the future of HAW NextGen Business Club." />
      <img src={img.recruiting} alt="Join HAW NextGen" className="mx-auto mb-10 w-full max-w-sm rounded-sm shadow-lg" />
      <form onSubmit={(e) => { e.preventDefault(); setDone(true); }} className="mx-4 min-w-0 max-w-xl space-y-4 rounded-sm border-t-4 border-gold bg-card p-4 shadow-xl sm:mx-auto sm:p-8">
        {fields.map((f) => (
          <label key={f} className="block">
            <span className="mb-1 block font-semibold">{f}</span>
            <input required className="w-full rounded-sm border bg-background px-3 py-2 outline-none focus:border-primary" />
          </label>
        ))}
        <label className="block">
          <span className="mb-1 block font-semibold">I want to join as</span>
          <select required className="w-full rounded-sm border bg-background px-3 py-2">{teams.map((t) => <option key={t}>{t}</option>)}</select>
        </label>
        <button className="w-full rounded-sm bg-primary py-3 font-bold text-primary-foreground transition hover:bg-brand-deep">Apply now</button>
        {done && <p className="text-center font-semibold text-primary">Thanks! We'll contact you soon — questions? info@haw-nextgen.de</p>}
      </form>
    </>
  );
}
