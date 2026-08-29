import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

export function createApolloClient() {
  return new ApolloClient({
    link: new HttpLink({
      uri: process.env.NEXT_PUBLIC_GRAPHQL_URI || 'https://graphqlzero.almansi.me/api',
    }),
    cache: new InMemoryCache(),
  });
}
