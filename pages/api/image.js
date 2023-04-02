import Jimp from 'jimp';

async function handler({ query: { url } }, res) {
  if (!url) {
    return res.status(404).json({ message: 'Image Not Found' });
  }

  try {
    const image = await Jimp.read(url);
    const overlay = await Jimp.read(`${process.env.NEXT_PUBLIC_DOMAIN}/static/indaytrending-overlay.png`);

    image.composite(overlay, 0, 0);
    image.cover(1280, 670);
    image.quality(100);

    const buffer = await image.getBufferAsync(Jimp.MIME_PNG);

    return res.setHeader('Content-Type', 'image/png').status(200).send(buffer);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export default handler;

export const config = {
  runtime: 'edge',
};
