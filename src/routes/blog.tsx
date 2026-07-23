import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — AutoStore24" },
      { name: "description", content: "Playbooks and updates on Telegram commerce, automated delivery and digital product businesses." },
      { property: "og:title", content: "Blog — AutoStore24" },
      { property: "og:description", content: "Playbooks on Telegram commerce and automated delivery." },
    ],
  }),
  component: Blog,
});

const posts = [
  { t: "Launching a Telegram digital store in a weekend", d: "A minimal path from idea to first automated order.", tag: "Playbook" },
  { t: "UPI vs USDT: which payment mix works best?", d: "Practical trade-offs for Indian and global sellers.", tag: "Payments" },
  { t: "Reseller APIs done right", d: "How to give downstream sellers stock without losing control.", tag: "Growth" },
  { t: "Guest checkout for non-Telegram buyers", d: "Capture demand outside chat with a branded email flow.", tag: "Conversion" },
];

function Blog() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 grid-bg opacity-40" />
      <Nav />
      <main className="pt-36 pb-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="font-mono text-xs uppercase tracking-[0.2em] text-ember">Journal</div>
          <h1 className="mt-4 font-display text-5xl sm:text-6xl font-bold">Notes on <span className="text-ember">automated commerce.</span></h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">Playbooks, product updates and lessons from operating stores at 24×7 scale.</p>

          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {posts.map((p) => (
              <article key={p.t} className="glass rounded-2xl p-6 shadow-3d group hover:border-primary/30 transition-colors">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-ember">{p.tag}</span>
                  <span className="text-muted-foreground text-xs">Coming soon</span>
                </div>
                <h3 className="mt-3 font-display text-xl font-semibold group-hover:text-ember transition-colors">{p.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.d}</p>
              </article>
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
