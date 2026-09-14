import { useState, useEffect, useCallback } from 'react';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from './firebaseConfig';

/**
 * TASK 5: Custom Hook with ChatGPT-Refactored async/await & Error Handling
 */
export function useFirestoreReviews() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // CHATGPT REFACTORED ASYNC/AWAIT FETCH FUNCTION WITH BETTER ERROR HANDLING
  const fetchReviews = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      // 1. Create ordered query on Firestore 'reviews' collection
      const reviewsRef = collection(db, 'reviews');
      const q = query(reviewsRef, orderBy('createdAt', 'desc'));

      // 2. Await snapshot execution
      const querySnapshot = await getDocs(q);

      // 3. Transform Firestore docs array
      const reviewsList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setReviews(reviewsList);
    } catch (err) {
      // Robust error logging & state management
      const customErrorMsg = err instanceof Error ? err.message : 'An unknown Firestore error occurred';
      console.error('🔴 [Firestore API Error]: Failed to fetch reviews:', customErrorMsg);
      setError(customErrorMsg);

      // Provide demo fallback data so UI remains functional offline
      setReviews([
        { id: 'r1', restaurantName: 'Bella Napoli', rating: 5, comment: 'Authentic wood-fired pizza with fresh mozzarella!' },
        { id: 'r2', restaurantName: 'Spice Villa', rating: 4, comment: 'Delicious paneer tikka and fast delivery.' },
      ]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchReviews();
  }, [fetchReviews]);

  return { reviews, setReviews, loading, error, refetch: fetchReviews };
}
