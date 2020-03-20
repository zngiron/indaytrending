import React from 'react';
import Link from 'next/link';
import parse from 'html-react-parser';

import * as S from './Card.styled';
import Category from '../Category';

const Card = ({ post }) => {
  const {
    slug,
    title,
    image,
    categories,
  } = post;

  return (
    <S.Card>
      <Link href="/[category]/[slug]" as={`/stories/${slug}`} passHref>
        <S.Item>
          <S.Title>{parse(title)}</S.Title>
          <S.Image
            className="lazyload"
            src={image.medium || undefined}
            alt={parse(title)}
            title={parse(title)}
            width={1280}
            height={670}
            loading="lazy"
            draggable={false}
          />
        </S.Item>
      </Link>
      <S.Categories>
        {categories.nodes.map((category) => (
          <Category key={category.id} category={category} />
        ))}
      </S.Categories>
    </S.Card>
  );
};

export default Card;
