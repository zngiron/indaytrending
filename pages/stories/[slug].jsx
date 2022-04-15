import Error from 'next/error';
import dynamic from 'next/dynamic';
import { NextSeo, ArticleJsonLd } from 'next-seo';
import parse from 'html-react-parser';

const Post = dynamic(import('../../components/Post'));

const Page = ({ post }) => {
  if (!post) return <Error statusCode={404} />;

  return (
    <>
      <NextSeo
        title={parse(post?.title)}
        description="Inday Trending - Pinoy Short Stories"
        canonical={`${process.env.DOMAIN}/stories/${post?.slug}`}
        openGraph={{
          title: parse(post?.title),
          description: 'Inday Trending - Pinoy Short Stories',
          url: `${process.env.DOMAIN}/stories/${post?.slug}`,
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
              url: post?.image ? `${process.env.DOMAIN}/api/image?url=${post.image?.node?.featured}` : `${process.env.DOMAIN}/api/image`,
              alt: post?.title,
            },
          ],
        }}
      />
      <ArticleJsonLd
        url={`${process.env.DOMAIN}/stories/${post?.slug}`}
        title={parse(post?.title)}
        description="Inday Trending - Pinoy Short Stories"
        images={[
          post.image ? `${process.env.DOMAIN}/api/image?url=${post.image?.node?.featured}` : `${process.env.DOMAIN}/api/image`,
        ]}
        datePublished={post?.published}
        dateModified={post?.modified}
        authorName="Inday Trending"
        publisherName="Likha Media"
        publisherLogo="https://likha.media/likha-media-icon.svg"
      />
      <Post post={post} />
    </>
  );
};

export const getStaticProps = async ({ params }) => {
  const { getPost } = await import('../../library/api');
  const data = await getPost(params.slug);

  return {
    props: {
      post: data?.post,
    },
    revalidate: 30,
  };
};

export const getStaticPaths = async () => {
  const { getPosts } = await import('../../library/api');
  const data = await getPosts();
  const paths = data?.posts?.edges?.map(({ node }) => ({
    params: {
      slug: node.slug,
    },
  })) || [];

  return {
    paths,
    fallback: 'blocking',
  };
};

export default Page;
