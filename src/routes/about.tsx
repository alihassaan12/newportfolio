import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { QuickInquiry } from "@/components/site/QuickInquiry";
import { ScheduleMeeting } from "@/components/site/ScheduleMeeting";
import { CV_URL } from "@/lib/site";
import { CalendarClock, Download, MapPin, Briefcase } from "lucide-react";
import aliPortrait from "@/assets/ali-portrait.png";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Ali Hassaan, Web Developer" },
      {
        name: "description",
        content:
          "Ali Hassaan is a full-stack web developer with 4+ years building responsive, high-performance websites on WordPress, Shopify, Webflow, WooCommerce and Wix.",
      },
      { property: "og:title", content: "About — Ali Hassaan, Web Developer" },
      {
        property: "og:description",
        content:
          "4+ years shipping websites and eCommerce on WordPress, Shopify, Webflow and Wix. Based in Lahore, working worldwide.",
      },
    ],
  }),
  component: About,
});

const experience = [
  {
    company: "The 360 Technologies",
    role: "CMS Developer",
    period: "Feb 2025 — Present",
    location: "Lahore, PK",
    stack: "WordPress · Shopify · Webflow · WooCommerce · Wix · APIs · Git",
    points: [
      "Design and build responsive marketing, portfolio and eCommerce sites end-to-end.",
      "Ship on Elementor, WPBakery and native Shopify / Webflow / Wix builders.",
      "Performance, mobile UX and on-page SEO baked into every project.",
      "Integrate payment gateways, CRMs, analytics and email platforms.",
    ],
  },
  {
    company: "ID Logix",
    role: "CMS Developer",
    period: "Feb 2024 — Jan 2025",
    location: "Lahore, PK",
    stack: "WordPress · Shopify · Webflow · WooCommerce · Wix",
    points: [
      "Built business sites, landing pages and multi-vendor eCommerce stores.",
      "Custom themes and templates alongside builder-based work.",
      "Full lifecycle: wireframing → deployment → post-launch support.",
      "Agile delivery across multiple concurrent projects.",
    ],
  },
  {
    company: "Hello World Technologies",
    role: "WordPress Developer",
    period: "Aug 2022 — Sep 2023",
    location: "Rahim Yar Khan, PK",
    stack: "WordPress · JS · HTML · CSS · Bootstrap · jQuery · React",
    points: [
      "Developed multi-vendor eCommerce and custom sites from Figma / XD designs.",
      "Built product filtering, search and dynamic content features.",
      "Used React on high-performance projects; refined design systems.",
    ],
  },
];

const skillGroups = [
  { title: "Platforms", items: ["WordPress", "Shopify", "Webflow", "Wix", "WooCommerce"] },
  { title: "Builders", items: ["Elementor", "WPBakery", "Native theme dev", "Custom blocks"] },
  { title: "Front-end", items: ["HTML5", "CSS3", "Tailwind", "Bootstrap", "JavaScript", "React", "jQuery"] },
  { title: "Back-end & tools", items: ["PHP", "REST APIs", "Git / GitHub", "Figma", "Adobe XD"] },
];

function About() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 ember-glow" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <p className="font-mono text-xs uppercase tracking-widest text-ember">About</p>
          <h1 className="mt-4 font-display text-6xl leading-[0.95] text-balance md:text-8xl">
            I build websites
            <br />
            <span className="italic text-muted-foreground">people actually use.</span>
          </h1>

          <div className="mt-10 grid gap-10 md:grid-cols-[1.4fr_1fr]">
            <div className="space-y-5 text-lg text-muted-foreground max-w-2xl">
              <p>
                I'm Ali — a full-stack web developer with four years of experience specializing in
                CMS and eCommerce. Since 2022 I've built for startups, agencies and established
                brands across WordPress, Shopify, Webflow, WooCommerce and Wix.
              </p>
              <p>
                My day-to-day is a mix of custom theme work, builder-based projects, third-party
                integrations and steady performance work. I care about clean handovers, fast pages
                and interfaces that don't fall apart on a real user's phone.
              </p>
              <p>
                I studied Computer Science at Virtual University of Pakistan (BSCS, 2019–2023) and
                I'm currently working as a CMS Developer in Lahore.
              </p>
            </div>

            <aside className="rounded-2xl border border-border bg-surface p-6">
              {/* Profile monogram — swap for a real headshot when ready */}
              <div className="mb-6 flex items-center gap-4">
                <div className="relative size-16 shrink-0">
                  <img src={aliPortrait}
                    alt="Ali Hassaan — Full-Stack Web Developer"
                    width={64}
                    height={64}
                    className="size-16 rounded-full object-cover ring-2 ring-ember/40"
                  />
                  <span className="absolute -bottom-0.5 -right-0.5 size-4 rounded-full border-2 border-surface bg-[oklch(0.7_0.2_140)]" />
                </div>
                <div>
                  <p className="font-display text-xl leading-tight">Ali Hassaan</p>
                  <p className="text-xs text-muted-foreground">Full-Stack Web Developer</p>
                </div>
              </div>


              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin size={16} className="mt-0.5 text-ember" />
                  <span><span className="text-foreground">Lahore, Pakistan</span><br />
                    <span className="text-muted-foreground">Working with clients worldwide</span>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Briefcase size={16} className="mt-0.5 text-ember" />
                  <span><span className="text-foreground">CMS Developer</span><br />
                    <span className="text-muted-foreground">Full-time · Since Feb 2025</span>
                  </span>
                </li>
              </ul>

              <div className="mt-6 space-y-2">
                <a
                  href={CV_URL}
                  target="_blank" rel="noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-ember px-5 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90"
                >
                  <Download size={14} /> Download CV (PDF)
                </a>
                <ScheduleMeeting
                  trigger={
                    <button
                      type="button"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-border bg-background px-5 py-2.5 text-sm hover:bg-surface"
                    >
                      <CalendarClock size={14} className="text-ember" /> Schedule a meeting
                    </button>
                  }
                />
                <QuickInquiry
                  trigger={
                    <button
                      type="button"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-border bg-background px-5 py-2.5 text-sm hover:bg-surface"
                    >
                      Send a quick brief
                    </button>
                  }
                />
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <p className="font-mono text-xs uppercase tracking-widest text-ember">Experience</p>
        <h2 className="mt-4 font-display text-5xl">Where I've worked.</h2>

        <div className="mt-12 space-y-px border border-border bg-border">
          {experience.map((e) => (
            <article key={e.company} className="bg-background p-8 md:p-10">
              <div className="grid gap-6 md:grid-cols-[1fr_2fr]">
                <div>
                  <p className="font-mono text-xs text-muted-foreground">{e.period}</p>
                  <h3 className="mt-2 font-display text-3xl">{e.company}</h3>
                  <p className="mt-1 text-sm text-ember">{e.role}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{e.location}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">Stack</p>
                  <p className="mt-2 text-sm text-foreground">{e.stack}</p>
                  <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
                    {e.points.map((p) => (
                      <li key={p} className="flex gap-3">
                        <span className="mt-2 size-1 shrink-0 rounded-full bg-ember" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="border-t border-border bg-surface/30">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <p className="font-mono text-xs uppercase tracking-widest text-ember">Toolkit</p>
          <h2 className="mt-4 font-display text-5xl">What I work with.</h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {skillGroups.map((g) => (
              <div key={g.title} className="rounded-2xl border border-border bg-background p-6">
                <h3 className="font-display text-2xl text-ember">{g.title}</h3>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  {g.items.map((i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="size-1 rounded-full bg-ember" />
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
