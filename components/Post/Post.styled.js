import styled from '@emotion/styled';

export const Post = styled.div``;

export const Grid = styled.div`
  @media (min-width: 48rem) {
    display: grid;
    grid-template-columns: auto 18.75rem;  
    grid-gap: 1.25rem;
  }
`;

export const Header = styled.div`
  @media (min-width: 48rem) {
    grid-column: span 2;
  }
`;

export const Title = styled.h2``;

export const Card = styled.div`
  /* overflow: hidden; */
  position: relative;
  padding-top: 52.34375%;
  margin-bottom: 1.25rem;
  border-radius: var(--border-radius);
  background-image: var(--color-gradient);
  transform: translateZ(0);
  will-change: contents;
`;

export const Image = styled.img`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  border-radius: var(--border-radius);
  object-fit: cover;
  mix-blend-mode: darken;
`;

export const Social = styled.div`
  position: absolute;
  left: 1.25rem;
  bottom: 1.25rem;
`;

export const Facebook = styled.div``;

export const Categories = styled.div``;

export const Category = styled.a`
  display: inline-flex;
  padding: 0.5rem 1.25rem;
  margin: 0.25rem 0;
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
    margin-right: 0.25rem;
  }
`;

export const Content = styled.div`
  img {
    width: 100%;
    height: auto;
    max-width: 100%;
    border-radius: var(--border-radius);
  }

  p {
    font-size: 0.875rem;
    line-height: 1.5;
  }
`;

export const Flex = styled.div`
  display: flex;
`;

export const FacebookPage = styled.div`
  margin: 1.25rem auto;
`;
