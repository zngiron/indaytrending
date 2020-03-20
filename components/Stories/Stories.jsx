import React from 'react';
import * as S from './Stories.styled';
import Card from '../UI/Card';

const Stories = ({ posts, category }) => (
  <S.Stories>
    <S.Container>
      <S.Grid>
        <S.Title>{category.name}</S.Title>
        <S.Description>{category.description}</S.Description>
        {posts.nodes.map((post) => (
          <Card key={post.id} post={post} />
        ))}
      </S.Grid>
    </S.Container>
  </S.Stories>
);

export default Stories;
