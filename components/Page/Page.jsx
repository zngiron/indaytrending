import React from 'react';
import parse from 'html-react-parser';

import { clean } from '../../library/Functions';

import * as UI from './Page.styled';
import * as Layout from '../UI/Layout.styled';

const Page = ({ page }) => {
  const { title, content } = page;

  return (
    <UI.Page>
      <Layout.Container>
        <UI.Title>{parse(title)}</UI.Title>
        <UI.Content>{parse(clean(content))}</UI.Content>
      </Layout.Container>
    </UI.Page>
  );
};

export default Page;
