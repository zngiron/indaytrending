import parse from 'html-react-parser';

import { PostCategory } from '@/components/posts/post-category';
import { formatHTML } from '@/library/format';
import { cn } from '@/library/utilities';
import { getPost } from '@/data/posts';

interface PostModuleProps {
  slug: string;
}

export async function PostModule({ slug }: PostModuleProps) {
  const post = await getPost(slug);
  const html = formatHTML(post.content);

  return (
    <article className="space-y-4">
      <h1 className="font-semibold text-2xl">
        {formatHTML(post.title)}
      </h1>
      <div className="flex flex-wrap gap-2">
        {post.categories.edges.map(({ node }) => (
          <PostCategory key={node.slug} category={node} />
        ))}
      </div>
      <div
        className={cn(
          'prose max-w-none',
          'dark:text-slate-500',
          '[&_img]:w-1/2 [&_img]:max-w-min [&_img]:rounded-md [&_img]:pointer-events-none [&_img]:content-visibility-auto',
        )}
      >
        {parse(html)}
      </div>
    </article>
  );
}
