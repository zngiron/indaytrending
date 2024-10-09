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
        src: '/static/indaytrending-icon-160.png',
        sizes: '160x160',
        type: 'image/png',
      },
      {
        src: '/static/indaytrending-icon-320.png',
        sizes: '320x320',
        type: 'image/png',
      },
      {
        src: '/static/indaytrending-icon-480.png',
        sizes: '480x480',
        type: 'image/png',
      },
    ],
    screenshots: [
      {
        src: '/static/indaytrending-thumbnail.png',
        sizes: '1200x630',
        type: 'image/png',
      },
    ],
  };
}
