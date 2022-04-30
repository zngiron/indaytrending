import sanitize from 'sanitize-html';

export const clean = (html) => sanitize(html, {
  allowedTags: ['p', 'img'],
  allowedAttributes: {
    img: ['src', 'srcset', 'width', 'height', 'alt', 'loading'],
  },
});

export const date = (e) => new Date(e).toISOString();


export const keygen = () => Math.floor(Math.random() * 2048);