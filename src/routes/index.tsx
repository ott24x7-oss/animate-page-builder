import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Nav } from "@/components/site/Nav";
import { HeroScene, BrowserFrame, PhoneFrame } from "@/components/site/HeroScene";
import { Reveal } from "@/components/site/Reveal";
import { TiltCard } from "@/components/site/TiltCard";
import { useState } from "react";
import botMiniApp from "@/assets/bot-miniapp.png.asset.json";
import botAdmin from "@/assets/bot-admin.png.asset.json";
import botSales from "@/assets/bot-sales.png.asset.json";
import website from "@/assets/website-hero.png.asset.json";
import adminTheme from "@/assets/admin-theme.png.asset.json";
import adminBlog from "@/assets/admin-blog.png.asset.json";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AutoStore24 — Sell digital products, automatically" },
      { name: "description", content: "Launch your branded Telegram Bot, Mini App and website in days. Accept UPI + USDT, auto-deliver keys, manage every order from one dashboard." },
      { property: "og:title", content: "AutoStore24 — Telegram Commerce, Automated" },
      { property: "og:description", content: "Bot · Mini App · Website. 24×7 automated selling." },
    ],
  }),
  component: Landing,
});

const WA_LINK = "https://wa.me/919911645410?text=Hi%2C%20I%20want%20my%20own%20Telegram%20digital%20product%20store.";

function Landing() {
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-hidden">
      <BackgroundFX />
      <Nav />
      <main className="relative">
        <Hero />
        <Marquee />
        <HowItWorks />
        <Channels />
        <Showcase />
        <Features />
        <Dashboard />
        <AdminShowcase />
        <Pricing />
        <FAQ />
        <CTA />

      </main>
      <Footer />
    </div>
  );
}

