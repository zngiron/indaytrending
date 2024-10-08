import parse from 'html-react-parser';

import { formatHTML } from '@/library/format';
import { cn } from '@/library/utilities';
import { getPost } from '@/data/posts';
import { PostCard } from '@/components/posts/post-card';

interface PostModuleProps {
  slug: string;
}

export async function PostModule({ slug }: PostModuleProps) {
  const post = await getPost(slug);
  const html = formatHTML(post.content);

  return (
    <article className="py-4 space-y-4">
      <PostCard post={post} featured />
      <div
        className={cn(
          'prose max-w-none',
          'dark:text-slate-300',
          '[&_img]:w-full [&_img]:rounded-md [&_img]:pointer-events-none [&_img]:content-visibility-auto',
        )}
      >
        {parse(html)}
      </div>
    </article>
  );
}
