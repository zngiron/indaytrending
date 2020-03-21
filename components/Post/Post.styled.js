import styled from '@emotion/styled';

export const Post = styled.div``;

export const Title = styled.h2``;

export const Image = styled.img`
  display: block;
  width: 100%;
  height: auto;
  margin-bottom: 1.25rem;
  border-radius: var(--border-radius);
`;

export const Content = styled.div`
  width: 100%;
  height: auto;

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

export const Categories = styled.div``;

export const Category = styled.a`
  display: inline-block;
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
