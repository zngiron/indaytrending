import styled from '@emotion/styled';

export const Footer = styled.footer`
  margin-top: 3.75rem;
  background-color: var(--color-primary);
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
  font-size: 0.75rem;
`;

export const Item = styled.a`
  &:not(:last-child) {
    &::after {
      margin: 0 0.25rem;
      color: var(--color-white);
      content: '•';
    };
  }

  &:hover,
  &:active,
  &:focus {
    color: var(--color-tertiary);
  }
`;

export const Copyright = styled.small`
  display: block;
  padding: 1.25rem;
`;
