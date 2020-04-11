/* eslint-disable react/no-danger */

import React from 'react';
import Document, {
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document';

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
          <script async src="https://images.dmca.com/Badges/DMCABadgeHelper.min.js" />
        </body>
      </Html>
    );
  }
}
