import { createCanvas, loadImage } from 'canvas';

import client from '../../../graphql/client';
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

    const overlay = await loadImage(`${process.env.NEXT_PUBLIC_DOMAIN}/static/indaytrending-overlay.png`);

    context.drawImage(overlay, 0, 530, 1280, 140);

    const buffer = canvas.toBuffer('image/png');

    return res.setHeader('Content-Type', 'image/png').status(200).send(buffer);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
}

export default handler;
