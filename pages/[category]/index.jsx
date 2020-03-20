import React from 'react';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/react-hooks';
import { GET_POSTS } from '../../library/Queries.graphql';

import Preloader from '../../components/UI/Preloader';
import Meta from '../../components/Meta';
import Stories from '../../components/Stories';

const Category = () => {
  const router = useRouter();
  const { category } = router.query;

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
        title={`${data.category.name} | Inday Trending - Pinoy Short Stories`}
        description={data.category.description}
      />
      <Stories posts={data.posts} category={data.category} />
    </>
  );
};

export default Category;
