import client from '../library/client';

import CATEGORY_QUERY from '../graphql/Category.graphql';

import Pagination from '../components/Pagination';
import Card from '../components/Card';

function Page({ posts, category }) {
  return (
    <div className="container my-5">
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
        <div className="col-span-full">
          <h1 className="font-semibold text-primary text-3xl">{category.name}</h1>
          <p>{category.description}</p>
        </div>
        <div className="col-span-full">
          <Pagination posts={posts} category={category} />
        </div>
        {posts?.edges?.map(({ node }) => <Card key={node.id} {...node} />)}
      </div>
    </div>
  );
}

export async function getServerSideProps({ query }) {
  const category = query.category || 'stories';

  const { data } = await client.query({
    query: CATEGORY_QUERY,
    variables: {
      first: query.after ? 12 : null,
      after: query.after || null,
      last: query.before ? 12 : null,
      before: query.before || null,
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
  };
}

export default Page;
