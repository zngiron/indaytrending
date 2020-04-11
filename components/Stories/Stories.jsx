import React from 'react';
import dynamic from 'next/dynamic';

import * as UI from './Stories.styled';
import * as Layout from '../UI/Layout.styled';
import * as Typography from '../UI/Typography.styled';

const Card = dynamic(import('../Card'));

const Stories = ({ posts, category }) => (
  <UI.Stories>
    <Layout.Container>
      <UI.Header>
        <Typography.Title>{category.name}</Typography.Title>
        <Typography.Description>{category.description}</Typography.Description>
      </UI.Header>
      <UI.Grid>
        {posts.nodes.map((post) => <Card key={post.id} post={post} />)}
      </UI.Grid>
    </Layout.Container>
  </UI.Stories>
);

export default Stories;
