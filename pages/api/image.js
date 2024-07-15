import Jimp from 'jimp';
import { kv } from '@vercel/kv';

async function handler(req, res) {
  const { query: { url } } = req;

  if (!url) {
    return res.status(404).json({ message: 'Image URL not provided' });
  }

  const cacheKey = `image-cache-${url}`;

  try {
    const cachedImage = await kv.get(cacheKey);

    if (cachedImage) {
      return res.setHeader('Content-Type', 'image/png').status(200).send(Buffer.from(cachedImage, 'base64'));
    }

    if (!url.startsWith('http')) {
      return res.status(400).json({ message: 'Invalid URL format' });
    }

    const image = await Jimp.read(url);
    const overlay = await Jimp.read(`${process.env.NEXT_PUBLIC_DOMAIN}/static/indaytrending-overlay.png`);

    image.composite(overlay, 0, 0);
    image.cover(1280, 670);
    image.quality(100);

    const buffer = await image.getBufferAsync(Jimp.MIME_PNG);

    // Cache the image in Vercel KV
    await kv.set(cacheKey, buffer.toString('base64'));

    return res.setHeader('Content-Type', 'image/png').status(200).send(buffer);
  } catch (error) {
    // Log the error for debugging
    console.error('Error processing image:', error);
    return res.status(500).json({ message: error.message });
  }
}

export default handler;
