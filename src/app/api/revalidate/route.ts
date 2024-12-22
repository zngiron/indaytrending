import { revalidatePath } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'edge';

export async function GET(request: NextRequest) {
  const url = request.nextUrl.searchParams.get('url');

  if (!url) {
    return NextResponse.json({
      message: 'No url provided',
    });
  }

  revalidatePath(url);

  return NextResponse.json({
    message: `Revalidated ${url}`,
  });
}
