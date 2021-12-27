import Head from 'next/head';

import Layout from '../components/Layout';

import './_app.css';

const App = ({ Component, pageProps }) => (
  <Layout {...pageProps}>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="theme-color" content="#253f4c" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta property="fb:pages" content="342281576184179" />
      <meta property="fb:app_id" content="1201824889948708" />
      <link rel="icon" href="/static/indaytrending-icon.png" type="image/png" sizes="512x512" />
      <link rel="apple-touch-icon" href="/static/indaytrending-apple-icon.png" sizes="180x180" />
      <link rel="preconnect" href="https://cms.indaytrending.com" />
    </Head>
    <Component {...pageProps} />
  </Layout>
);

export default App;
