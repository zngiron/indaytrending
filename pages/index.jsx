import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_POSTS } from '../library/Queries.graphql';

import Preloader from '../components/UI/Preloader';

const Home = () => {
  const { loading, error, data } = useQuery(GET_POSTS);

  if (loading || error) return <Preloader loading={loading} error={error} />;

  return (
    <>

    </>
  );
};

export default Home;
