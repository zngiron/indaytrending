import path from 'path';
import jimp from 'jimp';

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
    return res.status(404).json({ message: 'Image Not Found' });
  }

  try {
    const font = await jimp.loadFont(path.resolve('./public/fonts/open-sans-16-white.fnt'));
    const overlay = await jimp.read(path.resolve('./public/static/indaytrending-overlay.png'));
    const image = await jimp.read(link);

    image.composite(overlay, 0, 0);
    image.cover(1280, 670);
    image.quality(100);

    image.print(font, 640, 80, {
      text: data.post.title,
      alignmentX: jimp.HORIZONTAL_ALIGN_RIGHT,
      alignmentY: jimp.VERTICAL_ALIGN_TOP,
    }, 600, 80);

    const buffer = await image.getBufferAsync(jimp.MIME_PNG);

    return res.setHeader('Content-Type', 'image/png').status(200).send(buffer);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export default handler;
