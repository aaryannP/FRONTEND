import { ApolloProvider } from '@apollo/client';
import { initializeApollo } from '../lib/apolloClient';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  // Requirement: Wrap application in ApolloProvider inside _app.js pointing to GraphQL endpoint
  const apolloClient = initializeApollo(false, pageProps.initialApolloState);

  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
