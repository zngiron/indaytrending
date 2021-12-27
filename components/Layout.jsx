import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { DefaultSeo, LogoJsonLd, SocialProfileJsonLd } from 'next-seo';

const Header = dynamic(() => import('./Header'));
const Footer = dynamic(() => import('./Footer'));

const Layout = ({ categories, children }) => {
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
  }, [children, content, setContent]);

  return (
    <>
      <DefaultSeo
        title="Inday Trending - Pinoy Short Stories"
        description="Manunulat ng maiikling akda na sumasalamin sa pang-araw-araw na buhay, suliranin at karanasan ng isang Pilipino."
        openGraph={{
          url: process.env.NEXT_PUBLIC_DOMAIN,
          title: 'Inday Trending - Pinoy Short Stories',
          description: 'Manunulat ng maiikling akda na sumasalamin sa pang-araw-araw na buhay, suliranin at karanasan ng isang Pilipino.',
          images: [
            {
              url: `${process.env.NEXT_PUBLIC_DOMAIN}/static/indaytrending-thumbnail.png`,
              width: 1280,
              height: 670,
              alt: 'Inday Trending - Pinoy Short Stories',
            },
          ],
          site_name: 'Inday Trending',
        }}
        twitter={{
          handle: '@indaytrending',
          site: '@indaytrending',
          cardType: 'summary_large_image',
        }}
      />
      <LogoJsonLd
        logo={`${process.env.NEXT_PUBLIC_DOMAIN}/static/indaytrending-icon-512x512.png`}
        url={`${process.env.NEXT_PUBLIC_DOMAIN}`}
      />
      <SocialProfileJsonLd
        type="Person"
        name="Inday Trending"
        url={`${process.env.NEXT_PUBLIC_DOMAIN}`}
        sameAs={[
          'https://www.facebook.com/indaytrending',
          'https://instagram.com/indaytrending',
          'https://twitter.com/indaytrending',
        ]}
      />
      <Header categories={categories} />
      <main
        className={`flex-grow mt-16 transition duration-500 opacity-0 ${transition ? 'opacity-100' : ''}`}
        onTransitionEnd={() => handleTransition(children)}
      >
        {content}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
