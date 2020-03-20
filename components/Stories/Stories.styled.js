import styled from '@emotion/styled';

export const Stories = styled.div``;

export const Container = styled.div`
  width: 100%;
  max-width: var(--container-width);
  padding: 1.25rem;
  margin: 0 auto;
`;

export const Title = styled.h2`
  margin-bottom: 0;
  font-size: 2em;
  color: var(--color-primary);

  @media (min-width: 48rem) {
    grid-column: 1/3;
  }

  @media (min-width: 64rem) {
    grid-column: 1/4;
  }
`;

export const Description = styled.p`
  margin-top: 0;

  @media (min-width: 48rem) {
    grid-column: 1/3;
  }

  @media (min-width: 64rem) {
    grid-column: 1/4;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-gap: 1.25rem;
  
  @media (min-width: 48rem) {
    grid-template-columns: repeat(2, 1fr);  
  }

  @media (min-width: 64rem) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
