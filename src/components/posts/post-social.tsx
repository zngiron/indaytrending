'use client';

import Script from 'next/script';

import { env } from '@/library/environment';

interface PostSocialProps {
  slug: string;
}

export function PostSocial({ slug }: PostSocialProps) {
  const url = `${env.DOMAIN}/stories/${slug}`;

  return (
    <>
      <div id="fb-root" />
      <div
        className="fb-like"
        data-href={url}
        data-layout="button_count"
        data-action="like"
        data-size="large"
        data-share="true"
      />
      <Script
        strategy="lazyOnload"
        src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v21.0"
        crossOrigin="anonymous"
      />
    </>
  );
}
