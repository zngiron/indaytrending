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
          <Main />
          <NextScript />
          <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" />
          <script async src={`https://www.googletagmanager.com/gtag/js?id=${ANALYTICS}`} />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${ANALYTICS}');
              `,
            }}
          />
        </body>
      </Html>
    );
  }
}
