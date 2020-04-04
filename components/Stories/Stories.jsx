import React from 'react';
import dynamic from 'next/dynamic';

import * as UI from './Stories.styled';
import * as Layout from '../UI/Layout.styled';

const Card = dynamic(import('../Card'));

const Stories = ({ posts, category }) => (
  <UI.Stories>
    <Layout.Container>
      <UI.Header>
        <UI.Title>{category.name}</UI.Title>
        <UI.Description>{category.description}</UI.Description>
      </UI.Header>
      <UI.Grid>
        {posts.nodes.map((post) => <Card key={post.id} post={post} />)}
      </UI.Grid>
    </Layout.Container>
  </UI.Stories>
);

export default Stories;
