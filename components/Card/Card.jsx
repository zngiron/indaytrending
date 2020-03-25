/* eslint-disable no-return-assign */

import React from 'react';
import Link from 'next/link';
import parse from 'html-react-parser';

import * as UI from './Card.styled';

const Card = ({ post }) => {
  const { slug, title, image } = post;

  const handleError = (e) => e.target.src = image.medium || undefined;

  return (
    <UI.Card>
      <Link href="/[category]/[slug]" as={`/stories/${slug}`} passHref>
        <UI.Item>
          <UI.Title>{parse(title)}</UI.Title>
          <UI.Image
            src={`${image.medium}.webp`}
            alt={parse(title)}
            title={parse(title)}
            width={1280}
            height={670}
            className="lazyload"
            draggable={false}
            onError={handleError}
          />
        </UI.Item>
      </Link>
    </UI.Card>
  );
};

export default Card;
