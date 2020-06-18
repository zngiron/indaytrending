import React, { useState } from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import * as Global from './Global';

import categories from '../data/menu.json';

const Root = styled.header`
  position: sticky;
  z-index: 1000;
  top: 0;
  display: flex;
  justify-content: center;
  height: var(--header-height);
  box-shadow: var(--box-shadow);
  background-color: var(--color-white);
  
  @media (min-width: ${Global.Breakpoint.xl}) {
    justify-content: flex-start;
  }
`;

const Logo = styled.a`
  display: flex;
  align-items: center;
  padding: 0 1.25rem;
  
  @media (min-width: ${Global.Breakpoint.xl}) {
    margin-right: auto;
  }
`;

const Image = styled.img`
  margin-right: 0.5rem;
`;

const Title = styled.div`
  font-size: 0.875rem;
  font-weight: var(--font-weight-bold);
  color: var(--color-primary);
  white-space: nowrap;
`;

const Nav = styled.nav`
  @media (min-width: ${Global.Breakpoint.xl}) {
    margin-right: 1.25rem;
  }
`;

const Menu = styled.ul`
  position: fixed;
  top: 0;
  left: calc(-1 * var(--menu-width));
  width: var(--menu-width);
  height: 100vh;
  height: -webkit-fill-available;
  padding: 0;
  padding-top: var(--header-height);
  margin: 0;
  list-style: none;
  background-color: var(--color-primary);
  transition: var(--transition);
  will-change: transform;

  &[data-menu] {
    transform: translate3d(var(--menu-width), 0, 0);
  }

  @media (min-width: ${Global.Breakpoint.xl}) { 
    position: static;
    display: flex;
    width: auto;
    height: 100%;
    padding-top: 0;
    background-color: transparent;
    transition: none;
    
    &[data-menu] {
      transform: translate3d(0, 0, 0);
    }
  }
`;

const List = styled.li``;

const Item = styled.a`
  position: relative;
  display: flex;
  align-items: center;
  padding: 0.75rem 1.25rem;
  font-size: 1.25rem;
  font-weight: var(--font-weight-bold);
  color: var(--color-white);

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    background-color: var(--color-secondary);
    transition: var(--transition);
    transform: scale3d(0, 1, 1);
    transform-origin: left center;
    content: '';
  }

  &:hover,
  &:active,
  &:focus {
    &::after {
      transform: scale3d(1, 1, 1);
    }
  }

  @media (min-width: ${Global.Breakpoint.xl}) {
    height: 100%;
    padding: 0.75rem;
    font-size: 1rem;
    color: var(--color-primary);
   
    &::after {
      top: auto;
      bottom: 0;
      height: 0.25rem;
      background-color: var(--color-primary);
      transform-origin: center center;
    }
  }
`;

const Mobile = styled.button`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: var(--header-height);
  height: var(--header-height);
  color: var(--color-black);
  transition: var(--transition);
  transform: rotate(0);
  will-change: transform;

  &:hover,
  &:active,
  &:focus {
    color: var(--color-primary);
  }

  &[data-menu] {
    color: white;
    transform: rotate(180deg);
  }

  @media (min-width: ${Global.Breakpoint.xl}) {
    display: none;
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  height: -webkit-fill-available;
  background-color: var(--color-black);
  opacity: 0;
  pointer-events: none;
  transition: var(--transition);
  will-change: contents;
  cursor: auto;

  &[data-overlay] {
    opacity: 0.8;
    pointer-events: auto;
    cursor: pointer;
  }
`;

const Header = () => {
  const [menu, setMenu] = useState(false);
  const handleMenu = (action) => ((action === 'Mobile') ? setMenu(!menu) : setMenu(false));

  return (
    <Root>
      <Overlay data-overlay={menu || undefined} onClick={() => handleMenu()} />
      <Link href="/" passHref>
        <Logo onClick={() => handleMenu()}>
          <Image
            src="/static/indaytrending-icon.png"
            alt="Inday Trending"
            title="Inday Trending"
            width={40}
            height={40}
            draggable={false}
            loading="eager"
          />
          <Title>Inday Trending</Title>
        </Logo>
      </Link>
      <Nav>
        <Menu data-menu={menu || undefined}>
          {categories?.nodes.map((category) => (
            <List key={category.id}>
              <Link href="/[category]" as={`/${category.slug}`} passHref>
                <Item onClick={() => handleMenu()}>{category.name}</Item>
              </Link>
            </List>
          ))}
        </Menu>
        <Mobile data-menu={menu || undefined} onClick={() => handleMenu('Mobile')} aria-label="Menu">
          <FontAwesomeIcon icon={['far', menu ? 'times' : 'bars']} />
        </Mobile>
      </Nav>
    </Root>
  );
};

export default Header;
