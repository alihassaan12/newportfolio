import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { ProjectCard } from "@/components/site/ProjectCard";
import { featured, projects } from "@/lib/projects";
import { QuickInquiry } from "@/components/site/QuickInquiry";
import { Testimonials } from "@/components/site/Testimonials";
import { CALENDLY_URL, CV_URL } from "@/lib/site";
import {
  ArrowRight,
  CalendarClock,
  Download,
  Github,
  Linkedin,
  Mail,
  Sparkles,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Home,
});

const stack = [
  "WordPress",
  "Shopify",
  "Webflow",
  "Wix",
  "WooCommerce",
  "Elementor",
  "HTML5",
  "CSS / Tailwind",
  "JavaScript",
  "jQuery",
  "React",
  "PHP",
  "Git",
];

const stats = [
  { n: "4+", l: "Years shipping" },
  { n: "160+", l: "Sites launched" },
  { n: `${projects.length}+`, l: "Live projects" },
  { n: "98%", l: "On-time delivery" },
];

function Home() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-lines opacity-40" aria-hidden />
        <div className="absolute inset-0 ember-glow" aria-hidden />

        <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-24 lg:px-10 lg:pt-32 lg:pb-32">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground">
            <span className="relative flex size-2">
              <span className="absolute inset-0 animate-ping rounded-full bg-ember opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-ember" />
            </span>
            Currently accepting new projects
          </div>

          <h1 className="reveal mt-8 font-display text-6xl leading-[0.95] text-balance sm:text-7xl md:text-8xl lg:text-[9rem]">
            Web development,
            <br />
            <span className="italic text-ember">done right.</span>
          </h1>

          <div className="mt-10 grid gap-8 md:grid-cols-[1.4fr_1fr] md:items-end">
            <p className="max-w-xl text-lg text-muted-foreground text-balance">
              I'm <span className="text-foreground">Ali Hassaan</span> — a full-stack web developer
              based in Lahore. I design and build fast, responsive websites and eCommerce stores on
              WordPress, Shopify, Webflow and Wix. No fluff, no template soup — just clean work that
              ships.
            </p>

            <div className="flex flex-wrap gap-3 md:justify-end">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 rounded-full bg-ember px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 transition"
              >
                View work <ArrowRight size={16} />
              </Link>
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/50 px-6 py-3 text-sm text-foreground hover:bg-surface transition backdrop-blur"
              >
                <CalendarClock size={16} className="text-ember" /> Schedule meeting
              </a>
              <QuickInquiry />
            </div>
          </div>

          {/* Meta strip */}
          <div className="mt-16 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-border pt-6 text-xs uppercase tracking-widest text-muted-foreground">
            <span>Based in Lahore, PK</span>
            <span className="hidden sm:inline text-border">/</span>
            <span>Working worldwide</span>
            <span className="hidden sm:inline text-border">/</span>
            <span>The 360 Technologies</span>
            <span className="hidden sm:inline text-border">/</span>
            <span>Since 2022</span>
          </div>
        </div>
      </section>

      {/* MARQUEE / STACK */}
      <section className="border-y border-border bg-surface/40 py-6 overflow-hidden">
        <div className="flex marquee-track gap-12 whitespace-nowrap">
          {[...stack, ...stack].map((s, i) => (
            <span
              key={`${s}-${i}`}
              className="font-display text-3xl text-muted-foreground/60 hover:text-ember transition"
            >
              {s} <span className="text-ember">•</span>
            </span>
          ))}
        </div>
      </section>

      {/* ABOUT SNIPPET */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid gap-16 md:grid-cols-[1fr_1.4fr]">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-ember">01 — About</p>
            <h2 className="mt-4 font-display text-5xl leading-tight text-balance">
              Four years, one focus:
              <br />
              <span className="italic text-muted-foreground">building the web well.</span>
            </h2>
          </div>

          <div className="space-y-6 text-lg text-muted-foreground">
            <p>
              I started as a WordPress developer in 2022 and have spent the last four years going
              deep on the platforms that power most of the modern web — WordPress, Shopify, Webflow
              and Wix. Currently building at{" "}
              <span className="text-foreground">The 360 Technologies</span>.
            </p>
            <p>
              I care about the small things: page speed, thoughtful UX, semantic markup, and
              interfaces that still feel good six months later. I ship on time, I write clean
              handovers, and I actually pick up the phone.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm text-foreground hover:bg-surface transition"
              >
                More about me <ArrowRight size={14} />
              </Link>
              <a
                href={CV_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-surface transition"
              >
                <Download size={14} /> Download CV
              </a>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 gap-px border border-border bg-border md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.l} className="bg-background p-8">
              <p className="font-display text-5xl text-ember">{s.n}</p>
              <p className="mt-2 text-sm text-muted-foreground">{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED WORK */}
      <section className="border-t border-border bg-surface/30">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-ember">
                02 — Selected work
              </p>
              <h2 className="mt-4 font-display text-5xl leading-tight text-balance">
                Recent builds.
              </h2>
            </div>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-ember transition"
            >
              View all projects <ArrowRight size={14} />
            </Link>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featured.map((p, i) => (
              <ProjectCard key={p.slug} project={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <p className="font-mono text-xs uppercase tracking-widest text-ember">03 — How I work</p>
        <h2 className="mt-4 font-display text-5xl leading-tight text-balance max-w-2xl">
          A simple, honest process.
        </h2>

        <div className="mt-16 grid gap-px border border-border bg-border md:grid-cols-3">
          {[
            {
              n: "01",
              t: "Discover",
              d: "We talk. I learn about your business, users, and where the current site is holding you back.",
            },
            {
              n: "02",
              t: "Design & build",
              d: "I choose the right platform, ship in tight iterations, and share progress in a live staging environment.",
            },
            {
              n: "03",
              t: "Launch & support",
              d: "Careful QA, a clean launch, and a written handover so you can actually run the site yourself.",
            },
          ].map((s) => (
            <div key={s.n} className="bg-background p-8">
              <p className="font-mono text-xs text-ember">{s.n}</p>
              <h3 className="mt-4 font-display text-3xl">{s.t}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <Testimonials />

      {/* CTA */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-surface p-10 md:p-16">
            <div className="absolute inset-0 ember-glow" aria-hidden />
            <div className="relative flex flex-col items-start gap-8 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl">
                <Sparkles className="text-ember" size={22} />
                <h2 className="mt-4 font-display text-5xl leading-tight text-balance md:text-6xl">
                  Have a project in mind?
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  Whether it's a new marketing site, a Shopify rebuild or something more custom —
                  I'd love to hear about it.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-ember px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90"
                >
                  <CalendarClock size={16} /> Schedule a meeting
                </a>
                <QuickInquiry
                  trigger={
                    <button
                      type="button"
                      className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm text-foreground hover:bg-surface"
                    >
                      <Sparkles size={16} className="text-ember" /> Send a quick brief
                    </button>
                  }
                />
                <a
                  href="mailto:alihassaanamjad@gmail.com"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm text-foreground hover:bg-surface"
                >
                  <Mail size={16} /> Email
                </a>
                <a
                  href="https://www.linkedin.com/in/ali-hassaan-full-stack-developer-/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm text-foreground hover:bg-surface"
                >
                  <Linkedin size={16} /> LinkedIn
                </a>
                <a
                  href="https://github.com/alihassaan12"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm text-foreground hover:bg-surface"
                >
                  <Github size={16} /> GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
