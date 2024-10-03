'use client';

import { GoogleAnalytics } from '@next/third-parties/google';

import { env } from '@/library/environment';

const production = env.NODE_ENV === 'production';

export function Scripts() {
  return (
    <>
      {production && (
        <GoogleAnalytics gaId={`${process.env.ANALYTICS}`} />
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
