'use server';

import { PrismaClient } from '@prisma/client';
import { cache } from 'react';

const prisma = new PrismaClient();

interface CreateCampaignParams {
  ip: string;
  uuid: string;
  url: string;
}

export const createCampaign = cache(async (params: CreateCampaignParams) => {
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
});

export const getAllCampaigns = cache(async () => {
  return await prisma.campaign.findMany();
});

export const getCampaign = cache(async (params: { uuid: string }) => {
  try {
    return await prisma.campaign.findUnique({
      where: { uuid: params.uuid },
    });
  } catch (error) {
    console.error(error);
  }
});

export const getIpAddress = cache(async () => {
  return await fetch('https://api.ipify.org?format=json').then((res) =>
    res.json(),
  );
});
