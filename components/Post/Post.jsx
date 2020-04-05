import parse from 'html-react-parser';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { DOMAIN } from '../../library/Config';
import { clean } from '../../library/Functions';

import Adsense from '../Ads/Adsense';
import Sidebar from '../Sidebar';

import * as UI from './Post.styled';
import * as Layout from '../UI/Layout.styled';
import * as Typography from '../UI/Typography.styled';

const Ads = (item, key) => (
  <React.Fragment key={key}>
    {parse(item)}
    {(key === 2) && <Adsense slot="6234342116" />}
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

  const { asPath } = useRouter();

  return (
    <UI.Post>
      <Layout.Container>
        <UI.Grid>
          <UI.Header>
            <Typography.Title>{parse(title)}</Typography.Title>
            <UI.Card>
              <UI.Image
                src={image.medium}
                title={parse(title)}
                alt={parse(title)}
                width={1280}
                height={670}
                draggable={false}
                loading="eager"
              />
              <UI.Social>
                <UI.Facebook
                  className="fb-like"
                  data-href={`${DOMAIN}${asPath}`}
                  data-layout="button_count"
                  data-action="like"
                  data-size="large"
                  data-share="true"
                />
              </UI.Social>
            </UI.Card>
            <UI.Categories>
              {categories.nodes.map((category) => (
                <Link key={category.id} href="/[category]" as={`/${category.slug}`} passHref>
                  <UI.Category>{category.name}</UI.Category>
                </Link>
              ))}
            </UI.Categories>
          </UI.Header>
          <UI.Content>
            {clean(content).match(/<.*?>.*?<\/.*?>/gms).map(Ads)}
          </UI.Content>
          <Sidebar />
        </UI.Grid>
      </Layout.Container>
    </UI.Post>
  );
};

export default Post;
