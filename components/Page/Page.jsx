import React from 'react';
import parse from 'html-react-parser';

import { clean } from '../../library/Functions';

import * as UI from './Page.styled';
import * as Layout from '../UI/Layout.styled';
import * as Typography from '../UI/Typography.styled';

const Page = ({ page }) => {
  const { title, content } = page;

  return (
    <UI.Page>
      <Layout.Container>
        <Typography.Title>{parse(title)}</Typography.Title>
        <UI.Content>{parse(clean(content))}</UI.Content>
      </Layout.Container>
    </UI.Page>
  );
};

export default Page;
