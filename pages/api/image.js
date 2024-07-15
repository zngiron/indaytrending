import Jimp from 'jimp';
import fs from 'fs';
import path from 'path';

async function handler({ query: { url } }, res) {
  if (!url) {
    return res.status(404).json({ message: 'Image Not Found' });
  }

  const cacheDir = path.join(process.cwd(), '.next/cache/images');
  const cacheKey = encodeURIComponent(url);
  const cachePath = path.join(cacheDir, `${cacheKey}.png`);

  try {
    if (fs.existsSync(cachePath)) {
      const cachedImage = fs.readFileSync(cachePath);

      return res.setHeader('Content-Type', 'image/png').status(200).send(cachedImage);
    }

    if (!fs.existsSync(cacheDir)) {
      fs.mkdirSync(cacheDir);
    }

    const image = await Jimp.read(url);
    const overlay = await Jimp.read(`${process.env.NEXT_PUBLIC_DOMAIN}/static/indaytrending-overlay.png`);

    image.composite(overlay, 0, 0);
    image.cover(1280, 670);
    image.quality(100);

    const buffer = await image.getBufferAsync(Jimp.MIME_PNG);

    // Cache the processed image
    fs.writeFileSync(cachePath, buffer);

    return res.setHeader('Content-Type', 'image/png').status(200).send(buffer);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export default handler;
