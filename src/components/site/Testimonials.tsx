import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  platform: string;
};

const testimonials: Testimonial[] = [
  { quote: "Ali rebuilt our Shopify store from the ground up. Page speed jumped, the PDP finally converts, and the handover was spotless. Easily the smoothest dev project we've run.", name: "Faraz A.", role: "Founder, House of Faraz", platform: "Shopify" },
  { quote: "He took a rough brief and turned it into a polished Webflow site with motion that actually feels premium. Delivered ahead of schedule and communicated the whole way.", name: "Sarah M.", role: "Marketing Lead, SaaS Studio", platform: "Webflow" },
  { quote: "Our dental practice site now ranks locally and books appointments on autopilot. Ali understood the SEO side as well as the design. Highly recommend.", name: "Dr. J. Thompson", role: "Owner, Dental Practice", platform: "WordPress" },
  { quote: "Reliable, detail-obsessed and fast. Ali handled the whole WooCommerce build plus payment and CRM integrations without a single hiccup.", name: "Michael C.", role: "Consultant", platform: "WordPress" },
  { quote: "Turned our outdated Wix site into a modern storefront. Sales are up 40% in the first quarter after launch.", name: "Amara O.", role: "Founder, Bloom & Co.", platform: "Wix" },
  { quote: "Clean code, clean design, and even cleaner communication. Ali is the developer you want on your team.", name: "David R.", role: "CTO, LaunchPad", platform: "React" },
  { quote: "We hired Ali for a WordPress migration and he over-delivered on every front. Zero downtime, zero broken links.", name: "Priya S.", role: "Ops Manager, EduHub", platform: "WordPress" },
  { quote: "Shopify performance was killing our ads. Ali audited, refactored, and shipped a version that scores 90+ on mobile.", name: "Yasir K.", role: "DTC Founder", platform: "Shopify" },
  { quote: "Fantastic Webflow work. Interactions feel native, and the CMS is easy for our marketing team to update.", name: "Elena V.", role: "Head of Growth", platform: "Webflow" },
  { quote: "Ali went above and beyond to explain trade-offs to a non-technical team. Never once talked down to us.", name: "Rachel T.", role: "Small Business Owner", platform: "WordPress" },
  { quote: "Delivered our custom WooCommerce booking flow in under three weeks. Refactored old plugins into a clean solution.", name: "Kenji I.", role: "Founder, Kanata Tours", platform: "WooCommerce" },
  { quote: "He caught issues our previous agency missed — accessibility, SEO metadata, structured data. Real professional.", name: "Nadia B.", role: "Product Manager", platform: "WordPress" },
  { quote: "Great designer sensibility for a dev. Our landing page finally matches the quality of our brand.", name: "Tom H.", role: "Creative Director", platform: "Webflow" },
  { quote: "Ali built a headless Shopify + Next.js prototype for us. Rock solid, well-tested and easy to hand off.", name: "Isabella F.", role: "Engineering Lead", platform: "Shopify" },
  { quote: "Our Elementor build was a nightmare of bloat. Ali replaced it with a lean custom theme and cut load time in half.", name: "Omar Z.", role: "Marketing Director", platform: "WordPress" },
  { quote: "Responsive, kind, and technically sharp. Answered every question and shipped early.", name: "Grace L.", role: "Co-founder", platform: "Wix" },
  { quote: "Best freelance experience we've had. The docs alone were worth the price.", name: "Marcus B.", role: "Ops Lead", platform: "WordPress" },
  { quote: "Ali took our messy Figma file and turned it into a pixel-perfect production site. Zero back-and-forth on QA.", name: "Ha-eun P.", role: "UI Designer", platform: "Webflow" },
  { quote: "The Shopify theme he built for us has been running two years without a single ticket. That says everything.", name: "Chris D.", role: "Ecom Manager", platform: "Shopify" },
  { quote: "He rebuilt our slow WordPress site into something that loads in under a second on 3G. Absolute wizard.", name: "Fatima R.", role: "Founder, Aleyna Home", platform: "WordPress" },
  { quote: "Payment gateway integration, CRM sync, custom order flows — all done cleanly. Worth every dollar.", name: "Jonas W.", role: "COO", platform: "WooCommerce" },
  { quote: "Very rare to find someone who codes AND writes readable documentation. Ali does both.", name: "Sana Q.", role: "Product Owner", platform: "React" },
  { quote: "Our new site went from concept to launch in 18 days. Ali runs like a real studio, not a freelancer.", name: "Andres M.", role: "Founder, Verde Studio", platform: "Webflow" },
  { quote: "Rebuilt the checkout, added abandoned-cart flow, wired up Klaviyo. Revenue up, support tickets down.", name: "Leila H.", role: "Ecom Director", platform: "Shopify" },
  { quote: "I've worked with a lot of devs. Ali is in the top 1% for communication and craft.", name: "Robert G.", role: "Agency Partner", platform: "WordPress" },
  { quote: "He built us a custom multi-vendor marketplace with everything a normal team would need six months for.", name: "Ines A.", role: "Startup Founder", platform: "WooCommerce" },
  { quote: "Migrated our Wix site to WordPress without losing SEO rankings. A minor miracle.", name: "Peter O.", role: "Blog Owner", platform: "WordPress" },
  { quote: "Genuinely enjoyable to work with. Meets deadlines, sends video walkthroughs, follows up after launch.", name: "Camila S.", role: "Brand Manager", platform: "Shopify" },
  { quote: "Best Webflow developer I've collaborated with. Handles complex CMS relationships like it's nothing.", name: "Daniel K.", role: "Design Lead", platform: "Webflow" },
  { quote: "Ali stepped into a broken project mid-way through and shipped it. That takes real skill and calm.", name: "Meera V.", role: "Project Manager", platform: "WordPress" },
  { quote: "Solid engineer, honest quotes, no surprises. My go-to for anything CMS or ecommerce.", name: "Hassan R.", role: "Founder, Karim Fitness", platform: "Shopify" },
  { quote: "Our team can finally update the site without breaking it. That alone was worth the rebuild.", name: "Aisha T.", role: "Marketing Manager", platform: "Webflow" },
];

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [perView, setPerView] = useState(1);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      setPerView(w >= 1024 ? 3 : w >= 640 ? 2 : 1);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const pages = Math.max(1, testimonials.length - perView + 1);

  useEffect(() => {
    if (index > pages - 1) setIndex(0);
  }, [pages, index]);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % pages);
    }, 6000);
    return () => window.clearInterval(id);
  }, [pages]);

  const prev = () => setIndex((i) => (i - 1 + pages) % pages);
  const next = () => setIndex((i) => (i + 1) % pages);

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
            <span className="ml-2 text-sm text-muted-foreground">
              Trusted by 100+ clients · {testimonials.length} reviews
            </span>
          </div>
        </div>

        <div className="mt-14 overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-out"
            style={{
              transform: `translateX(-${(index * 100) / perView}%)`,
            }}
          >
            {testimonials.map((t) => (
              <figure
                key={t.name + t.quote.slice(0, 12)}
                style={{ flex: `0 0 ${100 / perView}%` }}
                className="px-3"
              >
                <div className="group relative flex h-full flex-col gap-6 rounded-2xl border border-border bg-background p-8 transition duration-300 hover:border-ember/40">
                  <Quote className="size-8 text-ember/70" />
                  <blockquote className="text-base leading-relaxed text-foreground">
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
                </div>
              </figure>
            ))}
          </div>
        </div>

        <div className="mt-8 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous testimonials"
              className="grid size-10 place-items-center rounded-full border border-border bg-background text-foreground hover:border-ember/60 hover:text-ember transition"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next testimonials"
              className="grid size-10 place-items-center rounded-full border border-border bg-background text-foreground hover:border-ember/60 hover:text-ember transition"
            >
              <ChevronRight size={18} />
            </button>
          </div>
          <div className="flex flex-wrap items-center gap-1.5">
            {Array.from({ length: pages }).map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === index ? "w-6 bg-ember" : "w-1.5 bg-border hover:bg-muted-foreground/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
