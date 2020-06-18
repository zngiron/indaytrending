import React from 'react';
import Error from 'next/error';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import { NextSeo } from 'next-seo';
import parse from 'html-react-parser';

const Preloader = dynamic(import('../../components/Preloader'));
const Post = dynamic(import('../../components/Post'));

const Page = ({ post }) => {
  const { isFallback } = useRouter();

  if (!isFallback && !post?.slug) return <Error statusCode={404} />;
  if (isFallback) return <Preloader />;

  return (
    <>
      <NextSeo
        title={parse(post?.title)}
        description={parse(post.content.match(/<p>(.*?)<\/p>/)[1])}
        openGraph={{
          title: parse(post?.title),
          description: parse(post.content.match(/<p>(.*?)<\/p>/)[1]),
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
              url: post?.image ? `${process.env.DOMAIN}/api/image?url=${post.image?.featured}` : undefined,
              alt: post?.title,
            },
          ],
        }}
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
  };
};

export const getStaticPaths = async () => {
  const { getPosts } = await import('../../library/api');
  const data = await getPosts();
  const paths = data?.posts?.edges?.map(({ node }) => `/stories/${node.slug}`) || [];

  return {
    paths,
    fallback: true,
  };
};

export default Page;
