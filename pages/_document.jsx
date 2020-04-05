/* eslint-disable react/no-danger */

import React from 'react';
import Document, {
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document';

import { ANALYTICS } from '../library/Config';

export default class Root extends Document {
  render() {
    return (
      <Html lang="tl">
        <Head />
        <body>
          <div id="fb-root" />
          <Main />
          <NextScript />
          <script async src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&amp;version=v6.0&amp;appId=1201824889948708&amp;autoLogAppEvents=1" />
          <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" />
          <script async src="https://cdn.taboola.com/libtrc/indaytradingsc/loader.js" id="tb_loader_script" />
          <script async src={`https://www.googletagmanager.com/gtag/js?id=${ANALYTICS}`} />
          <script dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${ANALYTICS}');`,
          }}
          />
          <script dangerouslySetInnerHTML={{
            __html: '_atrk_opts={atrk_acct:"4FMtu1Y1Mn20Io",domain:"indaytrending.com",dynamic:!0},function(){const t=document.createElement("script");t.type="text/javascript",t.async=!0,t.src="https://certify-js.alexametrics.com/atrk.js";const e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(t,e)}();',
          }}
          />
          <script dangerouslySetInnerHTML={{
            __html: 'window._taboola=window._taboola||[],_taboola.push({article:"auto"}),function(e,o,t,a){document.getElementById(a)||(e.async=1,e.src="//cdn.taboola.com/libtrc/indaytradingsc/loader.js",e.id=a,o.parentNode.insertBefore(e,o))}(document.createElement("script"),document.getElementsByTagName("script")[0],0,"tb_loader_script"),window.performance&&"function"==typeof window.performance.mark&&window.performance.mark("tbl_ic");',
          }}
          />
          <noscript><img src="https://certify.alexametrics.com/atrk.gif?account=4FMtu1Y1Mn20Io" width={1} height={1} alt="" style={{ display: 'none' }} /></noscript>
        </body>
      </Html>
    );
  }
}
