import Link from 'next/link';
import Image from 'next/image';

import { Navigation } from '@/components/navigation';
import { getCategories } from '@/data/categories';

import { cn } from '@/library/utilities';

export async function Header() {
  const categories = await getCategories();

  return (
    <header className={cn(
      'sticky top-0 z-50',
      'bg-white/70 backdrop-blur-md',
      'dark:bg-slate-950/70 dark:text-white',
    )}
    >
      <div className={cn(
        'container',
        'flex items-center justify-between h-16',
      )}
      >
        <Link href="/" className="flex items-center gap-2">
          <Image
            className="shrink-0 w-10 h-10 rounded-full"
            src="/static/indaytrending-icon.png"
            width={40}
            height={40}
            alt="Inday Trending"
            draggable={false}
            priority
          />
          <span className="font-semibold text-sm whitespace-nowrap">Inday Trending</span>
        </Link>
        <Navigation categories={categories} />
      </div>
    </header>
  );
}
