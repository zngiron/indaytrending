import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Script from 'next/script';

import Meta from './Meta';
import Header from './Header';
import Footer from './Footer';

function Layout({ categories, children }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteStart = () => {
      if (window.anymindTS) {
        window.anymindTS.dispose();
      }
    };

    const handleRouteComplete = () => {
      setTimeout(() => {
        if (window.startAnymindTS) {
          window.startAnymindTS();
        }
      }, 1000);
    };

    router.events.on('routeChangeStart', handleRouteStart);
    router.events.on('routeChangeComplete', handleRouteComplete);

    return () => {
      router.events.off('routeChangeStart', handleRouteStart);
      router.events.off('routeChangeComplete', handleRouteComplete);
    };
  }, [router]);

  return (
    <>
      <Meta />
      <Header categories={categories} />
      <main className="grow mt-16">
        {children}
      </main>
      <Footer />
      {process.env.NODE_ENV === 'production' && (
        <>
          <Script
            strategy="afterInteractive"
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
          
            gtag('config', 'G-P294E6PHLK');
          `,
            }}
          />
          <Script
            strategy="afterInteractive"
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9878085739428147"
            crossOrigin="anonymous"
          />
          <Script
            strategy="afterInteractive"
            src="https://anymind360.com/js/7429/ats.js"
            onLoad={() => { window.startAnymindTS(); }}
          />
          <Script
            id="taboola-init"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
              window._taboola = window._taboola || [];
              _taboola.push({article: 'auto'});
              ! function (e, f, u, i) {
                if (!document.getElementById(i)) {
                  e.async = 1;
                  e.src = u;
                  e.id = i;
                  f.parentNode.insertBefore(e, f);
                }
              }(document.createElement('script'),
                document.getElementsByTagName('script')[0],
                '//cdn.taboola.com/libtrc/indaytradingsc/loader.js',
                'tb_loader_script');
              if (window.performance && typeof window.performance.mark == 'function') {
                window.performance.mark('tbl_ic');
              }
            `,
            }}
          />
        </>
      )}
    </>
  );
}

export default Layout;
