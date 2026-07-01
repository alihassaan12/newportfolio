import { useEffect, type ReactNode } from "react";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { FloatingContacts } from "./FloatingContacts";

export function SiteLayout({ children }: { children: ReactNode }) {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const targets = document.querySelectorAll<HTMLElement>(
      "section, h1, h2, h3, .reveal-auto"
    );
    targets.forEach((el) => {
      if (el.dataset.revealed) return;
      el.style.opacity = "0";
      el.style.transform = "translateY(20px)";
      el.style.transition = "opacity 700ms ease-out, transform 700ms ease-out";
    });
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const el = e.target as HTMLElement;
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
            el.dataset.revealed = "1";
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    targets.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      <Nav />
      <main className="flex-1 pt-20">{children}</main>
      <Footer />
      <FloatingContacts />
    </div>
  );
}
