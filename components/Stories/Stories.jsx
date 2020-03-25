import React from 'react';
import dynamic from 'next/dynamic';

import { Container } from '../UI';

import * as UI from './Stories.styled';

const Card = dynamic(import('../Card'));

const Stories = ({ posts, category }) => (
  <UI.Stories>
    <Container>
      <UI.Grid>
        <UI.Title>{category.name}</UI.Title>
        <UI.Description>{category.description}</UI.Description>
        {posts.nodes.map((post) => <Card key={post.id} post={post} />)}
      </UI.Grid>
    </Container>
  </UI.Stories>
);

export default Stories;
