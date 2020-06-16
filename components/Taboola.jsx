/* eslint-disable no-underscore-dangle */
/* eslint-disable no-undef */

import React, { useEffect } from 'react';
import styled from '@emotion/styled';

const Root = styled.div`
  margin: 0;
`;

const Taboola = () => {
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
    <Root id="taboola-below-article-thumbnails" />
  );
};

export default Taboola;
