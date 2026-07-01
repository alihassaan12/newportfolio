import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { SiteLayout } from "@/components/site/Layout";
import { ProjectCard } from "@/components/site/ProjectCard";
import { projects, categories, type Category, type Project } from "@/lib/projects";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: `Work — ${projects.length}+ Websites by Ali Hassaan | WordPress, Shopify, Webflow` },
      {
        name: "description",
        content: `Portfolio of ${projects.length}+ live websites and eCommerce stores built by Ali Hassaan on WordPress, Shopify, Webflow and Wix — dental, fashion, automotive, home services and more.`,
      },
      { property: "og:title", content: `Work — ${projects.length}+ Websites by Ali Hassaan` },
      {
        property: "og:description",
        content:
          "Live sites and eCommerce stores on WordPress, Shopify, Webflow and Wix, organised by industry.",
      },
      { property: "og:type", content: "website" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Web Development Portfolio — Ali Hassaan",
          description: `${projects.length}+ websites built on WordPress, Shopify, Webflow and Wix.`,
          hasPart: projects.slice(0, 20).map((p) => ({
            "@type": "CreativeWork",
            name: p.name,
            url: p.url,
          })),
        }),
      },
    ],
  }),
  component: Projects,
});

const filters: (Project["platform"] | "All")[] = ["All", "WordPress", "Shopify", "Webflow", "Wix"];

function Projects() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");

  const grouped = useMemo(() => {
    const list = active === "All" ? projects : projects.filter((p) => p.platform === active);
    let counter = 0;
    return categories
      .map((cat) => ({
        category: cat,
        items: list
          .filter((p) => p.category === cat)
          .map((p) => ({ project: p, index: counter++ })),
      }))
      .filter((g) => g.items.length > 0);
  }, [active]);

  return (
    <SiteLayout>
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 ember-glow" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <p className="reveal font-mono text-xs uppercase tracking-widest text-ember">Selected work</p>
          <h1 className="reveal mt-4 font-display text-6xl leading-[0.95] text-balance md:text-8xl">
            Turning Ideas
            <br />
            into Reality
          </h1>
          <p className="reveal mt-8 max-w-2xl text-lg text-muted-foreground">
            A cross-section of recent client work — organised by industry so you can jump straight to
            what's relevant. Every card links out to the live site.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
        <div className="mb-14 flex flex-wrap items-center gap-2">
          {filters.map((f) => {
            const count = f === "All" ? projects.length : projects.filter((p) => p.platform === f).length;
            if (count === 0) return null;
            const isActive = active === f;
            return (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition ${
                  isActive
                    ? "border-ember bg-ember text-primary-foreground"
                    : "border-border bg-surface/50 text-muted-foreground hover:bg-surface hover:text-foreground"
                }`}
              >
                {f}
                <span
                  className={`font-mono text-[10px] ${
                    isActive ? "text-primary-foreground/70" : "text-muted-foreground/60"
                  }`}
                >
                  {String(count).padStart(2, "0")}
                </span>
              </button>
            );
          })}
        </div>

        <div className="space-y-20">
          {grouped.map((group) => (
            <div key={group.category}>
              <div className="mb-8 flex items-end justify-between gap-4 border-b border-border pb-4">
                <h2 className="font-display text-3xl text-foreground md:text-4xl">{group.category}</h2>
                <span className="font-mono text-xs text-muted-foreground">
                  {String(group.items.length).padStart(2, "0")} projects
                </span>
              </div>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {group.items.map(({ project, index }) => (
                  <ProjectCard key={project.slug} project={project} index={index} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
