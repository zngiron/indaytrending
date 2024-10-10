/* eslint-disable react/no-unstable-nested-components */

import { Fragment } from 'react';
import { notFound } from 'next/navigation';
import parse, { domToReact } from 'html-react-parser';

import { PostCard } from '@/components/posts/post-card';
import { AdsenseAd } from '@/components/adsense/adsense-ad';
import { formatHTML } from '@/library/format';
import { cn } from '@/library/utilities';
import { getPost } from '@/data/posts';

interface PostModuleProps {
  slug: string;
}

export async function PostModule({ slug }: PostModuleProps) {
  const post = await getPost(slug);

  if (!post) {
    return notFound();
  }

  const html = formatHTML(post.content);

  const options = {
    replace: (node: any) => {
      if (node.name === 'p' && node.prev?.name !== 'img' && node.next?.name !== 'img') {
        let paragraphCount = 0;
        let currentNode = node;

        while (currentNode.prev) {
          if (currentNode.prev.name === 'p') {
            paragraphCount += 1;
          }
          currentNode = currentNode.prev;
        }

        if ((paragraphCount + 1) % 8 === 0) {
          return (
            <Fragment key={node.children[0].key}>
              {domToReact(node.children)}
              <AdsenseAd />
            </Fragment>
          );
        }
      }

      return node;
    },
  };

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
        {parse(html, options)}
      </div>
    </article>
  );
}
