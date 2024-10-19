import type { Post } from '@/data/posts';

import Link from 'next/link';
import Image from 'next/image';

import { PostSocial } from '@/components/posts/post-social';
import { PostCategory } from '@/components/posts/post-category';
import { cn } from '@/library/utilities';

interface PostCardProps {
  post: Post;
  featured?: boolean;
}

export function PostCard({ post, featured = false }: PostCardProps) {
  const DynamicLink = featured ? 'div' : Link;
  const DynamicTitle = featured ? 'h1' : 'h2';

  return (
    <div className={cn(
      'group overflow-hidden',
      'relative',
      'rounded-lg aspect-[1200/630]',
      'bg-gradient-to-tr from-secondary via-secondary to-primary',
    )}
    >
      {featured && <PostSocial slug={post.slug} />}
      <DynamicLink
        href={`/stories/${post.slug}`}
        className={cn(
          'absolute inset-0',
          'rounded-[inherit]',
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
          src={post.image?.node.featured || ''}
          alt={post.title}
          width={1200}
          height={630}
          draggable={false}
          loading="lazy"
        />
        <div className={cn(
          'absolute inset-x-6 bottom-6 z-10',
          'rounded-[inherit]',
        )}
        >
          <DynamicTitle
            className={cn(
              'font-semibold text-sm text-white',
              featured ? 'text-base' : 'text-sm line-clamp-2',
            )}
          >
            {post.title}
          </DynamicTitle>
        </div>
      </DynamicLink>
      <div className={cn(
        'absolute inset-x-0 top-0 z-10',
        'flex flex-wrap items-center gap-2 p-6',
        'pointer-events-none',
      )}
      >
        {post.categories.edges.map(({ node }) => (
          <PostCategory
            key={node.id}
            slug={node.slug}
            name={node.name}
          />
        ))}
      </div>
    </div>
  );
}
