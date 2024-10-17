import type { Metadata, Viewport } from 'next';
import type { PropsWithChildren } from 'react';

import { Inter } from 'next/font/google';

import { Providers } from '@/components/providers';
import { Scripts } from '@/components/scripts';
import { Header } from '@/components/header';
import { env } from '@/library/environment';
import { cn } from '@/library/utilities';

import '@/app/globals.css';

const font = Inter({
  display: 'swap',
  subsets: ['latin'],
  weight: ['400', '600'],
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  viewportFit: 'cover',
};

export const metadata: Metadata = {
  metadataBase: new URL(env.DOMAIN),
  title: 'Inday Trending - Pinoy Short Stories',
  description: 'Kwento, inspirasyon, at trending na mga ganap. Sumama sa paglalakbay ni Inday at tuklasin ang mga kwentong tatatak sa puso mo.',
  openGraph: {
    type: 'website',
    url: '/',
    siteName: 'Inday Trending',
    locale: 'tl-PH',
    images: [
      {
        url: '/static/indaytrending-thumbnail.png',
        width: 1200,
        height: 630,
        alt: 'Inday Trending',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@indaytrending',
  },
  authors: [{
    name: 'Inday Trending',
    url: '/',
  }],
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="tl" suppressHydrationWarning>
      <body
        className={cn(
          font.className,
          'overflow-x-hidden overflow-y-auto scroll-smooth touch-pan-y',
          'flex flex-col min-h-dvh',
          'bg-muted text-foreground antialiased',
          'dark:bg-slate-900 dark:text-white',
          'selection:bg-primary selection:text-white',
        )}
      >
        <Providers>
          <Header />
          <main className="flex flex-col grow pb-32">
            {children}
          </main>
        </Providers>
        <Scripts />
      </body>
    </html>
  );
}
