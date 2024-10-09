/* eslint-disable no-console */

import type { TypedDocumentNode } from '@graphql-typed-document-node/core';

import GetCategoriesQuery from '@/graphql/GetCategories.graphql';
import GetCategoryQuery from '@/graphql/GetCategory.graphql';

import { client } from '@/library/api';

export type Category = {
  id: string;
  slug: string;
  name: string;
  description?: string;
};

export type Categories = {
  edges: {
    node: Category;
  }[];
};

const GET_CATEGORIES: TypedDocumentNode<{ categories: Categories }> = GetCategoriesQuery;
const GET_CATEGORY: TypedDocumentNode<{ category: Category }, { slug: string }> = GetCategoryQuery;

export const getCategories = async () => {
  try {
    const { categories } = await client.request(GET_CATEGORIES);
    return categories;
  } catch (error) {
    console.error('[getCategories]', error);
    return null;
  }
};

export const getCategory = async (slug: string) => {
  try {
    const { category } = await client.request(GET_CATEGORY, { slug });
    return category;
  } catch (error) {
    console.error('[getCategory]', error);
    return null;
  }
};
