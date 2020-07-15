import React from 'react';
import Error from 'next/error';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { NextSeo, ArticleJsonLd } from 'next-seo';
import parse from 'html-react-parser';

const Preloader = dynamic(import('../../components/Preloader'));
const Post = dynamic(import('../../components/Post'));

const Page = ({ post }) => {
  const { isFallback } = useRouter();

  if (!post?.slug) return <Error statusCode={404} />;

  if (isFallback) return <Preloader />;

  return (
    <>
      <Head>
        <meta property="ia:markup_url" content={`${process.env.DOMAIN}/api/stories/${post?.slug}`} />
      </Head>
      <NextSeo
        title={parse(post?.title)}
        description="Inday Trending - Pinoy Short Stories"
        canonical={`${process.env.DOMAIN}/stories/${post?.slug}`}
        openGraph={{
          title: parse(post?.title),
          description: 'Inday Trending - Pinoy Short Stories',
          url: `${process.env.DOMAIN}/stories/${post?.slug}`,
          type: 'article',
          article: {
            publishedTime: post?.published,
            modifiedTime: post?.modified,
          },
          authors: [
            'https://www.facebook.com/indaytrending',
          ],
          images: [
            {
              url: !post?.image ? `${process.env.DOMAIN}/api/image?url=${post.image?.featured}` : `${process.env.DOMAIN}/api/image`,
              alt: post?.title,
            },
          ],
        }}
      />
      <ArticleJsonLd
        url={`${process.env.DOMAIN}/stories/${post?.slug}`}
        title={parse(post?.title)}
        description="Inday Trending - Pinoy Short Stories"
        images={[
          post?.image ? `${process.env.DOMAIN}/api/image?url=${post.image?.featured}` : undefined,
        ]}
        datePublished={post?.published}
        dateModified={post?.modified}
        authorName="Inday Trending"
        publisherName="Likha Media"
        publisherLogo="https://likha.media/likha-media-icon.svg"
      />
      <Post post={post} />
    </>
  );
};

export const getStaticProps = async ({ params }) => {
  const { getPost } = await import('../../library/api');
  const data = await getPost(params.slug);

  return {
    props: {
      post: data?.post,
    },
    unstable_revalidate: 1,
  };
};

export const getStaticPaths = async () => {
  const { getPosts } = await import('../../library/api');
  const data = await getPosts();
  const paths = data?.posts?.edges?.map(({ node }) => ({
    params: {
      slug: node.slug,
    },
  })) || [];

  return {
    paths,
    fallback: true,
  };
};

export default Page;
