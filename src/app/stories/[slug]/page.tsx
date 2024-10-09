import type { Metadata } from 'next';

import { PostModule } from '@/components/posts/post-module';
import { getPost, getPostSlugs } from '@/data/posts';
import { env } from '@/library/environment';

interface StoryPageProps {
  params: {
    slug: string;
  };
}

export const revalidate = 60;
export const generateStaticParams = async () => getPostSlugs();

export const generateMetadata = async ({ params }: StoryPageProps): Promise<Metadata> => {
  const post = await getPost(params.slug);

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
