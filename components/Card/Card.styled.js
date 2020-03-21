import styled from '@emotion/styled';

export const Card = styled.article`
  overflow: hidden;
  position: relative;
  padding-top: 52.34375%;
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  background-image: var(--color-gradient);
  transform: translateZ(0);
  will-change: contents;
`;

export const Item = styled.a`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
`;

export const Title = styled.h3`
  position: absolute;
  z-index: 10;
  bottom: 0;
  width: 100%;
  padding: 1.25rem;
  margin: 0;
  color: var(--color-white);

  ${Item}:hover &,
  ${Item}:active &,
  ${Item}:focus & {
    color: var(--color-tertiary);
  }
`;

export const Image = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  mix-blend-mode: darken;
  transform: scale(1.05);
  transition: var(--transition);

  ${Item}:hover &,
  ${Item}:active &,
  ${Item}:focus & {
    transform: scale(1.1)
  }
`;
