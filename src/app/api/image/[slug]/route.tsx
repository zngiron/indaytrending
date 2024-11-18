/* eslint-disable @next/next/no-img-element */

import type { NextRequest } from 'next/server';

import { ImageResponse } from 'next/og';

import { env } from '@/library/environment';
import { getPost } from '@/data/posts';

interface GetParams {
  params: Promise<{ slug: string }>;
}

export const runtime = 'edge';

export async function GET(_: NextRequest, { params }: GetParams) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    return new Response('Not found', { status: 404 });
  }

  return new ImageResponse(
    (
      <div
        tw="relative flex w-full h-full"
      >
        <img
          tw="absolute inset-0 w-full h-full"
          src={post.image?.node.featured}
          width={1200}
          height={630}
          alt=""
        />
        <img
          tw="absolute inset-0 w-full h-full"
          src={`${env.DOMAIN}/static/indaytrending-overlay.png`}
          width={1200}
          height={630}
          alt=""
        />
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
