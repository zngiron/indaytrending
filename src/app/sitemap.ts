import type { MetadataRoute } from 'next';

import { env } from '@/library/environment';
import { getCategories } from '@/data/categories';
import { getPosts } from '@/data/posts';

const today = new Date().toISOString();

export const dynamic = 'force-static';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getPosts({ first: 100, category: 'stories' });
  const categories = await getCategories();

  const categoriesMap = categories?.edges.map(({ node }) => ({
    url: `${env.DOMAIN}/${node.slug}`,
    lastModified: today,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  const postsMap = posts?.edges.map(({ node }) => ({
    url: `${env.DOMAIN}/stories/${node.slug}`,
    lastModified: node.modified,
    changeFrequency: 'never' as const,
  }));

  return [
    {
      url: env.DOMAIN,
      lastModified: today,
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    ...categoriesMap || [],
    ...postsMap || [],
  ];
}
