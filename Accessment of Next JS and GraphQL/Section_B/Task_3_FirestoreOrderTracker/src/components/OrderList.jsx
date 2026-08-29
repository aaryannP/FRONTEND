import React, { useState, useEffect } from 'react';
import { collection, onSnapshot, query, orderBy, doc, deleteDoc } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig';

const OrderList = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  // Requirement: Subscribe to orders collection using onSnapshot() for real-time synchronization
  useEffect(() => {
    const ordersRef = collection(db, 'orders');
    const q = query(ordersRef, orderBy('createdAt', 'desc'));

    // Real-time snapshot listener
    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        const fetchedOrders = snapshot.docs.map((docSnap) => ({
          id: docSnap.id,
          ...docSnap.data()
        }));
        setOrders(fetchedOrders);
        setLoading(false);
      },
      (error) => {
        console.error('Real-time listener error:', error);
        setLoading(false);
      }
    );

    // Cleanup listener on component unmount
    return () => unsubscribe();
  }, []);

  // Requirement: Cancel Order button calls deleteDoc() on corresponding document
  const handleCancelOrder = async (orderId) => {
    try {
      // Optimistic update so it vanishes instantly (< 1 sec)
      setOrders((prev) => prev.filter((item) => item.id !== orderId));
      await deleteDoc(doc(db, 'orders', orderId));
    } catch (err) {
      console.error('Error deleting document:', err);
    }
  };

  return (
    <div className="list-card">
      <h2>Live Orders Feed ({orders.length})</h2>

      {loading ? (
        <div className="loading-state">Connecting to real-time database...</div>
      ) : orders.length === 0 ? (
        <div className="empty-state">No active orders placed yet.</div>
      ) : (
        <div className="orders-feed">
          {orders.map((order) => (
            <div key={order.id} className="order-item">
              <div className="order-details">
                <div className="customer-name">{order.customerName}</div>
                <div className="order-item-name">
                  {order.quantity}x {order.itemOrdered}
                </div>
                <span className="order-status-badge">● {order.status || 'Preparing'}</span>
              </div>

              {/* Requirement: Cancel Order button that calls deleteDoc() */}
              <button
                className="cancel-btn"
                onClick={() => handleCancelOrder(order.id)}
                title="Cancel Order"
              >
                Cancel Order
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrderList;
