/* eslint-disable no-underscore-dangle */
/* eslint-disable no-undef */

import React, { useEffect } from 'react';

const Taboola = () => {
  useEffect(() => {
    window._taboola = window._taboola || [];
    _taboola.push({ article: 'auto' });
    _taboola.push({
      mode: 'thumbnails-a',
      container: 'taboola-below-article-thumbnails',
      placement: 'Below Article Thumbnails',
      target_type: 'mix',
    });
  }, []);

  useEffect(() => {
    window._taboola = window._taboola || [];
    _taboola.push({ flush: true });
  }, []);

  return (
    <div id="taboola-below-article-thumbnails" />
  );
};

export default Taboola;
