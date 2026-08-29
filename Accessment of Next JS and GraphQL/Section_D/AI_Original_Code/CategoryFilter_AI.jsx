import React, { useState } from 'react';
import { gql, useQuery } from '@apollo/client';

// GraphQL query requested from AI
const GET_FOOD_CATEGORIES = gql`
  query GetFoodCategories {
    categories {
      id
      name
    }
  }
`;

// Hardcoded food items array
const FOOD_ITEMS = [
  { id: 1, name: 'Margherita Pizza', category: 'Pizza', price: 12.99 },
  { id: 2, name: 'Pepperoni Delight', category: 'Pizza', price: 14.99 },
  { id: 3, name: 'Cheeseburger Deluxe', category: 'Burgers', price: 10.99 },
  { id: 4, name: 'Veggie Supreme Burger', category: 'Burgers', price: 9.99 },
  { id: 5, name: 'Spicy Salmon Roll', category: 'Sushi', price: 16.50 },
  { id: 6, name: 'California Roll', category: 'Sushi', price: 13.50 },
];

/**
 * ORIGINAL AI GENERATED CODE (With Bugs/Limitations)
 */
export default function CategoryFilterAI() {
  const { data, loading, error } = useQuery(GET_FOOD_CATEGORIES);
  const [selectedCategory, setSelectedCategory] = useState('All');

  // AI Bug 1: Loading & Error handled, but returns early before rendering chips or items
  if (loading) return <p>Loading categories...</p>;
  if (error) return <p>Error loading categories: {error.message}</p>;

  // AI Bug 2: Filter logic breaks when selectedCategory is 'All' because no item has category === 'All'
  const filteredItems = FOOD_ITEMS.filter(
    (item) => item.category === selectedCategory
  );

  return (
    <div style={{ padding: '20px' }}>
      <h2>Food Categories</h2>

      {/* Filter Chips */}
      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        {/* AI Bug 3: Accessing data.categories directly without optional chaining data?.categories */}
        {data.categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.name)}
            style={{
              padding: '8px 16px',
              borderRadius: '20px',
              border: '1px solid #ccc',
              // Visual highlight tracking
              backgroundColor: selectedCategory === cat.name ? '#0070f3' : '#fff',
              color: selectedCategory === cat.name ? '#fff' : '#000',
              cursor: 'pointer',
            }}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Render Filtered Food Items */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '15px' }}>
        {filteredItems.map((item) => (
          <div key={item.id} style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '8px' }}>
            <h3>{item.name}</h3>
            <p>Category: {item.category}</p>
            <p>Price: ${item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
