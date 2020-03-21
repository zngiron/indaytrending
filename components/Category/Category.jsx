import React from 'react';
import Link from 'next/link';

import * as UI from './Category.styled';

const Category = ({ category }) => {
  const { slug, name } = category;

  return (
    <Link href="/[category]" as={`/${slug}`} passHref>
      <UI.Category>{name}</UI.Category>
    </Link>
  );
};

export default Category;
