import React from 'react';
import dynamic from 'next/dynamic';
import styled from '@emotion/styled';

import Global from './Global';

const Header = dynamic(import('./Header'));
const Footer = dynamic(import('./Footer'));
const Taboola = dynamic(import('./Taboola'));

const Facebook = styled.div``;
const Main = styled.main`
  margin-bottom: auto;
`;

const Root = ({ children }) => (
  <>
    <Facebook id="fb-root" />
    <Global />
    <Header />
    <Main>{children}</Main>
    <Taboola />
    <Footer />
  </>
);

export default Root;
