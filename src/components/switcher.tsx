'use client';

import { Button } from '@/components/ui/button';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

export function Switcher() {
  const { setTheme } = useTheme();

  return (
    <div>
      <Button
        suppressHydrationWarning
        variant="ghost"
        size="icon"
        onClick={() => setTheme('light')}
      >
        <Sun size={16} />
      </Button>
      <Button
        suppressHydrationWarning
        variant="ghost"
        size="icon"
        onClick={() => setTheme('dark')}
      >
        <Moon size={16} />
      </Button>
    </div>
  );
}
