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

      <div className="container my-5">
        <div className="grid xl:grid-cols-3 gap-5">
          <article className="space-y-5 xl:col-span-2">
            <div className="p-5 space-y-5 rounded-lg bg-white">
              <h1 className="font-semibold text-primary text-xl">{post?.title}</h1>
              <div className="flex flex-wrap gap-2">
                {post?.categories?.edges.map(({ node }) => (
                  <Link href={`/${node.slug}`} key={node?.id}>
                    <a className="px-4 py-1 rounded-full bg-primary font-semibold text-white text-xs hover:bg-secondary">{node?.name}</a>
                  </Link>
                ))}
              </div>
              <Adsense type="article" slot="3640794162" key={keygen()} />
              <div className="prose max-w-none mx-auto text-sm leading-5 xl:text-base" dangerouslySetInnerHTML={{ __html: clean(post?.content) }} />
              <Adsense type="article" slot="3640794162" key={keygen()} />
              <div className="sticky bottom-5 flex gap-5 justify-center">
                {post?.next?.slug && (
                  <Link href={`/stories/${post.next.slug}`}>
                    <a className="flex grow justify-center items-center px-5 py-2 rounded-lg bg-primary font-semibold text-white xl:hidden hover:bg-secondary ">
                      <span className="grow">Read Next Story</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </a>
                  </Link>
                )}
              </div>
            </div>
          </article>
          <aside className="hidden self-start rounded-lg bg-white p-5 xl:block xl:sticky xl:top-20">
            <div className="text-center">
              <Adsense slot="2530090260" />
            </div>
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
