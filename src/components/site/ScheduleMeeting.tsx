import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CalendarClock, Check, Send } from "lucide-react";
import { z } from "zod";
import { sendFormToEmail } from "@/lib/send-form";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(80),
  email: z.string().trim().email("Enter a valid email").max(120),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  date: z.string().trim().min(1, "Pick a preferred date"),
  time: z.string().trim().min(1, "Pick a preferred time"),
  timezone: z.string().trim().max(60).optional().or(z.literal("")),
  topic: z.string().trim().min(3, "Add a short topic").max(500),
});

export function ScheduleMeeting({ trigger }: { trigger?: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  const [f, setF] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    timezone: typeof Intl !== "undefined" ? Intl.DateTimeFormat().resolvedOptions().timeZone : "",
    topic: "",
  });

  const set =
    (k: keyof typeof f) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
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
    const res = await sendFormToEmail(`Meeting request — ${r.data.name}`, {
      Name: r.data.name,
      Email: r.data.email,
      Phone: r.data.phone || "—",
      "Preferred date": r.data.date,
      "Preferred time": r.data.time,
      Timezone: r.data.timezone || "—",
      Topic: r.data.topic,
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
      setF({
        name: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        timezone: f.timezone,
        topic: "",
      });
    }, 1600);
  };

  const input =
    "w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-ember focus:outline-none focus:ring-2 focus:ring-ember/20 transition";

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger ?? (
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-full bg-ember px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90"
          >
            <CalendarClock size={16} /> Schedule a meeting
          </button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl">Schedule a meeting</DialogTitle>
          <DialogDescription>
            Tell me a bit about you and pick a preferred time. I'll confirm within one business day.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={onSubmit} className="space-y-3 pt-2">
          <div className="grid gap-3 sm:grid-cols-2">
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
              type="email"
              className={input}
              placeholder="Email"
              value={f.email}
              onChange={set("email")}
              maxLength={120}
            />
          </div>
          <input
            className={input}
            placeholder="Phone / WhatsApp (optional)"
            value={f.phone}
            onChange={set("phone")}
            maxLength={40}
          />
          <div className="grid gap-3 sm:grid-cols-2">
            <input
              required
              type="date"
              className={input}
              value={f.date}
              onChange={set("date")}
            />
            <input
              required
              type="time"
              className={input}
              value={f.time}
              onChange={set("time")}
            />
          </div>
          <input
            className={input}
            placeholder="Timezone (e.g. Asia/Karachi)"
            value={f.timezone}
            onChange={set("timezone")}
            maxLength={60}
          />
          <textarea
            required
            rows={4}
            className={input}
            placeholder="What would you like to discuss?"
            value={f.topic}
            onChange={set("topic")}
            maxLength={500}
          />
          {err && <p className="text-xs text-destructive">{err}</p>}
          <button
            type="submit"
            disabled={busy}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-ember px-5 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 disabled:opacity-70"
          >
            {sent ? (
              <>
                <Check size={16} /> Request sent
              </>
            ) : busy ? (
              "Sending…"
            ) : (
              <>
                <Send size={16} /> Request meeting
              </>
            )}
          </button>
          <p className="text-[11px] text-muted-foreground text-center">
            Your request is emailed directly to alihassaanamjad@gmail.com.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
}
