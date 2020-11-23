/* eslint-disable no-underscore-dangle */
/* eslint-disable no-undef */

import { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';

import * as Global from './Global';

const Root = styled.div``;
const Container = styled(Global.Container)``;
const Title = styled.h2``;

const Ad = styled.div`
  && {
    margin: 0;
  }
`;

const Taboola = () => {
  const { query } = useRouter();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!loaded) {
      window._taboola = window._taboola || [];
      _taboola.push({
        mode: 'thumbnails-a',
        container: 'taboola-below-article-thumbnails',
        placement: 'Below Article Thumbnails',
        target_type: 'mix',
      });

      _taboola.push({ flush: true });

      setLoaded(true);
    }
  }, []);

  return (
    <Root hidden={query?.slug === undefined}>
      {(query.slug || loaded) && (
        <Container>
          <Title>More Stories</Title>
          <Ad id="taboola-below-article-thumbnails" />
        </Container>
      )}
    </Root>
  );
};

export default Taboola;
