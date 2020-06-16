import React from 'react';
import dynamic from 'next/dynamic';
import styled from '@emotion/styled';

import * as Global from './Global';

const Content = dynamic(import('./Content'));
const Card = dynamic(import('./Card'));

const Root = styled.div`
  padding: 2.5rem 0;
`;

const Container = styled(Global.Container)`
  display: grid;
  grid-gap: 1.25rem;

  @media (min-width: ${Global.Breakpoint.lg}) {
    grid-template-columns: repeat(3, minmax(auto, 1fr));
  }
`;

const Stories = ({ posts, category }) => (
  <Root>
    <Content
      title={category?.name}
      description={category?.description}
    />
    <Container>
      {posts?.edges?.map(({ node }) => <Card key={node.id} post={node} />)}
    </Container>
  </Root>
);

export default Stories;
