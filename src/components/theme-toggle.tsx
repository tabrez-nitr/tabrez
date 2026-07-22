"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <button
        className="n-icon-btn"
        aria-label="Toggle theme"
        type="button"
      >
        <div className="w-4 h-4" />
      </button>
    );
  }

  const isDark = theme === "dark";

  const handleToggle = () => {
    try {
      const audio = new Audio("/nothing_os_ringtone2.mp3");
      audio.play().catch((err) => console.error("Error playing sound:", err));
    } catch (err) {
      console.error("Audio not supported:", err);
    }
    
    if (document.startViewTransition) {
      document.startViewTransition(() => {
        setTheme(isDark ? "light" : "dark");
      });
    } else {
      setTheme(isDark ? "light" : "dark");
    }
  };

  return (
    <button
      onClick={handleToggle}
      className="n-icon-btn group"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      type="button"
      title={isDark ? "Light mode" : "Dark mode"}
    >
      {isDark ? (
        <i className="ri-sun-fill text-[15px]" />
      ) : (
        <i className="ri-moon-fill text-[15px]" />
      )}
    </button>
  );
}
