import { createFileRoute } from "@tanstack/react-router";
import { PageTitle } from "@/components/SiteShell";
import { posts } from "@/lib/site-data";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — HAW NextGen Business Club" },
      { name: "description", content: "Insights, updates, and stories from the HAW NextGen Business Club community." },
      { property: "og:title", content: "Blog — HAW NextGen Business Club" },
      { property: "og:description", content: "Insights, updates, and stories from our community." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BlogPage,
});

function BlogPage() {
  return (
    <>
      <PageTitle title="Our Blog" sub="Insights, updates, and stories from the HAW NextGen Business Club community." />
      <div className="mx-auto grid max-w-7xl gap-8 px-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((p) => (
          <article key={p.t} className="overflow-hidden rounded-sm border bg-card shadow-md transition hover:border-primary hover:shadow-xl">
            <img src={p.i} alt={p.t} className="aspect-[4/5] w-full object-cover" />
            <div className="space-y-2 p-5">
              <div className="flex justify-between text-sm"><span className="text-muted-foreground">{p.d}</span><span className="font-bold text-primary">#{p.tag}</span></div>
              <h3 className="text-xl font-bold">{p.t}</h3>
              <p className="font-semibold">{p.sub}</p>
              <p className="line-clamp-4 text-sm text-muted-foreground">{p.p}</p>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
