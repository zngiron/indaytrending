import { getFeed } from '../../../library/api';
import { Stories } from '../../../library/templates';

export default async (req, res) => {
  try {
    const posts = await getFeed();

    res.setHeader('Content-Type', 'application/rss+xml; charset=utf-8');
    res.send(Stories(posts));
  } catch {
    res.status(404);
    res.end();
  }
};
