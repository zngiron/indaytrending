import { memo } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { DefaultSeo, LogoJsonLd, SocialProfileJsonLd } from 'next-seo';

function Meta() {
  const { asPath } = useRouter();

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#253f4c" />
        <link rel="apple-touch-icon" sizes="180x180" href="/static/indaytrending-apple-icon.png" />
        <link rel="shortcut icon" type="image/png" sizes="512x512" href="/static/indaytrending-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <DefaultSeo
        title="Inday Trending - Pinoy Short Stories"
        description="Manunulat ng maiikling akda na sumasalamin sa pang-araw-araw na buhay, suliranin at karanasan ng isang Pilipino."
        openGraph={{
          type: 'website',
          locale: 'tl_ph',
          url: `${process.env.NEXT_PUBLIC_DOMAIN}${asPath}`,
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
        logo={`${process.env.NEXT_PUBLIC_DOMAIN}/static/indaytrending-icon.png`}
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
    </>
  );
}

export default memo(Meta);
