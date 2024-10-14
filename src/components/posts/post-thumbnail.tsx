import type { Post } from '@/data/posts';

import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/library/utilities';

interface PostThumbnailProps {
  label: string;
  post: Post['previous'] | Post['next'];
}

export function PostThumbnail({ label, post }: PostThumbnailProps) {
  return (
    <Link
      href={`/stories/${post?.slug}`}
      className={cn(
        'group',
        'flex items-center gap-4 p-2 rounded-lg',
        'bg-slate-50',
        'dark:bg-slate-950/70',
      )}
    >
      <div className={cn(
        'overflow-hidden',
        'shrink-0 rounded-lg aspect-[200/100]',
        'bg-gradient-to-tr from-secondary via-secondary to-primary',
      )}
      >
        <Image
          className={cn(
            'transform-gpu scale-105',
            'transition duration-300',
            'opacity-30',
            'pointer-events-none select-none',
            'group-hover:scale-110',
          )}
          src={`${post?.image?.node.featured}`}
          alt={post?.title || ''}
          width={200}
          height={100}
        />
      </div>
      <div className="space-y-2 text-sm">
        <div className="font-semibold text-xs uppercase">
          {label}
        </div>
        <h3 className="line-clamp-3 text-muted-foreground">{post?.title}</h3>
      </div>
    </Link>
  );
}
