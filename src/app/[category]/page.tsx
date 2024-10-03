import { dehydrate, HydrationBoundary } from '@tanstack/react-query';

import { PostsModule } from '@/components/posts/posts-module';
import { getQueryClient } from '@/library/client';
import { getCategory, getCategories } from '@/data/categories';
import { getPosts } from '@/data/posts';

interface CategoryProps {
  params: {
    category: string;
  };
}

export const revalidate = 60;
export const dynamicParams = false;

export const generateStaticParams = async () => {
  const categories = await getCategories();
  return categories.edges.map(({ node }) => ({
    category: node.slug,
  }));
};

export default async function Category({ params } : CategoryProps) {
  const client = getQueryClient();
  const variables = {
    category: params.category || 'stories',
    first: 12,
  };

  client.prefetchQuery({
    queryKey: ['category', params.category],
    queryFn: async () => getCategory(params.category),
  });

  client.prefetchQuery({
    queryKey: ['posts', params.category],
    queryFn: async () => getPosts(variables),
  });

  return (
    <div className="container">
      <HydrationBoundary state={dehydrate(client)}>
        <PostsModule slug={params.category} />
      </HydrationBoundary>
    </div>
  );
}
