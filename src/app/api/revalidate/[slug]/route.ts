import { NextRequest } from 'next/server';
import { revalidatePath } from 'next/cache';

interface PostParams {
  params: {
    slug: string;
  };
}

export async function POST(request: NextRequest, { params }: PostParams) {
  const token = request.headers.get('Authorization')?.split(' ')[1];

  if (token !== process.env.REVALIDATION_TOKEN) {
    return new Response('Unauthorized', {
      status: 401,
    });
  }

  if (!params.slug) {
    return new Response('No slug provided', {
      status: 400,
    });
  }

  revalidatePath('/');
  revalidatePath(`/stories/${params.slug}`);

  return new Response('Revalidated', {
    status: 200,
  });
}
