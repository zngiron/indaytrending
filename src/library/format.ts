import sanitize from 'sanitize-html';

export const formatHTML = (html: string) => sanitize(html, {
  allowedTags: ['p', 'img'],
  allowedAttributes: {
    img: ['src', 'srcset', 'width', 'height', 'alt', 'loading'],
  },
});
