import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { ApolloProvider } from '@apollo/client';
import { store } from '../store/store';
import { createApolloClient } from '../lib/apolloClient';
import Navbar from '../components/Navbar';
import CartDrawer from '../components/CartDrawer';
import '../styles/globals.css';

const apolloClient = createApolloClient();

export default function App({ Component, pageProps }) {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <Provider store={store}>
      <ApolloProvider client={apolloClient}>
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          {/* Requirement: Shared Navbar component on every page */}
          <Navbar onOpenCart={() => setIsCartOpen(true)} />

          <main style={{ flex: 1 }}>
            <Component {...pageProps} />
          </main>

          {/* Shared Cart Summary Drawer */}
          <CartDrawer
            isOpen={isCartOpen}
            onClose={() => setIsCartOpen(false)}
          />
        </div>
      </ApolloProvider>
    </Provider>
  );
}
