import styled from '@emotion/styled';

export const Post = styled.div``;

export const Grid = styled.div`
  @media (min-width: 48rem) {
    display: grid;
    grid-gap: 1.25rem;
    grid-template-columns: auto 18.75rem;  
  }
`;

export const Title = styled.h2`
  @media (min-width: 48rem) {
    grid-column: 1/3;
  }
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  height: auto;
  margin-bottom: 1.25rem;
  border-radius: var(--border-radius);

  @media (min-width: 48rem) {
    grid-column: 1/3;
  }
`;

export const Categories = styled.div`
  @media (min-width: 48rem) {
    grid-column: 1/3;
  }
`;

export const Category = styled.a`
  display: inline-flex;
  padding: 0.5rem 1.25rem;
  margin-bottom: 0.5rem;
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
  margin-top: 1.25rem;
  
  p {
    font-size: 0.875rem;
    line-height: 1.5;
  }

  img {
    width: 100%;
    height: auto;
    max-width: 100%;
    border-radius: var(--border-radius);
  }
`;

export const Section = styled.section``;
export const Subtitle = styled.h3``;
