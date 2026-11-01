const GREETINGS = {
  en: "Hi Danendra, I saw your portfolio and would like to talk.",
  id: "Halo Danendra, saya melihat portofolio Anda dan ingin berdiskusi.",
};

// The number stays on the server, so it never appears in the page HTML or JS for scrapers to read.
export async function GET(request: Request) {
  const number = process.env.WHATSAPP_NUMBER;
  if (!number) return new Response("WhatsApp is not configured.", { status: 503 });

  const greeting = new URL(request.url).searchParams.get("lang") === "en" ? GREETINGS.en : GREETINGS.id;

  return Response.redirect(`https://wa.me/${number}?text=${encodeURIComponent(greeting)}`, 302);
}
