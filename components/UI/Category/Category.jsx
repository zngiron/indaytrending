import React from 'react';
import Link from 'next/link';

import * as S from './Category.styled';

const Category = ({ category }) => {
  const { slug, name } = category;

  return (
    <Link href="/[category]" as={`/${slug}`} passHref>
      <S.Category>{name}</S.Category>
    </Link>
  );
};

export default Category;
