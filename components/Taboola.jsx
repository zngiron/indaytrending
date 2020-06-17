/* eslint-disable no-underscore-dangle */
/* eslint-disable no-undef */

import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';

import * as Global from './Global';

const Root = styled.div``;
const Container = styled(Global.Container)``;
const Title = styled.h2``;

const Ad = styled.div`
  margin: 0;
`;

const Taboola = () => {
  const { query } = useRouter();

  useEffect(() => {
    window._taboola = window._taboola || [];

    _taboola.push({ article: 'auto' });
    _taboola.push({
      mode: 'thumbnails-a',
      container: 'taboola-below-article-thumbnails',
      placement: 'Below Article Thumbnails',
      target_type: 'mix',
    });

    _taboola.push({ flush: true });
  }, []);

  return (
    <Root hidden={query.slug === undefined}>
      <Container>
        <Title>More Stories</Title>
        <Ad id="taboola-below-article-thumbnails" />
      </Container>
    </Root>
  );
};

export default Taboola;
