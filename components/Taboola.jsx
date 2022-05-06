/* eslint-disable no-underscore-dangle */

export const handleTaboola = (url) => {
  const push = ({ mode, container, placement }) => {
    const element = document.getElementById(container);

    if (element) {
      window._taboola.push({
        mode,
        container,
        placement,
        target_type: 'mix',
      });
    }
  };

  if (window.performance && typeof window.performance.mark === 'function') {
    window.performance.mark('tbl_ic');
  }

  if (url) {
    window._taboola.push({ notify: 'newPageLoad' });
    window._taboola.push({ article: 'auto', url });
  } else {
    window._taboola.push({ article: 'auto' });
  }

  push({
    mode: 'thumbnails-rr',
    container: 'taboola-right-rail-thumbnails',
    placement: 'Right Rail Thumbnails',
  });

  push({
    mode: 'thumbnails-mid',
    container: 'taboola-mid-article-thumbnails',
    placement: 'Mid Article Thumbnails',
  });

  push({
    mode: url ? 'alternating-thumbnails-a' : 'thumbnails-a',
    container: 'taboola-below-article-thumbnails',
    placement: 'Below Article Thumbnails',
  });
};

function Taboola({ type }) {
  if (type === 'sidebar') {
    return <div id="taboola-right-rail-thumbnails" />;
  }

  if (type === 'feed') {
    return <div id="taboola-below-article-thumbnails" />;
  }

  if (type === 'article') {
    return <div id="taboola-mid-article-thumbnails" />;
  }

  return false;
}

export default Taboola;
