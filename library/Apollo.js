import { ApolloClient, InMemoryCache, HttpLink } from 'apollo-boost';
import { getDataFromTree } from '@apollo/react-ssr';

import withApollo from 'next-with-apollo';
import fetch from 'node-fetch';

import { API } from './Config';

export const createApolloClient = ({ ctx, initialState } = {}) => {
  const ssr = Boolean(ctx);
  const cache = new InMemoryCache().restore(initialState || {});
  const link = new HttpLink({
    uri: API,
    credentials: 'same-origin',
    fetch,
  });

  return new ApolloClient({
    ssrMode: ssr,
    link,
    cache,
  });
};

const WithApollo = (Component) => withApollo(createApolloClient, { getDataFromTree })(Component);

export default WithApollo;
