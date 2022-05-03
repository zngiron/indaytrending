/* eslint-disable no-undef */

import { useEffect } from 'react';

function Adsense({ type, slot }) {
  useEffect(() => {
    setTimeout(() => {
      if (window.adsbygoogle) {
        (window.adsbygoogle || []).push({});
      }
    }, 1000);
  }, []);

  if (type === 'article') {
    return (
      <ins
        className="adsbygoogle block mx-auto text-center"
        data-ad-client="ca-pub-9878085739428147"
        data-ad-slot={slot}
        data-ad-format="fluid"
        data-ad-layout="in-article"
      />
    );
  }

  return (
    <ins
      className="adsbygoogle block mx-auto text-center"
      data-ad-client="ca-pub-9878085739428147"
      data-ad-slot={slot}
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  );
}

export default Adsense;
