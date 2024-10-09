import Link from 'next/link';

import { cn } from '@/library/utilities';

const year = new Date().getFullYear();

export function Footer() {
  return (
    <footer className={cn(
      'bg-secondary text-white',
      'dark:bg-slate-950/70 dark:text-slate-50',
    )}
    >
      <div className={cn(
        'container',
        'flex items-center justify-center gap-2 h-16',
        'text-xs text-center',
      )}
      >
        <span>{`©${year} Inday Trending`}</span>
        <span>|</span>
        <Link href="/privacy" className="underline-offset-4 hover:underline">
          Privacy Policy
        </Link>
      </div>
    </footer>
  );
}
