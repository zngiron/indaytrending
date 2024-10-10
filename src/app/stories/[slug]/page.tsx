import type { Metadata } from 'next';

import { PostModule } from '@/components/posts/post-module';
import { getPost, getPosts } from '@/data/posts';
import { env } from '@/library/environment';

interface StoryPageProps {
  params: {
    slug: string;
  };
}

export const generateStaticParams = async () => {
  const posts = await getPosts({
    category: 'stories',
    first: 12,
  });

  return posts?.edges.map((post) => ({
    slug: post.node.slug,
  })) || [];
};

export const generateMetadata = async ({ params }: StoryPageProps): Promise<Metadata> => {
  const post = await getPost(params.slug);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    openGraph: {
      type: 'article',
      siteName: 'Inday Trending',
      url: `${env.DOMAIN}/stories/${post.slug}`,
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
  return (
    <div className="container max-w-3xl">
      <PostModule slug={params.slug} />
    </div>
  );
}
