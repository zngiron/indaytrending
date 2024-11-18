'use client';

import type { Posts } from '@/data/posts';

import { useEffect } from 'react';
import { useSuspenseInfiniteQuery } from '@tanstack/react-query';

import { PostCard } from '@/components/posts/post-card';
import { cn } from '@/library/utilities';
import { getPosts } from '@/data/posts';

interface PostsFeedProps {
  posts: Posts | null;
  slug: string;
  limit: number;
}

export function PostsFeed({ posts, slug, limit }: PostsFeedProps) {
  const { data, fetchNextPage } = useSuspenseInfiniteQuery({
    queryKey: ['posts', slug],
    queryFn: async ({ pageParam }) => getPosts({
      category: slug,
      first: limit,
      after: pageParam,
    }),
    getNextPageParam: (page) => (page?.pageInfo?.hasNextPage ? page.pageInfo.endCursor : undefined),
    initialPageParam: posts?.pageInfo.startCursor,
    initialData: {
      pages: [
        posts,
      ],
      pageParams: [
        posts?.pageInfo.startCursor,
      ],
    },
  });

  useEffect(() => {
    const onScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        fetchNextPage();
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [fetchNextPage]);

  return (
    <div className={cn('grid gap-4 py-4', 'md:grid-cols-2')}>
      {data.pages.map(
        (page) => page?.edges.map(
          (edge) => (
            <PostCard key={edge.node.id} post={edge.node} />
          ),
        ),
      )}
    </div>
  );
}
