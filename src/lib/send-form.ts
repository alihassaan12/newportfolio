// Sends form submissions to alihassaanamjad@gmail.com via FormSubmit.co
// No backend required.

const ENDPOINT = "https://formsubmit.co/alihassaanamjad@gmail.com";

export async function sendFormToEmail(
  subject: string,
  data: Record<string, string>,
): Promise<{ ok: boolean; error?: string }> {
  try {
    const formData = new FormData();

    formData.append("_subject", subject);
    formData.append("_template", "table");
    formData.append("_captcha", "false");

    // Optional: Disable the default thank-you page
    // formData.append("_next", window.location.href);

    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value);
    });

    const res = await fetch(ENDPOINT, {
      method: "POST",
      body: formData,
    });

    if (!res.ok) {
      return {
        ok: false,
        error: `Request failed (${res.status})`,
      };
    }

    return { ok: true };
  } catch (e) {
    return {
      ok: false,
      error: e instanceof Error ? e.message : "Network error",
    };
  }
}