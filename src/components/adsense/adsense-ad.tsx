import { cn } from '@/library/utilities';

export function AdsenseAd() {
  return (
    <div className={cn(
      'block py-4 mt-4 rounded-md',
      'bg-black/10',
    )}
    >
      <div className="text-xs text-muted-foreground text-center">
        Advertisement
      </div>
      <ins
        className="adsbygoogle block text-center"
        data-ad-layout="in-article"
        data-ad-format="fluid"
        data-ad-client="ca-pub-9878085739428147"
        data-ad-slot="3640794162"
      />
    </div>
  );
}
