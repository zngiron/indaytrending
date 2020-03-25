import React from 'react';
import dynamic from 'next/dynamic';
import { Global } from '@emotion/core';

import * as UI from './Layout.styled';

const Header = dynamic(import('../Header'));
const Footer = dynamic(import('../Footer'));

const Layout = ({ children }) => (
  <>
    <Global styles={UI.Root} />
    <Header />
    <UI.Main>{children}</UI.Main>
    <Footer />
  </>
);
export default Layout;
