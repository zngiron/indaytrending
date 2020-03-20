import styled from '@emotion/styled';
import { animated } from 'react-spring';

export const Header = styled.header`
  position: sticky;
  z-index: 100;
  top: 0;
  display: flex;
  height: var(--header-height);
  box-shadow: var(--box-shadow);
  background-color: var(--color-white);
`;

export const Logo = styled.a`
  display: flex;
  align-items: center;
  padding: 0 1.25rem;
  margin-right: auto;
`;

export const Image = styled.img``;

export const Title = styled.h1`
  margin-left: 0.625rem;
  font-size: 0.875rem;
  color: var(--color-primary);
  white-space: nowrap;
`;

export const Nav = styled.nav``;

export const Button = styled.button`
  width: var(--header-height);
  height: var(--header-height);
  border: none;
  background-color: var(--color-primary);
  color: var(--color-white);
  cursor: pointer;

  &:hover {
    background-color: var(--color-secondary);
  }

  &:focus {
    outline: none;
  }
`;

export const Icon = styled(animated.div)`
  will-change: transform;
`;

export const Menu = styled(animated.ul)`
  overflow-y: scroll;
  position: fixed;
  z-index: 10;
  top: var(--header-height);
  right: calc(var(--menu-width) * -1);
  width: var(--menu-width);
  height: calc(100vh - var(--header-height));
  max-width: 100%;
  padding: 0;
  margin: 0;
  list-style: none;
  background-color: var(--color-white);
  will-change: transform;
`;

export const List = styled.li``;

export const Item = styled.a`
  display: block;
  padding: 0.75rem 1.25rem;
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--color-primary);

  &:hover {
    background-color: var(--color-primary);
    color: var(--color-white);
  }
`;
