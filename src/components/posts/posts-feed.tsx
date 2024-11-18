'use client';

import type { Posts } from '@/data/posts';

import { useEffect, useRef, useCallback } from 'react';
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
  const { data, fetchNextPage, hasNextPage } = useSuspenseInfiniteQuery({
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

  const postsLoader = useRef(null);

  const handleLoader = useCallback((entries: IntersectionObserverEntry[]) => {
    const [target] = entries;
    if (target.isIntersecting && hasNextPage) {
      fetchNextPage();
    }
  }, [fetchNextPage, hasNextPage]);

  useEffect(() => {
    const element = postsLoader.current;
    const observer = new IntersectionObserver(handleLoader, {
      root: null,
      rootMargin: '50%',
      threshold: 0,
    });

    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [handleLoader]);

  return (
    <div className={cn('grid gap-4 py-4', 'md:grid-cols-2')}>
      {data.pages.map((page) => page?.edges.map((edge) => (
        <PostCard key={edge.node.id} post={edge.node} />
      )))}
      <div ref={postsLoader} />
    </div>
  );
}
