/* eslint-disable react/no-danger */

import { Fragment } from 'react';
import { NextSeo, ArticleJsonLd } from 'next-seo';
import Link from 'next/link';
import parse from 'html-react-parser';

import Adsense from '../../components/Adsense';
import Taboola from '../../components/Taboola';
import Thumbnail from '../../components/Thumbnail';

import { clean } from '../../library/functions';
import client from '../../library/client';

import POSTS_QUERY from '../../graphql/Posts.graphql';
import POST_QUERY from '../../graphql/Post.graphql';

function Ads(item, key) {
  return (
    <Fragment key={key}>
      {parse(item)}
      {(key === 2) && <Adsense type="article" slot="3640794162" />}
      {(key % 8 === 0 && key !== 0) && <Adsense type="article" slot="3640794162" />}
    </Fragment>
  );
}

function Post({ post, content }) {
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
      {post.next && (
        <Thumbnail
          title={post?.next?.title}
          slug={post?.next?.slug}
          image={post?.next?.image?.node?.thumbnail}
        />
      )}
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
            <div className="prose md:max-w-none">
              {content.match(/<.*?>.*?<\/.*?>/gms).map(Ads)}
              <Taboola type="article" />
            </div>
          </div>
          <aside className="hidden xl:block xl:self-start xl:p-5 xl:rounded-lg xl:bg-white">
            <Taboola type="sidebar" />
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
      content: clean(post?.content),
      categories,
    },
    revalidate: 30,
  };
}

export default Post;
