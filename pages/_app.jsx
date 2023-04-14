import { Analytics } from '@vercel/analytics/react';

import Layout from '../components/Layout';

import './_app.css';

function App({ Component, pageProps }) {
  return (
    <Layout {...pageProps}>
      <Component {...pageProps} />
      <Analytics />
    </Layout>
  );
}

export default App;
