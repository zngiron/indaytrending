import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { ApolloProvider } from '@apollo/react-hooks';

import { ANALYTICS } from '../library/Config';
import Apollo from '../library/Apollo';

const Layout = dynamic(import('../components/Layout'));

const App = ({ Component, pageProps, apollo }) => {
  const { asPath } = useRouter();

  useEffect(() => {
    ReactGA.initialize(ANALYTICS);
  }, []);

  useEffect(() => {
    ReactGA.pageview(asPath);
  }, [asPath]);

  return (
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
        <link rel="preconnect" href="https://cms.indaytrending.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://pagead2.googlesyndication.com" />
        <link rel="preconnect" href="https://cdn.taboola.com" />
        <link rel="preconnect" href="https://cds.taboola.com" />
      </Head>
      <ApolloProvider client={apollo}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    </>
  );
};

export default Apollo(App);
