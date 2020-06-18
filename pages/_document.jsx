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
          <Main />
          <NextScript />
          {production && (
            <>
              <script async defer src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&amp;version=v6.0&amp;appId=1201824889948708&amp;autoLogAppEvents=1" />
              <script async src="https://www.googletagmanager.com/gtag/js?id=UA-67525380-3" />
              <script dangerouslySetInnerHTML={{
                __html: oneLineTrim`window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date()); 
                  gtag('config', 'UA-67525380-3');`,
              }}
              />
              <script async defer src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" />
              <script async defer src="https://cdn.taboola.com/libtrc/indaytradingsc/loader.js" id="tb_loader_script" />
              <script dangerouslySetInnerHTML={{
                __html: oneLineTrim`_atrk_opts={atrk_acct:"4FMtu1Y1Mn20Io",domain:"indaytrending.com",dynamic:!0},function(){var t=document.createElement("script");t.type="text/javascript",t.async=!0,t.src="https://certify-js.alexametrics.com/atrk.js";var e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(t,e)}();`,
              }}
              />
              <noscript>
                <img src="https://certify.alexametrics.com/atrk.gif?account=4FMtu1Y1Mn20Io" height="1" width="1" alt="" style={{ display: 'none' }} />
              </noscript>
            </>
          )}
        </body>
      </Html>
    );
  }
}
