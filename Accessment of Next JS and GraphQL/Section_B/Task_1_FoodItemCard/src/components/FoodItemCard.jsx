import React, { useState } from 'react';

/**
 * Task 1: FoodItemCard Component
 * Reusable React component that displays a single food item card using props for data
 * and useState to manage individual cart interaction.
 *
 * @param {string} name - Name of the food item
 * @param {number} price - Price of the food item in USD
 * @param {string} category - Food category (e.g. Italian, Burgers)
 * @param {boolean} isAvailable - Stock availability flag
 */
const FoodItemCard = ({ name, price, category, isAvailable }) => {
  // Requirement: Use useState to manage boolean isInCart flag per card instance; defaults to false
  const [isInCart, setIsInCart] = useState(false);

  // Toggle cart status on click
  const handleAddToCart = () => {
    if (isAvailable) {
      setIsInCart((prev) => !prev);
    }
  };

  return (
    <div className="food-card">
      <div>
        <div className="card-header">
          <span className="category-tag">{category}</span>
          <span className={`availability-badge ${isAvailable ? 'available' : 'out-of-stock'}`}>
            {isAvailable ? 'In Stock' : 'Out of Stock'}
          </span>
        </div>

        <h3 className="food-title">{name}</h3>
        <p className="price">${price.toFixed(2)}</p>
      </div>

      {/* Requirement: Render 'Add to Cart' when false, 'Added ›' when true; disabled & greyed out if isAvailable is false */}
      {!isAvailable ? (
        <button className="cart-btn btn-disabled" disabled>
          Unavailable
        </button>
      ) : isInCart ? (
        <button className="cart-btn btn-added" onClick={handleAddToCart}>
          Added &#8250;
        </button>
      ) : (
        <button className="cart-btn btn-add" onClick={handleAddToCart}>
          Add to Cart
        </button>
      )}
    </div>
  );
};

export default FoodItemCard;
