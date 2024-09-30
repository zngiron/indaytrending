import Jimp from 'jimp';

async function handler(req, res) {
  const { url } = req.query;

  if (!url) {
    return res.status(404).json({ message: 'Image Not Found' });
  }

  if (req.headers['if-none-match']) {
    return res.status(304).end();
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

    const etag = Buffer.from(url).toString('base64');

    res.setHeader('ETag', etag);
    res.setHeader('Content-Type', 'image/png');
    res.setHeader('Cache-Control', 'public, max-age=86400, s-maxage=86400');
    return res.status(200).send(buffer);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export default handler;
