'use client';

import { useEffect } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';

import { PostCard } from '@/components/posts/post-card';
import { cn } from '@/library/utilities';
import { getPosts } from '@/data/posts';

interface PostsFeedProps {
  slug: string;
  limit: number;
}

export function PostsFeed({ slug, limit }: PostsFeedProps) {
  const { data, fetchNextPage } = useInfiniteQuery({
    queryKey: ['posts', slug],
    queryFn: async ({ pageParam = '' }) => getPosts({
      category: slug,
      first: limit,
      after: pageParam,
    }),
    getNextPageParam: (page) => (page?.pageInfo?.hasNextPage ? page.pageInfo.endCursor : undefined),
    initialPageParam: '',
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

  if (!data) return null;

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
