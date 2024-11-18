import { NextRequest } from 'next/server';
import { revalidatePath } from 'next/cache';

interface PostParams {
  params: Promise<{ slug: string }>;
}

export const runtime = 'edge';

export async function POST(request: NextRequest, { params }: PostParams) {
  const { slug } = await params;
  const token = request.headers.get('Authorization')?.split(' ')[1];

  if (token !== process.env.REVALIDATION_TOKEN) {
    return new Response('Unauthorized', {
      status: 401,
    });
  }

  if (!slug) {
    return new Response('No slug provided', {
      status: 400,
    });
  }

  revalidatePath('/');
  revalidatePath('/[category]', 'page');
  revalidatePath(`/stories/${slug}`);
  revalidatePath(`/api/image/${slug}`);
  revalidatePath(`/api/thumbnail/${slug}`);

  return new Response('Revalidated', {
    status: 200,
  });
}
