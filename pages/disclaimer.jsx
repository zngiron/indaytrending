import dynamic from 'next/dynamic';
import { NextSeo } from 'next-seo';

const Content = dynamic(import('../components/Content'));

const Page = ({ page }) => (
  <>
    <NextSeo
      title={page.title ? `${page.title} | Inday Trending - Pinoy Short Stories` : undefined}
      openGraph={{
        title: page.title ? `${page.title} | Inday Trending - Pinoy Short Stories` : undefined,
        url: `${process.env.DOMAIN}/disclaimer`,
      }}
    />
    <Content
      title={page.title}
      description={page.content}
    />
  </>
);

export const getStaticProps = async () => {
  const { getPage } = await import('../library/api');
  const data = await getPage('disclaimer');

  return {
    props: {
      page: data.page,
    },
  };
};

export default Page;
