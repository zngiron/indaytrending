import React from 'react';
import dynamic from 'next/dynamic';

const Stories = dynamic(import('../components/Stories'));

const Page = ({ posts, category }) => (
  <>
    <Stories posts={posts} category={category} />
  </>
);

export const getStaticProps = async () => {
  const { getStories } = await import('../library/api');
  const data = await getStories('stories', {
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

export default Page;
