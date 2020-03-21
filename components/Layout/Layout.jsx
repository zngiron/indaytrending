import React from 'react';
import { Global } from '@emotion/core';

import * as UI from './Layout.styled';
import Header from '../Header';
import Footer from '../Footer';

const Layout = ({ children }) => (
  <>
    <Global styles={UI.Root} />
    <Header />
    <UI.Main>{children}</UI.Main>
    <Footer />
  </>
);
export default Layout;
