import { ApolloClient, InMemoryCache } from '@apollo/client';

// Initializing apollo client with countries graphql endpoint
export const client = new ApolloClient({
  uri: 'https://countries.trevorblades.com/',
  cache: new InMemoryCache(),
});

// Logging client instance to verify installation
console.log("Apollo Client Instance:", client);
