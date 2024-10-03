import type { NextRequest } from 'next/server';

import { Jimp } from 'jimp';

import { env } from '@/library/environment';
import { getPostImage } from '@/data/posts';

type GetParams = {
  params: {
    slug: string;
  };
};

export async function GET(request: NextRequest, { params }: GetParams) {
  const header = request.headers.get('If-None-Match');
  const etag = `"${params.slug}"`;

  if (header === etag) {
    return new Response(null, { status: 304 });
  }

  try {
    const url = await getPostImage(params.slug);
    const image = await Jimp.read(url);
    const overlay = await Jimp.read(`${env.DOMAIN}/static/indaytrending-overlay.png`);
    const generatedImage = new Jimp({
      width: 1200,
      height: 630,
    });

    const x = (1200 - image.width) / 2;
    const y = (630 - image.height) / 2;

    generatedImage.composite(image, x, y);
    generatedImage.composite(overlay, 0, 0);

    const buffer = await generatedImage.getBuffer('image/png');

    return new Response(buffer, {
      headers: {
        'Content-Type': 'image/png',
        'Cache-Control': 'public, max-age=2592000, stale-while-revalidate=86400',
        ETag: etag,
      },
    });
  } catch (error) {
    return Response.json({ error: 'Featured image not found' }, { status: 404 });
  }
}
