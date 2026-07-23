import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";

export const Route = createFileRoute("/demo")({
  head: () => ({
    meta: [
      { title: "Live Demo — AutoStore24" },
      { name: "description", content: "See the AutoStore24 Telegram Bot, Mini App and website in action." },
      { property: "og:title", content: "Live Demo — AutoStore24" },
      { property: "og:description", content: "A working store powered by the AutoStore24 platform." },
    ],
  }),
  component: Demo,
});

function Demo() {
  const channels = [
    { t: "Telegram Bot", d: "Chat-first storefront with wallet, orders and support.", cta: "Open bot", href: "https://t.me/smm24x7_admin" },
    { t: "Mini App", d: "Mobile store rendered inside Telegram.", cta: "Launch mini app", href: "https://t.me/smm24x7_admin" },
    { t: "Website", d: "Search, guest checkout and email delivery.", cta: "Visit site", href: "https://panel.ott24x7.com" },
  ];
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 grid-bg opacity-40" />
      <Nav />
      <main className="pt-36 pb-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="font-mono text-xs uppercase tracking-[0.2em] text-ember">Live demo</div>
          <h1 className="mt-4 font-display text-5xl sm:text-6xl font-bold">See a real store,<br /><span className="text-ember">running today.</span></h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            Explore the same platform powering AutoStore24 across all three surfaces. One catalog, one dashboard, three ways to buy.
          </p>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {channels.map((c) => (
              <div key={c.t} className="glass rounded-2xl p-6 shadow-3d">
                <h3 className="font-display text-lg font-semibold">{c.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{c.d}</p>
                <a href={c.href} className="mt-5 inline-flex items-center gap-1.5 text-ember text-sm font-medium hover:gap-2.5 transition-all">
                  {c.cta} <span>↗</span>
                </a>
              </div>
            ))}
          </div>

          <div className="mt-14">
            <Link to="/" className="text-sm text-muted-foreground hover:text-foreground">← Back home</Link>
          </div>
        </div>
      </main>
    </div>
  );
}
