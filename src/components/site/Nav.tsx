import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, CalendarClock } from "lucide-react";
import { Logo } from "./Logo";
import { ScheduleMeeting } from "./ScheduleMeeting";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Work" },
  { to: "/contact", label: "Contact" },
] as const;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-xl bg-background/70 border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-3.5 lg:px-10">
        <Link to="/" className="group">
          <Logo />
        </Link>

        <nav className="hidden md:flex items-center gap-1 rounded-full border border-border bg-surface/60 px-2 py-1.5 backdrop-blur">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="px-4 py-1.5 text-sm text-muted-foreground rounded-full hover:text-foreground hover:bg-surface-2 transition-colors"
              activeProps={{ className: "text-foreground bg-surface-2" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <ScheduleMeeting
            trigger={
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-2 text-sm text-foreground hover:bg-surface transition"
              >
                <CalendarClock size={14} className="text-ember" /> Schedule
              </button>
            }
          />
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-ember px-5 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition"
          >
            Let's talk <span aria-hidden>→</span>
          </Link>
        </div>

        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="rounded-lg px-4 py-3 text-base text-muted-foreground hover:text-foreground hover:bg-surface"
                activeProps={{ className: "text-foreground bg-surface" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
            <ScheduleMeeting
              trigger={
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full border border-border bg-surface px-5 py-3 text-sm"
                >
                  <CalendarClock size={14} className="text-ember" /> Schedule meeting
                </button>
              }
            />
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-1 inline-flex items-center justify-center rounded-full bg-ember px-5 py-3 text-sm font-medium text-primary-foreground"
            >
              Let's talk →
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
