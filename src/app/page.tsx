import { dehydrate, HydrationBoundary } from '@tanstack/react-query';

import { PostsModule } from '@/components/posts/posts-module';
import { getQueryClient } from '@/library/client';
import { getCategory } from '@/data/categories';
import { getPosts } from '@/data/posts';

export const revalidate = 60;

export default async function Home() {
  const client = getQueryClient();
  const variables = {
    category: 'stories',
    first: 12,
  };

  client.prefetchQuery({
    queryKey: ['category', 'stories'],
    queryFn: async () => getCategory('stories'),
  });

  client.prefetchQuery({
    queryKey: ['posts', 'stories'],
    queryFn: async () => getPosts(variables),
  });

  return (
    <div className="container">
      <HydrationBoundary state={dehydrate(client)}>
        <PostsModule slug="stories" />
      </HydrationBoundary>
    </div>
  );
}
