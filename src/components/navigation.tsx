'use client';

import type { Categories } from '@/data/categories';

import { useState } from 'react';
import Link from 'next/link';
import {
  Menu,
  Sparkles,
  TrendingUp,
  Users,
  Smile,
  Heart,
  Lightbulb,
  Scale,
  HeartHandshake,
  Sparkle,
  Search,
  BookOpen,
  Trophy,
} from 'lucide-react';

import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { cn } from '@/library/utilities';

interface NavigationProps {
  categories: Categories;
}

function getCategoryIcon(slug: string) {
  const icons = {
    family: Users,
    fun: Smile,
    heartbreaking: Heart,
    inspiring: Lightbulb,
    karma: Scale,
    love: HeartHandshake,
    miracle: Sparkle,
    mystery: Search,
    stories: BookOpen,
    success: Trophy,
  };

  const Component = icons[slug as keyof typeof icons];

  return Component ? <Component size={16} /> : null;
}

export function Navigation({ categories }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <Menu size={16} />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="left"
        className={cn(
          'w-80 p-2 space-y-4 border-none',
          'dark:bg-slate-950 dark:text-white',
        )}
      >
        <SheetTitle className={cn(
          'p-2',
          'font-semibold text-xs uppercase tracking-widest',
          'dark:text-slate-500',
        )}
        >
          Stories
        </SheetTitle>
        <nav className={cn(
          '[&_a]:flex [&_a]:items-center [&_a]:gap-4 [&_a]:p-2 [&_a]:rounded-md',
          'text-sm',
        )}
        >
          <Link
            href="/"
            className={cn(
              'hover:bg-gray-100',
              'dark:hover:bg-slate-900',
            )}
            onClick={() => setIsOpen(false)}
          >
            <Sparkles size={16} />
            <span>New Stories</span>
          </Link>
          <Link
            href="/"
            className={cn(
              'hover:bg-gray-100',
              'dark:hover:bg-slate-900',
            )}
            onClick={() => setIsOpen(false)}
          >
            <TrendingUp size={16} />
            <span>Trending Stories</span>
          </Link>
        </nav>
        <SheetTitle className={cn(
          'p-2',
          'font-semibold text-xs uppercase tracking-widest',
          'dark:text-slate-500',
        )}
        >
          Categories
        </SheetTitle>
        <nav className={cn(
          '[&_a]:flex [&_a]:items-center [&_a]:gap-4 [&_a]:p-2 [&_a]:rounded-md',
          'text-sm',
        )}
        >
          {categories.edges.map(({ node }) => (
            <Link
              key={node.id}
              href={`/${node.slug}`}
              className={cn(
                'hover:bg-gray-100',
                'dark:hover:bg-slate-900',
              )}
              onClick={() => setIsOpen(false)}
            >
              {getCategoryIcon(node.slug)}
              <span>{node.name}</span>
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
