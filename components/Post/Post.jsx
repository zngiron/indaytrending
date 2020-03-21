import React from 'react';
import Link from 'next/link';
import parse from 'html-react-parser';

import { clean } from '../../library/Functions';

import * as UI from './Post.styled';
import { Container } from '../UI';


const Post = ({ post }) => {
  const {
    title,
    image,
    content,
    categories,
  } = post;

  return (
    <UI.Post>
      <Container>
        <UI.Title>{parse(title)}</UI.Title>
        <UI.Image
          src={image.medium}
          alt={parse(title)}
          title={parse(title)}
          width={1280}
          height={670}
          className="lazyload"
          loading="lazy"
          draggable={false}
        />
        <UI.Categories>
          {categories.nodes.map((category) => (
            <Link href="/[category]" as={`/${category.slug}`} passHref>
              <UI.Category>{category.name}</UI.Category>
            </Link>
          ))}
        </UI.Categories>
        <UI.Content>{parse(clean(content))}</UI.Content>
      </Container>
    </UI.Post>
  );
};

export default Post;
