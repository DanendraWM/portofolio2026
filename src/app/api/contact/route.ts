import { isRateLimited } from "@/lib/rateLimit";
import { sendTelegramMessage, TelegramNotConfiguredError } from "@/lib/telegram";

const LIMITS = { name: 100, contact: 150, message: 2000 };

function asText(value: unknown, maxLength: number): string | null {
  if (typeof value !== "string") return null;
  const text = value.trim();
  return text.length > 0 && text.length <= maxLength ? text : null;
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  // Real visitors never see this field, so bots get a success reply and nothing is sent.
  if (body?.website) return Response.json({ ok: true });

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (isRateLimited(ip)) {
    return Response.json({ error: "Too many messages. Try again in a few minutes." }, { status: 429 });
  }

  const name = asText(body?.name, LIMITS.name);
  const contact = asText(body?.contact, LIMITS.contact);
  const message = asText(body?.message, LIMITS.message);

  if (!name || !contact || !message) {
    return Response.json({ error: "Check your name, contact, and message, then try again." }, { status: 400 });
  }

  try {
    await sendTelegramMessage(`New portfolio message\n\nName: ${name}\nContact: ${contact}\n\n${message}`);
    return Response.json({ ok: true });
  } catch (error) {
    if (error instanceof TelegramNotConfiguredError) console.error("Contact form: Telegram env vars are missing");
    else console.error("Contact form: Telegram send failed");

    return Response.json({ error: "Your message couldn't be sent. Email me instead." }, { status: 502 });
  }
}
