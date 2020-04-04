import styled from '@emotion/styled';

export const Post = styled.article``;

export const Grid = styled.div`
  @media (min-width: 48rem) {
    display: grid;
    grid-template-columns: auto 18.75rem;  
    grid-gap: 1.25rem;
  }
`;

export const Header = styled.header`
  @media (min-width: 48rem) {
    grid-column: span 2;
  }
`;

export const Title = styled.h2``;

export const Image = styled.img`
  display: block;
  width: 100%;
  height: auto;
  margin-bottom: 1.25rem;
  border-radius: var(--border-radius);
`;

export const Categories = styled.div`
  margin-bottom: 1.25rem;
`;

export const Category = styled.a`
  display: inline-flex;
  padding: 0.5rem 1.25rem;
  border-radius: var(--border-radius);
  background-color: var(--color-primary);
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--color-white);
  transition: var(--transition);

  &:hover,
  &:active,
  &:focus {
    background-color: var(--color-secondary);
  }

  &:not(:last-child) {
    margin-right: 0.5rem;
  }
`;

export const Content = styled.div`
  img {
    width: 100%;
    height: auto;
    max-width: 100%;
    border-radius: var(--border-radius);
  }
`;
