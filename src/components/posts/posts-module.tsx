import { PostCard } from '@/components/posts/post-card';
import { getCategory } from '@/data/categories';
import { getPosts } from '@/data/posts';
import { cn } from '@/library/utilities';

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
    <div className={cn(
      'grid gap-4 py-4',
      'md:grid-cols-2',
      'xl:grid-cols-3',
    )}
    >
      <div className="col-span-full">
        <h1 className="font-semibold text-2xl text-slate-900 dark:text-orange-300">{category.name}</h1>
        <p>{category.description}</p>
      </div>
      {posts.edges.map(({ node }) => (
        <PostCard key={node.id} post={node} />
      ))}
    </div>
  );
}
