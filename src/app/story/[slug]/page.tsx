import type { Metadata } from 'next';

import { HydrationBoundary, dehydrate } from '@tanstack/react-query';

import { PostModule } from '@/components/posts/post-module';
import { getPost, getPosts } from '@/data/posts';
import { getQueryClient } from '@/library/client';
import { env } from '@/library/environment';

interface StoryPageProps {
  params: {
    slug: string;
  };
}

export const revalidate = 60;

export const generateStaticParams = async () => {
  const posts = await getPosts({
    first: 1,
    category: 'stories',
  });

  return posts.edges.map(({ node }) => ({
    slug: node.slug,
  }));
};

export const generateMetadata = async ({ params }: StoryPageProps): Promise<Metadata> => {
  const post = await getPost(params.slug);

  return {
    title: post.title,
    openGraph: {
      type: 'article',
      title: post.title,
      publishedTime: post.published,
      modifiedTime: post.modified,
      images: [
        {
          url: `${env.DOMAIN}/api/image/${post.slug}`,
          alt: post.title,
        },
      ],
    },
  };
};

export default function StoryPage({ params }: StoryPageProps) {
  const client = getQueryClient();

  client.prefetchQuery({
    queryKey: ['story', params.slug],
    queryFn: async () => getPost(params.slug),
  });

  return (
    <div className="container">
      <HydrationBoundary state={dehydrate(client)}>
        <PostModule slug={params.slug} />
      </HydrationBoundary>
    </div>
  );
}
