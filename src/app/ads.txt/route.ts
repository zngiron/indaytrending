import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const response = await fetch(
      'https://ads-txt.app.anymanager.io/site/7429/ads-txt/ads.txt',
      {
        next: {
          revalidate: 3600,
        },
      },
    );
    const text = await response.text();

    return new NextResponse(text, {
      headers: {
        'Content-Type': 'text/plain',
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
      },
    });
  } catch (error) {
    console.error('Error fetching ads.txt:', error);
    return new NextResponse('', {
      status: 500,
      headers: {
        'Content-Type': 'text/plain',
        'Cache-Control': 'no-store',
      },
    });
  }
}
