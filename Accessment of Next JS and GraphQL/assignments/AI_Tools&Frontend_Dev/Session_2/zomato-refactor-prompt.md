# Task 3: Refactoring Zomato Restaurant Listing to Custom Hook using ChatGPT

---

## 1. The Exact Prompt Given to ChatGPT

> **Prompt:**
> *"I have a monolithic React component called `ZomatoRestaurantList` that fetches restaurant listings directly inside its `useEffect` hook while managing data, loading, and error states. 
> 
> Please refactor this component to decouple the API data-fetching logic into a custom reusable React hook named `useRestaurants(apiUrl)`. 
> The custom hook should handle `fetch`, loading spinners, error boundaries, and return `{ restaurants, loading, error, refetch }`. 
> Then, show how `ZomatoRestaurantList` consumes this custom hook cleanly."*

---

## 2. Before Refactoring (Monolithic Component with Inline Fetch)

```jsx
// BEFORE: ZomatoRestaurantList.jsx (Data fetching mixed with UI layout)
import React, { useState, useEffect } from 'react';

export function ZomatoRestaurantList() {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch('https://api.zomato.com/v1/restaurants')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch Zomato restaurants');
        return res.json();
      })
      .then((data) => {
        setRestaurants(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading Zomato Restaurants...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="zomato-list">
      <h2>Featured Zomato Restaurants</h2>
      {restaurants.map((item) => (
        <div key={item.id} className="restaurant-card">
          <h3>{item.name}</h3>
          <p>Cuisine: {item.cuisine} | Rating: {item.rating} ★</p>
        </div>
      ))}
    </div>
  );
}
```

---

## 3. Refactored Output (After ChatGPT Refactoring)

### Step 1: Custom Reusable Hook (`useRestaurants.js`)

```javascript
import { useState, useEffect, useCallback } from 'react';

/**
 * Custom hook to encapsulate API fetching logic for Zomato restaurant data.
 * @param {string} url - API Endpoint
 */
export function useRestaurants(url = 'https://api.zomato.com/v1/restaurants') {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchRestaurants = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP Error ${response.status}: Failed to fetch Zomato data`);
      }
      const data = await response.json();
      setRestaurants(data);
    } catch (err) {
      setError(err.message || 'An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    fetchRestaurants();
  }, [fetchRestaurants]);

  return { restaurants, loading, error, refetch: fetchRestaurants };
}

export default useRestaurants;
```

### Step 2: Clean Consuming Component (`ZomatoRestaurantListRefactored.jsx`)

```jsx
import React from 'react';
import useRestaurants from './useRestaurants';

export function ZomatoRestaurantListRefactored() {
  // Consuming custom hook cleanly
  const { restaurants, loading, error, refetch } = useRestaurants('https://api.zomato.com/v1/restaurants');

  if (loading) {
    return (
      <div className="loading-spinner">
        <p>🔴 Fetching nearby Zomato restaurants...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-banner" style={{ color: 'red', border: '1px solid red', padding: '10px' }}>
        <p>⚠️ {error}</p>
        <button onClick={refetch}>Retry Fetch</button>
      </div>
    );
  }

  return (
    <div className="zomato-list">
      <h2>Featured Zomato Restaurants ({restaurants.length})</h2>
      <button onClick={refetch} style={{ marginBottom: '15px' }}>🔄 Refresh Listings</button>

      <div className="grid">
        {restaurants.map((restaurant) => (
          <div key={restaurant.id} className="card" style={{ border: '1px solid #ddd', margin: '8px 0', padding: '12px' }}>
            <h3>{restaurant.name}</h3>
            <p>Cuisine: {restaurant.cuisine} | Rating: {restaurant.rating} ★</p>
            <p>Delivery Time: {restaurant.deliveryTime || '30 mins'}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ZomatoRestaurantListRefactored;
```
