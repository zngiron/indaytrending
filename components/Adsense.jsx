/* eslint-disable no-undef */

import { useEffect } from 'react';

function Adsense({ type, slot }) {
  useEffect(() => {
    setTimeout(() => {
      if (window.adsbygoogle) {
        (adsbygoogle = window.adsbygoogle || []).push({});
      }
    }, 500);
  }, []);

  if (type === 'article') {
    return (
      <ins
        className="adsbygoogle block text-center"
        data-ad-layout="in-article"
        data-ad-format="fluid"
        data-ad-client="ca-pub-9878085739428147"
        data-ad-slot={slot}
      />
    );
  }

  return (
    <ins
      className="adsbygoogle block"
      data-ad-client="ca-pub-9878085739428147"
      data-ad-slot={slot}
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  );
}

export default Adsense;
