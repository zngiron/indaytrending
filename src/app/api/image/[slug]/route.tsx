/* eslint-disable @next/next/no-img-element */

import { ImageResponse } from 'next/og';

import { env } from '@/library/environment';
import { getPostImage } from '@/data/posts';

interface GetParams {
  params: {
    slug: string;
  };
}

export const runtime = 'edge';

export async function GET({ params }: GetParams) {
  const url = await getPostImage(params.slug);

  if (!url) {
    return new Response('Not found', { status: 404 });
  }

  return new ImageResponse(
    (
      <div
        tw="relative flex w-full h-full"
      >
        <img
          tw="absolute inset-0 w-full h-full"
          src={url}
          width={1200}
          height={630}
          alt="Inday Trending"
        />
        <img
          tw="absolute inset-0 w-full h-full"
          src={`${env.DOMAIN}/static/indaytrending-overlay.png`}
          width={1200}
          height={630}
          alt="Inday Trending"
        />
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
