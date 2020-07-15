import { html } from 'common-tags';
import { clean, date } from './functions';

export const Story = ({ post }) => html`
  <!doctype html>
  <html lang="tl" prefix="op: http://media.facebook.com/op#">
    <head>
      <meta charset="utf-8">
      <meta property="op:markup_version" content="v1.0">
      <meta property="fb:article_style" content="default">
      <meta property="fb:use_automatic_ad_placement" content="enable=true ad_density=default">
      <meta property="fb:op-recirculation-ads" content="placement_id=${process.env.RECIRCULATION}">
      <link rel="canonical" href="${process.env.DOMAIN}/stories/${post?.slug}">
    </head>
    <body>
      <article>
        <header>
          <figure>
            <img src="${post?.image?.featured || `${process.env.DOMAIN}/indaytrending-thumbnail.png`}" alt="${post?.title}" />
          </figure>
          <time class="op-published" datetime="${date(post?.published)}">${date(post?.published)}</time>
          <time class="op-modified" datetime="${date(post?.modified)}">${date(post?.modified)}</time>
          <h1>${post?.title}</h1>
          <address>
            <a href="https://www.facebook.com/indaytrending" rel="facebook">Inday Trending</a>
          </address>
          <h3 class="op-kicker">Stories</h3>
          <figure class="op-ad">
            <iframe src="https://www.facebook.com/adnw_request?placement=${process.env.BANNER}&adtype=banner300x250" width="300" height="250">
            </iframe>
          </figure>
        </header>
        ${clean(post?.content)}
        <figure class="op-tracker">
          <iframe>
            <script src="https://www.googletagmanager.com/gtag/js?id=${process.env.ANALYTICS}"></script>
            <script src="${process.env.DOMAIN}/analytics.js"></script>
            <script src="${process.env.DOMAIN}/alexa.js"></script>
          </iframe>
        </figure>
        <footer>
          <small>&copy;2020 Likha Media</small>
        </footer>
      </article>
    </body>
  </html> 
`;

export const Stories = ({ posts }) => html`
  <rss version="2.0" xmlns:content="http://purl.org/rss/1.0/modules/content/">
    <channel>
      <title>Inday Trending</title>
      <link>${process.env.DOMAIN}</link>
      <description>Inday Trending - Pinoy Short Stories</description>
      <language>tl</language>
      <lastBuildDate>${date(posts.edges[0].node.published)}</lastBuildDate>
      ${posts.edges.map(({ node }) => `
      <item>
        <title>${clean(node?.title)}</title>
        <link>${process.env.DOMAIN}/stories/${node?.slug}</link>
        <guid>${node?.id}</guid>
        <pubDate>${date(node?.published)}</pubDate>
        <author>Inday Trending</author>
        <description>Inday Trending - Pinoy Short Stories</description>
        <content:encoded>
          <![CDATA[ ${Story({ post: node })}]]>
        </content:encoded>
      </item>
      `).join('')}
    </channel>
  </rss>
`;
