import { NextSeo } from 'next-seo';

import client from '../library/client';

import CATEGORIES_QUERY from '../graphql/Categories.graphql';
import CATEGORY_QUERY from '../graphql/Category.graphql';

import Adsense from '../components/Adsense';
import Card from '../components/Card';

function Category({ posts, category }) {
  return (
    <>
      <NextSeo
        title={`${category?.name} | Inday Trending - Pinoy Short Stories`}
        description={category?.description}
        openGrap={{
          title: `${category?.name} | Inday Trending - Pinoy Short Stories`,
          description: category?.description,
        }}
      />
      <div className="container my-10">
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
          <div className="flex justify-center col-span-full">
            <Adsense slot="6234342116" />
          </div>
          <div className="col-span-full">
            <h1 className="font-semibold text-primary text-3xl">{category.name}</h1>
            <p>{category.description}</p>
          </div>
          {posts?.edges?.map(({ node }) => <Card key={node.id} {...node} />)}
        </div>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const { data } = await client.query({
    query: CATEGORIES_QUERY,
  });

  const { categories } = data;

  const paths = categories?.edges.map(({ node }) => ({
    params: {
      category: node.slug,
    },
  })) || [];

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const category = params.category || 'stories';

  const { data } = await client.query({
    query: CATEGORY_QUERY,
    variables: {
      first: 24,
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

export default Category;
