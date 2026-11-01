const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 5;
const MAX_TRACKED_KEYS = 1000;

const hits = new Map<string, number[]>();

/**
 * In-memory limit per server instance. On Vercel each instance counts separately and
 * resets when it restarts, so this slows down casual spam rather than guaranteeing a cap.
 */
export function isRateLimited(key: string, now = Date.now()): boolean {
  if (hits.size >= MAX_TRACKED_KEYS) hits.clear();

  const recent = (hits.get(key) ?? []).filter((time) => now - time < WINDOW_MS);
  const limited = recent.length >= MAX_REQUESTS;

  if (!limited) recent.push(now);
  hits.set(key, recent);

  return limited;
}
