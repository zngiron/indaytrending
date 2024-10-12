import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@/library/utilities';

function NotFound() {
  return (
    <div className="flex grow items-center justify-center py-4">
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="flex flex-col items-center gap-2">
          <Image
            src="/static/indaytrending-icon.png"
            alt="Inday Trending"
            width={320}
            height={100}
            draggable={false}
            priority
          />
          <Image
            className="dark:hidden"
            src="/static/indaytrending-logo-light.svg"
            width={160}
            height={80}
            alt="Inday Trending"
            draggable={false}
            priority
          />
          <Image
            className="hidden dark:inline"
            src="/static/indaytrending-logo-dark.svg"
            width={160}
            height={80}
            alt="Inday Trending"
            draggable={false}
            priority
          />
        </div>
        <div className="text-center">
          <h2 className="font-semibold text-4xl">404</h2>
          <p className="text-muted-foreground text-sm">
            Hindi matagpuan ang pahina na iyong hinahanap.
          </p>
        </div>
        <Link
          href="/"
          className={cn(
            'inline-flex items-center gap-2 px-4 py-2 rounded-md',
            'transition duration-300',
            'bg-primary font-semibold text-xs text-white',
            'hover:bg-secondary',
          )}
        >
          Bumalik sa Homepage
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
