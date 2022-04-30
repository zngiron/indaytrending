/* eslint-disable no-console */

const express = require('express');
const compression = require('compression');
const next = require('next');

const port = parseInt(process.env.PORT, 10) || 3000;
const development = process.env.NODE_ENV !== 'production';
const app = next({ development });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.use(compression());

  server.use(express.static('public'));
  server.get('*', (req, res) => handle(req, res));
  server.listen(port, () => console.log(`Express Server is Running on http://localhost:${port}`));
}).catch((error) => {
  throw new Error(`❌[Error]: ${error.message}`);
});
