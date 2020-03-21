/* eslint-disable no-underscore-dangle */
/* eslint-disable no-undef */

import React, { useEffect } from 'react';

const Taboola = () => {
  useEffect(() => {
    window._taboola = window._taboola || [];
    _taboola.push({
      mode: 'thumbnails-rr',
      container: 'taboola-right-rail-thumbnails',
      placement: 'Right Rail Thumbnails',
      target_type: 'mix',
    });
  }, []);

  useEffect(() => {
    window._taboola = window._taboola || [];
    _taboola.push({ flush: true });
  }, []);

  return (
    <div id="taboola-right-rail-thumbnails" />
  );
};

export default Taboola;
