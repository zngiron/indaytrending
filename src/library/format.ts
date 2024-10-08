import DOMPurify from 'isomorphic-dompurify';

export const formatHTML = (html: string) => {
  const sanitized = DOMPurify.sanitize(html, {
    ALLOWED_TAGS: ['p', 'img'],
    ALLOWED_ATTR: ['src', 'srcset', 'width', 'height', 'alt', 'loading'],
  });

  return sanitized.replace(/>\s+</g, '><').replace(/\s+/g, ' ').trim();
};
