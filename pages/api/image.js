import Jimp from 'jimp';

export const config = {
  runtime: 'edge',
};

async function handler({ query: { url } }, res) {
  if (!url) {
    return res.status(404).json({ message: 'Image Not Found' });
  }

  try {
    const image = await Jimp.read(url);
    const overlay = await Jimp.read(`${process.env.NEXT_PUBLIC_DOMAIN}/static/indaytrending-overlay.png`);

    const centeredImage = new Jimp(1200, 630);

    image.cover(1200, 630);

    const x = (1200 - image.getWidth()) / 2;
    const y = (630 - image.getHeight()) / 2;

    centeredImage.composite(image, x, y);
    centeredImage.composite(overlay, 0, 0);

    centeredImage.quality(100);

    const buffer = await centeredImage.getBufferAsync(Jimp.MIME_PNG);

    res.setHeader('Content-Type', 'image/png');
    res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
    return res.status(200).send(buffer);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export default handler;
