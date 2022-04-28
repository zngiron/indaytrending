import client from '../library/client';

import CATEGORY_QUERY from '../graphql/Category.graphql';

import Card from '../components/Card';

function Home({ posts, category }) {
  return (
    <div className="container my-10">
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
        <div className="col-span-full">
          <h1 className="font-semibold text-primary text-3xl">{category.name}</h1>
          <p>{category.description}</p>
        </div>
        {posts?.edges?.map(({ node }) => <Card key={node.id} {...node} />)}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const category = 'stories';

  const { data } = await client.query({
    query: CATEGORY_QUERY,
    variables: {
      first: 12,
      category,
    },
  });

  const { posts, categories } = data;

  return {
    props: {
      posts,
      categories,
      category: categories.edges.find(({ node }) => node.slug === category).node,
    },
    revalidate: 30,
  };
}

export default Home;
