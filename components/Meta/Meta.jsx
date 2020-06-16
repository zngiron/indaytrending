import React from 'react';
import Head from 'next/head';

import { DOMAIN, PUBLISHER, AUTHOR } from '../../library/Config';

const Meta = ({
  type = 'website',
  url = '',
  category,
  slug,
  title = '',
  description = '',
  image = `${DOMAIN}/indaytrending-thumbnail.png`,
  published,
  modified,
}) => (
  <Head>
    <title key="title">{title}</title>
    <meta name="description" content={description} key="description" />

    <meta property="og:type" content={type} />
    <meta property="og:url" content={`${DOMAIN}${url}`} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={`${DOMAIN}/api/image?url=${image}`} />
    <meta property="og:image:secure_url" content={`${DOMAIN}/api/image/?url=${image}`} />
    <meta property="og:image:width" content="1280" />
    <meta property="og:image:height" content="670" />
    <meta property="og:image:alt" content={title} />
    <meta property="og:locale" content="tl_ph" />
    <meta property="og:site_name" content="Inday Trending" />

    {(type === 'article' && slug) && (
      <>
        <meta property="article:published_time" content={published} />
        <meta property="article:modified_time" content={modified} />
        <meta property="article:publisher" content={PUBLISHER} />
        <meta property="article:author" content={AUTHOR} />
        <meta property="article:section" content="Stories" />
      </>
    )}

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@indaytrending" />
    <meta name="twitter:creator" content="@indaytrending" />

    {(type === 'article' && slug && category !== 'stories') && (
      <link rel="canonical" href={`${DOMAIN}/stories/${slug}`} />
    )}
  </Head>
);

export default Meta;
