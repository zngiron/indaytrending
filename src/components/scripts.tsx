'use client';

import Script from 'next/script';
import { GoogleAnalytics } from '@next/third-parties/google';

import { env } from '@/library/environment';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const production = env.NODE_ENV === 'production';

export function Scripts() {
  const pathname = useRouter();

  useEffect(() => {
    if (env.NODE_ENV === 'production') {
      if (window.anymindTS) {
        window.anymindTS.dispose();
      }
    }
  }, [pathname]);

  return (
    <>
      {production && (
        <>
          <GoogleAnalytics gaId={`${process.env.ANALYTICS}`} />
          <Script
            async
            strategy="afterInteractive"
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9878085739428147"
            crossOrigin="anonymous"
          />
          <Script
            async
            strategy="afterInteractive"
            src="https://anymind360.com/js/7429/ats.js"
            onLoad={() => window.startAnymindTS()}
          />
        </>
      )}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: 'Inday Trending',
          url: env.DOMAIN,
          image: `${env.DOMAIN}/static/indaytrending-icon.png`,
          sameAs: [
            'https://www.facebook.com/indaytrending',
            'https://instagram.com/indaytrending',
            'https://twitter.com/indaytrending',
          ],
        })}
      </script>
    </>
  );
}
