import React from 'react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import styled from '@emotion/styled';
import parse from 'html-react-parser';

import * as Global from './Global';

const { DOMAIN } = process.env;

const Root = styled.div``;

const Container = styled(Global.Container)``;

const Grid = styled.div`
  @media (min-width: ${Global.Breakpoint.md}) {
    display: grid;
    grid-template-columns: auto 18.75rem;  
    grid-gap: 1.25rem;
  }
`;

const Header = styled.div`
  @media (min-width: ${Global.Breakpoint.md}) {
    grid-column: span 2;
  }
`;

const Title = styled.h2``;

const Card = styled.div`
  position: relative;
  padding-top: 52.34375%;
  margin-bottom: 1.25rem;
  border-radius: var(--border-radius);
  background-image: var(--color-gradient);
  transform: translateZ(0);
  will-change: contents;
`;

const Image = styled.img`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  border-radius: var(--border-radius);
  object-fit: cover;
  mix-blend-mode: darken;
`;

const Social = styled.div`
  position: absolute;
  left: 1.25rem;
  bottom: 1.25rem;
`;

const Facebook = styled.div``;

const Categories = styled.div``;

const Category = styled.a`
  display: inline-flex;
  padding: 0.5rem 1.25rem;
  margin: 0.25rem 0;
  border-radius: var(--border-radius);
  background-color: var(--color-primary);
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--color-white);
  transition: var(--transition);

  &:hover,
  &:active,
  &:focus {
    background-color: var(--color-secondary);
  }

  &:not(:last-child) {
    margin-right: 0.25rem;
  }
`;

const Content = styled.div`
  img {
    width: 100%;
    height: auto;
    max-width: 100%;
    border-radius: var(--border-radius);
  }

  p {
    font-size: 0.875rem;
    line-height: 1.5;
  }
`;

const Flex = styled.div`
  display: flex;
`;

const FacebookPage = styled.div`
  margin: 1.25rem auto;
`;

const Adsense = dynamic(import('./Adsense'));
const Sidebar = dynamic(import('./Sidebar'));

const Ads = (item, key) => (
  <React.Fragment key={key}>
    {parse(item)}
    {(key === 2) && <Adsense slot="6234342116" />}
    {(key === 6 && (
      <Flex>
        <FacebookPage
          className="fb-page"
          data-href="https://www.facebook.com/indaytrending/"
          data-tabs=""
          data-show-facepile={false}
          data-hide-cta
        />
      </Flex>
    ))}
    {(key % 8 === 0 && key !== 0) && <Adsense slot="3640794162" format="fluid" layout="in-article" />}
  </React.Fragment>
);

const Post = ({ post }) => {
  const { asPath } = useRouter();

  return (
    <Root>
      <Container>
        <Grid>
          <Header>
            <Title>{parse(post?.title)}</Title>
            <Card>
              <Image
                src={post?.image.medium}
                title={parse(post?.title)}
                alt={parse(post?.title)}
                width={1280}
                height={670}
                draggable={false}
                loading="eager"
              />
              <Social>
                <Facebook
                  className="fb-like"
                  data-href={`${DOMAIN}${asPath}`}
                  data-layout="button_count"
                  data-action="like"
                  data-size="large"
                  data-share="true"
                />
              </Social>
            </Card>
            <Categories>
              {post?.categories?.edges?.map(({ node }) => (
                <Link key={node.id} href="/[category]" as={`/${node.slug}`} passHref>
                  <Category>{node.name}</Category>
                </Link>
              ))}
            </Categories>
          </Header>
          <Content>
            {post?.content.match(/<.*?>.*?<\/.*?>/gms).map(Ads)}
          </Content>
          <Sidebar />
        </Grid>
      </Container>
    </Root>
  );
};

export default Post;
