import React from 'react';
import { useRouter } from 'next/router';

import Header from '../Header';
import Footer from '../Footer';
import Taboola from '../Ads/Taboola';

import * as Layout from '../UI/Layout.styled';
import * as Typography from '../UI/Typography.styled';

const Root = ({ children }) => {
  const { query } = useRouter();

  return (
    <>
      <Layout.Global styles={Layout.Styles} />
      <Header />
      <Layout.Main>{children}</Layout.Main>
      <Layout.Container hidden={query.slug === undefined}>
        <Typography.Sub>More Stories</Typography.Sub>
        <Taboola />
      </Layout.Container>
      <Footer />
    </>
  );
};

export default Root;
