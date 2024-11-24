import { GraphQLClient } from 'graphql-request';

import { cache } from 'react';

import { env } from '@/library/environment';

export const client = new GraphQLClient(`${env.API}/graphql`, {
  fetch: cache(async (url: RequestInfo | URL, options?: RequestInit) =>
    fetch(url, {
      ...options,
      next: {
        revalidate: 86400,
      },
    }),
  ),
});
