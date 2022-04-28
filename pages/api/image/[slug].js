import Jimp from 'jimp';

import client from '../../../library/client';
import IMAGE_QUERY from '../../../graphql/Image.graphql';

async function handler({ query: { slug } }, res) {
  const { data } = await client.query({
    query: IMAGE_QUERY,
    variables: {
      slug,
    },
  });

  const link = data.post?.image.node.featured;

  if (!link) {
    res.status(404).json({ message: 'Image Not Found' });
  }
  try {
    const image = await Jimp.read(link);
    const overlay = await Jimp.read(`${process.env.NEXT_PUBLIC_DOMAIN}/static/indaytrending-overlay.png`);

    image.composite(overlay, 0, 530);
    const buffer = await image.getBufferAsync(Jimp.MIME_PNG);

    return res.setHeader('Content-Type', 'image/png').status(200).send(buffer);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
}

export default handler;
