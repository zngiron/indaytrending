import { dehydrate, HydrationBoundary } from '@tanstack/react-query';

import { PostsFeed } from '@/components/posts/posts-feed';
import { getQueryClient } from '@/library/client';
import { cn } from '@/library/utilities';

import { getCategory } from '@/data/categories';
import { getPosts } from '@/data/posts';

interface PostsModuleProps {
  slug: string;
  limit?: number;
}

export async function PostsModule({ slug, limit = 12 }: PostsModuleProps) {
  const category = await getCategory(slug);
  const client = getQueryClient();

  client.prefetchInfiniteQuery({
    queryKey: ['posts', slug],
    queryFn: async () => getPosts({
      category: slug,
      first: limit,
      after: '',
    }),
    initialPageParam: '',
  });

  return (
    <div className="py-4">
      <h1 className={cn('font-semibold text-2xl', 'dark:text-white')}>
        {category?.name}
      </h1>
      <p className={cn('text-slate-500', 'dark:text-slate-300')}>
        {category?.description}
      </p>
      <HydrationBoundary state={dehydrate(client)}>
        <PostsFeed slug={slug} limit={limit} />
      </HydrationBoundary>
    </div>
  );
}
