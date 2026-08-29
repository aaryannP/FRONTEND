import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { onAuthStateChanged } from 'firebase/auth';
import { collection, onSnapshot, query, orderBy, where } from 'firebase/firestore';
import { auth, db } from '../lib/firebase';

export default function OrderHistoryPage() {
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [orders, setOrders] = useState([]);
  const [ordersLoading, setOrdersLoading] = useState(true);

  // Requirement 1: Firebase Auth session check and route protection
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setAuthLoading(false);
    });
    return () => unsubscribe();
  }, []);

  // Requirement 2: Real-time order synchronization using onSnapshot()
  useEffect(() => {
    if (!user) {
      setOrders([]);
      setOrdersLoading(false);
      return;
    }

    setOrdersLoading(true);
    const ordersRef = collection(db, 'orders');
    // Fetch orders for logged-in user ordered by date descending
    const q = query(
      ordersRef,
      where('userEmail', '==', user.email),
      orderBy('createdAt', 'desc')
    );

    const unsubscribeSnapshot = onSnapshot(
      q,
      (snapshot) => {
        const fetchedOrders = snapshot.docs.map((docSnap) => ({
          id: docSnap.id,
          ...docSnap.data(),
        }));
        setOrders(fetchedOrders);
        setOrdersLoading(false);
      },
      (err) => {
        console.error('Firestore snapshot listener error:', err);
        setOrdersLoading(false);
      }
    );

    return () => unsubscribeSnapshot();
  }, [user]);

  if (authLoading) {
    return (
      <div className="container" style={{ textAlign: 'center', paddingTop: '4rem' }}>
        <p>Checking authentication state...</p>
      </div>
    );
  }

  // Requirement: Protected Route - redirect/prompt unauthenticated users away from Order History
  if (!user) {
    return (
      <div className="container" style={{ textAlign: 'center', paddingTop: '4rem' }}>
        <div className="auth-box">
          <h2>🔒 Access Restricted</h2>
          <p style={{ color: '#94a3b8', marginBottom: '1.5rem' }}>
            You must be logged in to view your real-time Order History.
          </p>
          <Link href="/login" className="btn-primary" style={{ display: 'inline-block' }}>
            Go to Login / Sign Up →
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <Head>
        <title>Order History — Firestore Real-Time</title>
      </Head>

      <header style={{ marginBottom: '2.5rem' }}>
        <h1 style={{ fontSize: '2.25rem', fontWeight: '800', marginBottom: '0.5rem' }}>
          Your Order History (Real-Time)
        </h1>
        <p style={{ color: '#94a3b8' }}>
          Logged in as: <strong style={{ color: '#38bdf8' }}>{user.email}</strong>
        </p>
      </header>

      {ordersLoading ? (
        <div style={{ textAlign: 'center', padding: '3rem 0', color: '#94a3b8' }}>
          Connecting to Firestore real-time feed...
        </div>
      ) : orders.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '3rem', backgroundColor: '#131b2e', borderRadius: '1rem' }}>
          <p style={{ color: '#94a3b8', marginBottom: '1rem' }}>You have not placed any orders yet.</p>
          <Link href="/menu" className="btn-primary" style={{ display: 'inline-block', width: 'auto' }}>
            Browse Menu & Order Now →
          </Link>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {orders.map((order) => (
            <div
              key={order.id}
              style={{
                backgroundColor: '#131b2e',
                border: '1px solid #1e293b',
                borderRadius: '1rem',
                padding: '1.5rem',
                display: 'flex',
                justifyContent: 'space-between',
                align-items: 'center',
                flexWrap: 'wrap',
                gap: '1rem',
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                  <span style={{ fontWeight: '800', fontSize: '1.1rem' }}>Order #{order.id.slice(0, 8)}</span>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: '700',
                      backgroundColor: 'rgba(34, 197, 94, 0.15)',
                      color: '#22c55e',
                      padding: '0.2rem 0.5rem',
                      borderRadius: '0.375rem',
                    }}
                  >
                    ● {order.status || 'Preparing'}
                  </span>
                </div>

                <div style={{ fontSize: '0.9rem', color: '#94a3b8', marginBottom: '0.5rem' }}>
                  {order.items?.map((item) => `${item.quantity}x ${item.name}`).join(', ')}
                </div>

                {order.appliedPromoCode && (
                  <span style={{ fontSize: '0.8rem', color: '#a855f7' }}>
                    Promo applied: {order.appliedPromoCode}
                  </span>
                )}
              </div>

              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '1.35rem', fontWeight: '800', color: '#38bdf8' }}>
                  ${(order.totalAmount || 0).toFixed(2)}
                </div>
                <div style={{ fontSize: '0.75rem', color: '#64748b' }}>
                  {order.createdAt?.toDate ? order.createdAt.toDate().toLocaleString() : 'Just now'}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
