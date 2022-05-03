/* eslint-disable react/no-danger */

import { NextSeo, ArticleJsonLd } from 'next-seo';

import Link from 'next/link';

import Adsense from '../../components/Adsense';

import { clean, keygen } from '../../library/functions';
import client from '../../library/client';

import POSTS_QUERY from '../../graphql/Posts.graphql';
import POST_QUERY from '../../graphql/Post.graphql';

function Post({ post }) {
  return (
    <>
      <NextSeo
        title={post?.title}
        description="Inday Trending - Pinoy Short Stories"
        canonical={`${process.env.NEXT_PUBLIC_DOMAIN}/stories/${post?.slug}`}
        openGraph={{
          title: post?.title,
          description: 'Inday Trending - Pinoy Short Stories',
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
              url: `${process.env.NEXT_PUBLIC_DOMAIN}/api/image?url=${post.image?.node?.featured}`,
              alt: post?.title,
            },
          ],
        }}
      />
      <ArticleJsonLd
        url={`${process.env.NEXT_PUBLIC_DOMAIN}/stories/${post?.slug}`}
        title={post?.title}
        description="Inday Trending - Pinoy Short Stories"
        images={[`${process.env.NEXT_PUBLIC_DOMAIN}/api/image?url=${post.image?.node?.featured}`]}
        datePublished={post?.published}
        dateModified={post?.modified}
        authorName="Inday Trending"
        publisherName="Likha Media"
        publisherLogo="https://likha.media/likha-media-icon.svg"
      />
      <div className="text-center mb-5 xl:mt-5" key={keygen()}>
        <Adsense slot="6234342116" />
      </div>
      <div className="container my-10">
        <div className="grid grid-cols-3 gap-5">
          <div className="col-span-full space-y-5 xl:col-span-2 xl:p-5 xl:rounded-lg xl:bg-white">
            <h1 className="font-semibold text-primary text-2xl">{post?.title}</h1>
            <div className="flex space-x-2">
              {post?.categories?.edges.map(({ node }) => (
                <Link href={`/${node.slug}`} key={node?.id}>
                  <a className="px-4 py-1 rounded-full bg-primary font-semibold text-white text-xs hover:bg-secondary">{node?.name}</a>
                </Link>
              ))}
            </div>
            <div className="prose text- xl:max-w-none xl:text-base">
              <Adsense type="article" slot="3640794162" key={keygen()} />
              <div dangerouslySetInnerHTML={{ __html: clean(post?.content) }} />
              <Adsense type="article" slot="3640794162" key={keygen()} />
            </div>
          </div>
          <aside className="sticky top-20 hidden w-80 xl:block xl:self-start xl:p-5 xl:rounded-lg xl:bg-white">
            <Adsense slot="2530090260" />
          </aside>
        </div>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const { data } = await client.query({
    query: POSTS_QUERY,
    variables: {
      first: 1,
    },
  });

  const { posts } = data;

  const paths = posts?.edges.map(({ node }) => ({
    params: {
      slug: node.slug,
    },
  })) || [];

  return {
    paths,
    fallback: 'blocking',
  };
}

export async function getStaticProps({ params }) {
  const { data } = await client.query({
    query: POST_QUERY,
    variables: {
      slug: params.slug,
    },
  });

  const { post, categories } = data;

  return {
    props: {
      post,
      categories,
    },
    revalidate: 30,
  };
}

export default Post;
