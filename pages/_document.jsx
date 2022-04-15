/* eslint-disable react/no-danger */

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
              <script
                async
                src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9878085739428147"
                crossOrigin="anonymous"
              />
              <script async src="https://www.googletagmanager.com/gtag/js?id=G-P294E6PHLK" />
              <script dangerouslySetInnerHTML={{
                __html: oneLineTrim`window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', 'G-P294E6PHLK');
                `,
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
            </>
          )}
        </body>
      </Html>
    );
  }
}
