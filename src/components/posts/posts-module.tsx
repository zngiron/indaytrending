import { PostsFeed } from '@/components/posts/posts-feed';
import { cn } from '@/library/utilities';

import { getCategory } from '@/data/categories';
import { getPosts } from '@/data/posts';

interface PostsModuleProps {
  slug: string;
  limit?: number;
}

export async function PostsModule({ slug, limit = 12 }: PostsModuleProps) {
  const category = await getCategory(slug);
  const posts = await getPosts({
    category: slug,
    first: limit,
  });

  return (
    <div className="py-4">
      <h1 className={cn('font-semibold text-2xl', 'dark:text-white')}>
        {category?.name}
      </h1>
      <p className={cn('text-slate-500', 'dark:text-slate-300')}>
        {category?.description}
      </p>
      <PostsFeed posts={posts || null} slug={slug} limit={limit} />
    </div>
  );
}
