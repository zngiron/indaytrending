import type { Metadata } from 'next';

import { PostsModule } from '@/components/posts/posts-module';
import { getCategories, getCategory } from '@/data/categories';
import { env } from '@/library/environment';

interface CategoryProps {
  params: {
    category: string;
  };
}

export const revalidate = 60;
export const dynamicParams = false;

export const generateStaticParams = async () => {
  const categories = await getCategories();

  return categories?.edges.map(({ node }) => ({
    category: node.slug,
  })) || [];
};

export const generateMetadata = async ({ params }: CategoryProps): Promise<Metadata> => {
  const category = await getCategory(params.category);

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
  return (
    <div className="container max-w-3xl">
      <PostsModule slug={params.category} />
    </div>
  );
}
