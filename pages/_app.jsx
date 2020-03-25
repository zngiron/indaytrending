import React from 'react';
import Head from 'next/head';
import { ApolloProvider } from '@apollo/react-hooks';

import Apollo from '../library/Apollo';
import Layout from '../components/Layout';

const App = ({ Component, pageProps, apollo }) => (
  <>
    <Head>
      <meta charSet="utf-8" />
      <title>Inday Trending - Pinoy Short Stories</title>
      <meta name="description" content="Manunulat ng maiikling akda na sumasalamin sa pang-araw-araw na buhay, suliranin at karanasan ng isang Pilipino." />
      <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="theme-color" content="#253f4c" />
      <meta property="fb:pages" content="342281576184179" />
      <meta property="fb:app_id" content="1201824889948708" />
      <link rel="apple-touch-icon" sizes="180x180" href="/indaytrending-apple-icon.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/indaytrending-icon-16x16.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/indaytrending-icon-32x32.png" />
      <link rel="icon" type="image/png" sizes="80x80" href="/indaytrending-icon.png" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="preconnect" href="https://indaytrending.com" />
      <link rel="preconnect" href="https://cms.indaytrending.com" />
      <link rel="preconnect" href="https://www.google-analytics.com" />
      <link rel="preconnect" href="https://www.googletagmanager.com" />
      <link rel="preconnect" href="https://pagead2.googlesyndication.com" />
      <link rel="preconnect" href="https://cdn.taboola.com" />
    </Head>
    <ApolloProvider client={apollo}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  </>
);

export default Apollo(App);
