import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Nav } from "@/components/site/Nav";
import { Reveal } from "@/components/site/Reveal";
import { TiltCard } from "@/components/site/TiltCard";
import { LaptopFrame, BrowserFrame, PhoneFrame } from "@/components/site/HeroScene";
import website from "@/assets/website-hero.png.asset.json";
import adminTheme from "@/assets/admin-theme.png.asset.json";
import adminBlog from "@/assets/admin-blog.png.asset.json";
import botMiniApp from "@/assets/bot-miniapp.png.asset.json";
import botSales from "@/assets/bot-sales.png.asset.json";
import botAdmin from "@/assets/bot-admin.png.asset.json";

export const Route = createFileRoute("/demo")({
  head: () => ({
    meta: [
      { title: "Live Demo — AutoStore24" },
      { name: "description", content: "Explore the AutoStore24 Telegram Bot, Mini App, storefront and admin panel — a working 24×7 automated store." },
      { property: "og:title", content: "Live Demo — AutoStore24" },
      { property: "og:description", content: "A working store powered by the AutoStore24 platform." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: website.url },
      { name: "twitter:image", content: website.url },
    ],
  }),
  component: Demo,
});

const channels = [
  {
    t: "Telegram Bot",
    d: "Chat-first storefront with wallet, orders and instant support.",
    cta: "Open bot",
    href: "https://t.me/smm24x7_admin",
    tag: "@smm24x7_bot",
  },
  {
    t: "Mini App",
    d: "Full mobile store rendered natively inside Telegram.",
    cta: "Launch mini app",
    href: "https://t.me/smm24x7_admin",
    tag: "Telegram · WebApp",
  },
  {
    t: "Public Website",
    d: "SEO storefront with guest checkout and email delivery.",
    cta: "Visit site",
    href: "https://panel.ott24x7.com",
    tag: "panel.ott24x7.com",
  },
];

const stats = [
  { k: "24×7", v: "Auto delivery" },
  { k: "3", v: "Surfaces" },
  { k: "< 60s", v: "Order → fulfill" },
  { k: "0", v: "Manual steps" },
];

