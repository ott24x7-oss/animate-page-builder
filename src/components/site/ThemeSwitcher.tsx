import { useEffect, useState } from "react";

type Theme = "ember" | "aurora";

const THEMES: { id: Theme; label: string; swatches: string[] }[] = [
  { id: "ember", label: "Ember", swatches: ["#f59e0b", "#ef4444"] },
  { id: "aurora", label: "Midnight Aurora", swatches: ["#7c5cff", "#22d3ee"] },
];

const STORAGE_KEY = "as24-theme";

function applyTheme(t: Theme) {
  if (typeof document === "undefined") return;
  document.documentElement.setAttribute("data-theme", t);
}

export function ThemeSwitcher() {
  const [theme, setTheme] = useState<Theme>("ember");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = (typeof window !== "undefined" && (localStorage.getItem(STORAGE_KEY) as Theme)) || "ember";
    setTheme(saved);
    applyTheme(saved);
    setMounted(true);
  }, []);

  const pick = (t: Theme) => {
    setTheme(t);
    applyTheme(t);
    try {
      localStorage.setItem(STORAGE_KEY, t);
    } catch {}
  };

  if (!mounted) return null;

  return (
    <div className="fixed bottom-4 left-4 z-[60] flex items-center gap-1 rounded-full glass px-1.5 py-1.5 shadow-3d">
      {THEMES.map((t) => {
        const active = t.id === theme;
        return (
          <button
            key={t.id}
            onClick={() => pick(t.id)}
            aria-label={`Switch to ${t.label} theme`}
            title={t.label}
            className={`group flex items-center gap-2 rounded-full px-2 py-1.5 text-xs font-medium transition-all ${
              active ? "bg-white/[0.08] text-foreground" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <span
              className="h-4 w-4 rounded-full ring-1 ring-white/20"
              style={{
                background: `linear-gradient(135deg, ${t.swatches[0]}, ${t.swatches[1]})`,
                boxShadow: active ? `0 0 12px ${t.swatches[0]}80` : undefined,
              }}
            />
            <span className={`${active ? "inline" : "hidden sm:inline"}`}>{t.label.split(" ")[0]}</span>
          </button>
        );
      })}
    </div>
  );
}
