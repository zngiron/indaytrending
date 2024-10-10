import { PageModule } from '@/components/pages/page-module';

import { env } from '@/library/environment';

export const generateMetadata = () => ({
  title: 'Privacy Policy | Inday Trending - Pinoy Short Stories',
  openGraph: {
    type: 'website',
    siteName: 'Inday Trending',
    url: `${env.DOMAIN}/privacy`,
    title: 'Privacy Policy | Inday Trending - Pinoy Short Stories',
  },
});

export default function PrivacyPage() {
  return (
    <div className="container max-w-3xl grow">
      <PageModule slug="privacy" />
    </div>
  );
}
