import React, { memo } from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';
import parse from 'html-react-parser';

const Root = styled.article`
  overflow: hidden;
  position: relative;
  padding-top: 52.34375%;
  border-radius: var(--border-radius);
  transform: translate3d(0, 0, 0);
  will-change: contents;

  &::before {
    position: absolute;
    top: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    background-image: var(--color-gradient);
    pointer-events: none;
    content: '';
  }
`;

const Item = styled.a`  
  position: absolute;
  top: 0;
  display: block;
  width: 100%;
  height: 100%;
`;

const Title = styled.h2`
  position: absolute;
  z-index: 10;
  bottom: 0;
  width: 100%;
  padding: 1.25rem;
  margin: 0;
  font-size: 1rem;
  color: var(--color-white);

  ${Item}:hover &,
  ${Item}:active &,
  ${Item}:focus & {
    color: var(--color-tertiary);
  }
`;

const Image = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale3d(1.05, 1.05, 1);
  transition: var(--transition);
  will-change: transform;

  ${Item}:hover &,
  ${Item}:active &,
  ${Item}:focus & {
    transform: scale3d(1.1, 1.1, 1);
  }
`;

const Card = ({ post }) => (
  <Root>
    <Link href="/stories/[slug]" as={`/stories/${post?.slug}`} passHref>
      <Item>
        <Image
          src={post?.image?.medium}
          title={parse(post?.title)}
          alt={parse(post?.title)}
          width={1280}
          height={670}
          draggable={false}
          loading="lazy"
        />
        <Title>{parse(post?.title)}</Title>
      </Item>
    </Link>
  </Root>
);

export default memo(Card);
