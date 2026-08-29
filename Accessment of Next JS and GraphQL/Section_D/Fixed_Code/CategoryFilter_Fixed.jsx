import React, { useState, useEffect } from 'react';
import { gql, useQuery } from '@apollo/client';

const GET_FOOD_CATEGORIES = gql`
  query GetFoodCategories {
    categories {
      id
      name
    }
  }
`;

const FOOD_ITEMS = [
  { id: 1, name: 'Margherita Pizza', category: 'Pizza', price: 12.99 },
  { id: 2, name: 'Pepperoni Delight', category: 'Pizza', price: 14.99 },
  { id: 3, name: 'Cheeseburger Deluxe', category: 'Burgers', price: 10.99 },
  { id: 4, name: 'Veggie Supreme Burger', category: 'Burgers', price: 9.99 },
  { id: 5, name: 'Spicy Salmon Roll', category: 'Sushi', price: 16.50 },
  { id: 6, name: 'California Roll', category: 'Sushi', price: 13.50 },
];

// Fallback categories in case API endpoint doesn't return categories array
const FALLBACK_CATEGORIES = [
  { id: 'all', name: 'All' },
  { id: 'pizza', name: 'Pizza' },
  { id: 'burgers', name: 'Burgers' },
  { id: 'sushi', name: 'Sushi' },
];

/**
 * CORRECTED VERSION (Fixed without AI)
 */
export default function CategoryFilterFixed() {
  const { data, loading, error } = useQuery(GET_FOOD_CATEGORIES);
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Fix 1: Safe category extraction with optional chaining data?.categories and fallback
  const categoriesList = data?.categories && data.categories.length > 0
    ? [{ id: 'all', name: 'All' }, ...data.categories]
    : FALLBACK_CATEGORIES;

  // Fix 2: Updated filter logic handling 'All' selection & case-insensitive matching
  const filteredItems = FOOD_ITEMS.filter((item) => {
    if (selectedCategory === 'All') return true;
    return item.category.toLowerCase() === selectedCategory.toLowerCase();
  });

  return (
    <div style={{ padding: '20px', maxWidth: '900px', margin: '0 auto' }}>
      <h2>Food Categories</h2>

      {/* Requirement: Handles loading spinner during request */}
      {loading && (
        <div style={{ padding: '15px 0', color: '#0070f3' }}>
          <span>⏳ Fetching categories from GraphQL...</span>
        </div>
      )}

      {/* Requirement: Handles readable error message if query fails */}
      {error && (
        <div style={{ padding: '12px', background: '#ffebee', color: '#c62828', borderRadius: '6px', marginBottom: '15px' }}>
          ⚠️ GraphQL Query Error: {error.message}. Loaded default category chips.
        </div>
      )}

      {/* Requirement: Filter Chips rendering with visual active state */}
      {!loading && (
        <div style={{ display: 'flex', gap: '10px', marginBottom: '20px', flexWrap: 'wrap' }}>
          {categoriesList.map((cat) => {
            const isActive = selectedCategory.toLowerCase() === cat.name.toLowerCase();
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.name)}
                style={{
                  padding: '8px 18px',
                  borderRadius: '20px',
                  border: isActive ? '2px solid #0070f3' : '1px solid #ccc',
                  backgroundColor: isActive ? '#0070f3' : '#f5f5f5',
                  color: isActive ? '#ffffff' : '#333333',
                  fontWeight: isActive ? '700' : '400',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                {cat.name}
              </button>
            );
          })}
        </div>
      )}

      {/* Render Filtered Food Items */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '15px' }}>
        {filteredItems.length === 0 ? (
          <p style={{ color: '#666' }}>No items available in this category.</p>
        ) : (
          filteredItems.map((item) => (
            <div
              key={item.id}
              style={{
                border: '1px solid #eee',
                padding: '15px',
                borderRadius: '8px',
                backgroundColor: '#ffffff',
                boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
              }}
            >
              <h3 style={{ margin: '0 0 8px 0' }}>{item.name}</h3>
              <p style={{ margin: '0 0 4px 0', color: '#666', fontSize: '0.9rem' }}>Category: {item.category}</p>
              <p style={{ margin: 0, fontWeight: '700', color: '#0070f3' }}>${item.price.toFixed(2)}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
