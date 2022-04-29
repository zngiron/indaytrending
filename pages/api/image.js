import { createCanvas, loadImage } from 'canvas';

const { DOMAIN } = process.env;

export default async (req, res) => {
  const { query: { url } } = req;

  const re = new RegExp(/^https:\/\/(.*\.)?indaytrending\.com/);

  if (url && !url.match(re)) {
    res.status(404);
    res.end();
  }

  const link = url || `${DOMAIN}/static/indaytrending-thumbnail.png`;

  try {
    const width = 1280;
    const height = 670;

    const canvas = createCanvas(width, height);
    const context = canvas.getContext('2d');
    const gradient = context.createLinearGradient(0, 0, width, height);
    const image = await loadImage(link);

    context.drawImage(image, 0, 0);
    gradient.addColorStop(0, '#253f4c99');
    gradient.addColorStop(100, '#832f3999');

    context.fillStyle = gradient;
    context.fillRect(0, 0, width, height);

    const overlay = await loadImage(`${DOMAIN}/static/indaytrending-overlay.png`);

    context.drawImage(overlay, 0, 0, 1280, 670);

    const buffer = canvas.toBuffer('image/png');

    res.setHeader('Content-Type', 'image/png');
    res.send(buffer);
  } catch (error) {
    res.status(404);
    res.end();
  }
};
