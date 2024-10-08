import Link from 'next/link';

import { cn } from '@/library/utilities';

interface PostCategoryProps {
  slug: string;
  name: string;
}

export function PostCategory({ slug, name }: PostCategoryProps) {
  if (slug === 'stories') return null;

  return (
    <Link
      href={`/${slug}`}
      className={cn(
        'px-3 py-1 border border-transparent rounded-full',
        'font-semibold text-xs text-white',
        'bg-slate-900',
        'pointer-events-auto',
        'hover:bg-white hover:text-slate-900',
        'dark:border-white dark:bg-transparent',
        'dark:hover:border-slate-900 dark:hover:bg-slate-900 dark:hover:text-white',
      )}
    >
      {name}
    </Link>
  );
}
