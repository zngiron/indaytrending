/* eslint-disable no-console */

const Express = require('express');
const Helmet = require('helmet');
const Next = require('next');
const Redis = require('redis');
const Monitor = require('express-status-monitor');

const port = parseInt(process.env.PORT, 10) || 3000;
const development = process.env.NODE_ENV !== 'production';
const client = Redis.createClient();
const app = Next({ development });
const handle = app.getRequestHandler();

const handleCache = (req, res) => {
  const key = `${req.path}`;

  client.get(key, async (error, cache) => {
    if (cache !== null) {
      res.setHeader('X-Cache', 'HIT');
      return res.send(cache);
    }

    try {
      const html = await app.renderToHTML(req, res, req.path, req.query);

      client.set(key, html);

      res.setHeader('X-Cache', 'MISS');
      return res.send(html);
    } catch (err) {
      app.renderError(err, req, res, req.path, req.query);
    }
  });
};

const Slash = (req, res, next) => {
  const { url } = req;

  if (url.substr(-1) === '/' && url.length > 1) {
    res.status(301);
    res.redirect(url.slice(0, -1));
  }

  next();
};

app.prepare().then(() => {
  const server = Express();

  server.use(Monitor());
  server.use(Helmet());
  server.use(Helmet({
    referrerPolicy: {
      policy: ['strict-origin'],
    },
  }));

  server.use(Slash);
  server.use(Express.static('public'));

  server.get('/api/*', (req, res) => handle(req, res));
  server.get('/_next/*', (req, res) => handle(req, res));
  server.get('*', (req, res) => handleCache(req, res));

  server.listen(port, () => console.log(`Express Server is Running on http://localhost:${port}`));
}).catch((error) => {
  console.error(`❌[Error]: ${error.message}`);
  process.exit(1);
});
