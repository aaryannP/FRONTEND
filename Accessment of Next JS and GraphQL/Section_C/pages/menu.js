import React from 'react';
import Head from 'next/head';
import { gql, useQuery } from '@apollo/client';
import FoodItemCard from '../components/FoodItemCard';

// GraphQL query to fetch mock restaurant/posts/users menu data
const GET_MENU_ITEMS = gql`
  query GetMenuItems {
    posts(options: { paginate: { limit: 8 } }) {
      data {
        id
        title
        body
      }
    }
  }
`;

// Hardcoded fallback menu items for demo stability
const fallbackMenuItems = [
  { id: 'm1', name: 'Gourmet Truffle Burger', price: 15.99, category: 'Burgers' },
  { id: 'm2', name: 'Wood-Fired Margherita Pizza', price: 13.50, category: 'Pizza' },
  { id: 'm3', name: 'Fresh Dragon Roll Sushi', price: 18.00, category: 'Japanese' },
  { id: 'm4', name: 'Creamy Alfredo Pasta', price: 14.25, category: 'Italian' },
  { id: 'm5', name: 'Crispy Vegan Tacos', price: 11.99, category: 'Mexican' },
  { id: 'm6', name: 'Iced Caramel Macchiato', price: 5.50, category: 'Beverages' },
];

export default function MenuPage() {
  // Requirement: Fetch menu items using Apollo Client's useQuery hook against GraphQL API
  const { data, loading, error } = useQuery(GET_MENU_ITEMS);

  return (
    <div className="container">
      <Head>
        <title>Restaurant Menu — GraphQL Powered</title>
      </Head>

      <header style={{ marginBottom: '2.5rem' }}>
        <h1 style={{ fontSize: '2.25rem', fontWeight: '800', marginBottom: '0.5rem' }}>
          Restaurant Menu
        </h1>
        <p style={{ color: '#94a3b8' }}>
          Data fetched via GraphQL Apollo Client <code style={{ color: '#38bdf8' }}>useQuery</code> hook
        </p>
      </header>

      {/* Requirement: Display loading state */}
      {loading && (
        <div style={{ textAlign: 'center', padding: '4rem 0', color: '#94a3b8' }}>
          <div className="spinner" style={{ margin: '0 auto 1rem' }}></div>
          <p>Loading menu items from GraphQL API...</p>
        </div>
      )}

      {/* Requirement: Display error state */}
      {error && (
        <div className="alert-box alert-error" style={{ marginBottom: '2rem' }}>
          ⚠️ GraphQL Fetch Error: {error.message}. Showing local menu fallback.
        </div>
      )}

      {/* Requirement: Render each item using reusable FoodItemCard */}
      <div className="grid">
        {data?.posts?.data
          ? data.posts.data.map((post, idx) => {
              const price = 10 + (idx + 1) * 2.5;
              return (
                <FoodItemCard
                  key={post.id}
                  id={post.id}
                  name={post.title.slice(0, 24)}
                  price={price}
                  category={idx % 2 === 0 ? 'Chef Special' : 'Popular'}
                />
              );
            })
          : fallbackMenuItems.map((item) => (
              <FoodItemCard
                key={item.id}
                id={item.id}
                name={item.name}
                price={item.price}
                category={item.category}
              />
            ))}
      </div>
    </div>
  );
}
