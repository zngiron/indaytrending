import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import parse from 'html-react-parser';

import { clean } from '../../library/Functions';
import { Container } from '../UI';

import * as UI from './Post.styled';

const Adsense = dynamic(import('../Ads/Adsense'));
const Sidebar = dynamic(import('../Sidebar'));

const Ads = (item, key) => (
  <React.Fragment key={key}>
    {parse(item)}
    {(key % 8 === 0 && key !== 0) && <Adsense slot="3640794162" format="fluid" layout="in-article" />}
  </React.Fragment>
);

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
        <UI.Grid>
          <UI.Header>
            <UI.Title>{parse(title)}</UI.Title>
            <UI.Image
              src={image.medium}
              title={parse(title)}
              alt={parse(title)}
              width={1280}
              height={670}
              draggable={false}
              loading="eager"
            />
            <UI.Categories>
              {categories.nodes.map((category) => (
                <Link key={category.id} href="/[category]" as={`/${category.slug}`} passHref>
                  <UI.Category>{category.name}</UI.Category>
                </Link>
              ))}
            </UI.Categories>
          </UI.Header>
          <UI.Content>
            <Adsense slot="6234342116" />
            {clean(content).match(/<.*?>.*?<\/.*?>/gms).map(Ads)}
            <Adsense slot="7634905842" />
          </UI.Content>
          <Sidebar />
        </UI.Grid>
      </Container>
    </UI.Post>
  );
};

export default Post;
