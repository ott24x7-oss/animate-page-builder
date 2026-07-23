import { motion } from "framer-motion";

/**
 * Pure CSS/SVG 3D ecosystem scene — laptop + phone + bot chat panels
 * arranged with perspective transforms. No external libs.
 */
export function HeroScene() {
  return (
    <div className="relative aspect-[5/4] w-full [perspective:1800px]">
      {/* backdrop glow */}
      <div className="absolute inset-0 bg-mesh opacity-80 blur-2xl" />
      <div className="absolute left-1/2 top-1/2 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-ember opacity-20 blur-3xl animate-pulse-glow" />

      <motion.div
        initial={{ opacity: 0, rotateX: 25, y: 60 }}
        animate={{ opacity: 1, rotateX: 0, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative h-full w-full [transform-style:preserve-3d]"
        style={{ transform: "rotateX(8deg) rotateY(-14deg)" }}
      >
        {/* Laptop */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[8%] top-[18%] w-[62%] [transform-style:preserve-3d]"
          style={{ transform: "translateZ(0px)" }}
        >
          <DevicePanel title="Dashboard" variant="laptop" />
        </motion.div>

        {/* Phone (mini app) */}
        <motion.div
          animate={{ y: [0, -14, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
          className="absolute left-[38%] top-[10%] w-[22%] [transform-style:preserve-3d]"
          style={{ transform: "translateZ(120px) rotateY(-8deg)" }}
        >
          <DevicePanel title="Mini App" variant="phone" />
        </motion.div>

        {/* Bot chat card */}
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute left-[62%] top-[38%] w-[36%] [transform-style:preserve-3d]"
          style={{ transform: "translateZ(80px) rotateY(-6deg)" }}
        >
          <DevicePanel title="Bot" variant="chat" />
        </motion.div>

        {/* orbiting badges */}
        <FloatBadge className="left-[4%] top-[10%]" delay={0}>⚡ Auto-delivery</FloatBadge>
        <FloatBadge className="right-[6%] top-[6%]" delay={0.6}>₹ UPI + USDT</FloatBadge>
        <FloatBadge className="left-[2%] bottom-[8%]" delay={1.2}>◎ One catalog</FloatBadge>
        <FloatBadge className="right-[4%] bottom-[14%]" delay={1.8}>✦ 24 × 7</FloatBadge>
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
      style={{ animationDelay: `${delay}s`, transform: "translateZ(180px)" }}
    >
      {children}
    </motion.div>
  );
}

function DevicePanel({ title, variant }: { title: string; variant: "laptop" | "phone" | "chat" }) {
  const isPhone = variant === "phone";
  const isChat = variant === "chat";
  return (
    <div
      className={`glass shadow-3d overflow-hidden ${
        isPhone ? "rounded-[2rem] border-2 border-white/10" : "rounded-2xl"
      }`}
    >
      <div className="flex items-center justify-between border-b border-white/5 bg-black/30 px-3 py-2">
        <div className="flex gap-1.5">
          <span className="h-2 w-2 rounded-full bg-red-400/70" />
          <span className="h-2 w-2 rounded-full bg-yellow-400/70" />
          <span className="h-2 w-2 rounded-full bg-green-400/70" />
        </div>
        <span className="font-mono text-[10px] text-muted-foreground">{title}</span>
        <span className="text-ember text-xs">●</span>
      </div>
      <div className="p-3 space-y-2 bg-gradient-to-br from-white/[0.03] to-transparent">
        {isChat ? (
          <>
            <ChatBubble side="bot">Welcome to OTT24×7 Store</ChatBubble>
            <ChatBubble side="bot">🛒 Premium OTT & Software</ChatBubble>
            <ChatBubble side="me">Show me Netflix plans</ChatBubble>
            <div className="rounded-lg bg-ember/20 border border-primary/30 p-2 text-[10px]">
              <div className="font-semibold">Netflix Premium — 1M</div>
              <div className="text-muted-foreground">₹399 · Instant delivery</div>
            </div>
          </>
        ) : (
          <>
            <div className="flex gap-2">
              <StatCard label="Orders" value="1,248" />
              <StatCard label="Revenue" value="₹20.9k" />
              <StatCard label="Users" value="1,370" />
            </div>
            <div className="rounded-lg bg-black/40 p-2">
              <div className="mb-1.5 flex items-center justify-between">
                <span className="text-[10px] text-muted-foreground">Last 7 days</span>
                <span className="text-[10px] text-ember">+42%</span>
              </div>
              <div className="flex items-end gap-1 h-14">
                {[40, 60, 45, 80, 55, 90, 75].map((h, i) => (
                  <div key={i} className="flex-1 rounded-sm bg-ember" style={{ height: `${h}%`, opacity: 0.4 + h / 200 }} />
                ))}
              </div>
            </div>
            {!isPhone && (
              <div className="space-y-1">
                {["Netflix Premium · ₹399", "Spotify Family · ₹599", "ChatGPT Plus · ₹1,999"].map((t) => (
                  <div key={t} className="flex items-center justify-between rounded-md bg-white/[0.03] px-2 py-1 text-[10px]">
                    <span>{t}</span>
                    <span className="text-ember">●</span>
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

function ChatBubble({ side, children }: { side: "bot" | "me"; children: React.ReactNode }) {
  return (
    <div className={`flex ${side === "me" ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[80%] rounded-lg px-2 py-1 text-[10px] ${
          side === "me" ? "bg-ember text-primary-foreground" : "bg-white/5 border border-white/5"
        }`}
      >
        {children}
      </div>
    </div>
  );
}

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex-1 rounded-lg bg-white/[0.03] border border-white/5 p-2">
      <div className="text-[9px] text-muted-foreground">{label}</div>
      <div className="text-xs font-semibold">{value}</div>
    </div>
  );
}
