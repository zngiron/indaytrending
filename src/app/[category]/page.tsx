import type { Metadata } from 'next';

import { PostsModule } from '@/components/posts/posts-module';
import { getCategories, getCategory } from '@/data/categories';
import { env } from '@/library/environment';

interface CategoryProps {
  params: Promise<{ category: string }>;
}

export const dynamicParams = false;

export const generateStaticParams = async () => {
  const categories = await getCategories();

  return categories?.edges.map(({ node }) => ({
    category: node.slug,
  })) || [];
};

export const generateMetadata = async ({ params }: CategoryProps): Promise<Metadata> => {
  const { category: slug } = await params;
  const category = await getCategory(slug);

  if (!category) {
    return {};
  }

  return {
    title: `${category.name} | Inday Trending - Pinoy Short Stories`,
    openGraph: {
      type: 'website',
      siteName: 'Inday Trending',
      url: `${env.DOMAIN}/${category.slug}`,
      title: `${category.name} | Inday Trending - Pinoy Short Stories`,
    },
  };
};

export default async function Category({ params }: CategoryProps) {
  const { category } = await params;

  return (
    <div className="container max-w-3xl">
      <PostsModule slug={category} />
    </div>
  );
}
