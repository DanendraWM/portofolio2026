# Danendra's portfolio

Personal portfolio built with Next.js (App Router), TypeScript, Tailwind CSS, Lenis, GSAP, and Framer Motion.

## Run locally

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open http://localhost:3000. If a change to `globals.css` doesn't show up, restart `npm run dev`.

## Change the content

All text lives in `src/content/`, so you can edit it without touching components:

| File | Contains |
|---|---|
| `en.ts` | All English text, at `/en` |
| `id.ts` | All Indonesian text, at `/id` |
| `personal.ts` | Name, email, and links, shared by both languages |

Both language files follow the `Content` type in `src/types/content.ts`, so TypeScript reports an error if one is missing something. When you change one, change the other too.

Keep client and product names out of the project text. The site is public.

Visiting `/` redirects to `/id` or `/en` based on the browser's language, falling back to English.

## Environment variables

| Name | Purpose |
|---|---|
| `TELEGRAM_BOT_TOKEN` | Bot that delivers contact form messages, from `@BotFather` |
| `TELEGRAM_CHAT_ID` | Chat that receives them |
| `WHATSAPP_NUMBER` | Number behind the WhatsApp button, international format without `+` |
| `NEXT_PUBLIC_SITE_URL` | Optional. Set it when you add a custom domain |

Get the chat ID by sending your bot a message, then opening `https://api.telegram.org/bot<TOKEN>/getUpdates` and copying `chat.id`.

Never commit `.env.local`. It's already in `.gitignore`.

## Deploy to Vercel

1. Create an empty repository on GitHub, then push this project:

   ```bash
   git remote add origin https://github.com/<username>/<repo>.git
   git push -u origin main
   ```

2. On [vercel.com/new](https://vercel.com/new), import the repository. Vercel detects Next.js, so the default settings work.
3. Before clicking **Deploy**, add `TELEGRAM_BOT_TOKEN`, `TELEGRAM_CHAT_ID`, and `WHATSAPP_NUMBER` under **Environment Variables**.
4. Click **Deploy**. The site goes live on a `*.vercel.app` address.
5. Rename the address, if you like, in **Settings → Domains**, then redeploy so the metadata uses the new URL.
6. Check the live site:
   - Send a test message through the form and confirm it reaches Telegram.
   - Click the WhatsApp button and confirm it opens the right chat.
   - Paste the URL into [opengraph.xyz](https://www.opengraph.xyz) to check the preview image.

Every later push to `main` deploys automatically.

## Add a custom domain later

1. Buy the domain, then add it in **Settings → Domains** in Vercel.
2. Add the DNS records Vercel shows at your domain registrar. They can take a while to take effect.
3. Set `NEXT_PUBLIC_SITE_URL` to `https://yourdomain.com` and redeploy.

## Version 2 ideas

- Blog: add routes under `src/app/blog/`, with posts next to the other content.
- Database features such as a guestbook or visitor counter (Supabase or Neon): add routes under `src/app/api/`. A database could also replace the in-memory rate limit in `src/lib/rateLimit.ts`, which counts per server instance.
