import dynamic from 'next/dynamic';

import client from '../graphql/client';
import { POSTS_QUERY } from '../graphql/api';

const Card = dynamic(() => import('../components/Card'));

const Page = ({ posts, category }) => (
  <div className="container my-10">
    <h1 className="font-semibold text-primary text-3xl">{category.name}</h1>
    <p>{category.description}</p>
    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5 my-5">
      {posts?.edges?.map(({ node }) => (
        <Card key={node.id} {...node} />
      ))}
    </div>
  </div>
);

export const getStaticProps = async () => {
  const category = 'stories';

  const { data } = await client.query({
    query: POSTS_QUERY,
    variables: {
      first: 12,
      category,
    },
  });

  const { posts, categories } = data;

  return {
    props: {
      categories,
      posts,
      category: categories?.edges.find(({ node }) => node.slug === category).node,
    },
    revalidate: 60,
  };
};

export default Page;
