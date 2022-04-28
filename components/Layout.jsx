import { useState, useEffect } from 'react';
import Script from 'next/script';

import Meta from './Meta';
import Header from './Header';
import Footer from './Footer';

function Layout({ categories, children }) {
  const [content, setContent] = useState(children);
  const [transition, setTransition] = useState(false);

  const handleTransition = (element) => {
    if (!transition) {
      setContent(element);
      setTransition(true);
    }
  };

  useEffect(() => {
    setTransition(true);
  }, []);

  useEffect(() => {
    if (children !== content) {
      setTransition(false);
    }
  }, [children, content]);

  return (
    <>
      <Meta />
      <Header categories={categories} />
      <main
        className={`grow mt-16 transform-gpu transition duration-300 ${transition ? 'opacity-100' : 'opacity-0'}`}
        onTransitionEnd={() => handleTransition(children)}
      >
        {content}
      </main>
      <Footer />
      <Script
        strategy="afterInteractive"
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9878085739428147"
        crossOrigin="anonymous"
      />
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-P294E6PHLK"
      />
      <Script
        id="ga-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'G-P294E6PHLK');
          `,
        }}
      />
    </>
  );
}

export default Layout;
