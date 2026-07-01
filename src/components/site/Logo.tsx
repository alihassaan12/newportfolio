import logo3d from "@/assets/logo-3d.png";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <span className="relative grid size-9 place-items-center">
        <img
          src={logo3d}
          alt="Ali Hassaan logo"
          width={36}
          height={36}
          className="size-9 object-contain drop-shadow-[0_6px_20px_oklch(0.7_0.2_45/0.45)] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
        />
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-lg tracking-tight text-foreground">Ali Hassaan</span>
        <span className="mt-0.5 font-mono text-[9px] uppercase tracking-[0.22em] text-muted-foreground">
          Web Developer
        </span>
      </span>
    </span>
  );
}
