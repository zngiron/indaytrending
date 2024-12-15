import { notFound } from 'next/navigation';
import Image from 'next/image';

import { getAllCampaigns, getCampaign } from '@/data/campaign';
import { Button } from '@/components/ui/button';
import { env } from '@/library/environment';

interface CampaignPageProps {
  params: Promise<{
    uuid: string;
  }>;
}

export const generateStaticParams = async () => {
  const campaigns = await getAllCampaigns();

  return campaigns.map((campaign) => ({
    uuid: campaign.uuid,
  }));
};

export default async function Page({ params }: CampaignPageProps) {
  const { uuid } = await params;

  const campaign = await getCampaign({ uuid });

  if (!campaign) {
    return notFound();
  }

  return (
    <div className="container grow max-w-3xl flex flex-col items-center justify-center gap-8 py-12">
      <div className="flex flex-col items-center gap-4">
        {campaign.url}
        <Image
          src="/static/indaytrending-icon.png"
          width={160}
          height={160}
          draggable={false}
          alt="Inday Trending"
        />
        <Image
          className="dark:hidden"
          src="/static/indaytrending-logo-light.svg"
          width={160}
          height={80}
          alt="Inday Trending"
          draggable={false}
          priority
        />
        <Image
          className="hidden dark:inline"
          src="/static/indaytrending-logo-dark.svg"
          width={160}
          height={80}
          alt="Inday Trending"
          draggable={false}
          priority
        />
      </div>

      <div className="text-center space-y-2">
        <h1 className="text-2xl font-bold">Ikaw ang maswerteng nanalo!</h1>
        <p className="font-semibold text-balance">
          I-save ang screenshot ito at i-send ito sa aking Facebook Page upang
          ma-claim ang iyong premyo!
        </p>
      </div>
      <div className="space-y-1 text-sm text-muted-foreground text-center">
        <div className="flex justify-center">
          <Image
            className="rounded-lg"
            src={`${env.DOMAIN}/api/image/${campaign.url}`}
            alt={campaign.url}
            width={400}
            height={225}
          />
        </div>
        <div>{campaign.uuid}</div>
        <div>{campaign.ip}</div>
        <div>Status: {campaign.status ? 'Claimed' : 'Unclaimed'}</div>
      </div>
      <Button className="flex items-center gap-2 w-fit">
        <Image
          src="/static/facebook-icon.svg"
          alt="Facebook"
          width={16}
          height={16}
        />
        <a href="https://m.me/indaytrending" target="_blank">
          Send To Inday Trending
        </a>
      </Button>
    </div>
  );
}
