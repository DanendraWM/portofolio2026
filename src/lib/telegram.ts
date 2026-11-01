const REQUEST_TIMEOUT_MS = 8000;

export class TelegramNotConfiguredError extends Error {}

/** Sent as plain text (no parse_mode), so visitor input can't inject Telegram formatting. */
export async function sendTelegramMessage(text: string): Promise<void> {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) throw new TelegramNotConfiguredError();

  const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chat_id: chatId, text, disable_web_page_preview: true }),
    signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
  });

  if (!response.ok) throw new Error(`Telegram responded with ${response.status}`);
}
