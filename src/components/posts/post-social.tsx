'use client';

import {
  FacebookIcon,
  FacebookShareButton,
  FacebookShareCount,
} from 'react-share';

import { env } from '@/library/environment';

interface PostSocialProps {
  slug: string;
}

export function PostSocial({ slug }: PostSocialProps) {
  const url = `${env.DOMAIN}/stories/${slug}`;

  return (
    <div className="flex items-center gap-2">
      <FacebookShareButton url={url}>
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      <FacebookShareCount url={url}>
        {(count) => <span>{count}</span>}
      </FacebookShareCount>
    </div>
  );
}
