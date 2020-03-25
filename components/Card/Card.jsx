import 'lazysizes';

import React from 'react';
import Link from 'next/link';
import parse from 'html-react-parser';

import * as UI from './Card.styled';

const Card = ({ post }) => {
  const { slug, title, image } = post;

  return (
    <UI.Card>
      <Link href="/[category]/[slug]" as={`/stories/${slug}`} passHref>
        <UI.Item>
          <UI.Title>{parse(title)}</UI.Title>
          <UI.Image
            className="lazyload"
            data-sizes="auto"
            data-src={image.medium || undefined}
            title={parse(title)}
            alt={parse(title)}
            width={1280}
            height={670}
            draggable={false}
          />
        </UI.Item>
      </Link>
    </UI.Card>
  );
};

export default Card;
