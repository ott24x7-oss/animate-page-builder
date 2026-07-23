import { motion } from "framer-motion";
import botMiniApp from "@/assets/bot-miniapp.png.asset.json";
import website from "@/assets/website-hero.png.asset.json";
import adminTheme from "@/assets/admin-theme.png.asset.json";

/**
 * Real-mockup ecosystem: laptop (website), phone (mini app), floating admin panel.
 */
export function HeroScene() {
  return (
    <div className="relative aspect-[5/4] w-full sm:[perspective:1800px]">
      <div className="absolute inset-0 bg-mesh opacity-70 sm:blur-2xl" />
      <div className="hidden sm:block absolute left-1/2 top-1/2 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-ember opacity-25 blur-3xl animate-pulse-glow" />


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
    <div className="relative [transform-style:preserve-3d]">
      {/* Ambient contact shadow — heavier on desktop only */}
      <div
        aria-hidden
        className="absolute -bottom-6 left-1/2 h-8 w-[92%] -translate-x-1/2 rounded-[50%] bg-black/60 blur-md sm:blur-2xl opacity-70"
      />
      {/* Lid / bezel */}
      <div
        className="relative rounded-t-[14px] sm:rounded-t-[18px] p-[6px] sm:p-[8px] border border-white/10 ring-1 ring-black/40"
        style={{
          background:
            "linear-gradient(160deg, #2a2a30 0%, #16161a 45%, #0a0a0d 100%)",
          boxShadow:
            "0 20px 40px -20px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.08)",
        }}
      >
        <div className="relative rounded-[8px] sm:rounded-[12px] overflow-hidden bg-black ring-1 ring-white/5">
          {/* Camera + sensor */}
          <div className="absolute left-1/2 top-0 z-20 flex h-[6px] w-16 -translate-x-1/2 items-center justify-center rounded-b-[6px] bg-black">
            <span className="h-[3px] w-[3px] rounded-full bg-neutral-700 ring-1 ring-white/10" />
          </div>
          <img src={src} alt={alt} className="block w-full h-auto" loading="lazy" decoding="async" />
          {/* Screen gloss — desktop only (expensive gradient overlay) */}
          <div className="pointer-events-none absolute inset-0 hidden sm:block bg-[linear-gradient(115deg,rgba(255,255,255,0.10)_0%,rgba(255,255,255,0)_28%,rgba(255,255,255,0)_72%,rgba(255,255,255,0.04)_100%)]" />
          {/* Inner vignette — desktop only */}
          <div className="pointer-events-none absolute inset-0 hidden sm:block shadow-[inset_0_0_60px_rgba(0,0,0,0.55)]" />
        </div>
      </div>
      {/* Hinge / deck */}
      <div
        className="relative mx-auto h-[8px] sm:h-[10px] w-[104%] -translate-x-[2%] rounded-b-[14px] border-x border-b border-white/5"
        style={{
          background:
            "linear-gradient(180deg,#1e1e22 0%,#101013 55%,#050506 100%)",
          boxShadow:
            "0 12px 20px -10px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.06)",
        }}
      >
        <div className="mx-auto mt-[2px] h-[2px] w-[28%] rounded-full bg-black/70 ring-1 ring-white/5" />
      </div>
    </div>
  );
}

export function BrowserFrame({ src, alt, label }: { src: string; alt: string; label?: string }) {
  return (
    <div
      className="relative rounded-lg sm:rounded-xl overflow-hidden border border-white/10 ring-1 ring-black/50 sm:backdrop-blur-md"
      style={{
        background: "linear-gradient(180deg,rgba(20,20,24,0.95),rgba(8,8,10,0.95))",
        boxShadow:
          "0 20px 40px -25px rgba(0,0,0,0.75), inset 0 1px 0 rgba(255,255,255,0.06)",
      }}
    >
      <div className="flex items-center gap-2 bg-black/60 px-2 py-1.5 sm:px-3 sm:py-2 border-b border-white/5">
        <div className="flex gap-1">
          <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-red-400/80" />
          <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-yellow-400/80" />
          <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-green-400/80" />
        </div>
        <div className="ml-1 sm:ml-2 flex-1 truncate rounded-md bg-white/[0.06] ring-1 ring-white/5 px-1.5 py-0.5 text-[8px] sm:text-[9px] font-mono text-muted-foreground">
          {label ?? "preview"}
        </div>
      </div>
      <div className="relative">
        <img src={src} alt={alt} className="block w-full h-auto" loading="lazy" decoding="async" />
        <div className="pointer-events-none absolute inset-0 hidden sm:block bg-[linear-gradient(120deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0)_30%,rgba(255,255,255,0)_70%,rgba(255,255,255,0.03)_100%)]" />
        <div className="pointer-events-none absolute inset-0 hidden sm:block shadow-[inset_0_0_40px_rgba(0,0,0,0.45)]" />
      </div>
    </div>
  );
}

export function PhoneFrame({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative [transform-style:preserve-3d]">
      {/* Contact shadow */}
      <div
        aria-hidden
        className="absolute -bottom-4 left-1/2 h-6 w-[85%] -translate-x-1/2 rounded-[50%] bg-black/70 blur-2xl opacity-70"
      />
      {/* Side buttons */}
      <span className="absolute -left-[2px] top-[22%] h-6 w-[2px] rounded-l bg-neutral-800" />
      <span className="absolute -left-[2px] top-[34%] h-10 w-[2px] rounded-l bg-neutral-800" />
      <span className="absolute -right-[2px] top-[26%] h-14 w-[2px] rounded-r bg-neutral-800" />
      {/* Chassis */}
      <div
        className="relative rounded-[1.6rem] sm:rounded-[2.1rem] p-[3px] sm:p-[4px] border border-white/10"
        style={{
          background:
            "linear-gradient(150deg,#3a3a42 0%,#1a1a1e 40%,#050506 100%)",
          boxShadow:
            "0 40px 60px -25px rgba(0,0,0,0.8), 0 12px 24px -10px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.10), inset 0 -1px 0 rgba(255,255,255,0.04)",
        }}
      >
        <div className="relative rounded-[1.45rem] sm:rounded-[1.95rem] bg-black p-[3px] ring-1 ring-white/5">
          {/* Dynamic island */}
          <div className="absolute left-1/2 top-1.5 z-20 h-3.5 w-16 -translate-x-1/2 rounded-full bg-black ring-1 ring-white/10 shadow-[inset_0_0_6px_rgba(255,255,255,0.05)]">
            <span className="absolute right-2 top-1/2 h-1 w-1 -translate-y-1/2 rounded-full bg-neutral-800 ring-1 ring-white/10" />
          </div>
          <div className="relative rounded-[1.25rem] sm:rounded-[1.7rem] overflow-hidden bg-black">
            <img src={src} alt={alt} className="block w-full h-auto" loading="lazy" />
            {/* Screen gloss */}
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(125deg,rgba(255,255,255,0.14)_0%,rgba(255,255,255,0)_28%,rgba(255,255,255,0)_72%,rgba(255,255,255,0.06)_100%)]" />
            {/* Edge highlight */}
            <div className="pointer-events-none absolute inset-0 rounded-[1.25rem] sm:rounded-[1.7rem] ring-1 ring-inset ring-white/10" />
            <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_50px_rgba(0,0,0,0.55)]" />
          </div>
        </div>
      </div>
    </div>
  );
}
