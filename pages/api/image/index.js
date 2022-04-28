import path from 'path';
import jimp from 'jimp';

async function handler({ query: { url } }, res) {
  if (!url) {
    return res.status(404).json({ message: 'Image Not Found' });
  }

  try {
    const image = await jimp.read(url);
    const overlay = await jimp.read(path.resolve('./public/static/indaytrending-overlay.png'));

    image.composite(overlay, 0, 0);
    image.cover(1280, 670);
    image.quality(100);

    const buffer = await image.getBufferAsync(jimp.MIME_PNG);

    return res.setHeader('Content-Type', 'image/png').status(200).send(buffer);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export default handler;
