const ACCESS_KEY = "00e52d73-d343-4c4d-8c6d-44b2bf54ae12";

export async function sendFormToEmail(
  subject: string,
  data: Record<string, string>,
): Promise<{ ok: boolean; error?: string }> {
  try {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: ACCESS_KEY,
        subject,
        from_name: "Ali Hassaan Portfolio",
        ...data,
      }),
    });

    const result = await res.json();

    if (!result.success) {
      return {
        ok: false,
        error: result.message || "Email failed",
      };
    }

    return { ok: true };

  } catch (error: unknown) {
    return {
      ok: false,
      error: error instanceof Error ? error.message : "Network error",
    };
  }
}