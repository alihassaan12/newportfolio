import { Link } from "@tanstack/react-router";
import { CalendarClock, Download, Github, Linkedin, Mail } from "lucide-react";
import { CALENDLY_URL, CV_URL } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface/40">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <p className="font-display text-3xl leading-tight text-balance">
              Have a website in mind?
              <br />
              <span className="text-ember">Let's build it right.</span>
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-ember px-5 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90"
              >
                <CalendarClock size={14} /> Schedule a meeting
              </a>
              <a
                href={CV_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm hover:bg-surface"
              >
                <Download size={14} /> Download CV
              </a>
            </div>
            <a
              href="mailto:alihassaanamjad@gmail.com"
              className="mt-4 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition"
            >
              <Mail size={16} /> alihassaanamjad@gmail.com
            </a>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-muted-foreground">Navigate</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-ember transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-ember transition">
                  About
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-ember transition">
                  Work
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-ember transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-muted-foreground">Elsewhere</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a
                  href="https://www.linkedin.com/in/ali-hassaan-full-stack-developer-/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 hover:text-ember transition"
                >
                  <Linkedin size={14} /> LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/alihassaan12"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 hover:text-ember transition"
                >
                  <Github size={14} /> GitHub
                </a>
              </li>
              <li>
                <a href="tel:+923456090010" className="hover:text-ember transition">
                  +92 345 6090010
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Ali Hassaan. Built with care in Lahore.</p>
          <p className="font-mono">v2.0 — web development studio of one</p>
        </div>
      </div>
    </footer>
  );
}
