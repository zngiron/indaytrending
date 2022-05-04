/* eslint-disable no-underscore-dangle */

import { useEffect } from 'react';

function Taboola({ type }) {
  useEffect(() => {
    setTimeout(() => {
      if (window._taboola) {
        window._taboola = window._taboola || [];

        if (type === 'sidebar') {
          window._taboola.push({
            mode: 'thumbnails-rr',
            container: 'taboola-right-rail-thumbnails',
            placement: 'Right Rail Thumbnails',
            target_type: 'mix',
          });
        }

        if (type === 'feed') {
          window._taboola.push({
            mode: 'thumbnails-a',
            container: 'taboola-below-article-thumbnails',
            placement: 'Below Article Thumbnails',
            target_type: 'mix',
          });
        }

        if (type === 'article') {
          window._taboola.push({
            mode: 'thumbnails-mid',
            container: 'taboola-mid-article-thumbnails',
            placement: 'Mid Article Thumbnails',
            target_type: 'mix',
          });
        }

        window._taboola.push({ flush: true });
      }
    }, 1000);
  }, [type]);

  if (type === 'sidebar') {
    return <div id="taboola-right-rail-thumbnails" />;
  }

  if (type === 'feed') {
    return <div id="taboola-below-article-thumbnails" />;
  }

  if (type === 'article') {
    return <div id="taboola-mid-article-thumbnails" />;
  }
}

export default Taboola;
