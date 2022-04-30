/* eslint-disable no-console */

const Express = require('express');
const Helmet = require('helmet');
const Compression = require('compression');
const Next = require('next');

const port = parseInt(process.env.PORT, 10) || 3000;
const development = process.env.NODE_ENV !== 'production';
const app = Next({ development });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = Express();

  server.use(Helmet({
    contentSecurityPolicy: false,
  }));

  server.use(Compression());

  server.use(Express.static('public'));
  server.get('*', (req, res) => handle(req, res));
  server.listen(port, () => console.log(`Express Server is Running on http://localhost:${port}`));
}).catch((error) => {
  throw new Error(`❌[Error]: ${error.message}`);
});
