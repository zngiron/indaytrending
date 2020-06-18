/* eslint-disable no-console */

import { createCanvas, loadImage } from 'canvas';

const { DOMAIN } = process.env;

export default async (req, res) => {
  const { query: { url } } = req;

  const re = new RegExp(/^https:\/\/cms\.indaytrending\.com/);

  if (!url || !url.match(re)) {
    res.status(404);
    res.end();
  }

  try {
    const width = 1280;
    const height = 670;

    const canvas = createCanvas(width, height);
    const context = canvas.getContext('2d');
    const gradient = context.createLinearGradient(0, 0, width, height);
    const image = await loadImage(url);

    context.drawImage(image, 0, 0);
    gradient.addColorStop(0, '#253f4c99');
    gradient.addColorStop(100, '#832f3999');

    context.fillStyle = gradient;
    context.fillRect(0, 0, width, height);

    const overlay = await loadImage(`${DOMAIN}/static/indaytrending-overlay.png`);

    context.drawImage(overlay, 0, 530, 1280, 140);

    const buffer = canvas.toBuffer('image/png');

    res.setHeader('Content-Type', 'image/png');
    return res.send(buffer);
  } catch (error) {
    console.error(error.message);
    res.status(404);
    return res.end();
  }
};
