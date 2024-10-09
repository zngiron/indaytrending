/* eslint-disable no-console */

import type { TypedDocumentNode } from '@graphql-typed-document-node/core';

import GetPageQuery from '@/graphql/GetPage.graphql';

import { client } from '@/library/api';

export type Page = {
  id: string;
  slug: string;
  title: string;
  content: string;
};

const GET_PAGE: TypedDocumentNode<{ page: Page }, { slug: string }> = GetPageQuery;

export const getPage = async (slug: string) => {
  try {
    const { page } = await client.request<{ page: Page }>(GET_PAGE, { slug });
    return page;
  } catch (error) {
    console.error('[getPage]', error);
    return null;
  }
};
