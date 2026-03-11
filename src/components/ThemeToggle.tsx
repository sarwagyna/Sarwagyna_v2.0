import { useTheme } from '../context/ThemeContext';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';
  return (
    <button
      type="button"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      aria-pressed={isDark}
      onClick={toggleTheme}
      className="inline-flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 border border-black/10 dark:border-white/20 bg-[rgba(243,243,246,0.88)] text-[var(--color-text)] dark:bg-white/10 dark:text-white shadow-[0_2px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_40px_rgba(0,0,0,0.10)] hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-[rgba(232,98,26,0.6)]"
    >
      {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
    </button>
  );
}
