/* eslint-disable no-console */

import type { TypedDocumentNode } from '@graphql-typed-document-node/core';
import type { Category } from '@/data/categories';

import GetPostQuery from '@/graphql/GetPost.graphql';
import GetPostsQuery from '@/graphql/GetPosts.graphql';

import { client } from '@/library/api';

export type Post = {
  id: string;
  slug: string;
  title: string;
  published: string;
  modified: string;
  image?: {
    node: {
      featured: string;
    };
  };
  content: string;
  categories: {
    edges: {
      node: Category;
    }[];
  };
};

export type Posts = {
  pageInfo: {
    startCursor: string;
    endCursor: string;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
  };
  edges: {
    cursor: string;
    node: Post;
  }[];
};

interface GetPostsParams {
  first: number;
  last?: number;
  after?: string;
  before?: string;
  category: string;
}

const GET_POSTS: TypedDocumentNode<{ posts: Posts }, GetPostsParams> = GetPostsQuery;
const GET_POST: TypedDocumentNode<{ post: Post }, { slug: string }> = GetPostQuery;

export const getPosts = async (params: GetPostsParams) => {
  try {
    const { posts } = await client.request<{ posts: Posts }>(GET_POSTS, params);
    return posts;
  } catch (error) {
    console.error('[getPosts]', error);
    return null;
  }
};

export const getPost = async (slug: string) => {
  try {
    const { post } = await client.request<{ post: Post }>(GET_POST, { slug });
    return post;
  } catch (error) {
    console.error('[getPost]', error);
    return null;
  }
};
