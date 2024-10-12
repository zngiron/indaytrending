import { GraphQLClient } from 'graphql-request';

import { env } from '@/library/environment';

export const client = new GraphQLClient(`${env.API}/graphql`, {
  fetch: (url, options) => fetch(url, {
    ...options,
    next: {
      revalidate: 86400,
    },
  }),
});
