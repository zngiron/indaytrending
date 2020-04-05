import React from 'react';
import dynamic from 'next/dynamic';

import * as Layout from '../UI/Layout.styled';

const Header = dynamic(import('../Header'));
const Footer = dynamic(import('../Footer'));

const Root = ({ children }) => (
  <>
    <Layout.Global styles={Layout.Styles} />
    <Header />
    <Layout.Main>{children}</Layout.Main>
    <Footer />
  </>
);
export default Root;
