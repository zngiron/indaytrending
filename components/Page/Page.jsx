import React from 'react';
import parse from 'html-react-parser';

import { clean } from '../../library/Functions';

import * as S from './Page.styled';

const Page = ({ page }) => {
  const { title, content } = page;

  return (
    <S.Page>
      <S.Container>
        <S.Title>{parse(title)}</S.Title>
        <S.Content>{parse(clean(content))}</S.Content>
      </S.Container>
    </S.Page>
  );
};

export default Page;
