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

export const date = (e) => new Date(e).toISOString();

export const copy = (e) => {
  e.preventDefault();

  const modified = String(document.getSelection()).split(' ').sort(() => 0.5 - Math.random()).join(' ');

  return e.clipboardData.setData('text', `${modified.charAt(0).toUpperCase()}${modified.slice(1)}`);
};
