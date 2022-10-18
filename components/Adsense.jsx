export const handleAdsense = () => {
  const elements = document.getElementsByClassName('adsense');
  [...elements].map(() => window.adsbygoogle.push({}));
};

function Adsense({ slot }) {
  return (
    <span className="block my-5">
      <span className="block py-5 text-sm text-center">Advertisement</span>
      <ins
        className="adsbygoogle adsense block mx-auto text-center"
        data-ad-client="ca-pub-9878085739428147"
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </span>
  );
}

export default Adsense;
