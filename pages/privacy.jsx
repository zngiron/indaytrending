import React from 'react';
import { useQuery } from '@apollo/react-hooks';

import Preloader from '../components/UI/Preloader';
import Meta from '../components/Meta';
import Page from '../components/Page';

import { GET_PAGE } from '../library/Queries.graphql';

const Privacy = () => {
  const { loading, error, data } = useQuery(GET_PAGE, {
    variables: {
      page: 'privacy',
    },
  });

  if (loading || error) return <Preloader loading={loading} error={error} />;

  return (
    <>
      <Meta
        title={`${data.page.title} | Inday Trending - Pinoy Short Stories`}
        description=""
      />
      <Page page={data.page} />
    </>
  );
};

export default Privacy;
