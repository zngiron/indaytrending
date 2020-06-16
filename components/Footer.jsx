import React from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';

import * as Global from './Global';

const Root = styled.footer`
  margin-top: 2.5rem;
  background-color: var(--color-primary);
  font-size: 0.75rem;
  color: var(--color-white);
`;

const Container = styled(Global.Container)`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Logo = styled.a`
  margin-top: -2.5rem;
`;

const Image = styled.img`
  display: block;
  margin: 0 auto;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
`;

const Menu = styled.ul`
  display: flex;
  padding: 0;
  margin: 0;
  list-style: none;
`;

const List = styled.li`
  &:not(:last-of-type) {
    &::after {
      margin: 0.5rem;
      content: '|';
    }
  }
`;

const Item = styled.a`
  display: inline-block;
  padding: 0.25rem;

  &:hover,
  &:active,
  &:focus {
    color: var(--color-tertiary);
  }  
`;

const Copyright = styled.div`
  padding: 1.25rem;
`;

const Footer = () => (
  <Root>
    <Container>
      <Link href="/" passHref>
        <Logo title="Inday Trending">
          <Image
            src="/static/indaytrending-icon.png"
            width={80}
            height={80}
            title="Inday Trending"
            alt="Inday Trending"
            draggable={false}
          />
          <Image
            src="/static/indaytrending-logo.svg"
            width={160}
            height={80}
            title="Inday Trending"
            alt="Inday Trending"
            draggable={false}
          />
        </Logo>
      </Link>
      <Nav>
        <Menu>
          <List>
            <Link href="/disclaimer" passHref>
              <Item>Disclaimer</Item>
            </Link>
          </List>
          <List>
            <Link href="/privacy" passHref>
              <Item>Privacy Policy</Item>
            </Link>
          </List>
        </Menu>
      </Nav>
      <Copyright>
        &copy;2020
        <Item href="https://likha.media" target="__blank" rel="noopener noreferrer">Likha Media</Item>
      </Copyright>
    </Container>
  </Root>
);

export default Footer;
