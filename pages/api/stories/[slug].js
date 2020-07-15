import { getPost } from '../../../library/api';
import { Story } from '../../../library/templates';

export default async (req, res) => {
  try {
    const { query: { slug } } = req;
    const post = await getPost(slug);

    res.send(Story(post));
  } catch {
    res.status(404);
    res.end();
  }
};
