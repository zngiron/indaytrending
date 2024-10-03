import type { Category } from '@/data/categories';

import Link from 'next/link';

import { cn } from '@/library/utilities';

interface PostCategoryProps {
  category: Category;
}

export function PostCategory({ category }: PostCategoryProps) {
  return (
    <Link
      href={`/${category.slug}`}
      className={cn(
        'px-3 py-1 rounded-full',
        'font-semibold text-xs text-white',
        'bg-slate-950/70 backdrop-blur-lg',
        'transition duration-300',
        'hover:bg-white hover:text-slate-900',
        'dark:bg-white dark:text-slate-900 dark:hover:bg-slate-950/70 dark:hover:text-white',
      )}
    >
      {category.name}
    </Link>
  );
}
