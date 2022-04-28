/* eslint-disable react/no-danger */

import Link from 'next/link';
import Image from 'next/image';

import { clean } from '../../library/functions';
import client from '../../library/client';

import POSTS_QUERY from '../../graphql/Posts.graphql';
import POST_QUERY from '../../graphql/Post.graphql';

function Post({ post }) {
  return (
    <div className="container my-5">
      <div className="grid xl:grid-cols-3 gap-5">
        <div className="space-y-5 xl:sticky xl:top-5 xl:col-span-2">
          <div className="relative rounded-lg bg-gradient-to-tr from-secondary via-primary to-primary aspect-[1280/670]">
            <Image
              className="rounded-lg transition transform-gpu will-change-transform opacity-40 group-hover:scale-105"
              src={post?.image?.node?.featured}
              alt={post?.title}
              layout="fill"
              objectFit="cover"
              draggable={false}
              loading="eager"
            />
          </div>
          <h1 className="font-semibold text-primary text-xl">{post?.title}</h1>
          <div className="flex flex-wrap gap-2">
            {post?.categories?.edges.map(({ node }) => (
              <Link href={`/${node.slug}`} key={node?.id}>
                <a className="px-4 py-1 rounded-full bg-primary font-semibold text-white text-xs hover:bg-secondary">{node?.name}</a>
              </Link>
            ))}
          </div>
          <div className="prose max-w-none mx-auto text-sm leading-5 xl:text-base" dangerouslySetInnerHTML={{ __html: clean(post?.content) }} />
        </div>
        <aside>
          <div className="sticky top-5" />
        </aside>
      </div>
    </div>
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
