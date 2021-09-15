import { ApolloClient, InMemoryCache } from '@apollo/client';

const uri = `${process.env.NEXT_PUBLIC_API}/graphql`;
const cache = new InMemoryCache();
const client = new ApolloClient({ uri, cache });

export default client;
