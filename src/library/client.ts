import { QueryClient, defaultShouldDehydrateQuery, isServer } from '@tanstack/react-query';

let browserQueryClient: QueryClient | undefined;

const makeQueryClient = () => new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
    dehydrate: {
      shouldDehydrateQuery: (query) => defaultShouldDehydrateQuery(query) || query.state.status === 'pending',
    },
  },
});

export function getQueryClient() {
  if (isServer) {
    return makeQueryClient();
  }

  if (!browserQueryClient) {
    browserQueryClient = makeQueryClient();
  }

  return browserQueryClient;
}
