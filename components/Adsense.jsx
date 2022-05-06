export const handleAdsense = () => {
  const elements = document.getElementsByClassName('adsense');
  [...elements].map(() => window.adsbygoogle.push({}));
};

function Adsense({ type, slot }) {
  if (type === 'article') {
    return (
      <ins
        className="adsbygoogle adsense block mx-auto text-center"
        data-ad-client="ca-pub-9878085739428147"
        data-ad-slot={slot}
        data-ad-format="fluid"
        data-ad-layout="in-article"
      />
    );
  }

  return (
    <ins
      className="adsbygoogle adsense block mx-auto text-center"
      data-ad-client="ca-pub-9878085739428147"
      data-ad-slot={slot}
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  );
}

export default Adsense;
