import { oneLineTrim } from 'common-tags';

import { DOMAIN, BANNER, RECIRCULATION } from '../../library/Config';
import { clean, date } from '../../library/Functions';
import { createApolloClient } from '../../library/Apollo';

import { GET_FEED } from '../../library/Queries.graphql';

const Story = ({ post }) => oneLineTrim`
  <!doctype html>
  <html lang="tl" prefix="op: http://media.facebook.com/op#">
    <head>
      <meta charset="utf-8">
      <meta property="op:markup_version" content="v1.0">
      <meta property="fb:article_style" content="default">
      <meta property="fb:use_automatic_ad_placement" content="enable=true ad_density=default">
      <meta property="fb:op-recirculation-ads" content="placement_id=${RECIRCULATION}">
      <link rel="canonical" href="${DOMAIN}/stories/${post.slug}">
    </head>
    <body>
      <article>
        <header>
          <figure>
            <img src="${post.image.featured || `${DOMAIN}/indaytrending-thumbnail.png`}" alt="${post.title}">
          </figure>
          <h1>${post.title}</h1>
          <address>
            <a href="https://www.facebook.com/indaytrending" rel="facebook">Inday Trending</a>
          </address>
          <h3 class="op-kicker">Stories</h3>
          <figure class="op-ad">
            <iframe
              src="https://www.facebook.com/adnw_request?placement=${BANNER}&adtype=banner300x250"
              width="300"
              height="250">
            </iframe>
          </figure>
        </header>
        ${clean(post.content)}
        <figure class="op-tracker">
          <iframe>
            <script src="https://www.googletagmanager.com/gtag/js?id=UA-67525380-3"></script>
            <script src="${DOMAIN}/analytics.js"></script>
          </iframe>
        </figure>
        <footer>
          <small>&copy;2020 Likha Media</small>
        </footer>
      </article>
    </body>
  </html>
`;

const Stories = ({ posts }) => `
  <rss version="2.0" xmlns:content="http://purl.org/rss/1.0/modules/content/">
    <channel>
      <title>Inday Trending</title>
      <link>${DOMAIN}</link>
      <description>Inday Trending - Pinoy Short Stories</description>
      <language>tl</language>
      <lastBuildDate>${date(posts.nodes[0].published)}</lastBuildDate>
      ${posts.nodes.map((post) => `<item>
        <title>${clean(post.title)}</title>
        <link>${DOMAIN}/stories/${post.slug}</link>
        <guid>${post.id}</guid>
        <pubDate>${date(post.published)}</pubDate>
        <author>Inday Trending</author>
        <description>${clean(post.content.match(/<p>(.*?)<\/p>/)[1])}</description>
        <content:encoded>
          <![CDATA[ ${Story({ post })}]]>
        </content:encoded>
      </item>
      `).join('')}
    </channel>
  </rss>
`;

const Feed = async (req, res) => {
  const client = createApolloClient();

  try {
    const content = await client.query({
      query: GET_FEED,
      variables: {
        first: 100,
        categoryName: 'stories',
      },
    });
    const { data } = content;
    res.setHeader('Content-Type', 'application/rss+xml; charset=utf-8');
    res.send(Stories(data));
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(`❌[Error]: ${error.message}`);
    res.status(500);
    res.end();
  }
};

export default Feed;
