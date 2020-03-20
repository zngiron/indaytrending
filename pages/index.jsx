import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_POSTS } from '../library/Queries.graphql';

import Preloader from '../components/UI/Preloader';
import Meta from '../components/Meta';
import Stories from '../components/Stories';

const Home = () => {
  const category = 'stories';
  const { loading, error, data } = useQuery(GET_POSTS, {
    variables: {
      first: 12,
      category,
      categoryName: category,
    },
  });

  if (loading || error) return <Preloader loading={loading} error={error} />;

  return (
    <>
      <Meta
        title="Inday Trending - Pinoy Short Stories"
        description="Manunulat ng maiikling akda na sumasalamin sa pang-araw-araw na buhay, suliranin at karanasan ng isang Pilipino."
      />
      <Stories posts={data.posts} category={data.category} />
    </>
  );
};

export default Home;
