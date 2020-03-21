import React from 'react';
import Error from 'next/error';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/react-hooks';
import { GET_POSTS } from '../../library/Queries.graphql';

import Preloader from '../../components/Preloader';
import Meta from '../../components/Meta';
import Stories from '../../components/Stories';

const Category = () => {
  const { asPath, query } = useRouter();
  const { category } = query;

  const { loading, error, data } = useQuery(GET_POSTS, {
    variables: {
      first: 12,
      category,
      categoryName: category,
    },
  });

  if (loading || error) return <Preloader loading={loading} error={error} />;

  if (data.category === null) return <Error statusCode={404} />;

  return (
    <>
      <Meta
        url={asPath}
        title={`${data.category.name} | Inday Trending - Pinoy Short Stories`}
        description={data.category.description}
      />
      <Stories posts={data.posts} category={data.category} />
    </>
  );
};

export default Category;
