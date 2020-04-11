/* eslint-disable no-console */

const Express = require('express');
const Helmet = require('helmet');
const Next = require('next');
const LRUCache = require('lru-cache');

const port = parseInt(process.env.PORT, 10) || 3000;
const development = process.env.NODE_ENV !== 'production';
const app = Next({ development });
const handle = app.getRequestHandler();

const cache = new LRUCache({
  max: 100 * 1024 * 1024,
  maxAge: 1000 * 60 * 60,
});

const getCacheKey = (req) => `${req.path}`;

const handleCache = async (req, res) => {
  const key = getCacheKey(req);

  if (cache.has(key)) {
    res.setHeader('X-Cache', 'HIT');
    return res.send(cache.get(key));
  }

  try {
    const html = await app.renderToHTML(req, res, req.path, req.query);

    if (res.statusCode !== 200) {
      return res.send(html);
    }

    cache.set(key, html);
    res.setHeader('X-Cache', 'MISS');
    return res.send(html);
  } catch (error) {
    return app.renderError(error, req, res, req.path, req.query);
  }
};

app.prepare().then(() => {
  const server = Express();

  server.use(Helmet());
  server.use(Helmet({
    referrerPolicy: {
      policy: ['strict-origin'],
    },
  }));

  server.use(Express.static('public'));

  server.get('/api/*', (req, res) => handle(req, res));
  server.get('/_next/*', (req, res) => handle(req, res));
  server.get('*', (req, res) => handleCache(req, res));

  server.listen(port, () => console.log(`Express Server is Running on http://localhost:${port}`));
}).catch((error) => {
  console.error(`❌[Error]: ${error.message}`);
  process.exit(1);
});
