import styled from '@emotion/styled';

export const Stories = styled.div``;

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

export const Header = styled.header`
  margin-bottom: 2.5rem;
`;

export const Title = styled.h2`
  margin-bottom: 0;
  font-size: 2em;
  color: var(--color-primary); 
`;

export const Description = styled.p``;
