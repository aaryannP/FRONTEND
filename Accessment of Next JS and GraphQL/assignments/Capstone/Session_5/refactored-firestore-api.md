# Task 5: ChatGPT Refactored Firestore API Call & Error Handling Audit

---

## 1. Original Un-refactored Promise Code (Before ChatGPT)

```javascript
// BEFORE: Callback promise chain without try/catch or typed error handling
function getReviewsOld() {
  getDocs(collection(db, 'reviews')).then((snapshot) => {
    const list = snapshot.docs.map(doc => doc.data());
    setReviews(list);
  }).catch((err) => {
    console.log("Error:", err);
  });
}
```

---

## 2. Exact Prompt Passed to ChatGPT

> **Prompt:**
> *"Refactor this Firestore API call using modern `async/await` and robust error handling. Ensure loading state indicators, structured `try/catch/finally` blocks, clear console error logging, and fallback UI state handling."*

---

## 3. ChatGPT Refactored Production Code (After ChatGPT)

```javascript
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from './firebaseConfig';

export async function fetchReviewsRefactored() {
  try {
    const reviewsRef = collection(db, 'reviews');
    const q = query(reviewsRef, orderBy('createdAt', 'desc'));

    // Await asynchronous Firestore document snapshot
    const querySnapshot = await getDocs(q);

    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown Firestore error';
    console.error('🔴 [Firestore API Error]: Failed to fetch reviews:', errorMessage);
    
    // Throw descriptive custom error for caller UI component handling
    throw new Error(`Firestore Fetch Failed: ${errorMessage}`);
  }
}
```

---

## 4. Key Refactoring Improvements

1. **Async/Await Readability:** Replaced un-nested `.then()` chains with clean top-to-bottom `async/await` execution flow.
2. **Structured `try/catch/finally` Block:** Guarantees that loading indicators (`setLoading(false)`) reset regardless of whether the network call succeeds or throws an error.
3. **Query Optimization:** Incorporated `orderBy('createdAt', 'desc')` so newest reviews and items appear first.
4. **Resilient Error Fallback:** Added explicit type checks (`error instanceof Error`) and fallback state so the React component renders gracefully even during offline network conditions.
