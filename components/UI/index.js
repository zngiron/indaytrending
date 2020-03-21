import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;
  max-width: var(--container-width);
  padding: 1.25rem;
  margin: 0 auto;

  @media (min-width: 36rem) {
    --container-width: 33.5rem;
  }

  @media (min-width: 48rem) {
    --container-width: 45.5rem; 
  }

  @media (min-width: 64rem) {
    --container-width: 61.5rem;
  }
  
  @media (min-width: 75rem) {
    --container-width: 72.5rem;
  }
`;

export default Container;
