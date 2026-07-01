import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/site/Layout";
import { QuickInquiry } from "@/components/site/QuickInquiry";
import { CALENDLY_URL } from "@/lib/site";
import { CalendarClock, Github, Linkedin, Mail, Phone, MapPin, Send, Check, Zap } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Ali Hassaan, Web Developer" },
      {
        name: "description",
        content:
          "Start a web development project with Ali Hassaan. Email, LinkedIn or the quick brief below — replies within one business day.",
      },
      { property: "og:title", content: "Contact — Ali Hassaan, Web Developer" },
      {
        property: "og:description",
        content: "Get in touch to start a WordPress, Shopify, Webflow or Wix project.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", platform: "WordPress", budget: "", message: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`New project inquiry — ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPlatform: ${form.platform}\nBudget: ${form.budget}\n\n${form.message}`
    );
    window.location.href = `mailto:alihassaanamjad@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const inputCls =
    "w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-ember focus:outline-none focus:ring-2 focus:ring-ember/20 transition";

  return (
    <SiteLayout>
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 ember-glow" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <p className="font-mono text-xs uppercase tracking-widest text-ember">Contact</p>
          <h1 className="mt-4 font-display text-6xl leading-[0.95] text-balance md:text-8xl">
            Let's build
            <br />
            <span className="italic text-ember">something good.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
            Tell me a bit about the project — the platform, timeline and budget you're working with.
            I usually reply within one business day.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={CALENDLY_URL}
              target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-ember px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90"
            >
              <CalendarClock size={16} /> Schedule a meeting
            </a>
            <QuickInquiry
              trigger={
                <button
                  type="button"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-6 py-3 text-sm text-foreground hover:bg-surface"
                >
                  <Zap size={16} className="text-ember" /> Send a quick brief
                </button>
              }
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
        <div className="grid gap-10 md:grid-cols-[1fr_1.6fr]">
          {/* Contact details */}
          <aside className="space-y-3">
            <a
              href="mailto:alihassaanamjad@gmail.com"
              className="group flex items-start gap-4 rounded-2xl border border-border bg-surface p-6 hover:border-ember/40 transition"
            >
              <Mail className="text-ember mt-0.5" size={20} />
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground">Email</p>
                <p className="mt-1 text-sm text-foreground group-hover:text-ember break-all">
                  alihassaanamjad@gmail.com
                </p>
              </div>
            </a>
            <a
              href="tel:+923456090010"
              className="group flex items-start gap-4 rounded-2xl border border-border bg-surface p-6 hover:border-ember/40 transition"
            >
              <Phone className="text-ember mt-0.5" size={20} />
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground">Phone</p>
                <p className="mt-1 text-sm text-foreground group-hover:text-ember">+92 345 6090010</p>
              </div>
            </a>
            <div className="flex items-start gap-4 rounded-2xl border border-border bg-surface p-6">
              <MapPin className="text-ember mt-0.5" size={20} />
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground">Location</p>
                <p className="mt-1 text-sm text-foreground">Lahore, Pakistan</p>
                <p className="text-xs text-muted-foreground">PKT · UTC+5 · remote worldwide</p>
              </div>
            </div>

            <div className="flex gap-2 pt-2">
              <a
                href="https://www.linkedin.com/in/ali-hassaan-full-stack-developer-/"
                target="_blank" rel="noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-border bg-surface px-4 py-2.5 text-sm hover:bg-surface-2 transition"
              >
                <Linkedin size={14} /> LinkedIn
              </a>
              <a
                href="https://github.com/alihassaan12"
                target="_blank" rel="noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-border bg-surface px-4 py-2.5 text-sm hover:bg-surface-2 transition"
              >
                <Github size={14} /> GitHub
              </a>
            </div>
          </aside>

          {/* Form */}
          <form
            onSubmit={onSubmit}
            className="rounded-2xl border border-border bg-surface p-6 md:p-10 space-y-5"
          >
            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-xs uppercase tracking-widest text-muted-foreground">Name</label>
                <input required value={form.name} onChange={set("name")} className={inputCls} placeholder="Your full name" />
              </div>
              <div>
                <label className="mb-2 block text-xs uppercase tracking-widest text-muted-foreground">Email</label>
                <input required type="email" value={form.email} onChange={set("email")} className={inputCls} placeholder="you@company.com" />
              </div>
              <div>
                <label className="mb-2 block text-xs uppercase tracking-widest text-muted-foreground">Platform</label>
                <select value={form.platform} onChange={set("platform")} className={inputCls}>
                  <option>WordPress</option>
                  <option>Shopify</option>
                  <option>Webflow</option>
                  <option>Wix</option>
                  <option>Not sure yet</option>
                </select>
              </div>
              <div>
                <label className="mb-2 block text-xs uppercase tracking-widest text-muted-foreground">Budget (USD)</label>
                <select value={form.budget} onChange={set("budget")} className={inputCls}>
                  <option value="">Select a range</option>
                  <option>Under $1k</option>
                  <option>$1k – $3k</option>
                  <option>$3k – $8k</option>
                  <option>$8k+</option>
                </select>
              </div>
            </div>
            <div>
              <label className="mb-2 block text-xs uppercase tracking-widest text-muted-foreground">Project</label>
              <textarea
                required rows={6} value={form.message} onChange={set("message")}
                className={inputCls} placeholder="A quick brief — goals, timeline, links to inspiration…"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-ember px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90"
            >
              {sent ? <><Check size={16} /> Email opened</> : <><Send size={16} /> Send inquiry</>}
            </button>
            <p className="text-xs text-muted-foreground">
              This opens your email client with the message pre-filled — no data is stored on this site.
            </p>
          </form>
        </div>
      </section>
    </SiteLayout>
  );
}
