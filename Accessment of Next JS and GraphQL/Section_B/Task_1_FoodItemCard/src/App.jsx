import React from 'react';
import FoodItemCard from './components/FoodItemCard';

// Requirement: Render at least five FoodItemCard instances by mapping over a hardcoded array
const foodItems = [
  { id: 1, name: 'Truffle Mushroom Burger', price: 14.99, category: 'Burgers', isAvailable: true },
  { id: 2, name: 'Margherita Basil Pizza', price: 12.50, category: 'Italian', isAvailable: true },
  { id: 3, name: 'Spicy Salmon Roll', price: 18.00, category: 'Sushi', isAvailable: false },
  { id: 4, name: 'Avocado Toast with Egg', price: 9.99, category: 'Breakfast', isAvailable: true },
  { id: 5, name: 'Matcha Green Tea Latte', price: 5.50, category: 'Beverages', isAvailable: true },
  { id: 6, name: 'Classic Chocolate Brownie', price: 6.99, category: 'Dessert', isAvailable: false }
];

function App() {
  return (
    <div className="container">
      <header className="header">
        <h1>Task 1: Food Item Card Component</h1>
        <p>Demonstrating Component Reusability with Props and State</p>
      </header>

      <div className="grid">
        {foodItems.map((item) => (
          <FoodItemCard
            key={item.id}
            name={item.name}
            price={item.price}
            category={item.category}
            isAvailable={item.isAvailable}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
