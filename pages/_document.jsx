/* eslint-disable react/no-danger */

import React from 'react';
import Document, {
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document';

import { oneLineTrim } from 'common-tags';

const production = process.env.NODE_ENV !== 'development';

export default class Root extends Document {
  render() {
    return (
      <Html lang="tl">
        <Head />
        <body>
          <div id="fb-root" />
          <Main />
          <NextScript />
          {production && (
            <>
              <script async src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&amp;version=v7.0&amp;appId=1201824889948708&amp;autoLogAppEvents=1" />
              <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" />
              <script async src="https://www.googletagmanager.com/gtag/js?id=UA-67525380-3" />
              <script dangerouslySetInnerHTML={{
                __html: oneLineTrim`window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', 'UA-67525380-3');`,
              }}
              />
              <script dangerouslySetInnerHTML={{
                __html: oneLineTrim`
                setTimeout(function() {
                  window._taboola = window._taboola || [];
                  _taboola.push({article:'auto'});
                  !function (e, f, u, i) {
                    if (!document.getElementById(i)){
                      e.async = 1;
                      e.src = u;
                      e.id = i;
                      f.parentNode.insertBefore(e, f);
                    }
                  }(document.createElement('script'),
                  document.getElementsByTagName('script')[0],
                  '//cdn.taboola.com/libtrc/indaytradingsc/loader.js',
                  'tb_loader_script');
                  if(window.performance && typeof window.performance.mark == 'function')
                    {window.performance.mark('tbl_ic');}
                }, 3500)
                `,
              }}
              />
              <script dangerouslySetInnerHTML={{
                __html: oneLineTrim`_atrk_opts={atrk_acct:"4FMtu1Y1Mn20Io",domain:"indaytrending.com",dynamic:!0},function(){var t=document.createElement("script");t.type="text/javascript",t.async=!0,t.src="https://certify-js.alexametrics.com/atrk.js";var e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(t,e)}();`,
              }}
              />
              <noscript>
                <img src="https://certify.alexametrics.com/atrk.gif?account=4FMtu1Y1Mn20Io" height="1" width="1" alt="" style={{ display: 'none' }} />
              </noscript>
              <script dangerouslySetInnerHTML={{
                __html: oneLineTrim`
                  navigator.serviceWorker.getRegistrations().then(function(registrations) {
                    for(let registration of registrations) {
                      registration.unregister();
                    }
                  });
    
                  caches.delete('workbox-precache-v2-${process.env.DOMAIN}/');
                  caches.delete('images');
                  caches.delete('stories');
                  caches.delete('cache');
                `,
              }}
              />
            </>
          )}
        </body>
      </Html>
    );
  }
}
