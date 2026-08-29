import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../store/cartSlice';

/**
 * Reusable FoodItemCard component that integrates with Redux cart state.
 */
const FoodItemCard = ({ id, name, price, category }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const cartItem = cartItems.find((item) => item.id === id);

  const handleAddToCart = () => {
    dispatch(addItem({ id, name, price, category }));
  };

  return (
    <div className="food-card">
      <div>
        <span className="card-badge">{category || 'Special'}</span>
        <h3 className="food-name">{name}</h3>
        <p className="food-price">${price.toFixed(2)}</p>
      </div>

      <button className="btn-primary" onClick={handleAddToCart}>
        {cartItem ? `In Cart (${cartItem.quantity}) +` : 'Add to Cart'}
      </button>
    </div>
  );
};

export default FoodItemCard;
