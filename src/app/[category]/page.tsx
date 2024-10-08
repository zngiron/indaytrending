import { PostsModule } from '@/components/posts/posts-module';
import { getCategories } from '@/data/categories';

interface CategoryProps {
  params: {
    category: string;
  };
}

export const revalidate = 60;
export const dynamicParams = false;

export const generateStaticParams = async () => {
  const categories = await getCategories();
  return categories.edges.map(({ node }) => ({
    category: node.slug,
  }));
};

export default function Category({ params }: CategoryProps) {
  return (
    <div className="container max-w-3xl">
      <PostsModule slug={params.category} />
    </div>
  );
}
