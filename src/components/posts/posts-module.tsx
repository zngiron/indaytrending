import { PostCard } from '@/components/posts/post-card';
import { getCategory } from '@/data/categories';
import { getPosts } from '@/data/posts';
import { cn } from '@/library/utilities';

interface PostsModuleProps {
  slug: string;
  limit?: number;
}

export async function PostsModule({ slug, limit = 24 }: PostsModuleProps) {
  const category = await getCategory(slug);
  const posts = await getPosts({
    category: slug,
    first: limit,
  });

  return (
    <div className="py-4">
      <h1 className={cn('font-semibold text-2xl', 'dark:text-white')}>
        {category.name}
      </h1>
      <p className={cn('text-slate-500', 'dark:text-slate-300')}>
        {category.description}
      </p>
      <div className={cn('grid gap-4 py-4', 'md:grid-cols-2')}>
        {posts.edges.map(({ node }) => (
          <PostCard key={node.id} post={node} />
        ))}
      </div>
    </div>
  );
}
