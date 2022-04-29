/* eslint-disable no-undef */

import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/router';

function Adsense({ type, slot }) {
  const router = useRouter();
  const [, updateState] = useState();

  const forceUpdate = useCallback(() => updateState({}), []);

  useEffect(() => {
    setTimeout(() => {
      if (window.adsbygoogle) {
        (adsbygoogle = window.adsbygoogle || []).push({});
      }
    }, 500);
  }, []);

  useEffect(() => {
    router.events.on('routeChangeStart', forceUpdate);
    return () => router.events.off('routeChangeStart', forceUpdate);
  }, [router, forceUpdate]);

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
