'use client';

import Link from 'next/link';
import { useSuspenseQuery } from '@tanstack/react-query';
import { useTheme } from 'next-themes';

import { getCategories } from '@/data/categories';
import { cn } from '@/library/utilities';
import { Button } from '@/components/ui/button';
import {
  Menu,
  Moon,
  Sun,
} from 'lucide-react';
import {
  Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger,
} from '@/components/ui/sheet';

export function Navigation() {
  const { setTheme } = useTheme();

  const { data: categories } = useSuspenseQuery({
    queryKey: ['categories'],
    queryFn: async () => getCategories(),
  });

  return (
    <nav className="flex items-center gap-2">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
            <Menu size={16} />
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle>
              Categories
            </SheetTitle>
          </SheetHeader>
          <div className="flex flex-col gap-2">
            {categories.edges.map(({ node }) => (
              <Link
                key={node.slug}
                href={`/${node.slug}`}
                className={cn(
                  'text-sm',
                  'px-4 py-2',
                )}
              >
                {node.name}
              </Link>
            ))}
          </div>
        </SheetContent>
      </Sheet>
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
    </nav>
  );
}
