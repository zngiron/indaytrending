import Link from 'next/link';
import Image from 'next/image';

import { Navigation } from '@/components/navigation';
import { Switcher } from '@/components/switcher';
import { cn } from '@/library/utilities';

import { getCategories } from '@/data/categories';

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
        <Navigation categories={categories} />
        <Link href="/" className="flex items-center">
          <Image
            className="shrink-0 w-10 h-10 rounded-full"
            src="/static/indaytrending-icon.png"
            width={40}
            height={40}
            alt="Inday Trending"
            draggable={false}
            priority
          />
          <Image
            className="dark:hidden"
            src="/static/indaytrending-logo-light.svg"
            width={100}
            height={40}
            alt="Inday Trending"
            draggable={false}
            priority
          />
          <Image
            className="hidden dark:inline"
            src="/static/indaytrending-logo-dark.svg"
            width={100}
            height={40}
            alt="Inday Trending"
            draggable={false}
            priority
          />
        </Link>
        <Switcher />
      </div>
    </header>
  );
}
