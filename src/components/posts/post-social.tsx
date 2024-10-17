'use client';

import { env } from '@/library/environment';

interface PostSocialProps {
  slug: string;
}

export function PostSocial({ slug }: PostSocialProps) {
  const url = `${env.DOMAIN}/stories/${slug}`;

  return (
    <div
      className="fb-like"
      data-href={url}
      data-layout="button_count"
      data-action="like"
      data-size="large"
      data-share="true"
    />
  );
}
