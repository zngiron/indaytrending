import { notFound } from 'next/navigation';
import parse from 'html-react-parser';

import { PostCard } from '@/components/posts/post-card';
import { PostThumbnail } from '@/components/posts/post-thumbnail';
import { AdsenseAd } from '@/components/adsense/adsense-ad';
import { formatHTML } from '@/library/format';
import { cn } from '@/library/utilities';
import { getPost } from '@/data/posts';
import { PromoModule } from '@/components/promo/promo-module';

interface PostModuleProps {
  slug: string;
}

export async function PostModule({ slug }: PostModuleProps) {
  const post = await getPost(slug);

  if (!post) {
    return notFound();
  }

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
      <AdsenseAd />
      <PromoModule />
      <div className="space-y-2">
        {post.next && <PostThumbnail post={post.next} label="Next Story" />}
        {post.previous && (
          <PostThumbnail post={post.previous} label="Previous Story" />
        )}
      </div>
    </article>
  );
}
