import { getFeed } from '../../../library/api';
import { Stories } from '../../../library/templates';

export default async (req, res) => {
  try {
    const { query: { entries } } = req;
    const posts = await getFeed(entries);

    res.setHeader('Content-Type', 'application/rss+xml; charset=utf-8');
    res.send(Stories(posts));
  } catch {
    res.status(404);
    res.end();
  }
};
