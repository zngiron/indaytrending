import sanitize from 'sanitize-html';

export const clean = (html) => sanitize(html, {
  allowedTags: ['p', 'img', 'span'],
  allowedAttributes: {
    img: ['src', 'srcset', 'width', 'height', 'alt', 'loading'],
  },
});

export const date = (e) => new Date(e).toISOString();

export const ads = (html) => {
  const re = /<.*?>.*?<\/.*?>/gms;
  const element = `
    <span class="block my-5">
      <span class="block py-5 text-sm text-center">Advertisement</span>
      <ins
        class="adsbygoogle adsense block mx-auto text-center"
        data-ad-client="ca-pub-9878085739428147"
        data-ad-slot="3640794162"
        data-ad-format="fluid"
        data-ad-layout="in-article"
      ></ins>
    </span>
  `;

  const content = html.match(re)?.map((item, id) => {
    if (id % 8 === 0 && id !== 0) {
      return element + item;
    }

    return item;
  });

  return content.join('');
};
