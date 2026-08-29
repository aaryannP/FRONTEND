import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

/**
 * Creates an Apollo Client instance supporting both Client-Side rendering and Server-Side (ssrMode) pre-rendering.
 *
 * @param {boolean} isServer - True if executing on Node.js server during getStaticProps
 * @param {Object} initialState - Rehydrated cache state from getStaticProps
 */
export function initializeApollo(isServer = false, initialState = null) {
  const client = new ApolloClient({
    ssrMode: isServer, // Requirement: Enable ssrMode for pre-rendering during getStaticProps
    link: new HttpLink({
      uri: process.env.NEXT_PUBLIC_GRAPHQL_URI || 'https://graphqlzero.almansi.me/api',
    }),
    cache: new InMemoryCache().restore(initialState || {}),
  });

  return client;
}
