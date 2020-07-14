window.dataLayer = window.dataLayer || [];

function gtag() {
  dataLayer.push(arguments);
}

gtag('js', new Date());
gtag('set', {
  page_title: ia_document.title,
  page_referrer: ia_document.referrer,
  campaign: {
    name: 'Instant Articles',
    source: 'Facebook',
    medium: 'Articles',
  },
});

gtag('config', 'UA-67525380-3');
