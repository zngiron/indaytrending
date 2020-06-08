import parse from 'html-react-parser';

import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';

import { clean, copy } from '../../library/Functions';
import { DOMAIN } from '../../library/Config';

import * as UI from './Post.styled';
import * as Layout from '../UI/Layout.styled';
import * as Typography from '../UI/Typography.styled';

const Adsense = dynamic(import('../Ads/Adsense'));
const Sidebar = dynamic(import('../Sidebar'));

const Ads = (item, key) => (
  <React.Fragment key={key}>
    {parse(item)}
    {(key === 2) && <Adsense slot="6234342116" />}
    {(key === 6 && (
      <UI.Flex>
        <UI.FacebookPage
          className="fb-page"
          data-href="https://www.facebook.com/indaytrending/"
          data-tabs=""
          data-show-facepile={false}
          data-hide-cta
        />
      </UI.Flex>
    ))}
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
            <Typography.Title onCopy={copy}>{parse(title)}</Typography.Title>
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
          <UI.Content onCopy={copy}>
            {clean(content).match(/<.*?>.*?<\/.*?>/gms).map(Ads)}
          </UI.Content>
          <Sidebar />
        </UI.Grid>
      </Layout.Container>
    </UI.Post>
  );
};

export default Post;
