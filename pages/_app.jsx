import Head from 'next/head';
import dynamic from 'next/dynamic';
import { DefaultSeo, LogoJsonLd, SocialProfileJsonLd } from 'next-seo';

import 'normalize.css';

const Layout = dynamic(import('../components/Layout'));

const App = ({ Component, pageProps }) => (
  <>
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="theme-color" content="#253f4c" />
      <link rel="apple-touch-icon" sizes="180x180" href="/static/indaytrending-apple-icon.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/static/indaytrending-icon-16x16.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/static/indaytrending-icon-32x32.png" />
      <link rel="icon" type="image/png" sizes="80x80" href="/static/indaytrending-icon.png" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="preconnect" href="https://cms.indaytrending.com" />
    </Head>
    <DefaultSeo
      title="Inday Trending - Pinoy Short Stories"
      description="Manunulat ng maiikling akda na sumasalamin sa pang-araw-araw na buhay, suliranin at karanasan ng isang Pilipino."
      openGraph={{
        site_name: 'Inday Trending',
        title: 'Inday Trending - Pinoy Short Stories',
        description: 'Manunulat ng maiikling akda na sumasalamin sa pang-araw-araw na buhay, suliranin at karanasan ng isang Pilipino.',
        url: process.env.DOMAIN,
        type: 'website',
        locale: 'tl_ph',
        images: [
          {
            url: `${process.env.DOMAIN}/static/indaytrending-thumbnail.png`,
            width: 1280,
            height: 670,
            alt: 'Inday Trending',
          },
        ],
        defaultImageWidth: 1280,
        defaultImageHeight: 670,
      }}
      twitter={{
        handle: '@indaytrending',
        site: '@indaytrending',
        cardType: 'summary_large_image',
      }}
    />
    <LogoJsonLd
      logo={`${process.env.DOMAIN}/static/indaytrending-icon-512x512.png`}
      url={`${process.env.DOMAIN}`}
    />
    <SocialProfileJsonLd
      type="Person"
      name="Inday Trending"
      url={`${process.env.DOMAIN}`}
      sameAs={[
        'http://www.facebook.com/indaytrending',
        'http://instagram.com/indaytrending',
        'http://twitter.com/indaytrending',
      ]}
    />
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </>
);

export default App;
