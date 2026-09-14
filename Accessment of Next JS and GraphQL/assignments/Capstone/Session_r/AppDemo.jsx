import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import PlaylistManager from './PlaylistManager';
import ProductCard from './ProductCard';

/**
 * CAPSTONE SESSION_R MASTER DEMO CONTAINER
 * Connects Redux Store Provider with Spotify Playlist Manager & E-Commerce Cart/Wishlist
 */
export default function AppDemo() {
  return (
    <Provider store={store}>
      <div style={{ backgroundColor: '#0f172a', minHeight: '100vh', padding: '40px 20px', fontFamily: 'sans-serif' }}>
        <header style={{ textAlign: 'center', marginBottom: '32px' }}>
          <h1 style={{ color: '#ffffff', fontSize: '2.4rem' }}>Capstone Session_r — Redux Architecture</h1>
          <p style={{ color: '#94a3b8' }}>Spotify Playlist Manager + E-Commerce Cart, Wishlist & Thunk Async Offers</p>
        </header>

        <main style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', gap: '30px', flexWrap: 'wrap', justifyContent: 'center' }}>
          {/* TASK 1-5: Spotify Playlist Track Manager */}
          <div style={{ flex: '1', minWidth: '320px' }}>
            <PlaylistManager />
          </div>

          {/* PART B TASK 1-5: E-Commerce Product Card with Cart & Wishlist */}
          <div style={{ flex: '1', minWidth: '320px' }}>
            <ProductCard />
          </div>
        </main>
      </div>
    </Provider>
  );
}
