import sanitize from 'sanitize-html';
import { oneLine } from 'common-tags';

export const clean = (html) => oneLine(
  sanitize(html, {
    allowedTags: ['h2', 'h3', 'h4', 'h5', 'h6', 'p', 'strong', 'img'],
    allowedAttributes: {
      img: ['src', 'srcset', 'alt'],
    },
    parser: {
      decodeEntities: true,
    },
  }),
);

export const date = (string) => new Date(string).toISOString();