function Demo() {
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-hidden">
      {/* Ambient background */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 grid-bg opacity-40" />
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 bg-mesh opacity-60" />
      <div aria-hidden className="pointer-events-none fixed -top-40 left-1/2 -z-10 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-ember opacity-20 blur-3xl animate-pulse-glow" />

      <Nav />

      <main className="pt-32 sm:pt-36 pb-24">
        {/* Hero */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_1fr] lg:items-center">
            <Reveal>
              <div>
                <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 font-mono text-[11px] uppercase tracking-[0.2em] text-ember">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ember opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-ember" />
                  </span>
                  Live · running now
                </div>
                <h1 className="mt-5 font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.02] tracking-tight">
                  A real store,<br />
                  <span className="text-ember">three surfaces,</span><br />
                  one dashboard.
                </h1>
                <p className="mt-6 max-w-xl text-base sm:text-lg text-muted-foreground">
                  Explore the same platform powering AutoStore24 — Telegram Bot, Mini App, public website and admin panel — all wired to one automated catalog.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="https://t.me/smm24x7_admin"
                    className="inline-flex items-center gap-2 rounded-full bg-ember px-6 py-3 text-sm font-semibold text-ember-foreground shadow-3d hover:brightness-110 transition"
                  >
                    Open Telegram Bot <span>↗</span>
                  </a>
                  <a
                    href="https://panel.ott24x7.com"
                    className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-medium hover:border-primary/40 transition"
                  >
                    Visit website <span>↗</span>
                  </a>
                </div>

                <dl className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {stats.map((s) => (
                    <div key={s.v} className="glass rounded-xl p-4">
                      <dt className="font-display text-2xl font-bold text-ember">{s.k}</dt>
                      <dd className="mt-1 text-xs text-muted-foreground">{s.v}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Reveal>

            {/* 3D device cluster */}
            <Reveal delay={0.15}>
              <div className="relative aspect-[5/4] w-full sm:[perspective:1800px]">
                <div className="hidden sm:block absolute left-1/2 top-1/2 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-ember opacity-25 blur-3xl" />

                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                  className="relative h-full w-full [transform-style:preserve-3d]"
                  style={{ transform: "rotateX(6deg) rotateY(-12deg)" }}
                >
                  <motion.div
                    data-testid="mockup-demo-hero-laptop"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute left-[0%] top-[16%] w-[72%]"
                  >
                    <LaptopFrame src={website.url} alt="AutoStore24 website" fit="cover" />
                  </motion.div>

                  <motion.div
                    data-testid="mockup-demo-hero-browser"
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                    className="absolute right-[-2%] top-[0%] w-[46%]"
                    style={{ transform: "translateZ(90px) rotateY(-8deg) rotateZ(2deg)" }}
                  >
                    <BrowserFrame src={adminTheme.url} alt="Admin theme panel" label="admin.ott24x7.com" fit="cover" />
                  </motion.div>

                  <motion.div
                    data-testid="mockup-demo-hero-phone"
                    animate={{ y: [0, -14, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                    className="absolute right-[6%] bottom-[-6%] w-[30%]"
                    style={{ transform: "translateZ(160px) rotateY(-10deg) rotateZ(-3deg)" }}
                  >
                    <PhoneFrame src={botMiniApp.url} alt="Telegram mini app" fit="cover" />
                  </motion.div>
                </motion.div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Channel cards */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-24 sm:mt-32">
          <Reveal>
            <div className="flex items-end justify-between flex-wrap gap-4">
              <div>
                <div className="font-mono text-xs uppercase tracking-[0.2em] text-ember">Try every surface</div>
                <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold">Three ways to buy — one live catalog.</h2>
              </div>
              <p className="max-w-md text-sm text-muted-foreground">Every click below opens the real thing. Same inventory, same wallet, same order log.</p>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {channels.map((c, i) => (
              <Reveal key={c.t} delay={i * 0.08}>
                <TiltCard>
                  <a
                    href={c.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group block glass rounded-2xl p-6 shadow-3d h-full hover:border-primary/40 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[10px] uppercase tracking-wider text-ember">{c.tag}</span>
                      <span className="text-muted-foreground group-hover:text-ember transition-colors">↗</span>
                    </div>
                    <h3 className="mt-4 font-display text-xl font-semibold group-hover:text-ember transition-colors">{c.t}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{c.d}</p>
                    <span className="mt-6 inline-flex items-center gap-1.5 text-ember text-sm font-medium group-hover:gap-2.5 transition-all">
                      {c.cta} <span>→</span>
                    </span>
                  </a>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Storefront tour */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-24 sm:mt-32">
          <Reveal>
            <div className="max-w-2xl">
              <div className="font-mono text-xs uppercase tracking-[0.2em] text-ember">Storefront tour</div>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold">Storefront customers actually see.</h2>
              <p className="mt-4 text-muted-foreground">Fully-branded site with search, checkout and instant email delivery — indexed for SEO.</p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div data-testid="mockup-demo-storefront" className="mt-10 relative rounded-3xl glass p-4 sm:p-8 shadow-3d">
              <div aria-hidden className="absolute inset-0 -z-10 bg-mesh opacity-40 rounded-3xl" />
              <BrowserFrame src={website.url} alt="AutoStore24 storefront" label="panel.ott24x7.com" fit="cover" />
            </div>
          </Reveal>
        </section>

        {/* Admin split */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-24 sm:mt-32">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <div>
                <div className="font-mono text-xs uppercase tracking-[0.2em] text-ember">Admin panel</div>
                <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold">Theme, content and catalog — one place.</h2>
                <p className="mt-4 text-muted-foreground">Recolor the store, edit the blog, upload products and watch orders land in real time. No code, no rebuilds.</p>
                <ul className="mt-6 space-y-3 text-sm">
                  {["Live theme editor with color tokens", "Blog & SEO content manager", "Automated stock + delivery rules", "Wallet, UPI & USDT reconciliation"].map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <span className="mt-1.5 inline-block h-1.5 w-1.5 rounded-full bg-ember" />
                      <span className="text-foreground/90">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="grid gap-4">
                <div data-testid="mockup-demo-admin-theme">
                  <TiltCard>
                    <BrowserFrame src={adminTheme.url} alt="Theme customizer" label="admin · theme" fit="cover" />
                  </TiltCard>
                </div>
                <div data-testid="mockup-demo-admin-blog">
                  <TiltCard>
                    <BrowserFrame src={adminBlog.url} alt="Blog manager" label="admin · blog" fit="cover" />
                  </TiltCard>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Telegram trio */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-24 sm:mt-32">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto">
              <div className="font-mono text-xs uppercase tracking-[0.2em] text-ember">Inside Telegram</div>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold">Bot, sales report & admin — all in chat.</h2>
              <p className="mt-4 text-muted-foreground">Run the whole store from Telegram. Buyers shop, you fulfill and audit — no dashboard required.</p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { src: botMiniApp.url, t: "Mini App storefront", d: "Product cards, wallet balance and one-tap checkout." },
              { src: botSales.url, t: "Daily sales report", d: "Automated summary of orders, revenue and stock." },
              { src: botAdmin.url, t: "Admin controls", d: "Inline keyboard to manage products, users and payouts." },
            ].map((p, i) => (
              <Reveal key={p.t} delay={i * 0.08}>
                <TiltCard>
                  <div className="glass rounded-3xl p-5 shadow-3d">
                    <div data-testid={`mockup-demo-phone-${i}`} className="mx-auto w-[70%] sm:w-[80%]">
                      <PhoneFrame src={p.src} alt={p.t} fit="cover" />
                    </div>
                    <h3 className="mt-5 font-display text-lg font-semibold text-center">{p.t}</h3>
                    <p className="mt-1.5 text-sm text-muted-foreground text-center">{p.d}</p>
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 mt-24 sm:mt-32">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl glass p-10 sm:p-14 text-center shadow-3d">
              <div aria-hidden className="absolute inset-0 -z-10 bg-mesh opacity-70" />
              <div aria-hidden className="absolute -top-24 left-1/2 -z-10 h-80 w-80 -translate-x-1/2 rounded-full bg-ember opacity-30 blur-3xl" />
              <h2 className="font-display text-3xl sm:text-5xl font-bold">Ready to run your own?</h2>
              <p className="mt-4 text-muted-foreground max-w-xl mx-auto">Launch a fully-automated Telegram + web store on the same stack — in a weekend, not a quarter.</p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Link to="/" className="inline-flex items-center gap-2 rounded-full bg-ember px-6 py-3 text-sm font-semibold text-ember-foreground shadow-3d hover:brightness-110 transition">
                  Explore the platform →
                </Link>
                <a href="https://t.me/smm24x7_admin" className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-medium hover:border-primary/40 transition">
                  Talk on Telegram ↗
                </a>
              </div>
            </div>
          </Reveal>

          <div className="mt-14 text-center">
            <Link to="/" className="text-sm text-muted-foreground hover:text-foreground">← Back home</Link>
          </div>
        </section>
      </main>
    </div>
  );
}
