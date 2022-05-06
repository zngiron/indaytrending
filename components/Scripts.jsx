/* eslint-disable no-underscore-dangle */

import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Script from 'next/script';

import { handleAdsense } from './Adsense';
import { handleTaboola } from './Taboola';

function Scripts() {
  const router = useRouter();

  useEffect(() => {
    const handleRouteStart = () => {
      if (window.anymindTS) {
        window.anymindTS.dispose();
      }
    };

    const handleRouteComplete = (url) => {
      if (window.gtag) {
        window.gtag('config', 'G-P294E6PHLK', {
          page_path: url,
        });
      }

      if (window.adsbygoogle) {
        handleAdsense();
      }

      if (window.startAnymindTS) {
        window.startAnymindTS();
      }

      if (window._taboola) {
        handleTaboola(url);
      }
    };

    router.events.on('routeChangeStart', handleRouteStart);
    router.events.on('routeChangeComplete', handleRouteComplete);

    return () => {
      router.events.off('routeChangeStart', handleRouteStart);
      router.events.off('routeChangeComplete', handleRouteComplete);
    };
  }, [router.events]);

  if (process.env.NODE_ENV !== 'production') return false;

  return (
    <>
      <Script
        strategy="afterInteractive"
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-P294E6PHLK"
      />
      <Script
        id="ga-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            
            gtag('js', new Date());
            gtag('config', 'G-P294E6PHLK', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <Script
        strategy="afterInteractive"
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9878085739428147"
        crossOrigin="anonymous"
        onLoad={() => handleAdsense()}
      />
      <Script
        strategy="afterInteractive"
        src="https://anymind360.com/js/7429/ats.js"
        onLoad={() => window.startAnymindTS()}
      />
      <Script
        id="tb_loader_script"
        strategy="afterInteractive"
        async
        src="https://cdn.taboola.com/libtrc/indaytradingsc/loader.js"
        onLoad={() => handleTaboola()}
      />
    </>
  );
}

export default Scripts;
