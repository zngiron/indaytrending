'use client';

import {
  FacebookIcon,
  FacebookShareButton,
  FacebookShareCount,
  PinterestIcon,
  PinterestShareButton,
  RedditIcon,
  RedditShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterShareButton,
  XIcon,
  ViberIcon,
  ViberShareButton,
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
        <FacebookShareCount url={url}>
          {(count) => <span>{count}</span>}
        </FacebookShareCount>
      </FacebookShareButton>
      <PinterestShareButton url={url} media={`${env.DOMAIN}/api/image/${slug}`}>
        <PinterestIcon size={32} round />
      </PinterestShareButton>
      <RedditShareButton url={url}>
        <RedditIcon size={32} round />
      </RedditShareButton>
      <TelegramShareButton url={url}>
        <TelegramIcon size={32} round />
      </TelegramShareButton>
      <TwitterShareButton url={url}>
        <XIcon size={32} round />
      </TwitterShareButton>
      <ViberShareButton url={url}>
        <ViberIcon size={32} round />
      </ViberShareButton>
    </div>
  );
}
