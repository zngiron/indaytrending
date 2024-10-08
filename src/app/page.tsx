import { PostsModule } from '@/components/posts/posts-module';

export const revalidate = 60;

export default async function Home() {
  return (
    <div className="container max-w-3xl">
      <PostsModule slug="stories" />
    </div>
  );
}
