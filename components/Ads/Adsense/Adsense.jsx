/* eslint-disable no-undef */

import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

const Adsense = ({
  slot,
  layout,
  format = 'auto',
  responsive = true,
}) => {
  const { asPath } = useRouter();

  useEffect(() => {
    if (window.adsbygoogle) {
      (adsbygoogle = window.adsbygoogle || []).push({});
    }
  }, [asPath]);

  return (
    <div key={asPath} style={{ textAlign: 'center' }}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block', margin: '1.25rem 0', textAlign: 'center' }}
        data-ad-client="ca-pub-9878085739428147"
        data-ad-slot={slot}
        data-ad-layout={layout || ''}
        data-ad-format={format}
        data-full-width-responsive={responsive}
      />
    </div>
  );
};

export default Adsense;
