'use client';

import React, { useEffect, useState } from 'react';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

export function ThemeToggle({ isDropDown = false }: { isDropDown?: boolean }) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // Or a loader, or whatever fallback you prefer
  }

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-1 w-7 h-7 rounded-md hover:bg-accent transition-colors duration-200"
    >
      {theme === 'light' ? (
        <Moon size={20} className="stroke-muted-foreground" />
      ) : (
        <Sun size={20} className="stroke-muted-foreground" />
      )}
    </button>
  );
}
