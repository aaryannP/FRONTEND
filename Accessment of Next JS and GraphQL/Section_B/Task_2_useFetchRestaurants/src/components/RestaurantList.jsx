import React from 'react';
import useFetchRestaurants from '../hooks/useFetchRestaurants';

const RestaurantList = () => {
  // Consume the custom hook
  const { data, loading, error } = useFetchRestaurants();

  return (
    <div className="restaurant-container">
      {/* Requirement 1: Render 'Fetching restaurants…' paragraph while loading is true */}
      {loading && (
        <div className="loading-state">
          <div className="spinner"></div>
          <p className="loading-text">Fetching restaurants…</p>
        </div>
      )}

      {/* Requirement 2: Render user-friendly error message if fetch fails */}
      {error && (
        <div className="error-banner">
          <span className="error-icon">⚠️</span>
          <div>
            <strong>Error Loading Data</strong>
            <p>{error}</p>
          </div>
        </div>
      )}

      {/* Requirement 3: Render restaurant name and email from each object when data is available */}
      {!loading && !error && data && (
        <div className="restaurant-grid">
          {data.map((restaurant) => (
            <div key={restaurant.id} className="restaurant-card">
              <div className="avatar">{restaurant.name.charAt(0)}</div>
              <div className="info">
                <h3 className="name">{restaurant.name}</h3>
                <p className="email">{restaurant.email}</p>
                <span className="company">Partnered with {restaurant.company.name}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RestaurantList;
