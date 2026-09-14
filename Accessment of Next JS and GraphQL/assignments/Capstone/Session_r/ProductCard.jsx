import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart, addToWishlist, removeFromWishlist, fetchOffers } from './actions';

/**
 * PART B TASK 2 & 4: ProductCard Component with Redux Cart & Wishlist Actions
 */
export default function ProductCard() {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart || []);
  const wishlist = useSelector((state) => state.wishlist || []);
  const offers = useSelector((state) => state.offers || { items: [], loading: false });

  const sampleProduct = {
    id: 'prod_101',
    title: 'Sony WH-1000XM5 Wireless Headphones',
    price: 29999,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300',
  };

  const isInCart = cart.some((item) => item.id === sampleProduct.id);
  const isInWishlist = wishlist.some((item) => item.id === sampleProduct.id);

  // Fetch async API offers using redux-thunk on mount
  useEffect(() => {
    dispatch(fetchOffers());
  }, [dispatch]);

  return (
    <div style={styles.card}>
      <div style={styles.badgeRow}>
        <span style={styles.badge}>🛒 E-COMMERCE REDUX STORE</span>
        <button
          onClick={() =>
            isInWishlist
              ? dispatch(removeFromWishlist(sampleProduct.id))
              : dispatch(addToWishlist(sampleProduct))
          }
          style={styles.wishlistIconBtn}
          title="Toggle Wishlist"
        >
          {isInWishlist ? '❤️ In Wishlist' : '🤍 Add to Wishlist'}
        </button>
      </div>

      <img src={sampleProduct.image} alt={sampleProduct.title} style={styles.image} />

      <h3 style={styles.title}>{sampleProduct.title}</h3>
      <p style={styles.price}>₹{sampleProduct.price.toLocaleString()}</p>

      {/* PART B TASK 2: Cart Buttons Dispatching Redux Actions */}
      <div style={styles.buttonRow}>
        {!isInCart ? (
          <button
            onClick={() => dispatch(addToCart(sampleProduct))}
            style={styles.addCartBtn}
          >
            🛒 Add to Cart
          </button>
        ) : (
          <button
            onClick={() => dispatch(removeFromCart(sampleProduct.id))}
            style={styles.removeCartBtn}
          >
            🗑️ Remove from Cart
          </button>
        )}
      </div>

      {/* PART B TASK 4: Async Offers Banner (Redux Thunk) */}
      <div style={styles.offersBox}>
        <h4 style={styles.offersHeader}>⚡ Live Offers (Redux-Thunk Async API):</h4>
        {offers.loading ? (
          <p style={{ fontSize: '12px', color: '#ff9800', margin: 0 }}>⏳ Fetching live API offers...</p>
        ) : (
          <ul style={{ paddingLeft: '16px', margin: '4px 0 0 0', fontSize: '12px', color: '#4caf50' }}>
            {offers.items.map((off) => (
              <li key={off.id}>
                <strong>{off.code}:</strong> {off.title}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Redux State Counts Indicator */}
      <div style={styles.stateSummary}>
        <span>Cart Items: <strong>{cart.reduce((total, i) => total + (i.qty || 1), 0)}</strong></span> | 
        <span> Wishlist Items: <strong>{wishlist.length}</strong></span>
      </div>
    </div>
  );
}

const styles = {
  card: {
    backgroundColor: '#ffffff',
    padding: '24px',
    borderRadius: '16px',
    boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
    border: '1px solid #e0e0e0',
    maxWidth: '420px',
    margin: '20px auto',
    fontFamily: "'Roboto', sans-serif",
  },
  badgeRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '14px',
  },
  badge: {
    fontSize: '10px',
    fontWeight: '800',
    color: '#2874f0',
    backgroundColor: 'rgba(40, 116, 240, 0.1)',
    padding: '4px 8px',
    borderRadius: '10px',
  },
  wishlistIconBtn: {
    border: 'none',
    backgroundColor: 'transparent',
    color: '#ff3f6c',
    fontWeight: '700',
    fontSize: '12px',
    cursor: 'pointer',
  },
  image: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    borderRadius: '8px',
    marginBottom: '14px',
  },
  title: {
    fontSize: '18px',
    fontWeight: '700',
    color: '#212121',
    margin: '0 0 6px 0',
  },
  price: {
    fontSize: '20px',
    fontWeight: '800',
    color: '#388e3c',
    margin: '0 0 16px 0',
  },
  buttonRow: {
    marginBottom: '16px',
  },
  addCartBtn: {
    width: '100%',
    padding: '12px',
    backgroundColor: '#ff9f00',
    color: '#ffffff',
    border: 'none',
    borderRadius: '8px',
    fontWeight: '800',
    fontSize: '14px',
    cursor: 'pointer',
  },
  removeCartBtn: {
    width: '100%',
    padding: '12px',
    backgroundColor: '#e53935',
    color: '#ffffff',
    border: 'none',
    borderRadius: '8px',
    fontWeight: '800',
    fontSize: '14px',
    cursor: 'pointer',
  },
  offersBox: {
    backgroundColor: '#f9f9f9',
    padding: '12px',
    borderRadius: '8px',
    borderLeft: '4px solid #2874f0',
  },
  offersHeader: {
    fontSize: '12px',
    color: '#666',
    margin: 0,
  },
  stateSummary: {
    marginTop: '16px',
    fontSize: '12px',
    color: '#666',
    textAlign: 'center',
    borderTop: '1px solid #eee',
    paddingTop: '10px',
  },
};
