'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { GoogleAnalytics } from '@next/third-parties/google';
import Script from 'next/script';

import { env } from '@/library/environment';

const production = env.NODE_ENV === 'production';

export function Scripts() {
  const pathname = usePathname();

  useEffect(() => {
    if (production) {
      if (window.anymindTS) {
        window.anymindTS.dispose();
      }

      if (window.startAnymindTS && !window.startAnymindTS.disposed) {
        window.startAnymindTS();
      }
    }
  }, [pathname]);

  return (
    <>
      {production && (
        <>
          <GoogleAnalytics gaId={`${env.ANALYTICS}`} />
          <Script
            async
            strategy="afterInteractive"
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9878085739428147"
            crossOrigin="anonymous"
          />
          <Script
            strategy="afterInteractive"
            src="https://anymind360.com/js/7429/ats.js"
            onLoad={() => window.startAnymindTS()}
          />
          <Script
            strategy="afterInteractive"
            src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v21.0"
            crossOrigin="anonymous"
          />
        </>
      )}
      <div id="fb-root" />
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
