/* eslint-disable no-return-assign */

import React from 'react';
import Link from 'next/link';
import parse from 'html-react-parser';

import * as UI from './Post.styled';
import { clean } from '../../library/Functions';
import { Container } from '../UI';

import Adsense from '../Ads/Adsense';
import Taboola from '../Ads/Taboola';
import Sidebar from '../Sidebar';

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

  const handleError = (e) => e.target.src = image.featured || undefined;

  return (
    <UI.Post>
      <Container>
        <UI.Grid>
          <UI.Title>{parse(title)}</UI.Title>
          <UI.Image
            src={`${image.featured}.webp`}
            alt={parse(title)}
            title={parse(title)}
            width={1280}
            height={670}
            className="lazyload"
            loading="lazy"
            draggable={false}
            onError={handleError}
          />
          <UI.Categories>
            {categories.nodes.map((category) => (
              <Link href="/[category]" as={`/${category.slug}`} passHref>
                <UI.Category>{category.name}</UI.Category>
              </Link>
            ))}
          </UI.Categories>
          <UI.Content>
            {clean(content).match(/<.*?>.*?<\/.*?>/gms).map(Ads)}
          </UI.Content>
          <Sidebar />
        </UI.Grid>
        <UI.Section>
          <UI.Subtitle>More Stories</UI.Subtitle>
          <Taboola />
        </UI.Section>
      </Container>
    </UI.Post>
  );
};

export default Post;
