/* eslint-disable no-console */

const Express = require('express');
const Next = require('next');
const Redis = require('redis');

const port = parseInt(process.env.PORT, 10) || 3000;
const development = process.env.NODE_ENV !== 'production';
const app = Next({ development });
const handle = app.getRequestHandler();
const client = Redis.createClient();

const handleCache = (req, res) => {
  const key = `${req.path}`;

  client.get(key, async (error, cache) => {
    if (cache !== null) {
      res.setHeader('X-Cache', 'HIT');
      res.send(cache);
      return client.quit();
    }

    try {
      const html = await app.renderToHTML(req, res, req.path, req.query);

      client.set(key, html);

      res.setHeader('X-Cache', 'MISS');
      res.send(html);
    } catch (err) {
      app.renderError(err, req, res, req.path, req.query);
    }

    return client.quit();
  });
};

app.prepare().then(() => {
  const server = Express();
  server.use(Express.static('public'));

  server.get('/wp-content/*', (req, res) => {
    res.status(410);
    res.end();
  });

  server.get('/api/*', (req, res) => handle(req, res));
  server.get('/_next/*', (req, res) => handle(req, res));
  server.get('*', (req, res) => handleCache(req, res));

  server.listen(port, () => console.log(`Express Server is Running on http://localhost:${port}`));
}).catch((error) => {
  console.error(`❌[Error]: ${error.message}`);
  process.exit(1);
});
