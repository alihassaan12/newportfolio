import { Quote, Star } from "lucide-react";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  platform: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "Ali rebuilt our Shopify store from the ground up. Page speed jumped, the PDP finally converts, and the handover was spotless. Easily the smoothest dev project we've run.",
    name: "Faraz A.",
    role: "Founder, House of Faraz",
    platform: "Shopify",
  },
  {
    quote:
      "He took a rough brief and turned it into a polished Webflow site with motion that actually feels premium. Delivered ahead of schedule and communicated the whole way.",
    name: "Sarah M.",
    role: "Marketing Lead, SaaS Studio",
    platform: "Webflow",
  },
  {
    quote:
      "Our dental practice site now ranks locally and books appointments on autopilot. Ali understood the SEO side as well as the design. Highly recommend.",
    name: "Dr. J. Thompson",
    role: "Owner, Dental Practice",
    platform: "WordPress",
  },
  {
    quote:
      "Reliable, detail-obsessed and fast. Ali handled the whole WooCommerce build plus payment and CRM integrations without a single hiccup.",
    name: "Michael C.",
    role: "Consultant",
    platform: "WordPress",
  },
];

export function Testimonials() {
  return (
    <section className="border-t border-border bg-surface/30">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-ember">04 — Testimonials</p>
            <h2 className="mt-4 font-display text-5xl leading-tight text-balance">
              What clients say.
            </h2>
          </div>
          <div className="flex items-center gap-1 text-ember">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={18} fill="currentColor" />
            ))}
            <span className="ml-2 text-sm text-muted-foreground">Trusted by 160+ clients</span>
          </div>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <figure
              key={t.name}
              style={{ animationDelay: `${i * 80}ms` }}
              className="reveal group relative flex flex-col gap-6 rounded-2xl border border-border bg-background p-8 transition duration-300 hover:border-ember/40 hover:-translate-y-1"
            >
              <Quote className="size-8 text-ember/70" />
              <blockquote className="text-lg leading-relaxed text-foreground">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-auto flex items-center gap-4 border-t border-border pt-6">
                <span className="grid size-11 place-items-center rounded-full bg-gradient-to-br from-ember to-[oklch(0.55_0.18_35)] font-display text-lg text-primary-foreground">
                  {t.name.charAt(0)}
                </span>
                <span className="flex flex-col leading-tight">
                  <span className="font-display text-lg text-foreground">{t.name}</span>
                  <span className="text-xs text-muted-foreground">{t.role}</span>
                </span>
                <span className="ml-auto rounded-full border border-border px-3 py-1 text-[10px] uppercase tracking-widest text-muted-foreground">
                  {t.platform}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
