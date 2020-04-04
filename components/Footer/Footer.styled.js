import styled from '@emotion/styled';
import * as Layout from '../UI/Layout.styled';

export const Footer = styled.footer`
  margin-top: 2.5rem;
  background-color: var(--color-primary);
  font-size: 0.75rem;
  color: var(--color-white);
`;

export const Container = styled(Layout.Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Logo = styled.a`
  margin-top: -3.75rem;
`;

export const Image = styled.img`
  display: block;
  margin: 0 auto;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
`;

export const Item = styled.a`
  display: inline-block;
  padding: 0.75rem;

  &:hover,
  &:active,
  &:focus {
    color: var(--color-tertiary);
  }
`;

export const Divider = styled.span`
  &:after {
    content: ' | ';
  }
`;

export const Copyright = styled.span`
  padding: 1.25rem;
`;
