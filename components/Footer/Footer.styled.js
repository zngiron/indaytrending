import styled from '@emotion/styled';

export const Footer = styled.footer`
  margin-top: 2.5rem;
  background-color: var(--color-primary);
  font-size: 0.75rem;
  color: var(--color-white);
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: var(--container--width, 100%);
  margin: 0 1.25rem;
`;

export const Logo = styled.a`
  margin-top: -2.5rem;
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

export const Copyright = styled.span`
  padding: 1.25rem;
`;
