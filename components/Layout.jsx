import dynamic from 'next/dynamic';
import styled from '@emotion/styled';

import Global from './Global';

const Header = dynamic(import('./Header'));
const Footer = dynamic(import('./Footer'));
const Taboola = dynamic(import('./Taboola'));

const Main = styled.main`
  position: relative;
  flex-grow: 1;
  min-height: 100%;
  margin-bottom: auto;
`;

const Root = ({ children }) => (
  <>
    <Global />
    <Header />
    <Main>{children}</Main>
    <Taboola />
    <Footer />
  </>
);

export default Root;
