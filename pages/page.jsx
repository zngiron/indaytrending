import React from 'react';
import dynamic from 'next/dynamic';

const Stories = dynamic(import('../components/Stories'));

const Page = ({ posts, category }) => (
  <>
    <Stories posts={posts} category={category} />
  </>
);

export const getServerSideProps = async ({ query }) => {
  const { getStories } = await import('../library/api');
  const data = await getStories(query?.category, {
    first: query?.after ? 12 : null,
    after: query?.after || null,
    last: query?.before ? 12 : null,
    before: query?.before || null,
  });

  return {
    props: {
      posts: data.posts,
      category: data.category,
    },
  };
};

export default Page;
