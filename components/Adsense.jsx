/* eslint-disable no-undef */

import React, { useEffect } from 'react';
import styled from '@emotion/styled';

const Root = styled.ins`
  display: block;
  margin: 1.25rem 0;
  text-align: center;
`;

const Adsense = ({
  slot,
  layout,
  format = 'auto',
  responsive = true,
}) => {
  useEffect(() => {
    if (window.adsbygoogle) {
      (adsbygoogle = window.adsbygoogle || []).push({});
    }
  }, []);

  return (
    <Root
      className="adsbygoogle"
      data-ad-client="ca-pub-9878085739428147"
      data-ad-slot={slot}
      data-ad-layout={layout || ''}
      data-ad-format={format}
      data-full-width-responsive={responsive}
    />
  );
};

export default Adsense;
