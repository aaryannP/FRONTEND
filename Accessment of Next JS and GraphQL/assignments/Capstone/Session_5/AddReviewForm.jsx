import React, { useState } from 'react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from './firebaseConfig';

/**
 * TASK 2: Add Restaurant Review Component (Zomato Style)
 * Uses Firestore addDoc() inside onSubmit handler.
 */
export default function AddReviewForm({ onReviewAdded }) {
  const [restaurantName, setRestaurantName] = useState('');
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // TASK 2 Requirement: onSubmit Handler using addDoc()
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!restaurantName.trim() || !comment.trim()) {
      setErrorMsg('Please fill in all required fields.');
      return;
    }

    setIsSubmitting(true);
    setErrorMsg('');

    try {
      // 1. Reference to 'reviews' collection
      const reviewsCol = collection(db, 'reviews');

      // 2. Add document to Firestore using addDoc()
      const newDocRef = await addDoc(reviewsCol, {
        restaurantName: restaurantName.trim(),
        rating: Number(rating),
        comment: comment.trim(),
        createdAt: serverTimestamp(),
      });

      console.log('🟢 Review added successfully with ID:', newDocRef.id);

      // Reset Form State
      setRestaurantName('');
      setRating(5);
      setComment('');

      if (onReviewAdded) {
        onReviewAdded({
          id: newDocRef.id,
          restaurantName,
          rating: Number(rating),
          comment,
        });
      }
    } catch (err) {
      console.error('🔴 Error saving review to Firestore:', err);
      setErrorMsg('Failed to save review. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div style={styles.card}>
      <h3 style={styles.header}>⭐ Add Restaurant Review (Zomato)</h3>
      
      {errorMsg && <div style={styles.errorBanner}>{errorMsg}</div>}

      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.fieldGroup}>
          <label style={styles.label}>Restaurant Name:</label>
          <input
            type="text"
            value={restaurantName}
            onChange={(e) => setRestaurantName(e.target.value)}
            placeholder="e.g. Spice Villa / Bella Napoli"
            style={styles.input}
            required
          />
        </div>

        <div style={styles.fieldGroup}>
          <label style={styles.label}>Rating (1 - 5 Stars):</label>
          <select
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            style={styles.select}
          >
            <option value={5}>⭐⭐⭐⭐⭐ (5/5) - Excellent</option>
            <option value={4}>⭐⭐⭐⭐ (4/5) - Very Good</option>
            <option value={3}>⭐⭐⭐ (3/5) - Average</option>
            <option value={2}>⭐⭐ (2/5) - Poor</option>
            <option value={1}>⭐ (1/5) - Terrible</option>
          </select>
        </div>

        <div style={styles.fieldGroup}>
          <label style={styles.label}>Your Review Comment:</label>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Write your experience with food quality, packaging, and delivery..."
            rows={4}
            style={styles.textarea}
            required
          />
        </div>

        <button type="submit" disabled={isSubmitting} style={styles.submitBtn}>
          {isSubmitting ? 'Saving to Firestore...' : 'Submit Review'}
        </button>
      </form>
    </div>
  );
}

const styles = {
  card: {
    backgroundColor: '#ffffff',
    padding: '24px',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
    border: '1px solid #e0e0e0',
    fontFamily: "'Roboto', sans-serif",
    maxWidth: '500px',
  },
  header: {
    color: '#e23744',
    margin: '0 0 16px 0',
    fontSize: '20px',
    fontWeight: '800',
  },
  errorBanner: {
    backgroundColor: '#ffebee',
    color: '#c62828',
    padding: '10px 14px',
    borderRadius: '6px',
    marginBottom: '14px',
    fontSize: '13px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  fieldGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
  },
  label: {
    fontSize: '13px',
    fontWeight: '700',
    color: '#333',
  },
  input: {
    padding: '10px 12px',
    border: '1px solid #ccc',
    borderRadius: '6px',
    fontSize: '14px',
  },
  select: {
    padding: '10px 12px',
    border: '1px solid #ccc',
    borderRadius: '6px',
    fontSize: '14px',
  },
  textarea: {
    padding: '10px 12px',
    border: '1px solid #ccc',
    borderRadius: '6px',
    fontSize: '14px',
    fontFamily: 'inherit',
  },
  submitBtn: {
    backgroundColor: '#e23744',
    color: '#ffffff',
    padding: '12px',
    border: 'none',
    borderRadius: '6px',
    fontWeight: '800',
    fontSize: '15px',
    cursor: 'pointer',
  },
};
