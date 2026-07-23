import { motion } from "framer-motion";
import botMiniApp from "@/assets/bot-miniapp.png.asset.json";
import website from "@/assets/website-hero.png.asset.json";
import adminTheme from "@/assets/admin-theme.png.asset.json";

/**
 * Real-mockup ecosystem: laptop (website), phone (mini app), floating admin panel.
 */
export function HeroScene() {
  return (
    <div className="relative aspect-[5/4] w-full [perspective:1800px]">
      <div className="absolute inset-0 bg-mesh opacity-70 blur-2xl" />
      <div className="absolute left-1/2 top-1/2 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-ember opacity-25 blur-3xl animate-pulse-glow" />

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
          className="absolute left-[2%] top-[14%] w-[72%] [transform-style:preserve-3d]"
        >
          <LaptopFrame src={website.url} alt="OTT24x7 website" />
        </motion.div>

        {/* Admin browser floating */}
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
          className="absolute right-[0%] top-[2%] w-[44%] [transform-style:preserve-3d]"
          style={{ transform: "translateZ(90px) rotateY(-8deg) rotateZ(2deg)" }}
        >
          <BrowserFrame src={adminTheme.url} alt="Admin theme panel" label="admin.ott24x7.com" />
        </motion.div>

        {/* Phone / mini app */}
        <motion.div
          animate={{ y: [0, -14, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
          className="absolute right-[4%] bottom-[-4%] w-[30%] [transform-style:preserve-3d]"
          style={{ transform: "translateZ(160px) rotateY(-10deg) rotateZ(-3deg)" }}
        >
          <PhoneFrame src={botMiniApp.url} alt="Telegram bot and mini app" />
        </motion.div>

        <FloatBadge className="left-[0%] top-[4%]" delay={0}>⚡ Auto-delivery</FloatBadge>
        <FloatBadge className="left-[36%] top-[0%]" delay={0.6}>₹ UPI + USDT</FloatBadge>
        <FloatBadge className="left-[4%] bottom-[4%]" delay={1.2}>◎ One catalog</FloatBadge>
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
      className={`absolute glass rounded-full px-2.5 py-1 text-[10px] sm:px-3 sm:py-1.5 sm:text-xs font-medium shadow-3d animate-float-slow whitespace-nowrap ${className}`}
      style={{ animationDelay: `${delay}s`, transform: "translateZ(200px)" }}
    >
      {children}
    </motion.div>
  );
}

export function LaptopFrame({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative">
      {/* Screen bezel */}
      <div className="rounded-t-xl sm:rounded-t-2xl bg-gradient-to-b from-neutral-700 via-neutral-900 to-black p-1.5 sm:p-2 border border-white/10 shadow-3d">
        <div className="rounded-md sm:rounded-lg overflow-hidden bg-black border border-white/5 relative">
          {/* Camera notch */}
          <div className="absolute left-1/2 top-0 z-10 h-1 w-8 -translate-x-1/2 rounded-b-full bg-neutral-800" />
          <div className="flex items-center gap-1 bg-neutral-950 px-2 py-1 sm:px-3 sm:py-1.5 border-b border-white/5">
            <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-red-400/70" />
            <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-yellow-400/70" />
            <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-green-400/70" />
          </div>
          <img src={src} alt={alt} className="block w-full h-auto" loading="lazy" />
          {/* Screen reflection */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.06] via-transparent to-transparent" />
        </div>
      </div>
      {/* Hinge / base */}
      <div className="mx-auto h-1.5 sm:h-2 w-[108%] -translate-x-[3.7%] rounded-b-2xl bg-gradient-to-b from-neutral-600 via-neutral-800 to-neutral-950 shadow-3d" />
      <div className="mx-auto mt-0.5 h-1 w-[36%] rounded-full bg-gradient-to-b from-neutral-700 to-neutral-900" />
    </div>
  );
}

export function BrowserFrame({ src, alt, label }: { src: string; alt: string; label?: string }) {
  return (
    <div className="glass rounded-lg sm:rounded-xl overflow-hidden shadow-3d border border-white/10 relative">
      <div className="flex items-center gap-2 bg-black/50 px-2 py-1.5 sm:px-3 sm:py-2 border-b border-white/5">
        <div className="flex gap-1">
          <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-red-400/70" />
          <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-yellow-400/70" />
          <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-green-400/70" />
        </div>
        <div className="ml-1 sm:ml-2 rounded-md bg-white/5 px-1.5 py-0.5 text-[8px] sm:text-[9px] font-mono text-muted-foreground truncate">
          {label ?? "preview"}
        </div>
      </div>
      <img src={src} alt={alt} className="block w-full h-auto" loading="lazy" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.05] via-transparent to-transparent" />
    </div>
  );
}

export function PhoneFrame({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative rounded-[1.5rem] sm:rounded-[2rem] bg-gradient-to-b from-neutral-700 via-neutral-900 to-black p-[3px] sm:p-1 shadow-3d border border-white/10">
      <div className="relative rounded-[1.35rem] sm:rounded-[1.8rem] bg-black p-1 border border-white/5">
        <div className="absolute left-1/2 top-1.5 z-10 h-3.5 w-14 -translate-x-1/2 rounded-full bg-black border border-white/10" />
        <div className="rounded-[1.15rem] sm:rounded-[1.55rem] overflow-hidden bg-black relative">
          <img src={src} alt={alt} className="block w-full h-auto" loading="lazy" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.06] via-transparent to-transparent" />
        </div>
      </div>
    </div>
  );
}
