import Layout from '../components/Layout';

import './_app.css';

function App({ Component, pageProps }) {
  return (
    <Layout {...pageProps}>
      <Component {...pageProps} />
    </Layout>
  );
}

export default App;
