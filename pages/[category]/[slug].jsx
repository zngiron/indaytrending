import React from 'react';
import parse from 'html-react-parser';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/react-hooks';

import Preloader from '../../components/Preloader';
import Meta from '../../components/Meta';
import Post from '../../components/Post';

import { GET_POST } from '../../library/Queries.graphql';

const Story = () => {
  const { asPath, query } = useRouter();
  const { category, slug } = query;

  const { loading, error, data } = useQuery(GET_POST, {
    variables: {
      slug,
    },
  });

  if (loading || error) return <Preloader loading={loading} error={error} />;

  const description = data.post.content.match(/<p>(.*?)<\/p>/)[1];

  return (
    <>
      <Meta
        type="article"
        url={asPath}
        category={category}
        slug={slug}
        title={parse(data.post.title)}
        description={parse(description)}
        image={data.post.image.featured || undefined}
        published={data.post.published}
        modified={data.post.modified}
      />
      <Post post={data.post} />
    </>
  );
};

export default Story;
