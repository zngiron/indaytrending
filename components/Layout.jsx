import { useState, useEffect } from 'react';

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
    </>
  );
}

export default Layout;
