'use client';

import { useState, useEffect } from 'react';
import { env } from '@/library/environment';
import { cn } from '@/library/utilities';

interface PostSocialProps {
  slug: string;
}

export function PostSocial({ slug }: PostSocialProps) {
  const [mounted, setMounted] = useState(false);
  const url = `${env.DOMAIN}/stories/${slug}`;

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div
      className={cn(
        'overflow-hidden',
        'absolute top-6 right-6 z-10',
        'rounded-md',
      )}
    >
      <div
        className="fb-like"
        data-href={url}
        data-width=""
        data-layout="box_count"
        data-action="like"
        data-size="large"
      />
    </div>
  );
}
