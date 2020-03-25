import React from 'react';
import parse from 'html-react-parser';

import { clean } from '../../library/Functions';
import { Container } from '../UI';

import * as UI from './Page.styled';

const Page = ({ page }) => {
  const { title, content } = page;

  return (
    <UI.Page>
      <Container>
        <UI.Title>{parse(title)}</UI.Title>
        <UI.Content>{parse(clean(content))}</UI.Content>
      </Container>
    </UI.Page>
  );
};

export default Page;
