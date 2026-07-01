import type { Project } from "@/lib/projects";
import { screenshotFor } from "@/lib/projects";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

const platformDot: Record<Project["platform"], string> = {
  Webflow: "bg-[oklch(0.75_0.16_200)]",
  Shopify: "bg-[oklch(0.72_0.18_145)]",
  WordPress: "bg-[oklch(0.7_0.14_240)]",
  Wix: "bg-[oklch(0.75_0.18_60)]",
};

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const shot = screenshotFor(project.url);
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  return (
    <a
      href={project.url}
      target="_blank"
      rel="noreferrer"
      style={{ animationDelay: `${Math.min(index, 8) * 60}ms` }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-surface transition duration-300 hover:border-ember/40 hover:-translate-y-1 hover:shadow-[var(--shadow-ember)] reveal"
    >
      {/* Banner screenshot */}
      <div className="relative aspect-[4/3] overflow-hidden bg-surface-2">
        {/* Fallback placeholder — always rendered underneath so something shows
            immediately while the live screenshot loads (or if it fails). */}
        <div
          className={`absolute inset-0 flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-surface-2 to-surface p-6 text-center transition-opacity duration-500 ${
            loaded && !failed ? "opacity-0" : "opacity-100"
          }`}
          aria-hidden={loaded && !failed}
        >
          <span className="grid size-14 place-items-center rounded-xl bg-gradient-to-br from-ember to-[oklch(0.55_0.18_35)] font-display text-2xl text-primary-foreground shadow-[var(--shadow-ember)]">
            {project.name.charAt(0)}
          </span>
          <span className="font-display text-xl text-foreground">{project.name}</span>
          <span className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest text-muted-foreground">
            <span className={`size-1.5 rounded-full ${platformDot[project.platform]}`} />
            {project.platform}
          </span>
          {!failed && !loaded && (
            <span className="mt-1 h-1 w-16 overflow-hidden rounded-full bg-border">
              <span className="block h-full w-1/2 animate-pulse rounded-full bg-ember/70" />
            </span>
          )}
        </div>

        {!failed && (
          <img
            src={shot}
            alt={`${project.name} — live ${project.platform} website screenshot`}
            loading="lazy"
            width={1280}
            height={900}
            onLoad={() => setLoaded(true)}
            onError={() => setFailed(true)}
            className={`absolute inset-0 h-full w-full object-cover object-top transition duration-700 group-hover:scale-[1.04] ${
              loaded ? "opacity-100" : "opacity-0"
            }`}
          />
        )}

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/85 via-background/10 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 flex items-center justify-between px-4 pb-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/50 px-3 py-1 text-[10px] uppercase tracking-widest text-white/90 backdrop-blur">
            <span className={`size-1.5 rounded-full ${platformDot[project.platform]}`} />
            {project.platform}
          </span>
          <span className="rounded-full border border-white/10 bg-black/50 px-3 py-1 font-mono text-[10px] text-white/80 backdrop-blur">
            / {String(index + 1).padStart(2, "0")}
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col gap-3 p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-display text-2xl text-foreground transition-colors group-hover:text-ember">
            {project.name}
          </h3>
          <ArrowUpRight
            size={20}
            className="mt-1 shrink-0 text-muted-foreground transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ember"
          />
        </div>
        <p className="line-clamp-2 text-sm text-muted-foreground">{project.description}</p>
        <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
          {project.tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-border px-2.5 py-0.5 text-[11px] text-muted-foreground"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}
