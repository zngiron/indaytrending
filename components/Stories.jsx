import React from 'react';
import dynamic from 'next/dynamic';
import styled from '@emotion/styled';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import * as Global from './Global';
import * as Button from './Button';

const Content = dynamic(import('./Content'));
const Card = dynamic(import('./Card'));

const Root = styled.div`
  padding: 2.5rem 0;
`;

const Container = styled(Global.Container)`
  display: grid;
  grid-gap: 1.25rem;

  @media (min-width: ${Global.Breakpoint.md}) {
    grid-template-columns: repeat(2, minmax(auto, 1fr));
  }

  @media (min-width: ${Global.Breakpoint.xl}) {
    grid-template-columns: repeat(3, minmax(auto, 1fr));
  }
`;

const Pagination = styled(Global.Container)`
  display: flex;
  margin-top: 1.25rem;

  ${Button.Primary} {
    margin-right: 0.5rem;
  }
`;

const Text = styled.span`
  margin: 0 0.5rem;
`;

const Stories = ({ posts, category }) => (
  <Root>
    <Content
      title={category?.name}
      description={`</p>${category?.description}</p>`}
    />
    <Container>
      {posts?.edges?.map(({ node }) => <Card key={node.id} post={node} />)}
    </Container>
    <Pagination>
      {posts.pageInfo.hasPreviousPage && (
      <Link
        href="/page"
        as={`/page?category=${category.slug}&before=${posts.pageInfo.startCursor}`}
        prefetch={false}
        passHref
      >
        <Button.Primary>
          <FontAwesomeIcon icon={['far', 'chevron-left']} />
          <Text>Previous</Text>
        </Button.Primary>
      </Link>
      )}
      {posts.pageInfo.hasNextPage && (
      <Link
        href="/page"
        as={`/page?category=${category.slug}&after=${posts.pageInfo.endCursor}`}
        prefetch={false}
        passHref
      >
        <Button.Primary>
          <Text>Next</Text>
          <FontAwesomeIcon icon={['far', 'chevron-right']} />
        </Button.Primary>
      </Link>
      )}
    </Pagination>
  </Root>
);

export default Stories;
