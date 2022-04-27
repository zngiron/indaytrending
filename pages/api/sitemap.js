import { date } from '../../library/functions';
import client from '../../graphql/client';
import POSTS_QUERY from '../../graphql/Posts.graphql';

async function handler(req, res) {
  const { data } = await client.query({
    query: POSTS_QUERY,
    variables: {
      first: 100,
    },
  });

  const { posts } = data;

  if (!posts) {
    res.status(500).json({ message: 'Sitemap Error' });
  }

  return res.setHeader('Content-Type', 'text/xml; charset=UTF-8').send(`
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>https://indaytrending.com</loc>
        <lastmod>${date(Date.now())}</lastmod>
        <changefreq>always</changefreq>
        <priority>1.0</priority>
      </url>
      <url>
        <loc>https://indaytrending.com/stories</loc>
        <lastmod>${date(Date.now())}</lastmod>
        <changefreq>always</changefreq>
        <priority>0.8</priority>
      </url>
      <url>
        <loc>https://indaytrending.com/family</loc>
        <lastmod>${date(Date.now())}</lastmod>
        <changefreq>always</changefreq>
        <priority>0.8</priority>
      </url>
      <url>
        <loc>https://indaytrending.com/fun</loc>
        <lastmod>${date(Date.now())}</lastmod>
        <changefreq>always</changefreq>
        <priority>0.8</priority>
      </url>
      <url>
        <loc>https://indaytrending.com/heartbreaking</loc>
        <lastmod>${date(Date.now())}</lastmod>
        <changefreq>always</changefreq>
        <priority>0.8</priority>
      </url>
      <url>
        <loc>https://indaytrending.com/inspiring</loc>
        <lastmod>${date(Date.now())}</lastmod>
        <changefreq>always</changefreq>
        <priority>0.8</priority>
      </url>
      <url>
        <loc>https://indaytrending.com/karma</loc>
        <lastmod>${date(Date.now())}</lastmod>
        <changefreq>always</changefreq>
        <priority>0.8</priority>
      </url>
      <url>
        <loc>https://indaytrending.com/love</loc>
        <lastmod>${date(Date.now())}</lastmod>
        <changefreq>always</changefreq>
        <priority>0.8</priority>
      </url>
      <url>
        <loc>https://indaytrending.com/miracle</loc>
        <lastmod>${date(Date.now())}</lastmod>
        <changefreq>always</changefreq>
        <priority>0.8</priority>
      </url>
      <url>
        <loc>https://indaytrending.com/mystery</loc>
        <lastmod>${date(Date.now())}</lastmod>
        <changefreq>always</changefreq>
        <priority>0.8</priority>
      </url>
      <url>
        <loc>https://indaytrending.com/success</loc>
        <lastmod>${date(Date.now())}</lastmod>
        <changefreq>always</changefreq>
        <priority>0.8</priority>
      </url>
      ${posts.edges.map(({ node }) => `
        <url>
          <loc>https://indaytrending.com/stories/${node.slug}</loc>
          <lastmod>${date(node.modified)}</lastmod>
          <changefreq>never</changefreq>
        </url>
      `).join('')}
    </urlset> 
  `);
}

export default handler;
