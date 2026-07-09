// Sends form submissions to alihassaanamjad@gmail.com via FormSubmit.co (no backend required).
// First-ever POST triggers a one-time email confirmation link to the inbox owner.
// const ENDPOINT = "https://formsubmit.co/ajax/alihassaanamjad@gmail.com";
const ENDPOINT = "/api/send-email";

export async function sendFormToEmail(
  subject: string,
  data: Record<string, string>,
): Promise<{ ok: boolean; error?: string }> {
  try {
    const payload: Record<string, string> = {
      _subject: subject,
      _template: "table",
      _captcha: "false",
      ...data,
    };
    const res = await fetch(ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(payload),
    });
    if (!res.ok) return { ok: false, error: `Request failed (${res.status})` };
    return { ok: true };
  } catch (e) {
    return { ok: false, error: e instanceof Error ? e.message : "Network error" };
  }
}
