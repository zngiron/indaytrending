import styled from '@emotion/styled';

export const Category = styled.a`
  display: inline-block;
  padding: 0.5rem 1.25rem;
  border-radius: var(--border-radius);
  background-color: var(--color-black);
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--color-white);
  transition: var(--transition);

  &:hover,
  &:active,
  &:focus {
    background-color: var(--color-white);
    color: var(--color-primary);
  }

  &:not(:last-child) {
    margin-right: 0.5rem;
  }
`;

export default Category;
