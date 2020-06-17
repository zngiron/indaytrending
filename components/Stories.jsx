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

  @media (min-width: ${Global.Breakpoint.md}) {
    grid-template-columns: repeat(2, minmax(auto, 1fr));
  }

  @media (min-width: ${Global.Breakpoint.xl}) {
    grid-template-columns: repeat(3, minmax(auto, 1fr));
  }
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
  </Root>
);

export default Stories;
