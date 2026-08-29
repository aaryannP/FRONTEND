import React, { useState } from 'react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig';

const OrderForm = () => {
  // Requirement: Controlled form using useState for each field
  const [customerName, setCustomerName] = useState('');
  const [itemOrdered, setItemOrdered] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [submitting, setSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!customerName.trim() || !itemOrdered.trim() || quantity < 1) {
      setStatusMessage({ type: 'error', text: 'Please fill out all fields correctly.' });
      return;
    }

    setSubmitting(true);
    setStatusMessage(null);

    try {
      // Write new document to Firestore 'orders' collection
      await addDoc(collection(db, 'orders'), {
        customerName: customerName.trim(),
        itemOrdered: itemOrdered.trim(),
        quantity: Number(quantity),
        status: 'Preparing',
        createdAt: serverTimestamp()
      });

      // Reset form fields
      setCustomerName('');
      setItemOrdered('');
      setQuantity(1);
      setStatusMessage({ type: 'success', text: 'Order placed successfully!' });
    } catch (err) {
      console.error('Error adding order: ', err);
      setStatusMessage({ type: 'error', text: 'Failed to place order. Check Firebase setup.' });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="form-card">
      <h2>Place New Food Order</h2>

      {statusMessage && (
        <div className={`status-alert ${statusMessage.type}`}>
          {statusMessage.text}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="customerName">Customer Name</label>
          <input
            id="customerName"
            type="text"
            placeholder="e.g. John Doe"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="itemOrdered">Item Ordered</label>
          <input
            id="itemOrdered"
            type="text"
            placeholder="e.g. Margherita Pizza"
            value={itemOrdered}
            onChange={(e) => setItemOrdered(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="quantity">Quantity</label>
          <input
            id="quantity"
            type="number"
            min="1"
            max="20"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="submit-btn" disabled={submitting}>
          {submitting ? 'Placing Order...' : 'Submit Order'}
        </button>
      </form>
    </div>
  );
};

export default OrderForm;
