/* eslint-disable react/no-danger */

import client from '../../graphql/client';
import { POSTS_QUERY, POST_QUERY } from '../../graphql/api';

import Card from '../../components/Card';

const Page = ({ post }) => (
  <div className="container my-5">
    <div className="grid xl:grid-cols-3 gap-5">
      <div className="space-y-5 xl:col-span-2">
        <Card {...post} />
        <div className="prose max-w-full" dangerouslySetInnerHTML={{ __html: post?.content }} />
      </div>
      <aside className="sticky top-16">
        Sidebar
      </aside>
    </div>
  </div>
);

export const getStaticPaths = async () => {
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
};

export const getStaticProps = async ({ params }) => {
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
    revalidate: 60,
  };
};

export default Page;
