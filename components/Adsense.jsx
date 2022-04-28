function Adsense({ type, slot }) {
  if (type === 'article') {
    return (
      <>
        <ins
          className="adsbygoogle block text-center"
          data-ad-layout="in-article"
          data-ad-format="fluid"
          data-ad-client="ca-pub-9878085739428147"
          data-ad-slot={slot}
        />
        <script>
          (adsbygoogle = window.adsbygoogle || []).push();
        </script>
      </>
    );
  }

  return (
    <>
      <ins
        className="adsbygoogle block"
        data-ad-client="ca-pub-9878085739428147"
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
      <script>
        (adsbygoogle = window.adsbygoogle || []).push();
      </script>
    </>
  );
}

export default Adsense;
