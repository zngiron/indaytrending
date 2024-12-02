import { NextRequest } from 'next/server';

import { getCampaign } from '@/data/campaign';

interface CampaignParams {
  params: Promise<{ uuid: string }>;
}

export async function GET(req: NextRequest, { params }: CampaignParams) {
  const { uuid } = await params;
  const campaign = await getCampaign(uuid);

  if (!campaign) {
    return new Response('Campaign not found', {
      status: 404,
    });
  }

  return new Response(JSON.stringify(campaign), {
    status: 200,
  });
}
