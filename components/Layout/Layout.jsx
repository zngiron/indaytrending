import React from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';

import * as Layout from '../UI/Layout.styled';

const Header = dynamic(import('../Header'));
const Footer = dynamic(import('../Footer'));
const Taboola = dynamic(import('../Ads/Taboola'));

const Root = ({ children }) => {
  const { asPath } = useRouter();

  return (
    <>
      <Layout.Global styles={Layout.Styles} />
      <Header />
      <Layout.Main>{children}</Layout.Main>
      <Layout.Container hidden={asPath === '/'}>
        <Taboola />
      </Layout.Container>
      <Footer />
    </>
  );
};

export default Root;
