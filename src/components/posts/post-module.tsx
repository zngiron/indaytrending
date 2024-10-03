/* eslint-disable react/no-danger */

'use client';

import { useSuspenseQuery } from '@tanstack/react-query';

import { getPost } from '@/data/posts';
import { formatHTML } from '@/library/format';
import { cn } from '@/library/utilities';
import { PostCategory } from '@/components/posts/post-category';

interface PostModuleProps {
  slug: string;
}

export function PostModule({ slug }: PostModuleProps) {
  const { data: post } = useSuspenseQuery({
    queryKey: ['post', slug],
    queryFn: async () => getPost(slug),
  });

  return (
    <article className="space-y-4">
      <h1 className="font-semibold text-2xl">{post.title}</h1>
      <div className="flex flex-wrap gap-2">
        {post.categories.edges.map(({ node }) => (
          <PostCategory key={node.slug} category={node} />
        ))}
      </div>
      <div
        className={cn(
          'prose',
          'max-w-none',
          'dark:text-slate-500',
          '[&_img]:w-1/2 [&_img]:max-w-min [&_img]:rounded-md [&_img]:pointer-events-none [&_img]:content-visibility-auto',
        )}
        dangerouslySetInnerHTML={{
          __html: formatHTML(post.content),
        }}
      />
    </article>
  );
}