function BackgroundFX() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute -top-40 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-ember opacity-20 blur-[120px]" />
      <div className="absolute top-[40%] -left-40 h-[500px] w-[500px] rounded-full bg-plasma opacity-15 blur-[120px] animate-drift" />
      <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-primary opacity-10 blur-[120px] animate-drift" />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-44 lg:pb-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-8 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-[10px] sm:text-xs font-medium"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ember opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-ember" />
              </span>
              <span className="font-mono uppercase tracking-wider text-muted-foreground">Telegram commerce automation</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mt-5 font-display text-4xl sm:text-6xl lg:text-7xl font-bold leading-[0.95] tracking-tight"
            >
              Sell digital products{" "}
              <span className="text-ember animate-gradient bg-clip-text">automatically.</span>
            </motion.h1>


            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 max-w-xl text-lg text-muted-foreground leading-relaxed"
            >
              Launch your branded{" "}
              <span className="text-foreground font-medium">Telegram Bot, Mini App and website</span>.
              Accept payments, deliver products and manage every order from one dashboard.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a
                href={WA_LINK}
                className="group relative inline-flex items-center gap-2 rounded-full bg-ember px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-ember transition-transform hover:scale-105 active:scale-100"
              >
                Start your store
                <span className="transition-transform group-hover:translate-x-1">→</span>
                <span className="absolute inset-0 rounded-full bg-ember opacity-40 blur-lg -z-10 group-hover:opacity-70 transition-opacity" />
              </a>
              <a
                href="#how"
                className="inline-flex items-center gap-2 rounded-full glass px-6 py-3.5 text-sm font-semibold hover:bg-white/[0.08] transition-colors"
              >
                See live demo <span>↗</span>
              </a>
            </motion.div>

            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground"
            >
              {["No coding", "Mobile friendly", "Setup support"].map((f) => (
                <li key={f} className="inline-flex items-center gap-1.5">
                  <span className="text-ember">✓</span> {f}
                </li>
              ))}
            </motion.ul>
          </div>

          <div className="relative">
            <HeroScene />
          </div>
        </div>

        {/* Stats bar */}
        <Reveal delay={0.2} className="mt-16 sm:mt-20">
          <div className="glass rounded-3xl p-1 shadow-3d">
            <div className="grid grid-cols-2 sm:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-white/5">
              {[
                { k: "3-in-1", v: "Bot · Mini App · Website" },
                { k: "₹1,499", v: "Rental per month" },
                { k: "₹19,999", v: "One-time installation" },
                { k: "24 × 7", v: "Automated selling" },
              ].map((s) => (
                <div key={s.k} className="px-6 py-5">
                  <div className="font-display text-2xl sm:text-3xl font-bold text-ember">{s.k}</div>
                  <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{s.v}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Marquee() {
  const items = ["Telegram Bot", "Mini App", "Website", "UPI Payments", "USDT / Binance", "Auto Delivery", "Reseller API", "Guest Checkout", "Marketing Automation"];
  return (
    <section className="relative py-10 border-y border-white/5 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...items, ...items, ...items].map((t, i) => (
          <div key={i} className="mx-8 flex items-center gap-8 text-muted-foreground font-mono text-sm uppercase tracking-wider">
            <span>{t}</span>
            <span className="text-ember">◆</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function SectionHeader({ eyebrow, title, sub }: { eyebrow: string; title: React.ReactNode; sub?: string }) {
  return (
    <Reveal className="mx-auto max-w-3xl text-center">
      <div className="font-mono text-xs uppercase tracking-[0.2em] text-ember">{eyebrow}</div>
      <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold tracking-tight">{title}</h2>
      {sub && <p className="mt-4 text-muted-foreground text-lg">{sub}</p>}
    </Reveal>
  );
}

function HowItWorks() {
  const steps = [
    { n: "01", t: "Customer shops", d: "Products are available through Telegram, the Mini App and your website." },
    { n: "02", t: "Payment is verified", d: "Customers pay through an enabled INR or USDT method." },
    { n: "03", t: "Order is delivered", d: "Automatic stock is delivered instantly; manual orders stay under your control." },
  ];
  return (
    <section id="how" className="relative py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Simple workflow" title={<>How the system <span className="text-ember">works</span></>} sub="A complete buying journey with fewer manual steps." />
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.1}>
              <TiltCard>
                <div className="glass rounded-3xl p-8 h-full shadow-3d relative overflow-hidden group">
                  <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-ember opacity-10 blur-2xl group-hover:opacity-30 transition-opacity" />
                  <div className="font-mono text-sm text-ember">{s.n}</div>
                  <h3 className="mt-4 font-display text-2xl font-semibold">{s.t}</h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed">{s.d}</p>
                  <div className="mt-6 h-px bg-gradient-to-r from-ember/60 to-transparent" />
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Channels() {
  const channels = [
    { t: "Telegram Bot", d: "Fast menus, wallet and order updates.", icon: "✈" },
    { t: "Mini App", d: "Mobile storefront inside Telegram.", icon: "◈" },
    { t: "Website", d: "Search, guest checkout and email delivery.", icon: "◉" },
  ];
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="A real connected storefront" title={<>One brand. <span className="text-ember italic">Three selling channels.</span></>} sub="Your customers can browse and buy through the Telegram Bot, Mini App or website. Every channel uses the same catalog, stock and order data." />

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {channels.map((c, i) => (
            <Reveal key={c.t} delay={i * 0.1}>
              <div className="glass rounded-3xl p-8 shadow-3d h-full relative overflow-hidden">
                <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-ember to-transparent opacity-60" />
                <div className="flex items-center gap-4">
                  <div className="h-14 w-14 rounded-2xl bg-ember/15 border border-primary/20 flex items-center justify-center text-2xl text-ember shadow-ember">
                    {c.icon}
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold">{c.t}</h3>
                  </div>
                </div>
                <p className="mt-4 text-muted-foreground">{c.d}</p>
                <div className="mt-6 space-y-2">
                  {["Instant catalog sync", "Shared wallet & orders", "Real-time stock"].map((b) => (
                    <div key={b} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="text-ember">◆</span> {b}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Features() {
  const items = [
    { i: "⚡", t: "Automatic + Manual Delivery", d: "Sell instant keys, links and codes alongside products that require manual fulfilment." },
    { i: "₹", t: "UPI + USDT Verification", d: "Support INR and Binance/USDT payments with Gmail API or IMAP-based verification." },
    { i: "⇄", t: "Supplier & Reseller APIs", d: "Import approved supplier catalogs, set your margin and give your resellers API access." },
    { i: "◎", t: "Website + Bot Sync", d: "The website, Telegram Bot and Mini App share one catalog, stock and order database." },
    { i: "@", t: "Guest Email Checkout", d: "Customers without Telegram can pay on the website and receive delivery by branded email." },
    { i: "✦", t: "Marketing Automation", d: "Schedule Telegram offers and auto-post products to WhatsApp groups and communities." },
    { i: "▦", t: "Bulk Management", d: "Upload products and stock in bulk, manage prices, discounts, categories and alerts." },
    { i: "!", t: "Instant Owner Alerts", d: "Receive WhatsApp and Telegram notifications for purchases on the Bot or website." },
  ];
  return (
    <section id="features" className="relative py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Core capabilities" title={<>Everything required to run a <span className="text-ember">digital store</span></>} sub="Powerful automation presented in a simple admin dashboard." />

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((f, i) => (
            <Reveal key={f.t} delay={(i % 4) * 0.08}>
              <TiltCard className="h-full">
                <div className="glass rounded-2xl p-6 h-full shadow-3d group hover:border-primary/30 transition-colors relative overflow-hidden">
                  <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-ember opacity-0 group-hover:opacity-20 blur-2xl transition-opacity" />
                  <div className="h-11 w-11 rounded-xl bg-ember/15 border border-primary/20 flex items-center justify-center text-lg text-ember font-display font-bold">
                    {f.i}
                  </div>
                  <h3 className="mt-4 font-display text-base font-semibold">{f.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.d}</p>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Dashboard() {
  const tabs = ["Products", "Payments", "Stock", "APIs", "Marketing", "Reports"];
  const [active, setActive] = useState(0);
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Built for daily operations" title={<>Manage the entire business from <span className="text-ember">one dashboard.</span></>} sub="Add products, upload stock, review payments, schedule offers and monitor orders without switching between tools." />

        <Reveal className="mt-14">
          <div className="glass rounded-3xl p-6 sm:p-10 shadow-3d relative overflow-hidden">
            <div className="absolute inset-0 bg-mesh opacity-40" />
            <div className="relative">
              <div className="flex flex-wrap gap-2">
                {tabs.map((t, i) => (
                  <button
                    key={t}
                    onClick={() => setActive(i)}
                    className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                      active === i
                        ? "bg-ember text-primary-foreground shadow-ember"
                        : "glass text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>

              <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] items-stretch">
                <div className="glass rounded-2xl p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs uppercase tracking-wider text-muted-foreground">Revenue overview</div>
                      <div className="mt-1 font-display text-3xl font-bold text-ember">₹20,901</div>
                    </div>
                    <div className="text-xs rounded-full glass px-3 py-1 font-mono text-ember">+42%</div>
                  </div>
                  <div className="mt-6 flex items-end gap-2 h-40">
                    {[35, 55, 42, 70, 48, 88, 65, 92, 70, 80, 60, 95].map((h, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        whileInView={{ height: `${h}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="flex-1 rounded-md bg-gradient-to-t from-ember/40 to-ember"
                      />
                    ))}
                  </div>
                  <div className="mt-4 flex justify-between font-mono text-[10px] text-muted-foreground">
                    {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].map((m) => (
                      <span key={m}>{m}</span>
                    ))}
                  </div>
                </div>

                <div className="glass rounded-2xl p-6">
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">Recent orders</div>
                  <div className="mt-4 space-y-2.5">
                    {[
                      { p: "Netflix Premium 1M", u: "@amit_r", a: "₹399", s: "Delivered" },
                      { p: "Spotify Family", u: "@nisha", a: "₹599", s: "Delivered" },
                      { p: "ChatGPT Plus", u: "@raj", a: "₹1,999", s: "Delivered" },
                      { p: "Prime Video 1Y", u: "@dev", a: "₹899", s: "Manual" },
                      { p: "Canva Pro", u: "@priya", a: "₹1,299", s: "Delivered" },
                    ].map((o) => (
                      <div key={o.p} className="flex items-center justify-between rounded-lg bg-white/[0.03] border border-white/5 p-3 text-sm">
                        <div>
                          <div className="font-medium">{o.p}</div>
                          <div className="text-xs text-muted-foreground font-mono">{o.u}</div>
                        </div>
                        <div className="text-right">
                          <div className="text-ember font-semibold">{o.a}</div>
                          <div className="text-[10px] text-muted-foreground">{o.s}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Pricing() {
  const plans = [
    {
      badge: "Hosting included",
      name: "Rental plan",
      price: "₹1,499",
      per: "/ month",
      desc: "Best for a quick, low-cost launch.",
      provide: ["Domain", "Bot Token", "Branding"],
      features: ["Website + Bot + Mini App", "Admin dashboard", "Managed hosting", "Core maintenance"],
      cta: "Choose rental",
      accent: false,
    },
    {
      badge: "Installed on your Railway",
      name: "One-time installation",
      price: "₹19,999",
      per: "one time",
      desc: "Your infrastructure with one year of support.",
      provide: ["Domain", "Railway", "Bot Token"],
      features: ["Complete installation", "Branding and payment setup", "One-year support", "Updates and bug fixes for one year"],
      cta: "Choose installation",
      accent: true,
    },
  ];
  return (
    <section id="pricing" className="relative py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Clear pricing" title={<>Choose the plan that fits your <span className="text-ember">business</span></>} sub="Both plans include a website, Telegram Bot and Mini App." />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {plans.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.1}>
              <div className={`relative h-full rounded-3xl p-8 sm:p-10 shadow-3d overflow-hidden ${
                p.accent ? "bg-ember text-primary-foreground" : "glass"
              }`}>
                {p.accent && (
                  <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/20 blur-3xl" />
                )}
                <div className="relative">
                  <div className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-mono uppercase tracking-wider ${
                    p.accent ? "bg-black/20" : "glass"
                  }`}>
                    {p.badge}
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-semibold">{p.name}</h3>
                  <p className={`mt-2 text-sm ${p.accent ? "text-black/70" : "text-muted-foreground"}`}>{p.desc}</p>

                  <div className="mt-6 flex items-baseline gap-2">
                    <span className="font-display text-5xl font-bold">{p.price}</span>
                    <span className={p.accent ? "text-black/70" : "text-muted-foreground"}>{p.per}</span>
                  </div>

                  <div className={`mt-6 text-xs uppercase tracking-wider ${p.accent ? "text-black/70" : "text-muted-foreground"}`}>You provide</div>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {p.provide.map((x) => (
                      <span key={x} className={`rounded-full px-3 py-1 text-xs font-medium ${
                        p.accent ? "bg-black/15" : "bg-white/[0.06] border border-white/10"
                      }`}>{x}</span>
                    ))}
                  </div>

                  <ul className="mt-8 space-y-3">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm">
                        <span className={`mt-0.5 flex h-5 w-5 items-center justify-center rounded-full text-[10px] ${
                          p.accent ? "bg-black/20" : "bg-ember/20 text-ember border border-primary/30"
                        }`}>✓</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={WA_LINK}
                    className={`mt-10 inline-flex items-center justify-center gap-2 w-full rounded-full px-6 py-4 text-sm font-semibold transition-all hover:scale-[1.02] ${
                      p.accent
                        ? "bg-primary-foreground text-ember"
                        : "bg-ember text-primary-foreground shadow-ember"
                    }`}
                  >
                    {p.cta} <span>→</span>
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    { q: "What is included?", a: "A branded Telegram Bot, Mini App, website and admin dashboard connected to the same database." },
    { q: "What do I need for the rental plan?", a: "A domain, your Telegram Bot Token and your branding assets. We host and maintain everything else." },
    { q: "What do I need for one-time installation?", a: "A domain, a Railway account and your Telegram Bot Token. We install and configure the full stack on your infrastructure." },
    { q: "Can customers buy without Telegram?", a: "Yes. The website supports guest checkout and delivers digital products by branded email." },
    { q: "Which payments are supported?", a: "UPI (INR) and USDT / Binance. Payment verification uses Gmail API or IMAP." },
    { q: "How long does setup take?", a: "Most stores are live within 2–5 working days once branding and payment details are ready." },
  ];
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="FAQs" title={<>Quick <span className="text-ember">answers</span></>} sub="Important information before you start." />

        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 0.05}>
              <div className="glass rounded-2xl overflow-hidden">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-display font-semibold">{f.q}</span>
                  <span className={`h-8 w-8 rounded-full bg-ember/15 border border-primary/30 flex items-center justify-center text-ember transition-transform ${
                    open === i ? "rotate-45" : ""
                  }`}>+</span>
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: open === i ? "auto" : 0, opacity: open === i ? 1 : 0 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 text-muted-foreground leading-relaxed">{f.a}</div>
                </motion.div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-ember p-10 sm:p-16 shadow-ember text-primary-foreground">
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/25 blur-3xl" />
            <div className="absolute -left-10 -bottom-10 h-56 w-56 rounded-full bg-black/20 blur-3xl" />
            <div className="relative">
              <div className="font-mono text-xs uppercase tracking-[0.2em] opacity-70">Ready to launch?</div>
              <h2 className="mt-4 font-display text-4xl sm:text-6xl font-bold tracking-tight max-w-2xl">
                Build your automated digital store.
              </h2>
              <p className="mt-4 max-w-xl text-black/70">
                Contact us on WhatsApp or Telegram to choose the right plan.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={WA_LINK} className="inline-flex items-center gap-2 rounded-full bg-primary-foreground px-6 py-3.5 text-sm font-semibold text-ember hover:scale-105 transition-transform">
                  WhatsApp us <span>↗</span>
                </a>
                <a href="https://t.me/smm24x7_admin" className="inline-flex items-center gap-2 rounded-full bg-black/20 backdrop-blur px-6 py-3.5 text-sm font-semibold hover:bg-black/30 transition-colors">
                  Telegram chat <span>↗</span>
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-8 md:grid-cols-4 text-sm">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2.5">
            <div className="h-9 w-9 rounded-xl bg-ember shadow-ember flex items-center justify-center font-display font-bold text-primary-foreground">A</div>
            <div className="font-display font-semibold text-lg">Auto<span className="text-ember">Store24</span></div>
          </div>
          <p className="mt-4 max-w-sm text-muted-foreground">
            Telegram commerce automation. Bot · Mini App · Website — connected to one dashboard.
          </p>
        </div>
        <div>
          <div className="font-display font-semibold">Product</div>
          <ul className="mt-3 space-y-2 text-muted-foreground">
            <li><a href="#how" className="hover:text-foreground">How it works</a></li>
            <li><a href="#features" className="hover:text-foreground">Features</a></li>
            <li><a href="#pricing" className="hover:text-foreground">Pricing</a></li>
          </ul>
        </div>
        <div>
          <div className="font-display font-semibold">Contact</div>
          <ul className="mt-3 space-y-2 text-muted-foreground">
            <li><a href={WA_LINK} className="hover:text-foreground">WhatsApp</a></li>
            <li><a href="https://t.me/smm24x7_admin" className="hover:text-foreground">Telegram</a></li>
          </ul>
        </div>
      </div>
      <div className="mt-10 border-t border-white/5 pt-6 text-center text-xs text-muted-foreground font-mono">
        © {new Date().getFullYear()} AutoStore24. All rights reserved.
      </div>
    </footer>
  );
}

function Showcase() {
  const shots = [
    { src: botMiniApp.url, label: "Telegram Bot + Mini App", tag: "Customer view" },
    { src: botSales.url, label: "Sales report inside chat", tag: "Owner view" },
    { src: botAdmin.url, label: "Admin panel in Telegram", tag: "Operator view" },
  ];
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Real mockups"
          title={<>Everything runs inside <span className="text-ember">Telegram.</span></>}
          sub="Actual screens from a live store — the customer chat, the admin panel and the daily sales report."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {shots.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.1}>
              <TiltCard className="h-full">
                <div className="glass rounded-3xl p-4 shadow-3d h-full">
                  <div className="rounded-2xl overflow-hidden bg-black/40 border border-white/5">
                    <img src={s.src} alt={s.label} className="block w-full h-auto" loading="lazy" />
                  </div>
                  <div className="flex items-center justify-between px-2 pt-4">
                    <div>
                      <div className="font-mono text-[10px] uppercase tracking-wider text-ember">{s.tag}</div>
                      <div className="mt-1 font-display font-semibold">{s.label}</div>
                    </div>
                    <span className="h-8 w-8 rounded-full bg-ember/15 border border-primary/30 flex items-center justify-center text-ember text-sm">↗</span>
                  </div>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function AdminShowcase() {
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Website + Admin"
          title={<>A storefront your customers <span className="text-ember">actually enjoy.</span></>}
          sub="A branded public website, plus a full admin panel to control themes, content, SEO and payments."
        />
        <div className="mt-14 grid gap-6 lg:grid-cols-2 items-start">
          <Reveal>
            <TiltCard>
              <BrowserFrame src={website.url} alt="OTT24x7 website hero" label="ott24x7.com" />
            </TiltCard>
            <div className="mt-4 px-2">
              <div className="font-mono text-[10px] uppercase tracking-wider text-ember">Public website</div>
              <div className="mt-1 font-display text-lg font-semibold">Search, browse and buy — no Telegram required.</div>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <TiltCard>
              <BrowserFrame src={adminTheme.url} alt="Admin theme picker" label="admin · App Theme" />
            </TiltCard>
            <div className="mt-4 px-2">
              <div className="font-mono text-[10px] uppercase tracking-wider text-ember">Admin panel</div>
              <div className="mt-1 font-display text-lg font-semibold">Themes, branding and content in one place.</div>
            </div>
          </Reveal>
          <Reveal delay={0.2} className="lg:col-span-2">
            <TiltCard>
              <BrowserFrame src={adminBlog.url} alt="Admin blog editor" label="admin · Blog & SEO" />
            </TiltCard>
            <div className="mt-4 px-2">
              <div className="font-mono text-[10px] uppercase tracking-wider text-ember">Content + SEO</div>
              <div className="mt-1 font-display text-lg font-semibold">Publish articles, manage redirects and SEO from the dashboard.</div>
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-16">
          <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_auto] items-center glass rounded-3xl p-6 sm:p-8 shadow-3d">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-wider text-ember">Mini App preview</div>
              <h3 className="mt-2 font-display text-2xl font-semibold">The same catalog, inside Telegram.</h3>
              <p className="mt-2 text-muted-foreground max-w-xl">
                Customers open your store from the bot menu and browse products with instant search, wallet balance and one-tap checkout.
              </p>
            </div>
            <div className="w-64 mx-auto md:mx-0">
              <PhoneFrame src={botMiniApp.url} alt="Telegram Mini App storefront" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

