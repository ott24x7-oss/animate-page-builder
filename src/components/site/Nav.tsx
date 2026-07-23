import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const links = [
  { href: "#how", label: "How it works" },
  { href: "#features", label: "Features" },
  { href: "#pricing", label: "Pricing" },
  { href: "/blog", label: "Blog" },
  { href: "/demo", label: "Demo" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 20);
    on();
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8`}>
        <div
          className={`flex items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-500 ${
            scrolled ? "glass shadow-3d" : ""
          }`}
        >
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="relative">
              <div className="h-9 w-9 rounded-xl bg-ember shadow-ember flex items-center justify-center font-display font-bold text-primary-foreground text-lg transition-transform group-hover:scale-110 group-hover:-rotate-6">
                A
              </div>
              <div className="absolute inset-0 rounded-xl bg-ember opacity-40 blur-xl animate-pulse-glow -z-10" />
            </div>
            <div className="font-display font-semibold text-lg tracking-tight">
              Auto<span className="text-ember">Store24</span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors relative group"
              >
                {l.label}
                <span className="absolute inset-x-3 -bottom-0.5 h-px bg-ember scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <div className="hidden sm:flex items-center rounded-full glass px-1 py-1 text-xs font-mono">
              <button className="px-2.5 py-1 rounded-full bg-ember text-primary-foreground font-semibold">EN</button>
              <button className="px-2.5 py-1 text-muted-foreground">हिं</button>
            </div>
            <a
              href="#pricing"
              className="glass rounded-full px-4 py-2 text-sm font-medium hover:bg-white/[0.08] transition-colors"
            >
              See demo ↗
            </a>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
