import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Inday Trending',
    short_name: 'Inday Trending',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#ffffff',
    description: 'Kwento, inspirasyon, at trending na mga ganap. Sumama sa paglalakbay ni Inday at tuklasin ang mga kwentong tatatak sa puso mo.',
    icons: [
      {
        src: '/static/indaytrending-icon.png',
        sizes: '320x320',
        type: 'image/png',
      },
    ],
    screenshots: [
      {
        src: '/static/inday-trending-thumbnail.png',
        sizes: '1200x630',
        type: 'image/png',
      },
    ],
  };
}
