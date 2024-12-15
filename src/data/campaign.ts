'use server';

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

interface CreateCampaignParams {
  ip: string;
  uuid: string;
  url: string;
}

export const createCampaign = async (params: CreateCampaignParams) => {
  try {
    return await prisma.campaign.create({
      data: {
        ip: params.ip,
        uuid: params.uuid,
        url: params.url,
      },
    });
  } catch (error) {
    throw new Error('Failed to create campaign');
  }
};

export const getCampaign = async (params: { uuid: string }) => {
  try {
    return await prisma.campaign.findUnique({
      where: { uuid: params.uuid },
    });
  } catch (error) {
    throw new Error('Failed to get campaign');
  }
};

export const getIpAddress = async () => {
  return await fetch('https://api.ipify.org?format=json').then((res) =>
    res.json(),
  );
};
