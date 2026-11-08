import { createFileRoute } from "@tanstack/react-router";
import { PageTitle } from "@/components/SiteShell";
import { achievements } from "@/lib/site-data";

export const Route = createFileRoute("/achievements")({
  head: () => ({
    meta: [
      { title: "Achievements — HAW NextGen Business Club" },
      { name: "description", content: "Milestones of the HAW NextGen Business Club." },
      { property: "og:title", content: "Achievements — HAW NextGen Business Club" },
      { property: "og:description", content: "Celebrating the milestones of our club." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AchievementsPage,
});

function AchievementsPage() {
  return (
    <>
      <PageTitle title="Our Journey" sub="Celebrating every milestone since our founding in 2026." />
      <div className="mx-auto grid max-w-7xl gap-8 px-6 sm:grid-cols-2 lg:grid-cols-3">
        {achievements.map((a) => (
          <article key={a.t} className="overflow-hidden rounded-sm border bg-card shadow-md transition hover:border-primary hover:shadow-xl">
            <div className="grid aspect-video place-items-center bg-secondary">
              <img src={a.i} alt={a.t} className="h-full w-full object-cover" />
            </div>
            <div className="space-y-2 p-5">
              <div className="flex items-center justify-between text-sm">
                <span className="font-bold text-primary">{a.r}</span>
                <span className="text-muted-foreground">{a.y}</span>
              </div>
              <h3 className="text-lg font-bold">{a.t}</h3>
              <p className="text-sm text-muted-foreground">
                {a.m}
              </p>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
