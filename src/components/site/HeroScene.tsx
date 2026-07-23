import { motion } from "framer-motion";
import botMiniApp from "@/assets/bot-miniapp.png.asset.json";
import website from "@/assets/website-hero.png.asset.json";
import adminTheme from "@/assets/admin-theme.png.asset.json";

/**
 * Real-mockup ecosystem: laptop (website), phone (mini app), floating bot chat.
 */
export function HeroScene() {
  return (
    <div className="relative aspect-[5/4] w-full [perspective:1800px]">
      <div className="absolute inset-0 bg-mesh opacity-80 blur-2xl" />
      <div className="absolute left-1/2 top-1/2 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-ember opacity-20 blur-3xl animate-pulse-glow" />

      <motion.div
        initial={{ opacity: 0, rotateX: 25, y: 60 }}
        animate={{ opacity: 1, rotateX: 0, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative h-full w-full [transform-style:preserve-3d]"
        style={{ transform: "rotateX(6deg) rotateY(-12deg)" }}
      >
        {/* Laptop with website */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[4%] top-[16%] w-[70%] [transform-style:preserve-3d]"
        >
          <LaptopFrame src={website.url} alt="OTT24x7 website" />
        </motion.div>

        {/* Bot chat screenshot floating */}
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
          className="absolute right-[2%] top-[4%] w-[40%] [transform-style:preserve-3d]"
          style={{ transform: "translateZ(90px) rotateY(-8deg) rotateZ(2deg)" }}
        >
          <BrowserFrame src={adminTheme.url} alt="Admin theme panel" label="admin.ott24x7.com" />
        </motion.div>

        {/* Phone / mini app */}
        <motion.div
          animate={{ y: [0, -14, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
          className="absolute right-[6%] bottom-[-2%] w-[26%] [transform-style:preserve-3d]"
          style={{ transform: "translateZ(160px) rotateY(-10deg) rotateZ(-3deg)" }}
        >
          <PhoneFrame src={botMiniApp.url} alt="Telegram bot and mini app" />
        </motion.div>

        <FloatBadge className="left-[2%] top-[6%]" delay={0}>⚡ Auto-delivery</FloatBadge>
        <FloatBadge className="left-[38%] top-[2%]" delay={0.6}>₹ UPI + USDT</FloatBadge>
        <FloatBadge className="left-[6%] bottom-[6%]" delay={1.2}>◎ One catalog</FloatBadge>
      </motion.div>
    </div>
  );
}

function FloatBadge({ children, className, delay }: { children: React.ReactNode; className?: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.8 + delay * 0.2, duration: 0.6 }}
      className={`absolute glass rounded-full px-3 py-1.5 text-xs font-medium shadow-3d animate-float-slow ${className}`}
      style={{ animationDelay: `${delay}s`, transform: "translateZ(200px)" }}
    >
      {children}
    </motion.div>
  );
}

export function LaptopFrame({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative">
      <div className="rounded-t-2xl bg-gradient-to-b from-neutral-800 to-neutral-900 p-2.5 border border-white/10 shadow-3d">
        <div className="rounded-lg overflow-hidden bg-black border border-white/5">
          <div className="flex items-center gap-1.5 bg-neutral-900 px-3 py-1.5">
            <span className="h-2 w-2 rounded-full bg-red-400/70" />
            <span className="h-2 w-2 rounded-full bg-yellow-400/70" />
            <span className="h-2 w-2 rounded-full bg-green-400/70" />
          </div>
          <img src={src} alt={alt} className="block w-full h-auto" loading="lazy" />
        </div>
      </div>
      {/* base */}
      <div className="mx-auto h-2 w-[108%] -translate-x-[3.7%] rounded-b-2xl bg-gradient-to-b from-neutral-700 to-neutral-900 shadow-3d" />
      <div className="mx-auto mt-0.5 h-1 w-[40%] rounded-full bg-neutral-800" />
    </div>
  );
}

export function BrowserFrame({ src, alt, label }: { src: string; alt: string; label?: string }) {
  return (
    <div className="glass rounded-xl overflow-hidden shadow-3d border border-white/10">
      <div className="flex items-center gap-2 bg-black/40 px-3 py-2 border-b border-white/5">
        <div className="flex gap-1">
          <span className="h-2 w-2 rounded-full bg-red-400/70" />
          <span className="h-2 w-2 rounded-full bg-yellow-400/70" />
          <span className="h-2 w-2 rounded-full bg-green-400/70" />
        </div>
        <div className="ml-2 rounded-md bg-white/5 px-2 py-0.5 text-[9px] font-mono text-muted-foreground">
          {label ?? "preview"}
        </div>
      </div>
      <img src={src} alt={alt} className="block w-full h-auto" loading="lazy" />
    </div>
  );
}

export function PhoneFrame({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative rounded-[2rem] bg-gradient-to-b from-neutral-800 to-black p-1.5 shadow-3d border border-white/10">
      <div className="absolute left-1/2 top-1.5 z-10 h-4 w-16 -translate-x-1/2 rounded-b-2xl bg-black" />
      <div className="rounded-[1.6rem] overflow-hidden bg-black">
        <img src={src} alt={alt} className="block w-full h-auto" loading="lazy" />
      </div>
    </div>
  );
}
