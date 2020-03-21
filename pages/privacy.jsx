import React from 'react';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/react-hooks';

import Preloader from '../components/Preloader';
import Meta from '../components/Meta';
import Page from '../components/Page';

import { GET_PAGE } from '../library/Queries.graphql';

const Privacy = () => {
  const page = 'privacy';

  const { asPath } = useRouter();
  const { loading, error, data } = useQuery(GET_PAGE, {
    variables: {
      page,
    },
  });

  if (loading || error) return <Preloader loading={loading} error={error} />;

  return (
    <>
      <Meta
        title={`${data.page.title} | Inday Trending - Pinoy Short Stories`}
        url={asPath}
      />
      <Page page={data.page} />
    </>
  );
};

export default Privacy;
