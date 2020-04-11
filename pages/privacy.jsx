import React from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/react-hooks';

import { GET_PAGE } from '../library/Queries.graphql';

const Preloader = dynamic(import('../components/Preloader'));
const Meta = dynamic(import('../components/Meta'));
const Page = dynamic(import('../components/Page'));

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
