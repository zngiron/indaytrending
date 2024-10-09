'use client';

import { useEffect } from 'react';

export function AdsenseAd() {
  useEffect(() => {
    ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
  }, []);

  return (
    <div className="py-4 mt-4 space-y-4">
      <div className="text-xs text-muted-foreground text-center">
        Advertisement
      </div>
      <ins
        className="adsbygoogle block text-center"
        data-ad-layout="in-article"
        data-ad-format="fluid"
        data-ad-client="ca-pub-9878085739428147"
        data-ad-slot="3640794162"
      />
    </div>
  );
}
