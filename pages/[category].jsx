import React from 'react';
import Error from 'next/error';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import { NextSeo } from 'next-seo';

const Preloader = dynamic(import('../components/Preloader'));
const Stories = dynamic(import('../components/Stories'));

const Page = ({ posts, category }) => {
  const { isFallback } = useRouter();

  if (!category?.slug) return <Error statusCode={404} />;

  if (isFallback) return <Preloader />;

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
    unstable_revalidate: 1,
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
    fallback: true,
  };
};

export default Page;
