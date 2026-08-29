import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../lib/firebase';

const Navbar = ({ onOpenCart }) => {
  const router = useRouter();
  const cartItems = useSelector((state) => state.cart.items);
  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const [user, setUser] = useState(null);

  // Requirement: Listen to Firebase Auth state changes (session persistence)
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    router.push('/login');
  };

  return (
    <nav className="navbar">
      <Link href="/" className="nav-brand">
        🍔 FoodDash AI
      </Link>

      <div className="nav-links">
        <Link href="/" className={`nav-link ${router.pathname === '/' ? 'active' : ''}`}>
          Home
        </Link>
        <Link href="/menu" className={`nav-link ${router.pathname === '/menu' ? 'active' : ''}`}>
          Menu (GraphQL)
        </Link>
        <Link href="/orders" className={`nav-link ${router.pathname === '/orders' ? 'active' : ''}`}>
          Order History
        </Link>

        {user ? (
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span style={{ fontSize: '0.85rem', color: '#94a3b8' }}>
              👤 {user.email?.split('@')[0]}
            </span>
            <button
              onClick={handleLogout}
              style={{
                background: 'none',
                border: '1px solid #334155',
                color: '#ef4444',
                padding: '0.35rem 0.75rem',
                borderRadius: '0.375rem',
                cursor: 'pointer',
                fontWeight: '600',
                fontSize: '0.85rem'
              }}
            >
              Logout
            </button>
          </div>
        ) : (
          <Link href="/login" className={`nav-link ${router.pathname === '/login' ? 'active' : ''}`}>
            Login / Signup
          </Link>
        )}

        {/* Cart Drawer Trigger Button */}
        <button className="cart-badge-btn" onClick={onOpenCart}>
          🛒 Cart
          {totalCartCount > 0 && <span className="cart-count">{totalCartCount}</span>}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
