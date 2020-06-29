import styled from '@emotion/styled';

export const Default = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.25rem;
  border-radius: var(--border-radius);
`;

export const Primary = styled(Default)`
  background-color: var(--color-primary);
  color: var(--color-white);
`;
