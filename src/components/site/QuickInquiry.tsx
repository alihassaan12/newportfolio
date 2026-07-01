import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import { Check, Send, Zap } from "lucide-react";
import { z } from "zod";
import { sendFormToEmail } from "@/lib/send-form";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(80),
  contact: z.string().trim().min(3, "Add an email, WhatsApp or phone").max(120),
  need: z.string().trim().min(3, "Tell me what you need").max(400),
});

export function QuickInquiry({
  trigger,
}: {
  trigger?: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  const [f, setF] = useState({ name: "", contact: "", need: "" });

  const set = (k: keyof typeof f) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setF((v) => ({ ...v, [k]: e.target.value }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const r = schema.safeParse(f);
    if (!r.success) {
      setErr(r.error.issues[0]?.message ?? "Please check the form");
      return;
    }
    setErr(null);
    setBusy(true);
    const res = await sendFormToEmail(`Quick brief — ${r.data.name}`, {
      Name: r.data.name,
      "Best contact": r.data.contact,
      "What they need": r.data.need,
    });
    setBusy(false);
    if (!res.ok) {
      setErr(res.error ?? "Could not send. Please try again.");
      return;
    }
    setSent(true);
    setTimeout(() => {
      setOpen(false);
      setSent(false);
      setF({ name: "", contact: "", need: "" });
    }, 1500);
  };

  const input =
    "w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-ember focus:outline-none focus:ring-2 focus:ring-ember/20 transition";

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger ?? (
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-5 py-2.5 text-sm text-foreground hover:bg-surface transition"
          >
            <Zap size={14} className="text-ember" /> Quick brief
          </button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl">Send a quick brief</DialogTitle>
          <DialogDescription>
            Three fields. Takes about 20 seconds. I reply within one business day.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={onSubmit} className="space-y-3 pt-2">
          <input
            required
            className={input}
            placeholder="Your name"
            value={f.name}
            onChange={set("name")}
            maxLength={80}
          />
          <input
            required
            className={input}
            placeholder="Email, WhatsApp or phone"
            value={f.contact}
            onChange={set("contact")}
            maxLength={120}
          />
          <textarea
            required
            rows={4}
            className={input}
            placeholder="What do you need? (e.g. Shopify store, WordPress marketing site…)"
            value={f.need}
            onChange={set("need")}
            maxLength={400}
          />
          {err && <p className="text-xs text-destructive">{err}</p>}
          <button
            type="submit"
            disabled={busy}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-ember px-5 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 disabled:opacity-70"
          >
            {sent ? (
              <>
                <Check size={16} /> Sent — talk soon
              </>
            ) : busy ? (
              "Sending…"
            ) : (
              <>
                <Send size={16} /> Send brief
              </>
            )}
          </button>
          <p className="text-[11px] text-muted-foreground text-center">
            Your brief is emailed directly to alihassaanamjad@gmail.com.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
}
