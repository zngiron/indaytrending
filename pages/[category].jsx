import Error from 'next/error';
import dynamic from 'next/dynamic';
import { NextSeo } from 'next-seo';

const Preloader = dynamic(import('../components/Preloader'));
const Stories = dynamic(import('../components/Stories'));

const Page = ({ posts, category }) => {
  if (!category) return <Error statusCode={404} />;

  return (
    <>
      <NextSeo
        title={category.name ? `${category.name} | Inday Trending - Pinoy Short Stories` : undefined}
        description={category?.description}
        openGraph={{
          title: category.name ? `${category.name} | Inday Trending - Pinoy Short Stories` : undefined,
          description: category?.description,
          url: `${process.env.DOMAIN}/${category.slug}`,
        }}
      />
      <Stories posts={posts} category={category} />
    </>
  );
};

export const getStaticProps = async ({ params }) => {
  const { getStories } = await import('../library/api');
  const data = await getStories(params?.category, {
    first: 12,
  });

  return {
    props: {
      posts: data.posts,
      category: data.category,
    },
    revalidate: 1,
  };
};

export const getStaticPaths = async () => {
  const { getCategories } = await import('../library/api');
  const data = await getCategories();
  const paths = data?.edges?.map(({ node }) => ({
    params: {
      category: node.slug,
    },
  })) || [];

  return {
    paths,
    fallback: 'blocking',
  };
};

export default Page;
