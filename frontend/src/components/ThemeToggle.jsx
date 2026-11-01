import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

const ThemeToggle = ({ scrolled = false }) => {
  const { theme, toggleTheme } = useTheme();
  const dark = theme === "dark";
  return (
    <button
      type="button"
      data-testid="theme-toggle-button"
      onClick={toggleTheme}
      aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
      className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-all duration-300 hover:scale-105 ${
        scrolled
          ? "border-appborder bg-surface text-strong"
          : "border-white/25 bg-white/10 text-[#F4EFE6]"
      }`}
    >
      {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
};

export default ThemeToggle;
