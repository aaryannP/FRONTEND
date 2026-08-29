import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateQuantity, removeItem, clearCart, applyDiscountThunk } from '../store/cartSlice';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { auth, db } from '../lib/firebase';

const CartDrawer = ({ isOpen, onClose, onOrderPlaced }) => {
  const dispatch = useDispatch();
  const { items, discountPercentage, appliedPromoCode, discountLoading, discountError } = useSelector(
    (state) => state.cart
  );

  const [promoInput, setPromoInput] = useState('');
  const [checkoutLoading, setCheckoutLoading] = useState(false);
  const [checkoutMessage, setCheckoutMessage] = useState(null);

  if (!isOpen) return null;

  // Calculation logic
  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discountAmount = subtotal * discountPercentage;
  const total = Math.max(0, subtotal - discountAmount);

  // Apply Promo Code via Redux Thunk
  const handleApplyPromo = (e) => {
    e.preventDefault();
    if (!promoInput.trim()) return;
    dispatch(applyDiscountThunk(promoInput));
  };

  // Requirement: Store confirmed orders in a Firestore orders collection on checkout
  const handleCheckout = async () => {
    if (items.length === 0) return;

    setCheckoutLoading(true);
    setCheckoutMessage(null);

    const currentUser = auth.currentUser;

    try {
      // Write document to Firestore 'orders' collection
      await addDoc(collection(db, 'orders'), {
        userId: currentUser ? currentUser.uid : 'guest',
        userEmail: currentUser ? currentUser.email : 'guest@delivery.com',
        items: items.map((i) => ({ id: i.id, name: i.name, price: i.price, quantity: i.quantity })),
        subtotal,
        discountAmount,
        totalAmount: total,
        appliedPromoCode: appliedPromoCode || null,
        status: 'Preparing',
        createdAt: serverTimestamp(),
      });

      // Clear Redux Cart State
      dispatch(clearCart());
      setCheckoutMessage('🎉 Order placed successfully! Check Order History.');
      if (onOrderPlaced) onOrderPlaced();
    } catch (err) {
      console.error('Checkout error:', err);
      setCheckoutMessage('Error placing order. Please log in first.');
    } finally {
      setCheckoutLoading(false);
    }
  };

  return (
    <div className="cart-drawer-overlay" onClick={onClose}>
      <div className="cart-drawer" onClick={(e) => e.stopPropagation()}>
        <div>
          <div className="drawer-header">
            <h2>Your Cart ({items.reduce((acc, i) => acc + i.quantity, 0)})</h2>
            <button className="close-btn" onClick={onClose}>
              ✕
            </button>
          </div>

          {checkoutMessage && (
            <div className={`alert-box ${checkoutMessage.includes('Error') ? 'alert-error' : 'alert-success'}`}>
              {checkoutMessage}
            </div>
          )}

          {items.length === 0 ? (
            <p style={{ color: '#94a3b8', textAlign: 'center', margin: '3rem 0' }}>Your cart is empty.</p>
          ) : (
            <div className="cart-items-list">
              {items.map((item) => (
                <div key={item.id} className="cart-item">
                  <div>
                    <h4 style={{ fontSize: '0.95rem' }}>{item.name}</h4>
                    <p style={{ fontSize: '0.85rem', color: '#38bdf8' }}>${(item.price * item.quantity).toFixed(2)}</p>
                  </div>

                  <div className="qty-controls">
                    <button
                      className="qty-btn"
                      onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      className="qty-btn"
                      onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}
                    >
                      +
                    </button>
                    <button
                      onClick={() => dispatch(removeItem(item.id))}
                      style={{ background: 'none', border: 'none', color: '#ef4444', marginLeft: '0.5rem', cursor: 'pointer' }}
                    >
                      🗑️
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer & Promo Code Thunk Section */}
        {items.length > 0 && (
          <div style={{ borderTop: '1px solid #1e293b', paddingTop: '1rem', marginTop: '1rem' }}>
            {/* Promo Code Form using Redux Thunk */}
            <form onSubmit={handleApplyPromo} style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
              <input
                type="text"
                placeholder="Promo (FEAST20)"
                value={promoInput}
                onChange={(e) => setPromoInput(e.target.value)}
                style={{ flex: 1, padding: '0.5rem', borderRadius: '0.375rem', border: '1px solid #334155', background: '#0f172a', color: '#fff' }}
              />
              <button
                type="submit"
                disabled={discountLoading}
                style={{ padding: '0.5rem 0.85rem', background: '#a855f7', border: 'none', borderRadius: '0.375rem', color: '#fff', fontWeight: '600', cursor: 'pointer' }}
              >
                {discountLoading ? '...' : 'Apply'}
              </button>
            </form>

            {discountError && <p style={{ color: '#ef4444', fontSize: '0.8rem', marginBottom: '0.5rem' }}>{discountError}</p>}
            {appliedPromoCode && (
              <p style={{ color: '#22c55e', fontSize: '0.8rem', marginBottom: '0.5rem' }}>
                ✓ Promo code <strong>{appliedPromoCode}</strong> applied ({discountPercentage * 100}% off)
              </p>
            )}

            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.9rem', color: '#94a3b8' }}>
              <span>Subtotal:</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            {discountPercentage > 0 && (
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.9rem', color: '#22c55e' }}>
                <span>Discount ({discountPercentage * 100}%):</span>
                <span>-${discountAmount.toFixed(2)}</span>
              </div>
            )}
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', fontSize: '1.2rem', fontWeight: '800' }}>
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>

            <button className="btn-primary" onClick={handleCheckout} disabled={checkoutLoading}>
              {checkoutLoading ? 'Processing Checkout...' : 'Confirm Order & Pay'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartDrawer;
