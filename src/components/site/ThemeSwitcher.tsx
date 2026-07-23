import { useEffect, useState } from "react";

type Theme = "ember" | "aurora" | "dark";

const THEMES: { id: Theme; label: string; swatches: string[] }[] = [
  { id: "ember", label: "Ember", swatches: ["#f59e0b", "#ef4444"] },
  { id: "aurora", label: "Midnight Aurora", swatches: ["#7c5cff", "#22d3ee"] },
  { id: "dark", label: "Dark", swatches: ["#1e1b2e", "#7c5cff"] },
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
    <div className="fixed bottom-4 left-4 z-[60] flex items-center gap-1.5 rounded-full glass-strong px-2 py-1.5">
      {THEMES.map((t) => {
        const active = t.id === theme;
        return (
          <button
            key={t.id}
            onClick={() => pick(t.id)}
            aria-label={`Switch to ${t.label} theme`}
            aria-pressed={active}
            title={t.label}
            className={`group flex items-center gap-2 px-3 py-1.5 text-xs font-medium ${
              active ? "skeuo-primary" : "skeuo text-foreground/80"
            }`}
          >
            <span
              className="h-3.5 w-3.5 rounded-full ring-1 ring-white/50"
              style={{
                background: `linear-gradient(135deg, ${t.swatches[0]}, ${t.swatches[1]})`,
                boxShadow: `inset 0 1px 0 0 rgba(255,255,255,0.6), 0 1px 2px rgba(0,0,0,0.2)`,
              }}
            />
            <span className={`${active ? "inline" : "hidden sm:inline"}`}>{t.label.split(" ")[0]}</span>
          </button>
        );
      })}
    </div>
  );
}

