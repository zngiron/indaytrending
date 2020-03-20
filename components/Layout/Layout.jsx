import React from 'react';
import { Global } from '@emotion/core';

import Header from '../Header';
import Footer from '../Footer';
import * as S from './Layout.styled';

const Layout = ({ children }) => (
  <>
    <Global styles={S.Root} />
    <Header />
    <S.Main>{children}</S.Main>
    <Footer />
  </>
);
export default Layout;
