import type { Post } from '@/data/posts';

import Link from 'next/link';
import Image from 'next/image';

import { PostCategory } from '@/components/posts/post-category';
import { cn } from '@/library/utilities';

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  return (
    <div className={cn(
      'group overflow-hidden',
      'relative',
      'rounded-lg aspect-[1200/630]',
      'bg-secondary',
    )}
    >
      <Link
        href={`/stories/${post.slug}`}
        className={cn(
          'absolute inset-0',
          'rounded-[inherit]',
          'after:absolute after:inset-0 after:bg-gradient-to-tr after:from-secondary/70 after:via-secondary/70 after:to-primary/70',
        )}
      >
        <Image
          className={cn(
            'transform-gpu scale-105 will-change-transform',
            'transition duration-300',
            'pointer-events-none select-none',
            'group-hover:scale-110',
          )}
          src={post.image?.node.featured || ''}
          alt={post.title}
          width={1200}
          height={630}
          draggable={false}
        />
        <div className={cn(
          'absolute inset-x-2 bottom-2 z-10',
          'p-4 rounded-[inherit]',
          'backdrop-blur-sm',
        )}
        >
          <h3 className="font-semibold text-sm text-white line-clamp-2">
            {post.title}
          </h3>
        </div>
      </Link>
      <div className={cn(
        'absolute inset-x-0 top-0 z-10',
        'flex flex-wrap items-center gap-2 p-6',
      )}
      >
        {post.categories.edges.map(({ node }) => (
          <PostCategory key={node.slug} category={node} />
        ))}
      </div>
    </div>
  );
}
