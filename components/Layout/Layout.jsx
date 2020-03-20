import React from 'react';
import { Global } from '@emotion/core';

import * as S from './Layout.styled';
import Header from '../Header';
import Footer from '../Footer';

const Layout = ({ children }) => (
  <>
    <Global styles={S.Root} />
    <Header />
    <S.Main>{children}</S.Main>
    <Footer />
  </>
);
export default Layout;
